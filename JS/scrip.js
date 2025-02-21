const quizData = [
  {
    question: 'which animal is known as the Ship of the Desert?',
    options: ['Cow', 'Ant', 'Camel', 'Monkey'],
    answer: 'Camel'
  },
  {
    question: 'How many days are there in a week?',
    options: ['5', '4', '6', '7'],
    answer: '7'
  },
  {
    question: 'How many consonants are there in the English Alphabet?',
    options: ['16', '18', '20', '21'],
    answer: '21'
  },
  {
    question: 'wright brothers invented?',
    options: ['Gun', 'Battle Tank', 'Ships', 'Airplane'],
    answer: 'Airplane'
  },
  {
    question: 'National bird of India?',
    options: ['Dove', 'crow', 'peacock', 'sparrow'],
    answer: 'sparrow'
  },
  {
    question: 'what is the capital of India?',
    options: ['Karnataka', 'Delhi', 'Kerala', 'Andhra Pradesh'],
    answer: 'femur'
  },
  {
    question: 'william cullen made the first',
    options: ['Air conditioner', 'Refrigerator', 'Solar water heater', 'None'],
    answer: 'Refrigerator'
  },
  {
    question: 'Is Jupiter largest planet in our solar system ? ',
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

