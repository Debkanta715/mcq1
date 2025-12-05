// Quiz Variables
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);
let answered = new Array(quizData.length).fill(false);
let answerStatus = new Array(quizData.length).fill('skipped'); // 'correct', 'wrong', 'skipped'
let editMode = false; // when true, show "Set Correct" buttons to update correct answers

// Initialize Quiz
function initializeQuiz() {
    document.getElementById('totalQuestions').textContent = quizData.length;
    generateQuestionList();
    displayQuestion();
    updateProgressBar();
    updateStatistics();
}

// Generate Question List
function generateQuestionList() {
    const questionTable = document.getElementById('questionTable');
    questionTable.innerHTML = '<tbody></tbody>';
    const tbody = questionTable.querySelector('tbody');

    quizData.forEach((question, index) => {
        const row = document.createElement('tr');
        row.id = `q-${index}`;
        row.className = 'skipped';

        const cell = document.createElement('td');
        const statusDot = document.createElement('span');
        statusDot.className = 'status-dot';
        
        const text = document.createElement('span');
        text.textContent = `Q${index + 1}`;

        cell.appendChild(statusDot);
        cell.appendChild(text);
        row.appendChild(cell);

        row.addEventListener('click', () => {
            currentQuestionIndex = index;
            displayQuestion();
            updateQuestionList();
        });

        tbody.appendChild(row);
    });

    updateQuestionList();
}

// Update Question List Status
function updateQuestionList() {
    quizData.forEach((_, index) => {
        const item = document.getElementById(`q-${index}`);
        item.classList.remove('current', 'answered-correct', 'answered-wrong', 'skipped');

        if (index === currentQuestionIndex) {
            item.classList.add('current');
        } else if (answerStatus[index] === 'correct') {
            item.classList.add('answered-correct');
        } else if (answerStatus[index] === 'wrong') {
            item.classList.add('answered-wrong');
        } else {
            item.classList.add('skipped');
        }
    });

    updateStatistics();
}

// Update Statistics in Real-Time
function updateStatistics() {
    let correctCount = 0;
    let wrongCount = 0;
    let attemptedCount = 0;

    answerStatus.forEach((status) => {
        if (status === 'correct') {
            correctCount++;
            attemptedCount++;
        } else if (status === 'wrong') {
            wrongCount++;
            attemptedCount++;
        }
    });

    document.getElementById('statTotal').textContent = quizData.length;
    document.getElementById('statCorrect').textContent = correctCount;
    document.getElementById('statWrong').textContent = wrongCount;
    document.getElementById('statAttempted').textContent = attemptedCount;
}

// Show Answer Button Handler
function showAnswer() {
    const question = quizData[currentQuestionIndex];
    const answerHint = document.getElementById('answerHint');
    const correctAnswerText = document.getElementById('correctAnswerText');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    
    // Check if answer is already shown
    if (answerHint.style.display !== 'none') {
        // Hide the answer
        answerHint.style.display = 'none';
        showAnswerBtn.textContent = '💡 Show Answer';
    } else {
        // Get the correct answer index
        const correctIndex = question.correctAnswer;
        const correctOption = question.options[correctIndex];
        const answerLabel = String.fromCharCode(97 + correctIndex).toUpperCase();
        
        // Format the answer text
        correctAnswerText.textContent = `${answerLabel}) ${correctOption}`;
        
        // Show the answer hint
        answerHint.style.display = 'block';
        showAnswerBtn.textContent = '✓ Hide Answer';
    }
}

// Display Current Question
function displayQuestion() {
    const question = quizData[currentQuestionIndex];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const answerHint = document.getElementById('answerHint');
    const showAnswerBtn = document.getElementById('showAnswerBtn');

    // Reset show answer button
    answerHint.style.display = 'none';
    showAnswerBtn.textContent = '💡 Show Answer';

    questionText.textContent = `${question.id}. ${question.question}`;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = index;
        input.id = `option-${index}`;
        
        const label = document.createElement('label');
        label.htmlFor = `option-${index}`;
        label.textContent = String.fromCharCode(97 + index) + ') ' + option;

        optionDiv.appendChild(input);
        optionDiv.appendChild(label);

        // If edit mode enabled, append a small 'Set Correct' button to quickly update the correct answer
        if (editMode) {
            const editBtn = document.createElement('button');
            editBtn.className = 'edit-btn btn btn-small btn-outline';
            editBtn.type = 'button';
            editBtn.textContent = 'Set Correct';
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                setCorrectAnswer(index);
            });
            optionDiv.appendChild(editBtn);
        }

        optionsContainer.appendChild(optionDiv);

        // Restore previous answer if exists
        if (userAnswers[currentQuestionIndex] === index) {
            input.checked = true;
        }

        // Show correct answer and highlight colors from previous attempt
        if (answered[currentQuestionIndex]) {
            const correctIndex = question.correctAnswer;
            const userAnswer = userAnswers[currentQuestionIndex];

            // Disable options if already answered
            input.disabled = true;

            // Show correct answer (green) regardless of user's choice
            if (index === correctIndex) {
                optionDiv.classList.add('correct');
            }
            // Show wrong answer (red) only if user selected it
            if (index === userAnswer && userAnswer !== correctIndex) {
                optionDiv.classList.add('wrong');
            }
        } else {
            // Add click event only if question not yet answered
            input.addEventListener('change', () => {
                showFeedback(index, question.correctAnswer);
            });
        }
    });

    // Show feedback message if already answered
    if (answered[currentQuestionIndex]) {
        const feedbackMessage = document.getElementById('feedbackMessage');
        const feedbackText = document.getElementById('feedbackText');
        const correctIndex = question.correctAnswer;
        const userAnswer = userAnswers[currentQuestionIndex];

        if (userAnswer === correctIndex) {
            feedbackMessage.className = 'feedback-message feedback-correct';
            feedbackText.textContent = '✓ Correct!';
        } else {
            feedbackMessage.className = 'feedback-message feedback-incorrect';
            feedbackText.textContent = `✗ Incorrect! Correct answer is: ${String.fromCharCode(97 + correctIndex)})`;
        }
        feedbackMessage.style.display = 'block';
    } else {
        document.getElementById('feedbackMessage').style.display = 'none';
    }

    updateNavigationButtons();
    updateProgressBar();
    updateQuestionList();
}

// Show Feedback
function showFeedback(selectedIndex, correctIndex) {
    const feedbackMessage = document.getElementById('feedbackMessage');
    const feedbackText = document.getElementById('feedbackText');
    const options = document.querySelectorAll('.option input');

    userAnswers[currentQuestionIndex] = selectedIndex;

    if (selectedIndex === correctIndex) {
        feedbackMessage.className = 'feedback-message feedback-correct';
        feedbackText.textContent = '✓ Correct!';
        answerStatus[currentQuestionIndex] = 'correct';
        if (!answered[currentQuestionIndex]) {
            score++;
            answered[currentQuestionIndex] = true;
        }
    } else {
        feedbackMessage.className = 'feedback-message feedback-incorrect';
        feedbackText.textContent = `✗ Incorrect! Correct answer is: ${String.fromCharCode(97 + correctIndex)})`;
        answerStatus[currentQuestionIndex] = 'wrong';
        answered[currentQuestionIndex] = true;
    }

    feedbackMessage.style.display = 'block';

    // Highlight correct answer (always green) and selected wrong answer (red)
    options.forEach((option, index) => {
        if (index === correctIndex) {
            option.parentElement.classList.add('correct');
        }
        if (index === selectedIndex && selectedIndex !== correctIndex) {
            option.parentElement.classList.add('wrong');
        }
    });

    // Disable all options after selection (prevents changing answer)
    options.forEach(option => option.disabled = true);

    // Update question list
    updateQuestionList();
}

// Update Navigation Buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const clearBtn = document.getElementById('clearBtn');

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === quizData.length - 1;
    
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.textContent = 'Finish Quiz →';
    } else {
        nextBtn.textContent = 'Next →';
    }

    clearBtn.disabled = userAnswers[currentQuestionIndex] === null;
}

// Clear Current Answer
function clearAnswer() {
    userAnswers[currentQuestionIndex] = null;
    answered[currentQuestionIndex] = false;
    answerStatus[currentQuestionIndex] = 'skipped';
    
    const options = document.querySelectorAll('.option input');
    options.forEach(option => {
        option.checked = false;
        option.disabled = false;
        option.parentElement.classList.remove('correct', 'wrong');
    });

    document.getElementById('feedbackMessage').style.display = 'none';
    // If in edit mode, show the correct option highlight so reviewer can see it after clearing
    if (editMode) {
        const question = quizData[currentQuestionIndex];
        const correctIndex = question.correctAnswer;
        const optionDivs = document.querySelectorAll('.option');
        optionDivs.forEach((div, i) => {
            div.classList.remove('correct', 'wrong');
            if (i === correctIndex) div.classList.add('correct');
        });
    }

    updateNavigationButtons();
    updateQuestionList();
    updateStatistics();
}

// Navigate to Next Question
function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        finishQuiz();
    }
}

// Navigate to Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Finish Quiz
function finishQuiz() {

    const quizContent = document.querySelector('.quiz-content');
    quizContent.innerHTML = '';

    const scoreCard = document.createElement('div');
    scoreCard.className = 'score-section';
    scoreCard.innerHTML = `
        <div class="score-card">
            <h3>🎉 Quiz Completed!</h3>
            <p class="final-score">Your Score: <span id="finalScore">${score}</span>/<span id="totalScore">${quizData.length}</span></p>
            <p class="percentage">Accuracy: <span id="accuracyPercentage">${Math.round((score / quizData.length) * 100)}</span>%</p>
            <div class="result-details">
                <p>You got <strong>${score}</strong> out of <strong>${quizData.length}</strong> questions correct.</p>
                <p class="encouragement">${getEncouragement(score, quizData.length)}</p>
            </div>
        </div>
    `;
    quizContent.appendChild(scoreCard);

    document.getElementById('prevBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('clearBtn').style.display = 'none';
    document.getElementById('restartBtn').style.display = 'inline-block';
}

// Get Encouragement Message
function getEncouragement(score, total) {
    const percentage = (score / total) * 100;
    if (percentage === 100) return '🏆 Perfect Score! Outstanding!';
    if (percentage >= 80) return '🌟 Excellent! You have a great understanding!';
    if (percentage >= 60) return '👍 Good! Keep studying to improve!';
    if (percentage >= 40) return '💪 Not bad! Review the material and try again!';
    return '📚 Keep learning! Practice makes perfect!';
}

// Restart Quiz
function restartQuiz() {
    // Reset internal state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(quizData.length).fill(null);
    answered = new Array(quizData.length).fill(false);
    answerStatus = new Array(quizData.length).fill('skipped');

    // Reset UI elements without replacing the DOM structure
    // Clear options and feedback
    const optionsContainer = document.getElementById('optionsContainer');
    if (optionsContainer) optionsContainer.innerHTML = '';

    const feedbackMessage = document.getElementById('feedbackMessage');
    if (feedbackMessage) {
        feedbackMessage.style.display = 'none';
        feedbackMessage.className = 'feedback-message';
        const fbText = document.getElementById('feedbackText');
        if (fbText) fbText.textContent = '';
    }

    // Reset show-answer section
    const answerHint = document.getElementById('answerHint');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    const correctAnswerText = document.getElementById('correctAnswerText');
    if (answerHint) answerHint.style.display = 'none';
    if (showAnswerBtn) showAnswerBtn.textContent = '💡 Show Answer';
    if (correctAnswerText) correctAnswerText.textContent = '';

    // Restore navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const clearBtn = document.getElementById('clearBtn');
    const restartBtn = document.getElementById('restartBtn');
    if (prevBtn) prevBtn.style.display = 'inline-block';
    if (nextBtn) nextBtn.style.display = 'inline-block';
    if (clearBtn) clearBtn.style.display = 'inline-block';
    if (restartBtn) restartBtn.style.display = 'inline-block';

    // Reset sidebar rows classes
    quizData.forEach((_, index) => {
        const row = document.getElementById(`q-${index}`);
        if (row) {
            row.classList.remove('current', 'answered-correct', 'answered-wrong');
            row.classList.add('skipped');
        }
    });

    // Update stats and UI
    updateStatistics();
    updateQuestionList();
    updateProgressBar();

    // Display first question
    displayQuestion();
}

// Update Progress Bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
}

// Jump to Question
function jumpToQuestion() {
    const qNum = prompt(`Enter question number (1-${quizData.length}):`);
    if (qNum && !isNaN(qNum)) {
        const index = parseInt(qNum) - 1;
        if (index >= 0 && index < quizData.length) {
            if (userAnswers[currentQuestionIndex] === null) {
                alert('Please answer the current question first!');
                return;
            }
            currentQuestionIndex = index;
            displayQuestion();
        } else {
            alert('Invalid question number!');
        }
    }
}

// Show Answer Summary
function showAnswerSummary() {
    const modal = document.getElementById('summaryModal');
    const summaryBody = document.getElementById('summaryBody');
    
    let html = '<div class="summary-list">';
    
    quizData.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.correctAnswer;
        const status = userAnswer === null ? '⏳ Not Answered' : (isCorrect ? '✓ Correct' : '✗ Wrong');
        
        html += `
            <div class="summary-item ${isCorrect ? 'correct-item' : userAnswer === null ? 'unanswered-item' : 'wrong-item'}">
                <p><strong>Q${q.id}:</strong> ${status}</p>
                <p class="small-text">${q.question.substring(0, 80)}...</p>
            </div>
        `;
    });
    
    html += '</div>';
    summaryBody.innerHTML = html;
    modal.style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('summaryModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('summaryModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Toggle Edit Mode (for correcting answers)
function toggleEditMode() {
    editMode = !editMode;
    const btn = document.getElementById('editModeBtn');
    const note = document.getElementById('editNote');
    if (editMode) {
        if (btn) btn.textContent = 'Disable Edit Mode';
        if (note) note.style.display = 'inline';
    } else {
        if (btn) btn.textContent = 'Enable Edit Mode';
        if (note) note.style.display = 'none';
    }
    // Re-render current question to show/hide set-correct buttons
    displayQuestion();
}

// Set the correct answer for the current question (admin correction)
function setCorrectAnswer(index) {
    const question = quizData[currentQuestionIndex];
    if (!question) return;

    const prev = question.correctAnswer;
    question.correctAnswer = index;

    // Persist a minimal corrections map in localStorage (id -> correctIndex)
    let corrections = {};
    try {
        corrections = JSON.parse(localStorage.getItem('quizCorrections') || '{}');
    } catch (e) {
        corrections = {};
    }
    corrections[question.id] = index;
    localStorage.setItem('quizCorrections', JSON.stringify(corrections));

    // Update UI: remove 'correct' from option divs and add to the selected one
    const optionDivs = document.querySelectorAll('.option');
    optionDivs.forEach((div, i) => {
        div.classList.remove('correct');
        if (i === index) div.classList.add('correct');
    });

    // If answer hint is visible, update its text
    const answerHint = document.getElementById('answerHint');
    const correctAnswerText = document.getElementById('correctAnswerText');
    if (answerHint && answerHint.style.display !== 'none' && correctAnswerText) {
        correctAnswerText.textContent = `${String.fromCharCode(97 + index).toUpperCase()}) ${question.options[index]}`;
    }

    // Update question list/status in case it affects summaries
    // If question was already answered, recompute correctness and adjust score/status
    const wasAnswered = answered[currentQuestionIndex];
    const userAns = userAnswers[currentQuestionIndex];
    if (wasAnswered) {
        const prevStatus = answerStatus[currentQuestionIndex];
        const nowCorrect = userAns === index;

        if (nowCorrect) {
            answerStatus[currentQuestionIndex] = 'correct';
            if (prevStatus !== 'correct') {
                score = Math.max(0, score + 1);
            }
        } else {
            answerStatus[currentQuestionIndex] = 'wrong';
            if (prevStatus === 'correct') {
                score = Math.max(0, score - 1);
            }
        }

        // Update feedback display
        const feedbackMessage = document.getElementById('feedbackMessage');
        const feedbackText = document.getElementById('feedbackText');
        if (feedbackMessage && feedbackText) {
            if (answerStatus[currentQuestionIndex] === 'correct') {
                feedbackMessage.className = 'feedback-message feedback-correct';
                feedbackText.textContent = '✓ Correct!';
            } else {
                feedbackMessage.className = 'feedback-message feedback-incorrect';
                feedbackText.textContent = `✗ Incorrect! Correct answer is: ${String.fromCharCode(97 + index)})`;
            }
            feedbackMessage.style.display = 'block';
        }
    } else {
        // If not answered but in editMode, show the correct highlight so reviewer can see it
        if (editMode) {
            const optionDivs2 = document.querySelectorAll('.option');
            optionDivs2.forEach((div, i) => {
                div.classList.remove('correct', 'wrong');
                if (i === index) div.classList.add('correct');
            });
        }
    }

    updateQuestionList();
    updateStatistics();
    alert(`Correct answer for Q${question.id} set to ${String.fromCharCode(97 + index).toUpperCase()}`);
}

// Export corrections or full quizData as a downloadable file
function exportCorrections() {
    let corrections = {};
    try {
        corrections = JSON.parse(localStorage.getItem('quizCorrections') || '{}');
    } catch (e) {
        corrections = {};
    }

    if (Object.keys(corrections).length === 0) {
        if (!confirm('No per-question corrections recorded. Export the full `quizData` file instead?')) return;
        const content = 'const quizData = ' + JSON.stringify(quizData, null, 2) + ';';
        const blob = new Blob([content], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'quiz-data-corrections.js';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        return;
    }

    const blob = new Blob([JSON.stringify(corrections, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quiz-corrections.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeQuiz);
