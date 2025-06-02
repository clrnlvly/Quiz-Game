//DOM Elements
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

const quizQuestions = [

    {
        question: "What is the capital of france?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ],
    },

    {
        question: "What is the capital of germany?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: false },
            { text: "Berlin", correct: true },
            { text: "Rome", correct: false }
        ],
    },

    {
        question: "What is the capital of italy?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: false },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: true }
        ],
    },

    {
        question: "What is the capital of spain?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: true }
        ],
    },

    {
        question: "What is the capital of portugal?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: false },
            { text: "Berlin", correct: false },
            { text: "Lisbon", correct: true }
        ],
    },
];

// QUIZ STATE VARIABLES
 let currentQuestionIndex = 0;
 let score = 0;
 let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    //reset vars
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion () {
    //reset state
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    // todo: explain this in a second
    answersContainer.innerHTML = "";
}


function restartQuiz() {
    console.log("quiz restarted");
}

