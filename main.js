const cricketQuiz = [
  {
    question: "Who has the most centuries in international cricket?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the first ICC Cricket World Cup?",
    options: ["Australia", "England", "West Indies", "India"],
    correctAnswer: "West Indies"
  },
  {
    question: "Who is the 'Best in Cricket'?",
    options: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Don Bradman"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "What is the highest individual score in ODI cricket?",
    options: ["264", "200", "237", "275"],
    correctAnswer: "264"
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
    correctAnswer: "Muttiah Muralitharan"
  },
  {
    question: "Who is the only cricketer to score 100 centuries in international cricket?",
    options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Jacques Kallis"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "Which country has won the most ICC Cricket World Cups?",
    options: ["India", "Australia", "West Indies", "England"],
    correctAnswer: "Australia"
  },
  {
    question: "Who was the captain of the Indian cricket team during the 1983 World Cup?",
    options: ["Kapil Dev", "Sunil Gavaskar", "Mohinder Amarnath", "Ravi Shastri"],
    correctAnswer: "Kapil Dev"
  },
  {
    question: "Who holds the record for the fastest century in ODI cricket?",
    options: ["AB de Villiers", "Chris Gayle", "Shahid Afridi", "Virat Kohli"],
    correctAnswer: "AB de Villiers"
  },
  {
    question: "Which cricketer has hit the most sixes in international cricket?",
    options: ["Chris Gayle", "Shahid Afridi", "Rohit Sharma", "MS Dhoni"],
    correctAnswer: "Chris Gayle"
  },
  {
    question: "Who was the first batsman to score a double century in ODI cricket?",
    options: ["Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma", "Chris Gayle"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "Which player is known as 'Captain Cool'?",
    options: ["Ricky Ponting", "MS Dhoni", "Virat Kohli", "Kane Williamson"],
    correctAnswer: "MS Dhoni"
  },
  {
    question: "What is the nickname of Glenn McGrath?",
    options: ["Pigeon", "Whispering Death", "Dizzy", "The Wall"],
    correctAnswer: "Pigeon"
  },
  {
    question: "Which cricketer is known as the 'Sultan of Swing'?",
    options: ["Wasim Akram", "James Anderson", "Glenn McGrath", "Zaheer Khan"],
    correctAnswer: "Wasim Akram"
  },
  {
    question: "Who holds the record for the most runs in a single Test match?",
    options: ["Brian Lara", "Virender Sehwag", "Don Bradman", "Alastair Cook"],
    correctAnswer: "Brian Lara"
  },
  {
    question: "Which team won the inaugural T20 World Cup in 2007?",
    options: ["India", "Pakistan", "Australia", "South Africa"],
    correctAnswer: "India"
  },
  {
    question: "Who holds the record for the fastest delivery bowled in cricket?",
    options: ["Brett Lee", "Shoaib Akhtar", "Jeff Thomson", "Shaun Tait"],
    correctAnswer: "Shoaib Akhtar"
  },
  {
    question: "Which cricketer has the highest batting average in Test cricket?",
    options: ["Steve Smith", "Don Bradman", "Jacques Kallis", "Kumar Sangakkara"],
    correctAnswer: "Don Bradman"
  },
  {
    question: "Who hit six sixes in an over in the T20 World Cup 2007?",
    options: ["Chris Gayle", "Yuvraj Singh", "Kieron Pollard", "Shahid Afridi"],
    correctAnswer: "Yuvraj Singh"
  },
  {
    question: "Who was the first bowler to take 10 wickets in a single Test inning?",
    options: ["Jim Laker", "Anil Kumble", "Muttiah Muralitharan", "Shane Warne"],
    correctAnswer: "Jim Laker"
  }
];

const form = document.querySelector('form');
let originalAnswer = {};

function generateRandomQuestion() {
  const randomQuestions = new Set([]);
  while (randomQuestions.size !== 5) {
    const cricketQuizIndex = Math.floor(Math.random() * cricketQuiz.length);
    const selectedQuiz = cricketQuiz[cricketQuizIndex];
    randomQuestions.add(selectedQuiz);
  }
  
  return [...randomQuestions];
}

const displayQuiz = generateRandomQuestion();

displayQuiz.forEach((val, i) => {
  const quizElement = document.createElement('div');
  quizElement.className = "quiz"
  const paraElement = document.createElement('p');
  paraElement.innerHTML = `${i+1}: ${val.question}`;
  quizElement.appendChild(paraElement);
  
  originalAnswer[`q${i+1}`] = val.correctAnswer;
  
  val.options.forEach((data,index) => {
    const optionElement = document.createElement('div');
    optionElement.className = "option";
    const inputElement = document.createElement('input');
    inputElement.type = "radio";
    inputElement.setAttribute("required", "true");
    inputElement.name = `q${i+1}`;
    inputElement.id = `q${i+1}_option${index+1}`;
    inputElement.value = data;
    optionElement.appendChild(inputElement);
    
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', inputElement.id)
    labelElement.innerHTML = data;
    optionElement.appendChild(labelElement);
    
    quizElement.appendChild(optionElement);
  })
  
  form.appendChild(quizElement);
});

const buttonElement = document.createElement('button');
form.append(buttonElement);
buttonElement.innerHTML = "Submit";
buttonElement.type = "submit";

const resultElement = document.createElement('div');
resultElement.class = "result";
resultElement.id = "result"
form.insertAdjacentElement("beforeend", resultElement);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  let result = 0;
  
  for (let [key, value] of data.entries()) {
    if (value === originalAnswer[key]) {
      result++;
    }
  }
  
  console.log(originalAnswer)
  resultElement.innerHTML = `You scored ${result} out of 5`;

});

const quizElement = document.querySelector('.quiz_head');
quizElement.addEventListener("click", (event) => {
  if (event.target.className === "reset_button") {
    form.reset();
  }
  if (event.target.className === "new_button") {
    location.reload();
  }
})
