const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const answersContainer = document.getElementById('answers-container');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const nextButton = document.querySelector('button');

let currentQuestionIndex = 0;
let score = 0;

// Replace this array with your own set of questions
const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'London', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars'
    },
    // Add more questions as needed
];

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[selectedIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;

    displayAnswers();
}

function displayAnswers() {
    answersContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.innerHTML = `<strong>Q${index + 1}:</strong> ${question.question}<br>
                              <strong>Answer:</strong> ${question.correctAnswer}`;
        answersContainer.appendChild(answerDiv);
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    displayQuestion();
}

// Initial display
displayQuestion();
