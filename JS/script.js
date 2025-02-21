const quizData = [
  {
    question: 'How many vertices are present in cube?',
    options: ['5', '4', '3', '8'],
    answer: '8'
  },
  {
    question: '32+52+6?',
    options: ['90', '93', '97', '42'],
    answer: '90'
  },
  {
    question: '19X3',
    options: ['20', '39', '57', '42'],
    answer: '57'
  },
  {
    question: '32/8?',
    options: ['10', '3', '9', '4'],
    answer: '4'
  },
  {
    question: 'which digit in the number 4602 is in the tens place?',
    options: ['0', '4', '6', '2'],
    answer: '0'
  },
  {
    question: 'which digit in the number 245 in the hundreds place?',
    options: ['2', '3', '4', '5'],
    answer: '2'
  },
  {
    question: 'Number of sides in square',
    options: ['0', '3', '4', '2'],
    answer: '4'
  },
  {
    question: 'Number of sides in rectangle',
    options: ['4', '3', '7', '2'],
    answer: '4'
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

