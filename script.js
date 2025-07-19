// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const navButtons = document.querySelectorAll(".nav-subject");


navButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class
        navButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentSubject = button.dataset.subject;
        quizQuestions = quizData[currentSubject] || [];
        currentQuestionIndex = 0;
        score = 0;

        scoreSpan.textContent = score;
        totalQuestionsSpan.textContent = quizQuestions.length;
        maxScoreSpan.textContent = quizQuestions.length;

        // ✅ Change the h1 title
        const quizTitle = document.getElementById("quiz-title");
        quizTitle.textContent = `${button.textContent} Quiz`;

        showScreen(startScreen);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    // Find the "Verbal" subject button
    const defaultButton = document.querySelector('.nav-subject[data-subject="verbal"]');
    if (defaultButton) {
        defaultButton.click(); // Simulate a click to set Verbal as default
    }
});


// Subject-based quizzes
const quizData = {
    verbal: [
        {
            question: "What is a synonym for 'happy'?",
            answers: [
                { text: "Sad", correct: false },
                { text: "Joyful", correct: true },
                { text: "Angry", correct: false },
                { text: "Tired", correct: false }
            ]
        },
        {
            question: "Which sentence is grammatically correct?",
            answers: [
                { text: "He don't like pizza.", correct: false },
                { text: "He doesn't likes pizza.", correct: false },
                { text: "He doesn't like pizza.", correct: true },
                { text: "He don't likes pizza.", correct: false }
            ]
        },
        {
            question: "Choose the correct spelling.",
            answers: [
                { text: "Definately", correct: false },
                { text: "Definitely", correct: true },
                { text: "Defanitely", correct: false },
                { text: "Definetely", correct: false }
            ]
        }
    ],
    quantitative: [
        {
            question: "What is 12 × 8?",
            answers: [
                { text: "96", correct: true },
                { text: "84", correct: false },
                { text: "108", correct: false },
                { text: "112", correct: false }
            ]
        },
        {
            question: "What is the square root of 81?",
            answers: [
                { text: "9", correct: true },
                { text: "8", correct: false },
                { text: "7", correct: false },
                { text: "6", correct: false }
            ]
        },
        {
            question: "Solve: 15 + 3 × 2",
            answers: [
                { text: "36", correct: false },
                { text: "21", correct: true },
                { text: "18", correct: false },
                { text: "24", correct: false }
            ]
        }
    ],
    logical: [
        {
            question: "If today is Monday, what day will it be 10 days from now?",
            answers: [
                { text: "Wednesday", correct: false },
                { text: "Thursday", correct: true },
                { text: "Friday", correct: false },
                { text: "Saturday", correct: false }
            ]
        },
        {
            question: "What comes next in the sequence: 2, 4, 8, 16, ...?",
            answers: [
                { text: "20", correct: false },
                { text: "24", correct: false },
                { text: "32", correct: true },
                { text: "30", correct: false }
            ]
        },
        {
            question: "All apples are fruits. All fruits grow on trees. So, all apples grow on trees. Is the conclusion valid?",
            answers: [
                { text: "Yes", correct: true },
                { text: "No", correct: false },
                { text: "Only if red", correct: false },
                { text: "Not enough info", correct: false }
            ]
        }
    ],
    abstract: [
        {
            question: "Which shape completes the pattern: ▲ ● ▲ ● ▲ ?",
            answers: [
                { text: "▲", correct: false },
                { text: "●", correct: true },
                { text: "■", correct: false },
                { text: "◆", correct: false }
            ]
        },
        {
            question: "Which figure is the odd one out?",
            answers: [
                { text: "Circle", correct: false },
                { text: "Square", correct: false },
                { text: "Triangle", correct: false },
                { text: "Clock", correct: true }
            ]
        }
    ],

    biology: [
        {
            question: "What is the powerhouse of the cell?",
            answers: [
                { text: "Nucleus", correct: false },
                { text: "Mitochondria", correct: true },
                { text: "Ribosome", correct: false },
                { text: "Chloroplast", correct: false }
            ]
        },
        {
            question: "Which system controls the body's response to stimuli?",
            answers: [
                { text: "Digestive system", correct: false },
                { text: "Respiratory system", correct: false },
                { text: "Nervous system", correct: true },
                { text: "Circulatory system", correct: false }
            ]
        }
    ],

    chemistry: [
        {
            question: "What is the chemical formula for water?",
            answers: [
                { text: "CO2", correct: false },
                { text: "H2O", correct: true },
                { text: "O2", correct: false },
                { text: "NaCl", correct: false }
            ]
        },
        {
            question: "Which of these is a noble gas?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Helium", correct: true },
                { text: "Hydrogen", correct: false }
            ]
        }
    ],

    physics: [
        {
            question: "What is the unit of force?",
            answers: [
                { text: "Watt", correct: false },
                { text: "Newton", correct: true },
                { text: "Pascal", correct: false },
                { text: "Joule", correct: false }
            ]
        },
        {
            question: "What is the speed of light in vacuum?",
            answers: [
                { text: "3 x 10⁸ m/s", correct: true },
                { text: "1.5 x 10⁸ m/s", correct: false },
                { text: "3 x 10⁶ m/s", correct: false },
                { text: "300 m/s", correct: false }
            ]
        }
    ],

    social: [
        {
            question: "Who was the first president of the Philippines?",
            answers: [
                { text: "Emilio Aguinaldo", correct: true },
                { text: "Manuel Quezon", correct: false },
                { text: "Jose Rizal", correct: false },
                { text: "Andres Bonifacio", correct: false }
            ]
        },
        {
            question: "Which organization was created to maintain international peace after WWII?",
            answers: [
                { text: "ASEAN", correct: false },
                { text: "UN", correct: true },
                { text: "NATO", correct: false },
                { text: "WHO", correct: false }
            ]
        }
    ]

};

// State
let currentSubject = null;
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

// Handle subject button clicks
navButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentSubject = button.dataset.subject;
        quizQuestions = quizData[currentSubject] || [];
        currentQuestionIndex = 0;
        score = 0;

        scoreSpan.textContent = score;
        totalQuestionsSpan.textContent = quizQuestions.length;
        maxScoreSpan.textContent = quizQuestions.length;

        showScreen(startScreen);
    });
});

// Event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    if (!quizQuestions || quizQuestions.length === 0) {
        alert("No quiz available for this subject.");
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;

    showScreen(quizScreen);
    showQuestion();
}

function showQuestion() {
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if (answersDisabled) return;
    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    showScreen(resultScreen);
    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "Perfect! You got all of the questions right.";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Good job! You got most of the questions right.";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Not bad! You got some of the questions right.";
    } else {
        resultMessage.textContent = "Better luck next time!";
    }
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    scoreSpan.textContent = score;
    showScreen(startScreen);
}

function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}
ss