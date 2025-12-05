// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  }
});

// Smooth scroll for nav links
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
  });
});

// GSAP Animations
window.onload = () => {
  gsap.from('.profile-img', { y: -100, opacity: 0, duration: 1, ease: 'power3.out' });
  gsap.from('.home-right', { x: 100, opacity: 0, duration: 1, delay: 0.5, ease: 'power3.out' });
  gsap.from('.navbar', { y: -60, opacity: 0, duration: 1, delay: 0.2 });
};

// Skills slider animation (on scroll into view)
gsap.utils.toArray('.skill-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: i * 0.1,
    ease: 'power2.out',
  });
});

// Projects animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: 'power2.out',
  });
});

// Education animation
gsap.utils.toArray('.education-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
    },
    x: i % 2 === 0 ? -80 : 80,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: 'power2.out',
  });
});

// About Me animation
gsap.from('.about-img', {
  scrollTrigger: {
    trigger: '.about-img',
    start: 'top 85%',
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out',
});
gsap.from('.about-text', {
  scrollTrigger: {
    trigger: '.about-text',
    start: 'top 85%',
  },
  x: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  ease: 'power2.out',
});

// Contact form confirmation
document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('contactConfirmation').textContent =
    "Your message has been sent to Sayan.";
  this.reset();
  setTimeout(() => {
    document.getElementById('contactConfirmation').textContent = '';
  }, 4000);
};

// Feedback form confirmation
document.getElementById('feedbackForm').onsubmit = function(e) {
  e.preventDefault();
  const name = this.name.value;
  document.getElementById('feedbackConfirmation').textContent =
    `Thanks for your feedback, ${name}!`;
  this.reset();
  setTimeout(() => {
    document.getElementById('feedbackConfirmation').textContent = '';
  }, 4000);
};

// Show Projects button scrolls to Projects section
document.querySelector('.show-projects').onclick = function() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
};

// Chatbot UI (Gemini API integration placeholder)
const chatbot = document.getElementById('chatbot');
const chatbotBody = chatbot.querySelector('.chatbot-body');
const chatbotInput = chatbot.querySelector('.chatbot-input');

function appendChatMessage(sender, text) {
  const msg = document.createElement('div');
  msg.className = sender === 'user' ? 'chat-msg user' : 'chat-msg bot';
  msg.textContent = text;
  chatbotBody.appendChild(msg);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

chatbotInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && this.value.trim()) {
    const userMsg = this.value.trim();
    appendChatMessage('user', userMsg);
    this.value = '';
    // Placeholder Gemini API response
    setTimeout(() => {
      appendChatMessage('bot', 'Hi! I am Sayan\'s chatbot. (Gemini API integration coming soon!)');
    }, 800);
  }
});

// Optional: Minimize/expand chatbot (not required by prompt, but can be added) 