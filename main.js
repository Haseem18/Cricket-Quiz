const cricketQuiz = [
  {
    question: "Who won the ICC Cricket World Cup 2019?",
    options: ["India", "Australia", "England", "New Zealand"],
    correctAnswer: "England"
  },
  {
    question: "Who is known as the 'Master Blaster' of cricket?",
    options: ["Ricky Ponting", "Sachin Tendulkar", "Brian Lara", "Virat Kohli"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "Which bowler has the most wickets in Test cricket?",
    options: ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Anil Kumble"],
    correctAnswer: "Muttiah Muralitharan"
  },
  {
    question: "How many players are on a cricket team?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "11"
  },
  {
    question: "Which country hosted the first-ever Cricket World Cup in 1975?",
    options: ["India", "Australia", "England", "West Indies"],
    correctAnswer: "England"
  },
  {
    question: "Who scored the first-ever double century in ODI cricket?",
    options: ["Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma", "Chris Gayle"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "Which Indian bowler is nicknamed 'The Turbanator'?",
    options: ["Ravindra Jadeja", "Ravichandran Ashwin", "Harbhajan Singh", "Zaheer Khan"],
    correctAnswer: "Harbhajan Singh"
  },
  {
    question: "Who is the only player to score 100 international centuries?",
    options: ["Jacques Kallis", "Virat Kohli", "Sachin Tendulkar", "Steve Smith"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the first ICC T20 World Cup in 2007?",
    options: ["India", "Pakistan", "Australia", "South Africa"],
    correctAnswer: "India"
  },
  {
    question: "What does LBW stand for in cricket?",
    options: ["Leg Before Wicket", "Long Ball Wide", "Leg By Wicket", "Left Bowled Wide"],
    correctAnswer: "Leg Before Wicket"
  },
  {
    question: "Who is the highest run-scorer in ODI cricket history?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Kumar Sangakkara", "Ricky Ponting"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "Which cricketer is famous for the 'Helicopter Shot'?",
    options: ["MS Dhoni", "Virat Kohli", "Chris Gayle", "AB de Villiers"],
    correctAnswer: "MS Dhoni"
  },
  {
    question: "What is the maximum number of overs allowed per bowler in an ODI match?",
    options: ["8", "10", "12", "15"],
    correctAnswer: "10"
  },
  {
    question: "Which team has won the most ICC Cricket World Cups?",
    options: ["India", "Australia", "West Indies", "England"],
    correctAnswer: "Australia"
  },
  {
    question: "Who hit six sixes in an over during a T20 International match?",
    options: ["Chris Gayle", "Rohit Sharma", "Yuvraj Singh", "David Warner"],
    correctAnswer: "Yuvraj Singh"
  },
  {
    question: "In which format of cricket is the term 'Powerplay' used?",
    options: ["Test", "ODI", "T20", "Both ODI and T20"],
    correctAnswer: "Both ODI and T20"
  },
  {
    question: "Which player has the highest individual score in an ODI match?",
    options: ["Sachin Tendulkar", "Rohit Sharma", "Martin Guptill", "Chris Gayle"],
    correctAnswer: "Rohit Sharma"
  },
  {
    question: "Who was the first Indian to take a hat-trick in Test cricket?",
    options: ["Anil Kumble", "Harbhajan Singh", "Kapil Dev", "Javagal Srinath"],
    correctAnswer: "Harbhajan Singh"
  },
  {
    question: "What is the term for a ball delivered with no foot behind the crease?",
    options: ["Wide ball", "No ball", "Dead ball", "Spin ball"],
    correctAnswer: "No ball"
  },
  {
    question: "Which cricket ground is known as the 'Mecca of Cricket'?",
    options: ["Eden Gardens", "Melbourne Cricket Ground", "Lord's", "Sydney Cricket Ground"],
    correctAnswer: "Lord's"
  }
];

const formElement = document.querySelector('form');
const quizzesElement = document.querySelector('.quizzes');
const quizAnswersElement = document.querySelector('.quiz_answers');
const data = new Set([]);
function randomQuiz() {
  
  while (data.size !== 5) {
    const index = Math.floor(Math.random() * cricketQuiz.length);
    const selectedQuiz = cricketQuiz[index];
    data.add(selectedQuiz);
  }
  
  return [...data];
}

const displayQuiz = randomQuiz();
const obj = {};

displayQuiz.forEach((val, index) => {
  const quizElement = document.createElement('div');
  quizElement.className = "quiz";
  const quizParaElement = document.createElement('p');
  quizParaElement.innerHTML = `${index + 1}. ${val.question}`;
  quizElement.appendChild(quizParaElement);
  const quizAnswerElement = document.createElement('div');
  quizAnswerElement.className = `quiz_answer quiz_answer${index}`;
  const quizAnswerParaElement = document.createElement('p');
  quizAnswerParaElement.className = "question";
  quizAnswerParaElement.innerHTML = `${index + 1}. ${val.question}`;
  const myAnswerElement = document.createElement('p');
  myAnswerElement.className = `my_answer my_answerq${index + 1}`;
  myAnswerElement.innerHTML = `Your Answer: `;
  const correctAnswerElement = document.createElement('p');
  correctAnswerElement.className = "correct_answer";
  correctAnswerElement.innerHTML = `Correct Answer: ${val.correctAnswer}`;
  obj[`q${index + 1}`] = val.correctAnswer;
  
  quizAnswerElement.appendChild(quizAnswerParaElement);
  quizAnswerElement.appendChild(myAnswerElement);
  quizAnswerElement.appendChild(correctAnswerElement);
  quizAnswersElement.appendChild(quizAnswerElement);
  
  val.options.forEach((opt, i) => {
    const quizOptionElement = document.createElement('div');
    quizOptionElement.className = "quiz_option";
    const quizInputElement = document.createElement('input');
    quizInputElement.type = "radio";
    quizInputElement.name = `q${index + 1}`
    quizInputElement.id = `q${index + 1}_opton${i + 1}`;
    quizInputElement.setAttribute("value", opt);
    
    const quizLabelElement = document.createElement('label');
    quizLabelElement.setAttribute("for", quizInputElement.id);
    quizLabelElement.innerHTML = opt;
    
    quizOptionElement.appendChild(quizInputElement);
    quizOptionElement.appendChild(quizLabelElement);
    quizElement.appendChild(quizOptionElement);
    quizzesElement.appendChild(quizElement);
  });
});

const quizHeadBtnElement = document.querySelector('.quiz_head_btn');
quizHeadBtnElement.addEventListener("click", (event) => {
  if (event.target.className === "reset") {
    formElement.reset();
  }
  if (event.target.className === "new_quiz") {
    location.reload();
  }
});

const userAnswers = document.querySelector('.my_answer');
const quizResultElement = document.querySelector('.quiz_result');
const quizQuestionsElement = document.querySelector('.quiz_questions');
const replayElement = document.querySelector('.replay');

replayElement.addEventListener("click", () => {
  quizResultElement.classList.add("hidden");
  quizQuestionsElement.classList.remove("hidden");
  formElement.reset();
  location.reload();
});

let score = 0;
let answerIndex = 1;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  quizResultElement.classList.remove("hidden");
  quizQuestionsElement.classList.add("hidden");
  
  const quizData = new FormData(formElement);
  score = 0;
  answerIndex = 1;
  
  for (let [key, value] of quizData.entries()) {
    if (value === obj[key]) {
      score++;
    }
    const myAnswerElement = document.querySelector(`.my_answer${key}`);
    myAnswerElement.innerHTML = `Your Answer: ${value}`;
  }
  
  const quizScoreElement = document.querySelector('.quiz_score');
  quizScoreElement.innerHTML = `You scored ${score} out of ${data.size}`;
});
