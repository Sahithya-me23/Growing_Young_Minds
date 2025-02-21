const quizData = [
  {
    question: 'which planet is known as the Red planet?',
    options: ['Earth', 'Mars', 'Venus', 'Mercury'],
    answer: 'Mars'
  },
  {
    question: '----- is the famous scientist who discovered gravity?',
    options: ['Sir Issac Newton', 'Albert Einstein', 'Michael Faraday', 'None'],
    answer: 'Sir Issac Newton'
  },
  {
    question: '----- is considered as the father of the Indian Space Program',
    options: ['CV Raman', 'Homi J Bhabha', 'Abdul Kalam', 'Vikram Sarabhai'],
    answer: 'Vikram Sarabhai'
  },
  {
    question: 'wright brothers invented?',
    options: ['Gun', 'Battle Tank', 'Ships', 'Airplane'],
    answer: 'Airplane'
  },
  {
    question: '---- is the most common element in our universe?',
    options: ['Helium', 'Oxygen', 'Hydrogen', 'Nitrogen'],
    answer: 'Hydrogen'
  },
  {
    question: 'longest bone in the human body?',
    options: ['femur', 'stirrup', 'tibia', 'fibula'],
    answer: 'femur'
  },
  {
    question: 'william cullen made the first',
    options: ['Air conditioner', 'Refrigerator', 'Solar water heater', 'None'],
    answer: 'Refrigerator'
  },
  {
    question: 'Sound can not travel through a vacuum? ',
    options: ['True', 'False'],
    answer: 'True'
  },
  {
    question: 'Prime number after 7?',
    options: ['9', '13', '17', '10'],
    answer: '9'
  },
  // Add more quiz questions in a similar format
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionsElement.innerHTML = '';
  
  currentQuizData.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-btn');
    button.addEventListener('click', checkAnswer);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const currentQuizData = quizData[currentQuestion];

  if (selectedOption === currentQuizData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = 'none';
  optionsElement.style.display = 'none';
  submitButton.style.display = 'none';
  resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
}

submitButton.addEventListener('click', loadQuestion);

