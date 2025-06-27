const questions = [
  {
    question: "What is the largest country in the world by land area?",
    answers: [
        { text: "India", correct: false},
        { text: "Russia", correct: true},
        { text: "China", correct: false},
        { text: "Canada", correct: false},
    ]
  },
  {
    question: "What ocean is the largest?",
    answers: [
        { text: "Atlantic Ocean", correct: false},
        { text: "Indian Ocean", correct: false},
        { text: "Pacific Ocean", correct: true},
        { text: "Mediterrean Ocean", correct: false},
    ]
  },
  {
  question: "Which country is famous for the Eiffel Tower?",
    answers: [
        { text: "Italy", correct: false},
        { text: "France", correct: true},
        { text: "Spain", correct:false},
        { text: "England", correct: false},
    ]
  },
  {
  question: "What is the capital of Japan?",
    answers: [
        { text: "Kyoto", correct: false},
        { text: "Osaka", correct: false},
        { text: "Tokyo", correct:true},
        { text: "Nagoya", correct: false},
    ]
  },
  {
  question: "Which country is shaped like a boot?",
    answers: [
        { text: "Greece", correct: false},
        { text: "Italy", correct: true},
        { text: "Mexico", correct:false},
        { text: "Brail", correct: false},
    ]
  },
  {
  question: "Which country is known for the Great Wall?",
    answers: [
        { text: "Japan", correct: false},
        { text: "Singapore", correct: false},
        { text: "Phillipines", correct:false},
        { text: "China", correct: true},
    ]
  },
  {
  question: "Which continent is the Sahara Desert located on?",
    answers: [
        { text: "Europe", correct: false},
        { text: "Asia", correct: false},
        { text: "Africa", correct:true},
        { text: "South America", correct: false},
    ]
  },
  {
  question: "In which country would you find the cities of Sydney and Melbourne?",
    answers: [
        { text: "Australia", correct: true},
        { text: "Mexico", correct: false},
        { text: "Singapore", correct:false},
        { text: "Russia", correct: false},
    ]
  },
  {
  question: "Mount Everest lies on the border of Nepal and which other country?",
    answers: [
        { text: "Russia", correct: false},
        { text: "Kazahkstan", correct: false},
        { text: "Pakistan", correct:false},
        { text: "China", correct: true},
    ]
  },
  {
  question: "What is the smallest country in the world?",
    answers: [
        { text: "Switzerland", correct: false},
        { text: "Tuvalu", correct: false},
        { text: "Vatican City", correct:true},
        { text: "Monaco", correct: false},
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion (){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentlQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disable = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  }

function handleNextButton{
  currentQuestionIndex++; 
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}


nextButton.addEventListener("click", ()=> {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
      startQuiz();
  }
})

startQuiz(); 
