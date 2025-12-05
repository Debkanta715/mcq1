// Quiz Data - All 150 questions with correct answers
const quizData = [
    {
        id: 1,
        question: "Identify the main goal of optimization in engineering",
        options: [
            "Maximizing resources",
            "Finding the best possible solution",
            "Minimizing complexity",
            "Reducing labor"
        ],
        correctAnswer: 1 // "Finding the best possible solution"
    },
    {
        id: 2,
        question: "Select the correct one: Optimization techniques were first widely applied",
        options: [
            "Physics",
            "Manufacturing",
            "Military operations",
            "Biology"
        ],
        correctAnswer: 2 // "Military operations"
    },
    {
        id: 3,
        question: "Identify the focus of early optimization techniques",
        options: [
            "Resource allocation",
            "Complex algorithms",
            "Artificial intelligence",
            "Cost reduction"
        ],
        correctAnswer: 0 // "Resource allocation"
    },
    {
        id: 4,
        question: "Select the correct one: Structural optimization in civil engineering focuses on minimizing",
        options: [
            "Weight",
            "Cost",
            "Stress",
            "All of these"
        ],
        correctAnswer: 3 // "All of these"
    },
    {
        id: 5,
        question: "Select the correct option: The father of modern optimization is",
        options: [
            "Newton",
            "Euler",
            "Dantzig",
            "Gauss"
        ],
        correctAnswer: 2 // "Dantzig"
    },
    {
        id: 6,
        question: "Identify the correct one: In aerospace engineering, optimization techniques are primarily used for",
        options: [
            "Maximizing fuel efficiency",
            "Optimizing flight paths",
            "Structural weight reduction",
            "All of these"
        ],
        correctAnswer: 3 // "All of these"
    },
    {
        id: 7,
        question: "An optimization problem related to",
        options: [
            "Objective function",
            "Constraints",
            "Decision variables",
            "All of these"
        ],
        correctAnswer: 3 // "All of these"
    },
    {
        id: 8,
        question: "The objective function in an optimization problem represents",
        options: [
            "A constraint",
            "The quantity to be optimized",
            "A constant value",
            "None of these"
        ],
        correctAnswer: 1 // "The quantity to be optimized"
    },
    {
        id: 9,
        question: "Select the following that is a type of constraint in optimization problems",
        options: [
            "Equality constraint",
            "Inequality constraint",
            "Both a and b",
            "None of these"
        ],
        correctAnswer: 2 // "Both a and b"
    },
    {
        id: 10,
        question: "In an optimization problem, decision variables represent",
        options: [
            "Constants",
            "Fixed parameters",
            "Variables to be determined",
            "None of these"
        ],
        correctAnswer: 2 // "Variables to be determined"
    },
    {
        id: 11,
        question: "Select the following that is not a valid optimization objective",
        options: [
            "Minimize cost",
            "Maximize profit",
            "Minimize constraints",
            "Maximize efficiency"
        ],
        correctAnswer: 2 // "Minimize constraints"
    },
    {
        id: 12,
        question: "Optimization problems are classified based on",
        options: [
            "Nature of decision variables",
            "Type of constraints",
            "Objective function characteristics",
            "All of these"
        ],
        correctAnswer: 3 // "All of these"
    },
    {
        id: 13,
        question: "Identify the characterization of Linear programming problems",
        options: [
            "Linear objective functions",
            "Linear constraints",
            "Both a and b",
            "None of these"
        ],
        correctAnswer: 2 // "Both a and b"
    },
    {
        id: 14,
        question: "An optimization problem with discrete variables is defined as",
        options: [
            "Continuous optimization",
            "Integer optimization",
            "Nonlinear optimization",
            "Unconstrained optimization"
        ],
        correctAnswer: 1 // "Integer optimization"
    },
    {
        id: 15,
        question: "Problems with no constraints are classified as",
        options: [
            "Linear optimization",
            "Unconstrained optimization",
            "Constrained optimization",
            "Nonlinear optimization"
        ],
        correctAnswer: 1 // "Unconstrained optimization"
    },
    {
        id: 16,
        question: "Select the correct one: The term 'global optimum' refers to",
        options: [
            "The best solution in a local neighborhood",
            "The overall best solution in the entire domain",
            "Any feasible solution",
            "A solution that violates constraints"
        ],
        correctAnswer: 1 // "The overall best solution in the entire domain"
    },
    {
        id: 17,
        question: "Identify the correct option: A 'local optimum' in optimization refers to",
        options: [
            "The best solution globally",
            "The best solution within a limited region",
            "A solution that violates constraints",
            "A solution with no decision variables"
        ],
        correctAnswer: 1 // "The best solution within a limited region"
    },
    {
        id: 18,
        question: "Identify the primary goal of formulating an optimization problem",
        options: [
            "To define the objective function and constraints",
            "To identify infeasible solutions",
            "To eliminate redundant variables",
            "To increase complexity"
        ],
        correctAnswer: 0 // "To define the objective function and constraints"
    },
    {
        id: 19,
        question: "Select the correct one: Redundant constraints in an optimization problem",
        options: [
            "Change the feasible region",
            "Do not affect the feasible region",
            "Are always infeasible",
            "Are necessary for a solution"
        ],
        correctAnswer: 1 // "Do not affect the feasible region"
    },
    {
        id: 20,
        question: "Select the following that is a typical first step in solving an optimization problem",
        options: [
            "Implement the solution",
            "Define the problem clearly",
            "Ignore the constraints",
            "Choose a random algorithm"
        ],
        correctAnswer: 1 // "Define the problem clearly"
    },
    {
        id: 21,
        question: "Write the primary goal of early optimization studies",
        options: [
            "To maximize profits",
            "To minimize costs",
            "To find efficient resource allocation",
            "All of these"
        ],
        correctAnswer: 3 // "All of these"
    },
    {
        id: 22,
        question: "Select the correct alternative: The design vector in optimization refers to",
        options: [
            "Constraints of the problem",
            "A vector of decision variables",
            "The objective function",
            "The feasible region"
        ],
        correctAnswer: 1 // "A vector of decision variables"
    },
    {
        id: 23,
        question: "Identify the correct one: Design constraints in optimization are used to",
        options: [
            "Define the feasible region",
            "Optimize the objective function",
            "Eliminate redundancy",
            "Ignore infeasible solutions"
        ],
        correctAnswer: 0 // "Define the feasible region"
    },
    {
        id: 24,
        question: "Choose the correct one: An optimization problem consists of",
        options: [
            "Linear function",
            "Objective function",
            "Integral function",
            "Differential function"
        ],
        correctAnswer: 1 // "Objective function"
    },
    {
        id: 25,
        question: "Select the correct one: The term 'design vector' in optimization refers to",
        options: [
            "A set of design constraints",
            "A set of design variables",
            "The objective function",
            "The constraint surface"
        ],
        correctAnswer: 1 // "A set of design variables"
    },
    {
        id: 26,
        question: "The constraint surface represents",
        options: [
            "The feasible region boundary",
            "The set of design variables",
            "The maximum value of the objective function",
            "An unbounded solution space"
        ],
        correctAnswer: 0 // "The feasible region boundary"
    },
    {
        id: 27,
        question: "Choose the correct one: The function f(x) = x² - 4x + 7 is an example of",
        options: [
            "Linear function",
            "Quadratic function",
            "Exponential function",
            "Logarithmic function"
        ],
        correctAnswer: 1 // "Quadratic function"
    },
    {
        id: 28,
        question: "Select the correct option from the following: The objective function in an optimization problem is",
        options: [
            "A function that needs to be minimized or maximized",
            "A function that defines the design constraints",
            "A function that describes the constraint surface",
            "Always linear"
        ],
        correctAnswer: 0 // "A function that needs to be minimized or maximized"
    },
    {
        id: 29,
        question: "A function f(x) = 3x³ - 2x² + 4 is classified as",
        options: [
            "Linear function",
            "Quadratic function",
            "Cubic function",
            "Exponential function"
        ],
        correctAnswer: 2 // "Cubic function"
    },
    {
        id: 30,
        question: "Choose the correct one: The difference between single-variable and multi-variable optimization is",
        options: [
            "The number of objective functions",
            "The presence of constraints",
            "The number of variables being optimized",
            "The method of solution"
        ],
        correctAnswer: 2 // "The number of variables being optimized"
    },
    {
        id: 31,
        question: "The Kuhn-Tucker conditions apply to",
        options: [
            "Unconstrained problems",
            "Single-variable optimization",
            "Multi-variable optimization with inequality constraints",
            "Equality-constrained optimization problems"
        ],
        correctAnswer: 2 // "Multi-variable optimization with inequality constraints"
    },
    {
        id: 32,
        question: "Write the correct option from the following: The Lagrange multipliers method is used for",
        options: [
            "Solving constrained optimization problems",
            "Finding the global maximum",
            "Solving linear programming problems",
            "Eliminating constraints from the problem"
        ],
        correctAnswer: 0 // "Solving constrained optimization problems"
    },
    {
        id: 33,
        question: "Choose the correct option: The necessary condition for an extreme point in a single-variable function is",
        options: [
            "f'(x) = 0",
            "f(x) = 0",
            "f''(x) = 0",
            "The function must be linear"
        ],
        correctAnswer: 0 // "f'(x) = 0"
    },
    {
        id: 34,
        question: "The feasible region in an optimization problem represents",
        options: [
            "The set of feasible solutions",
            "The objective function values",
            "A function without constraints",
            "An infeasible solution space"
        ],
        correctAnswer: 0 // "The set of feasible solutions"
    },
    {
        id: 35,
        question: "Compute the critical points of f(x) = x² - 6x + 9",
        options: [
            "x = 3",
            "x = -3",
            "x = 0",
            "x = 6"
        ],
        correctAnswer: 0 // "x = 3"
    },
    {
        id: 36,
        question: "The Hessian matrix is used to determine",
        options: [
            "First-order conditions",
            "Second-order conditions",
            "Feasible region",
            "The constraint surface"
        ],
        correctAnswer: 1 // "Second-order conditions"
    },
    {
        id: 37,
        question: "For f(x) = x³ - 3x² + 2, compute f'(x)",
        options: [
            "3x² - 6x",
            "x² - 3x",
            "2x - 3",
            "x² - 3x²"
        ],
        correctAnswer: 0 // "3x² - 6x"
    },
    {
        id: 38,
        question: "Select the correct option: A function f(x) = 5 - x² has its maximum at",
        options: [
            "x = 0",
            "x = 1",
            "x = -1",
            "x = 5"
        ],
        correctAnswer: 0 // "x = 0"
    },
    {
        id: 39,
        question: "Write the correct option: The function f(x, y) = x² + y² - 4x - 6y has a critical point at",
        options: [
            "(2, 3)",
            "(3, 2)",
            "(-2, -3)",
            "(0, 0)"
        ],
        correctAnswer: 0 // "(2, 3)"
    },
    {
        id: 40,
        question: "The Kuhn-Tucker conditions generalize",
        options: [
            "The Lagrange multiplier method",
            "Newton's method",
            "The gradient descent method",
            "The simplex method"
        ],
        correctAnswer: 0 // "The Lagrange multiplier method"
    },
    {
        id: 41,
        question: "The determinant of the Hessian matrix in a two-variable function helps to classify",
        options: [
            "The feasibility of solutions",
            "Local minima, maxima, or saddle points",
            "The number of constraints",
            "The global maximum"
        ],
        correctAnswer: 1 // "Local minima, maxima, or saddle points"
    },
    {
        id: 42,
        question: "Select the correct option: The gradient descent method is best for",
        options: [
            "Convex functions",
            "Non-convex functions",
            "Linear programming",
            "Equality-constrained problems"
        ],
        correctAnswer: 0 // "Convex functions"
    },
    {
        id: 43,
        question: "Choose the correct from below: An optimization problem is called unconstrained if",
        options: [
            "No restrictions exist on variables",
            "Only equality constraints are present",
            "Only inequality constraints are present",
            "The function is linear"
        ],
        correctAnswer: 0 // "No restrictions exist on variables"
    },
    {
        id: 44,
        question: "Determine the extreme point for f(x) = -x² + 6x - 5",
        options: [
            "Maximum at x = 3",
            "Minimum at x = 3",
            "No extreme point",
            "Minimum at x = -3"
        ],
        correctAnswer: 0 // "Maximum at x = 3"
    },
    {
        id: 45,
        question: "Write the correct option: A quadratic function always has",
        options: [
            "A single minimum or maximum",
            "Multiple maxima",
            "No turning points",
            "An undefined slope"
        ],
        correctAnswer: 0 // "A single minimum or maximum"
    },
    {
        id: 46,
        question: "Write the correct option: The Hessian matrix is positive definite then",
        options: [
            "The function has a local minimum",
            "The function has a local maximum",
            "The function is linear",
            "The function has no critical points"
        ],
        correctAnswer: 0 // "The function has a local minimum"
    },
    {
        id: 47,
        question: "Select the correct one: The dual problem in optimization is used to",
        options: [
            "Find an alternative way to solve constraints",
            "Solve an unconstrained problem",
            "Determine feasibility",
            "Maximize constraints"
        ],
        correctAnswer: 0 // "Find an alternative way to solve constraints"
    },
    {
        id: 48,
        question: "Choose the correct one from below: The gradient of a function at an optimal point is",
        options: [
            "Negative",
            "Zero",
            "Undefined",
            "Always positive"
        ],
        correctAnswer: 1 // "Zero"
    },
    {
        id: 49,
        question: "Identify the correct one: Lagrange multipliers are used only if constraints are",
        options: [
            "Equality constraints",
            "Inequality constraints",
            "Linear constraints",
            "No constraints"
        ],
        correctAnswer: 0 // "Equality constraints"
    },
    {
        id: 50,
        question: "Identify the correct option: The Lagrangian function for f(x, y) = x² + y² subject to x + y = 1 is",
        options: [
            "L = x² + y² - λ(x + y - 1)",
            "L = x² - λ(x + y - 1)",
            "L = y² - λ(x + y - 1)",
            "L = x + y - λ(x² + y² - 1)"
        ],
        correctAnswer: 0 // "L = x² + y² - λ(x + y - 1)"
    },
    {
        id: 51,
        question: "Select the first step in solving an LPP using the graphical method",
        options: [
            "Identify the constraints",
            "Plot the objective function",
            "Identify the decision variables",
            "None of these"
        ],
        correctAnswer: 0 // "Identify the constraints"
    },
    {
        id: 52,
        question: "Write the following that is a necessary condition for a problem to have a feasible solution",
        options: [
            "Feasible region must be bounded",
            "Feasible region must be non-empty",
            "Objective function must be linear",
            "Constraints must be non-linear"
        ],
        correctAnswer: 1 // "Feasible region must be non-empty"
    },
    {
        id: 53,
        question: "In the standard form, choose the correct option for all decision variables",
        options: [
            "Unrestricted",
            "non-negative",
            "a positive integer value",
            "greater than one"
        ],
        correctAnswer: 1 // "non-negative"
    },
    {
        id: 54,
        question: "Select from the following that represents a typical constraint in a linear programming problem",
        options: [
            "2x₁ + 3x₂ ≤ 5",
            "2x₁² + 5x₂ ≥ 8",
            "2x₁² + 8x₂ ≥ 27",
            "None of these"
        ],
        correctAnswer: 0 // "2x₁ + 3x₂ ≤ 5"
    },
    {
        id: 55,
        question: "Select the number of decision variables in a linear programming problem",
        options: [
            "Must be two",
            "Must be three",
            "Can be any number",
            "None of these"
        ],
        correctAnswer: 2 // "Can be any number"
    },
    {
        id: 56,
        question: "Select from the following that is a valid objective function in linear programming",
        options: [
            "Z = 2X + 3Y",
            "Z = 2X² + 3Y",
            "Z = √X + Y",
            "None of these"
        ],
        correctAnswer: 0 // "Z = 2X + 3Y"
    },
    {
        id: 57,
        question: "Write the appropriate: A linear programming problem is infeasible",
        options: [
            "The feasible region is empty",
            "The objective function is non-linear",
            "The constraints are equalities",
            "None of these"
        ],
        correctAnswer: 0 // "The feasible region is empty"
    },
    {
        id: 58,
        question: "Select the correct one: The general form of a linear programming problem includes",
        options: [
            "An objective function and constraints",
            "An objective function and no constraints",
            "Constraints and no objective function",
            "None of these"
        ],
        correctAnswer: 0 // "An objective function and constraints"
    },
    {
        id: 59,
        question: "In matrix form, identify the vector X",
        options: [
            "The decision variables",
            "The coefficients of the constraints",
            "The right-hand side constants",
            "None of these"
        ],
        correctAnswer: 0 // "The decision variables"
    },
    {
        id: 60,
        question: "Select the matrix equation that represents a system of linear equations in a linear programming problem",
        options: [
            "Ax=b",
            "cTx=z",
            "x ≥ 0",
            "none of these"
        ],
        correctAnswer: 0 // "Ax=b"
    },
    {
        id: 61,
        question: "In the matrix form, identify the vector 'b'",
        options: [
            "Coefficients of the decision variables",
            "Right-hand side constants of the constraints",
            "Coefficients of the objective function",
            "None of these"
        ],
        correctAnswer: 1 // "Right-hand side constants of the constraints"
    },
    {
        id: 62,
        question: "In the graphical method, the optimal solution is calculated by",
        options: [
            "Moving the objective function line parallel until it reaches the last point in the feasible region",
            "Checking all corner points of the feasible region",
            "Solving the system of equations formed by the constraints",
            "None of these"
        ],
        correctAnswer: 0 // "Moving the objective function line parallel until it reaches the last point in the feasible region"
    },
    {
        id: 63,
        question: "Select from the following is not necessary for solving an LPP by the graphical method",
        options: [
            "Objective function",
            "Feasible region",
            "Slack variables",
            "Constraints"
        ],
        correctAnswer: 2 // "Slack variables"
    },
    {
        id: 64,
        question: "Choose the process of finding the optimal solution in the graphical method",
        options: [
            "Checking all points in the feasible region",
            "Identifying and checking extreme points",
            "Plotting the objective function only",
            "None of these"
        ],
        correctAnswer: 1 // "Identifying and checking extreme points"
    },
    {
        id: 65,
        question: "Choose the correct: To convert an inequality constraint to an equation in the standard form, you need to add",
        options: [
            "A slack variable",
            "A surplus variable",
            "Both slack and surplus variables",
            "None of these"
        ],
        correctAnswer: 0 // "A slack variable"
    },
    {
        id: 66,
        question: "Select the following that is not typically part of the standard form of an LPP",
        options: [
            "Slack variables",
            "Surplus variables",
            "Objective function",
            "Negative decision variables"
        ],
        correctAnswer: 3 // "Negative decision variables"
    },
    {
        id: 67,
        question: "Select the correct one: In converting a maximization problem to its standard form, the objective function is",
        options: [
            "Left unchanged",
            "Minimized",
            "Multiplied by -1",
            "None of these"
        ],
        correctAnswer: 0 // "Left unchanged"
    },
    {
        id: 68,
        question: "Identify the correct one: The variable is subtracted for converting a constraint of the type '≥' to standard form",
        options: [
            "Slack variable",
            "Surplus variable",
            "Artificial variable",
            "None of these"
        ],
        correctAnswer: 1 // "Surplus variable"
    },
    {
        id: 69,
        question: "Select the correct option: The general form of the objective function in a linear programming problem is",
        options: [
            "Z = c₁x₁ + c₂x₂ + ⋯ + cₙxₙ",
            "Z = x₁ + x₂ + ⋯ + xₙ",
            "Z = c₁ + c₂ + ⋯ + cₙ",
            "None of these"
        ],
        correctAnswer: 0 // "Z = c₁x₁ + c₂x₂ + ⋯ + cₙxₙ"
    },
    {
        id: 70,
        question: "Select correct from following: The matrix form of a linear programming problem consists of",
        options: [
            "A coefficient matrix, a variable vector, and a constant vector",
            "Only a coefficient matrix and a variable vector",
            "Only a variable vector and a constant vector",
            "None of these"
        ],
        correctAnswer: 0 // "A coefficient matrix, a variable vector, and a constant vector"
    },
    {
        id: 71,
        question: "In the standard form of LPP, select the correct one: non-negativity restrictions are imposed on",
        options: [
            "All decision variables",
            "Only slack variables",
            "Only surplus variables",
            "None of these"
        ],
        correctAnswer: 0 // "All decision variables"
    },
    {
        id: 72,
        question: "The standard form of an LPP selects for",
        options: [
            "Simplex method application",
            "Graphic method application",
            "Matrix method application",
            "None of these"
        ],
        correctAnswer: 0 // "Simplex method application"
    },
    {
        id: 73,
        question: "The standard form of an LPP is also described as",
        options: [
            "The algebraic form",
            "The matrix form",
            "The vector form",
            "None of these"
        ],
        correctAnswer: 0 // "The algebraic form"
    },
    {
        id: 74,
        question: "Choose the correct one: In the standard form of an LPP for minimization, the objective function is",
        options: [
            "Minimized",
            "Maximized",
            "Multiplied by -1 for minimization",
            "None of these"
        ],
        correctAnswer: 0 // "Minimized"
    },
    {
        id: 75,
        question: "Select the correct one: In the standard form of an LPP for maximization, all constraints are typically",
        options: [
            "Less than or equal to (≤)",
            "Greater than or equal to (≥)",
            "Equality (=)",
            "Mixed constraints"
        ],
        correctAnswer: 0 // "Less than or equal to (≤)"
    },
    {
        id: 76,
        question: "The standard form requires that all inequality constraints be converted to",
        options: [
            "Equality constraints",
            "Non-negative variables",
            "Objective functions",
            "Decision variables"
        ],
        correctAnswer: 0 // "Equality constraints"
    },
    {
        id: 77,
        question: "Choose the correct one: When a maximization problem has a '≥' constraint, to convert it to standard form",
        options: [
            "Add a slack variable",
            "Subtract a surplus variable",
            "Multiply by -1",
            "Divide by constant"
        ],
        correctAnswer: 1 // "Subtract a surplus variable"
    },
    {
        id: 78,
        question: "A slack variable added to '≤' constraint represents",
        options: [
            "Excess resources",
            "Unused resources",
            "Additional cost",
            "Variable constraint"
        ],
        correctAnswer: 1 // "Unused resources"
    },
    {
        id: 79,
        question: "Select the correct one: Nonlinear programming deals with",
        options: [
            "Linear constraints only",
            "Only quadratic functions",
            "Optimization problems with nonlinear objective functions",
            "Problems with no constraints"
        ],
        correctAnswer: 2 // "Optimization problems with nonlinear objective functions"
    },
    {
        id: 80,
        question: "Choose the correct option from below: A function is unimodal if it",
        options: [
            "has multiple minima",
            "has a single maximum or minimum",
            "is always increasing",
            "has no derivative"
        ],
        correctAnswer: 1 // "has a single maximum or minimum"
    },
    {
        id: 81,
        question: "Select the correct one: Nonlinear programming deals with",
        options: [
            "Linear constraints only",
            "Only quadratic functions",
            "Optimization problems with nonlinear objective functions",
            "Problems with no constraints"
        ],
        correctAnswer: 2 // "Optimization problems with nonlinear objective functions"
    },
    {
        id: 82,
        question: "Choose the correct option from below: A function is unimodal if it",
        options: [
            "has multiple minima",
            "has a single maximum or minimum",
            "is always increasing",
            "has no derivative"
        ],
        correctAnswer: 1 // "has a single maximum or minimum"
    },
    {
        id: 83,
        question: "Identify the correct option: Exhaustive search method requires",
        options: [
            "Evaluating the function at fixed points",
            "Gradient computation",
            "Hessian matrix calculation",
            "Only two function evaluations"
        ],
        correctAnswer: 0 // "Evaluating the function at fixed points"
    },
    {
        id: 84,
        question: "Identify the correct option: Golden Section Method is based on",
        options: [
            "Linear regression",
            "Fibonacci numbers",
            "The golden ratio",
            "Random search"
        ],
        correctAnswer: 2 // "The golden ratio"
    },
    {
        id: 85,
        question: "Identify the correct one: Fibonacci method uses",
        options: [
            "Fibonacci sequence to reduce search intervals",
            "Quadratic approximations",
            "Derivatives for convergence",
            "Newton's method"
        ],
        correctAnswer: 0 // "Fibonacci sequence to reduce search intervals"
    },
    {
        id: 86,
        question: "Choose the correct from below: Dichotomous Search eliminates",
        options: [
            "One-third of the search space",
            "Half of the search space",
            "One-fourth of the search space",
            "Random points"
        ],
        correctAnswer: 1 // "Half of the search space"
    },
    {
        id: 87,
        question: "Identify the correct option: Golden Section Search reduces the interval by",
        options: [
            "50%",
            "61.8%",
            "33.3%",
            "75%"
        ],
        correctAnswer: 1 // "61.8%"
    },
    {
        id: 88,
        question: "Identify the correct one: Quadratic interpolation method requires",
        options: [
            "One function evaluation",
            "Two function evaluations",
            "Three function evaluations",
            "Four function evaluations"
        ],
        correctAnswer: 2 // "Three function evaluations"
    },
    {
        id: 89,
        question: "Fibonacci search method compared to Golden Section method",
        options: [
            "Uses the same number of function evaluations",
            "Requires fewer function evaluations",
            "Requires more function evaluations",
            "Is not useful for optimization"
        ],
        correctAnswer: 1 // "Requires fewer function evaluations"
    },
    {
        id: 90,
        question: "Identify the correct one: Using exhaustive search, if the interval is [0, 10] and step size is 2, the number of function evaluations required is",
        options: [
            "5",
            "10",
            "20",
            "3"
        ],
        correctAnswer: 0 // "5"
    },
    {
        id: 91,
        question: "Identify the correct option: The golden section ratio approximately equals",
        options: [
            "0.382",
            "0.500",
            "0.618",
            "0.707"
        ],
        correctAnswer: 2 // "0.618"
    },
    {
        id: 92,
        question: "Choose from below: The cubic interpolation method differs from quadratic interpolation by",
        options: [
            "Using one more function value",
            "Being slower",
            "Ignoring derivative values",
            "Avoiding iteration"
        ],
        correctAnswer: 0 // "Using one more function value"
    },
    {
        id: 93,
        question: "Choose from below: The golden section method is preferred over exhaustive search because",
        options: [
            "It requires fewer function evaluations",
            "It finds global optima",
            "It works for multimodal functions",
            "It does not assume unimodality"
        ],
        correctAnswer: 0 // "It requires fewer function evaluations"
    },
    {
        id: 94,
        question: "Identify the correct option: The advantage of direct root methods is",
        options: [
            "They require fewer iterations",
            "They work for multimodal functions",
            "They are independent of function continuity",
            "They work without function evaluations"
        ],
        correctAnswer: 0 // "They require fewer iterations"
    },
    {
        id: 95,
        question: "Identify the correct one: The unrestricted search method is less efficient than Fibonacci search because",
        options: [
            "It does not use function values",
            "It uses a fixed step size",
            "It ignores unimodality",
            "It evaluates derivatives"
        ],
        correctAnswer: 1 // "It uses a fixed step size"
    },
    {
        id: 96,
        question: "Identify the correct one: The Fibonacci search method ensures",
        options: [
            "Precise function minimum location",
            "Quick convergence",
            "Elimination of all function values",
            "Identification of global optima"
        ],
        correctAnswer: 1 // "Quick convergence"
    },
    {
        id: 97,
        question: "Identify the correct one: The cubic interpolation method provides better accuracy than quadratic interpolation because",
        options: [
            "It uses an additional function point",
            "It requires fewer iterations",
            "It is independent of derivative values",
            "It works for any function"
        ],
        correctAnswer: 0 // "It uses an additional function point"
    },
    {
        id: 98,
        question: "Identify the correct one: The effectiveness of elimination methods depends on",
        options: [
            "The choice of search interval",
            "The function's convexity",
            "The presence of multiple local minima",
            "The use of derivatives"
        ],
        correctAnswer: 1 // "The function's convexity"
    },
    {
        id: 99,
        question: "Identify the correct one: The exhaustive search method is impractical for large intervals because",
        options: [
            "It ignores derivative information",
            "It requires too many function evaluations",
            "It assumes differentiability",
            "It selects points randomly"
        ],
        correctAnswer: 1 // "It requires too many function evaluations"
    },
    {
        id: 100,
        question: "Identify the correct one: The dichotomous search method is less efficient than the Fibonacci method because",
        options: [
            "It does not use prior function evaluations",
            "It requires more iterations",
            "It assumes function differentiability",
            "It is only applicable to quadratic functions"
        ],
        correctAnswer: 1 // "It requires more iterations"
    },
    {
        id: 101,
        question: "Choose the correct option from below: The most efficient method for optimizing a quadratic function is",
        options: [
            "Quadratic interpolation",
            "Fibonacci search",
            "Golden section method",
            "Dichotomous search"
        ],
        correctAnswer: 0 // "Quadratic interpolation"
    },
    {
        id: 102,
        question: "Identify the correct one: The best method for minimizing a function if derivative information is unavailable",
        options: [
            "Golden section search",
            "Quadratic interpolation",
            "Newton's method",
            "Unrestricted search"
        ],
        correctAnswer: 0 // "Golden section search"
    },
    {
        id: 103,
        question: "Select the correct option from below: The most efficient method for large-scale optimization is",
        options: [
            "Fibonacci search",
            "Quadratic interpolation",
            "Direct root methods",
            "Exhaustive search"
        ],
        correctAnswer: 2 // "Direct root methods"
    },
    {
        id: 104,
        question: "Select the correct option from below: The most suitable method for approximating the minimum of a complex nonlinear function is",
        options: [
            "Golden section search",
            "Unrestricted search",
            "Dichotomous search",
            "Exhaustive search"
        ],
        correctAnswer: 0 // "Golden section search"
    },
    {
        id: 105,
        question: "Select the correct option from below: The preferred method for optimizing a function with limited function evaluations is",
        options: [
            "Fibonacci method",
            "Unrestricted search",
            "Exhaustive search",
            "Quadratic interpolation"
        ],
        correctAnswer: 0 // "Fibonacci method"
    },
    {
        id: 106,
        question: "Select the correct option from below: The transportation problem seeks to minimize",
        options: [
            "Total cost",
            "Distance traveled",
            "Time taken",
            "Number of routes"
        ],
        correctAnswer: 0 // "Total cost"
    },
    {
        id: 107,
        question: "Select the correct option from below: The assignment problem is a special case of",
        options: [
            "Transportation problem",
            "Maximum flow problem",
            "Shortest route problem",
            "Crashing problem"
        ],
        correctAnswer: 0 // "Transportation problem"
    },
    {
        id: 108,
        question: "The traveling salesman problem computes",
        options: [
            "Shortest path from source to destination",
            "Minimum-cost Hamiltonian cycle",
            "Maximum flow in a network",
            "Minimal spanning tree"
        ],
        correctAnswer: 1 // "Minimum-cost Hamiltonian cycle"
    },
    {
        id: 109,
        question: "The shortest route problem determines",
        options: [
            "Minimum cost path",
            "Maximum cost path",
            "Minimum spanning tree",
            "Maximum network flow"
        ],
        correctAnswer: 0 // "Minimum cost path"
    },
    {
        id: 110,
        question: "Select the correct one: The minimal spanning tree connects all nodes",
        options: [
            "With minimum total edge weight",
            "Using all possible edges",
            "Without cycles",
            "With maximum flow"
        ],
        correctAnswer: 0 // "With minimum total edge weight"
    },
    {
        id: 111,
        question: "Select the correct option from below: The maximum flow problem maximizes",
        options: [
            "Shortest distance between nodes",
            "Total flow from source to sink",
            "Total cost in a network",
            "Number of spanning trees"
        ],
        correctAnswer: 1 // "Total flow from source to sink"
    },
    {
        id: 112,
        question: "Identify the correct option from below: The transhipment model allows",
        options: [
            "Intermediate transfer points",
            "Direct transportation only",
            "Minimum spanning tree formation",
            "Network redundancy"
        ],
        correctAnswer: 0 // "Intermediate transfer points"
    },
    {
        id: 113,
        question: "Select the correct option from below: The assignment problem ensures",
        options: [
            "One-to-one task allocation",
            "Maximum flow in a network",
            "Minimal spanning tree",
            "Unrestricted task assignment"
        ],
        correctAnswer: 0 // "One-to-one task allocation"
    },
    {
        id: 114,
        question: "Select the correct option from below: Network redundancy occurs if",
        options: [
            "Extra links exist",
            "Minimum spanning tree is found",
            "The shortest route is determined",
            "Maximum flow is optimized"
        ],
        correctAnswer: 0 // "Extra links exist"
    },
    {
        id: 115,
        question: "Select the correct option from below: Free slack represents",
        options: [
            "Total project slack",
            "Time available before a delay affects successors",
            "Unused resources in a network",
            "Redundant activities"
        ],
        correctAnswer: 1 // "Time available before a delay affects successors"
    },
    {
        id: 116,
        question: "The Hungarian method solves",
        options: [
            "Maximum flow problem",
            "Minimal spanning tree problem",
            "Assignment problem",
            "Shortest route problem"
        ],
        correctAnswer: 2 // "Assignment problem"
    },
    {
        id: 117,
        question: "The Dijkstra algorithm computes",
        options: [
            "Shortest path",
            "Maximum flow",
            "Assignment cost",
            "Network redundancy"
        ],
        correctAnswer: 0 // "Shortest path"
    },
    {
        id: 118,
        question: "Select the correct option from below: The Kruskal algorithm forms",
        options: [
            "Minimal spanning tree",
            "Maximum flow network",
            "Shortest path graph",
            "Transportation matrix"
        ],
        correctAnswer: 0 // "Minimal spanning tree"
    },
    {
        id: 119,
        question: "The Floyd-Warshal algorithm computes",
        options: [
            "Maximum flow",
            "All-pairs shortest path",
            "Network redundancy",
            "Critical path"
        ],
        correctAnswer: 1 // "All-pairs shortest path"
    },
    {
        id: 120,
        question: "The Ford-Fulkerson algorithm computes",
        options: [
            "Maximum flow",
            "Shortest route",
            "Assignment cost",
            "Spanning tree"
        ],
        correctAnswer: 0 // "Maximum flow"
    },
    {
        id: 121,
        question: "Select the correct option from below: The minimal spanning tree problem minimizes",
        options: [
            "Sum of edge weights",
            "Number of edges",
            "Network redundancy",
            "Maximum flow"
        ],
        correctAnswer: 0 // "Sum of edge weights"
    },
    {
        id: 122,
        question: "The traveling salesman problem is classified as",
        options: [
            "NP-hard",
            "Linear programming",
            "Polynomial time solvable",
            "Network flow problem"
        ],
        correctAnswer: 0 // "NP-hard"
    },
    {
        id: 123,
        question: "Select the correct option from below: The difference between free slack and total slack is",
        options: [
            "Free slack includes only predecessors",
            "Total slack considers all paths",
            "Total slack ignores critical paths",
            "Free slack equals total slack"
        ],
        correctAnswer: 1 // "Total slack considers all paths"
    },
    {
        id: 124,
        question: "Select the correct option from below: Crashing reduces",
        options: [
            "Project duration",
            "Maximum flow",
            "Network redundancy",
            "Assignment costs"
        ],
        correctAnswer: 0 // "Project duration"
    },
    {
        id: 125,
        question: "Select the correct option from below: Resource allocation ensures",
        options: [
            "Optimal utilization of resources",
            "Maximum spanning tree",
            "Shortest route",
            "Unbounded transportation"
        ],
        correctAnswer: 0 // "Optimal utilization of resources"
    },
    {
        id: 126,
        question: "Identify the correct option from below: The most efficient spanning tree algorithm for dense graphs is",
        options: [
            "Kruskal's algorithm",
            "Prim's algorithm",
            "Hungarian method",
            "Dijkstra's algorithm"
        ],
        correctAnswer: 1 // "Prim's algorithm"
    },
    {
        id: 127,
        question: "Select the correct option from below: The main limitation of transhipment models is",
        options: [
            "Increased complexity",
            "Unrestricted movement",
            "Fixed path costs",
            "Maximum flow constraints"
        ],
        correctAnswer: 0 // "Increased complexity"
    },
    {
        id: 128,
        question: "Select the correct option from below: The effectiveness of crashing depends on",
        options: [
            "Maximum network flow",
            "Assignment constraints",
            "Activity cost trade-offs",
            "Transportation routes"
        ],
        correctAnswer: 2 // "Activity cost trade-offs"
    },
    {
        id: 129,
        question: "Select the correct option from below: The main advantage of PERT over CPM is",
        options: [
            "Incorporating uncertainty",
            "Finding shortest routes",
            "Identifying network redundancy",
            "Minimizing flow problems"
        ],
        correctAnswer: 0 // "Incorporating uncertainty"
    },
    {
        id: 130,
        question: "Identify the correct option from below: The ideal method for drawing complex networks is",
        options: [
            "Linear programming",
            "Graph theory visualization",
            "Maximum spanning tree",
            "Traveling salesman method"
        ],
        correctAnswer: 1 // "Graph theory visualization"
    },
    {
        id: 131,
        question: "Identify the correct option from below: The principle of optimality in dynamic programming states that",
        options: [
            "An optimal policy has optimal sub-policies",
            "A single-stage decision determines the outcome",
            "A problem must be solved in a single step",
            "Only final decisions matter"
        ],
        correctAnswer: 0 // "An optimal policy has optimal sub-policies"
    },
    {
        id: 132,
        question: "The forward recursion approach solves problems",
        options: [
            "From final to initial stage",
            "From initial to final stage",
            "By simultaneous computation",
            "Using Monte Carlo methods"
        ],
        correctAnswer: 1 // "From initial to final stage"
    },
    {
        id: 133,
        question: "Identify the correct option from below: The capital budgeting problem maximizes",
        options: [
            "Total return on investment",
            "Number of projects",
            "Time taken to allocate capital",
            "Probability of success"
        ],
        correctAnswer: 0 // "Total return on investment"
    },
    {
        id: 134,
        question: "Identify the correct option from below: The cargo-loading problem optimizes",
        options: [
            "Number of cargo items",
            "Length of transport routes",
            "Total weight and value",
            "Total number of containers"
        ],
        correctAnswer: 2 // "Total weight and value"
    },
    {
        id: 135,
        question: "Identify the correct option from below: The reliability problem focuses on",
        options: [
            "Maximizing system reliability",
            "Minimizing maintenance cost",
            "Reducing the number of components",
            "Shortening the supply chain"
        ],
        correctAnswer: 0 // "Maximizing system reliability"
    },
    {
        id: 136,
        question: "Identify the correct option from below: The key difference between forward and backward recursion is",
        options: [
            "Order of computation",
            "Complexity of calculations",
            "Type of functions used",
            "Use of constraints"
        ],
        correctAnswer: 0 // "Order of computation"
    },
    {
        id: 137,
        question: "Select the correct option from below: The general problem in dynamic programming is characterized by",
        options: [
            "Independent decision variables",
            "Unimodal functions",
            "Single-stage optimization",
            "Sequential decision-making"
        ],
        correctAnswer: 3 // "Sequential decision-making"
    },
    {
        id: 138,
        question: "Identify the correct option from below: The capital budgeting problem divides decisions into",
        options: [
            "Randomized choices",
            "Static allocations",
            "Time periods",
            "Single investments"
        ],
        correctAnswer: 2 // "Time periods"
    },
    {
        id: 139,
        question: "Select the correct option from below: The cargo-loading problem is similar to",
        options: [
            "The transportation problem",
            "The knapsack problem",
            "The traveling salesman problem",
            "The assignment problem"
        ],
        correctAnswer: 1 // "The knapsack problem"
    },
    {
        id: 140,
        question: "Identify the correct option from below: The calculus method in dynamic programming involves",
        options: [
            "Matrix inversion",
            "Random sampling",
            "Graph algorithms",
            "Differentiation and optimization"
        ],
        correctAnswer: 3 // "Differentiation and optimization"
    },
    {
        id: 141,
        question: "The forward recursion method determines the optimal decision at",
        options: [
            "The first decision point",
            "Random points in the sequence",
            "Each stage progressively",
            "Only at the final stage"
        ],
        correctAnswer: 2 // "Each stage progressively"
    },
    {
        id: 142,
        question: "The best approach to solve a capital budgeting problem with multiple projects is",
        options: [
            "Dynamic programming",
            "Linear programming",
            "Greedy method",
            "Exhaustive search"
        ],
        correctAnswer: 0 // "Dynamic programming"
    },
    {
        id: 143,
        question: "Choose the correct option from below: The reliability problem models system performance as",
        options: [
            "A function of weight distribution",
            "A function of component reliability",
            "A function of shortest path length",
            "A function of travel distance"
        ],
        correctAnswer: 1 // "A function of component reliability"
    },
    {
        id: 144,
        question: "Identify the correct option from below: The tabular method stores solutions",
        options: [
            "In a recursive formula",
            "In a randomized approach",
            "In a structured table",
            "Using continuous equations"
        ],
        correctAnswer: 2 // "In a structured table"
    },
    {
        id: 145,
        question: "Identify the correct option from below: A dynamic programming approach for cargo-loading involves",
        options: [
            "Maximizing cargo value while respecting constraints",
            "Distributing cargo equally",
            "Allocating space randomly",
            "Finding the shortest delivery route"
        ],
        correctAnswer: 0 // "Maximizing cargo value while respecting constraints"
    },
    {
        id: 146,
        question: "Select the correct option from below: The key advantage of dynamic programming over greedy algorithms is",
        options: [
            "Faster computations",
            "Better handling of random variables",
            "Optimal solutions for subproblems",
            "Simplified main equations"
        ],
        correctAnswer: 2 // "Optimal solutions for subproblems"
    },
    {
        id: 147,
        question: "Identify the correct option from below: The tabular method avoids recomputation by",
        options: [
            "Storing previous results",
            "Using trial and error",
            "Simplifying the main equation",
            "Avoiding recursion"
        ],
        correctAnswer: 0 // "Storing previous results"
    },
    {
        id: 148,
        question: "Select the correct option from below: The primary limitation of the calculus method in dynamic programming is",
        options: [
            "Computational inefficiency",
            "Inability to handle multiple constraints",
            "Applicability only to continuous functions",
            "Use of excessive memory"
        ],
        correctAnswer: 2 // "Applicability only to continuous functions"
    },
    {
        id: 149,
        question: "The backward recursion method computes",
        options: [
            "Multiple optimal paths",
            "Optimal solutions in reverse order",
            "Random decision sequences",
            "Solutions using stochastic modeling"
        ],
        correctAnswer: 1 // "Optimal solutions in reverse order"
    },
    {
        id: 150,
        question: "Identify the correct option from below: The best data structure for storing dynamic programming solutions is",
        options: [
            "Linked lists",
            "Stacks",
            "Graphs",
            "Two-dimensional arrays"
        ],
        correctAnswer: 3 // "Two-dimensional arrays"
    }
];
