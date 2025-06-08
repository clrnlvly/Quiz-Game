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
    score = 0;
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

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        
        //storing custom data on the button
        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answersContainer.appendChild(button);
    })

}


function selectAnswer(event) {
    //optimization check
    if (answersDisabled) return

    answersDisabled = true

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // Array.from is used to convert the Nodelist returned by answerContainer.children into an array, this is because the Nodelist is not an array and we need to use the forEach method
    Array.from(answersContainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }   
    });

    if(isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        
        //check if there are more questions or if quiz is over
        if(currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}


function showResult() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;
   
    const percentage = (score / quizQuestions.length) * 100;
    
    if(percentage === 100) {
        resultMessage.textContent = "Perfect! You got all of the questions right.";
    }
    else if (percentage >= 80) {
        resultMessage.textContent = "Good job! You got most of the questions right.";
    }
    else if (percentage >= 60) {
        resultMessage.textContent = "Not bad! You got some of the questions right.";
    }
    else {
        resultMessage.textContent = "Better luck next time!";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active");
    
    startQuiz();
}