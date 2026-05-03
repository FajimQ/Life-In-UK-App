const questions = [
{
question: "When did the Romans invade Britain?",
options: ["43 AD", "55 BC", "1066 AD", "871 AD"],
answer: "43 AD",
explanation: "The Romans invaded Britain in 43 AD under Emperor Claudius, establishing Roman rule that lasted nearly 400 years.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "In what year did the Battle of Hastings take place?",
options: ["1066", "1215", "1485", "1649"],
answer: "1066",
explanation: "The Battle of Hastings in 1066 saw William the Conqueror defeat Harold II, beginning Norman rule in England.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "When was the Magna Carta signed?",
options: ["1215", "1066", "1348", "1415"],
answer: "1215",
explanation: "King John signed the Magna Carta in 1215, limiting royal power and laying foundations for parliamentary democracy.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "When did the Black Death reach Britain?",
options: ["1348", "1215", "1430", "1500"],
answer: "1348",
explanation: "The Black Death arrived in Britain in 1348, killing nearly one-third of the population and transforming society.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "When did the Wars of the Roses end?",
options: ["1485", "1455", "1499", "1509"],
answer: "1485",
explanation: "The Wars of the Roses ended in 1485 with Henry Tudor’s victory at the Battle of Bosworth Field, beginning the Tudor dynasty.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "When did Henry VIII become king?",
options: ["1509", "1485", "1547", "1603"],
answer: "1509",
explanation: "Henry VIII became king in 1509 and is known for establishing the Church of England.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "When did the English Civil War begin?",
options: ["1642", "1688", "1603", "1660"],
answer: "1642",
explanation: "The English Civil War began in 1642 between the supporters of King Charles I and Parliament.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "When was King Charles I executed?",
options: ["1649", "1642", "1660", "1688"],
answer: "1649",
explanation: "King Charles I was executed in 1649 after being defeated by Parliamentarian forces led by Oliver Cromwell.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "When did the Great Fire of London occur?",
options: ["1666", "1660", "1642", "1688"],
answer: "1666",
explanation: "The Great Fire of London destroyed much of the city in 1666, leading to major rebuilding efforts.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "When did the Glorious Revolution take place?",
options: ["1688", "1707", "1649", "1776"],
answer: "1688",
explanation: "The Glorious Revolution of 1688 saw William and Mary take the throne, establishing parliamentary supremacy.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "When were England and Scotland united to form Great Britain?",
options: ["1707", "1603", "1801", "1688"],
answer: "1707",
explanation: "The Acts of Union in 1707 united England and Scotland under one Parliament, forming Great Britain.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "When was the United Kingdom of Great Britain and Ireland formed?",
options: ["1801", "1707", "1916", "1922"],
answer: "1801",
explanation: "In 1801, Ireland joined Great Britain to form the United Kingdom of Great Britain and Ireland.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "When did the Industrial Revolution begin in Britain?",
options: ["Late 18th century", "17th century", "19th century", "16th century"],
answer: "Late 18th century",
explanation: "The Industrial Revolution began in Britain in the late 18th century, revolutionising industry, transport, and society.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "When did the Battle of Trafalgar take place?",
options: ["1805", "1815", "1799", "1820"],
answer: "1805",
explanation: "The Battle of Trafalgar in 1805 saw Admiral Nelson defeat the French and Spanish fleets, securing British naval dominance.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "When did Queen Victoria begin her reign?",
options: ["1837", "1851", "1820", "1901"],
answer: "1837",
explanation: "Queen Victoria began her reign in 1837, a period marked by industrial progress and the expansion of the British Empire.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "When was slavery abolished throughout the British Empire?",
options: ["1833", "1807", "1848", "1865"],
answer: "1833",
explanation: "The Slavery Abolition Act 1833 ended slavery throughout most of the British Empire.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "When did World War I begin?",
options: ["1914", "1918", "1939", "1945"],
answer: "1914",
explanation: "World War I began in 1914 and lasted until 1918, involving Britain and many other nations worldwide.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "When did women over 30 gain the right to vote?",
options: ["1918", "1928", "1939", "1945"],
answer: "1918",
explanation: "In 1918, British women over 30 gained the right to vote; full equality with men followed in 1928.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "When did World War II begin?",
options: ["1939", "1945", "1940", "1936"],
answer: "1939",
explanation: "World War II began in 1939 when Germany invaded Poland, prompting Britain and France to declare war.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "When was the National Health Service (NHS) established?",
options: ["1948", "1945", "1951", "1960"],
answer: "1948",
explanation: "The NHS was founded in 1948, providing free healthcare for all UK residents.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "When did the UK join the European Economic Community (EEC)?",
options: ["1973", "1979", "1960", "1992"],
answer: "1973",
explanation: "The UK joined the EEC (later the European Union) in 1973, marking closer economic cooperation with Europe.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "When did the UK vote to leave the European Union?",
options: ["2016", "2019", "2020", "2018"],
answer: "2016",
explanation: "In the 2016 referendum, 52% of voters chose to leave the European Union — an event known as 'Brexit'.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "When did the UK officially leave the EU?",
options: ["31 January 2020", "23 June 2016", "1 January 2021", "29 March 2019"],
answer: "31 January 2020",
explanation: "The UK formally left the European Union on 31 January 2020, marking the end of its membership after 47 years.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "When was Queen Elizabeth II crowned?",
options: ["1953", "1952", "1960", "1947"],
answer: "1953",
explanation: "Queen Elizabeth II was crowned on 2 June 1953, following the death of her father, King George VI.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "When did King Charles III become monarch?",
options: ["2022", "2023", "2021", "2020"],
answer: "2022",
explanation: "King Charles III became monarch in September 2022, following the passing of Queen Elizabeth II.",
userAnswer: null,
flagged: false,
no: 25
}
];



let paginationStartIndex = 0;
const paginationPageSize = 8;

let currentQuestionIndex = 0; 
let score = localStorage.getItem("score") || 0;
score = parseInt(score)

let questionsCorrect = JSON.parse(localStorage.getItem("questionsCorrect")) || [];
let questionsIncorrect = JSON.parse(localStorage.getItem("questionsIncorrect")) || [];
let questionsFlagged = JSON.parse(localStorage.getItem("questionsFlagged")) || [];
let questionsFlaggedTab20 = JSON.parse(localStorage.getItem("questionsFlaggedTab20")) || [];

function shuffleArr(arr){
  let newArr = [...arr];

  for(let i = newArr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  };

  return newArr;
};

const shuffledArray = shuffleArr(questions);

function renderProgressBar(){
  const progressBar = document.querySelector(".progress-bar");
  const fill = progressBar.querySelector(".fill");

  const answeredCount = shuffledArray.filter(q => q.userAnswer).length;
  const percentage = (answeredCount/ shuffledArray.length)*100;

  fill.style.width = percentage + "%";
};


function renderPagination(){
  const pagination = document.querySelector(".numbers");
  pagination.innerHTML = "";

  const totalQuestions = shuffledArray.length;
  const endIndex = Math.min(paginationStartIndex + paginationPageSize, totalQuestions);


  if(paginationStartIndex > 0){
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "<";
    prevBtn.classList.add("previous-button");
    prevBtn.addEventListener("click",()=>{
      paginationStartIndex = Math.max(0, paginationStartIndex - paginationPageSize);
      renderPagination();
      renderQuiz();
    });
    pagination.appendChild(prevBtn);
  };


  shuffledArray.slice(paginationStartIndex, endIndex).forEach((_, index) => {
      const actualIndex = paginationStartIndex + index;
    const btn = document.createElement("button");
    btn.classList.add("button");
    btn.textContent = paginationStartIndex + index + 1;

    if(paginationStartIndex + index === currentQuestionIndex){
      btn.classList.add("active");
    };

    const userAnswer = shuffledArray[actualIndex].userAnswer;

    if(userAnswer){
      if(userAnswer === shuffledArray[actualIndex].answer){
        btn.classList.add("button-correct");
      } else{
        btn.classList.add("button-incorrect");
      };
    };

    btn.addEventListener("click", () => {
      currentQuestionIndex = paginationStartIndex + index;
      renderQuiz();
      updatePagination();
    });
    

    pagination.appendChild(btn);
  });

  if(paginationStartIndex + paginationPageSize < totalQuestions){
    const nextBtn = document.createElement("button");
    nextBtn.textContent = ">";
    nextBtn.classList.add("next-button");
    nextBtn.addEventListener("click",() => {
      paginationStartIndex = Math.min(totalQuestions - paginationPageSize, paginationStartIndex + paginationPageSize);
      renderQuiz();
      renderPagination();
    });
    pagination.appendChild(nextBtn);
  };
};

  const timeContainer = document.querySelector(".timer");


function renderTimer(){

  let minNo = 50;
  let secNo = 0;

  function updateDisplay(){
    timeContainer.innerHTML = `
  <p>${minNo.toString().padStart(2, "0")}:${secNo.toString().padStart(2 , "0")}</p>
  `;
  };
  updateDisplay();

  const interval = setInterval(() => {
    if(secNo === 0){
      if(minNo === 0){
        clearInterval(interval);
        window.location.href = "results.html";
      }
      minNo--;
      secNo = 59;
    }else{
      secNo--;
    };
  updateDisplay();
  }, 1000);

 
};

function updatePagination(){
  const buttons = document.querySelectorAll(".numbers .button:not(.next-page)");
  buttons.forEach((btn, index) => {
    if (paginationStartIndex + index === currentQuestionIndex){
      btn.classList.add("active");
    } else{
      btn.classList.remove("active");
    };
  });
};

function renderQuiz(){
  const container = document.querySelector(".questions");
  const currentQuestion = shuffledArray[currentQuestionIndex];

  container.innerHTML = `
    <h2> Questions ${currentQuestionIndex + 1} of ${shuffledArray.length}.
    <h1>${currentQuestion.question}</h1>
      <div class="answers">
         ${currentQuestion.options.map(option => `<div class="ans">${option}</div>`).join('')}
      </div>
      <div class="errornoti">
        <div class="content">
        <h3>Incorrect</h3>
        <p>${currentQuestion.explanation}</p>
        </div>
      </div>
      <div class="buttons">
        <button class="previous"> Previous </button>
        <button class="flag"> Flag </button>
        <button class="next">Next</button>
      </div>
  `;



  const errorBox = document.querySelector(".errornoti");
  const nextButton = document.querySelector(".next");
  const flagButton = document.querySelector(".flag");
  const previousButton = document.querySelector(".previous");
  const opt = document.querySelectorAll(".ans");
  const flaggedNot = document.querySelector(".flagged");
  const flaggedNotBtn = flaggedNot.querySelector("button");
  const noticeQ = document.querySelector(".notice");
  const noticeQBtn = noticeQ.querySelector("button");
  let answered = false;




  const savedAnswer = currentQuestion.userAnswer;

    function checkForFlagged(){
  const flaggedQuestions = shuffledArray.filter(q => q.flagged);
  const unansweredQuestions = shuffledArray.filter(q => !q.flagged && !q.userAnswer);

  if(flaggedQuestions.length > 0){
    flaggedNot.style.display = "block";
  } else if(unansweredQuestions.length > 0){
    noticeQ.style.display = "block";
  }  else{
    window.location.href = "results.html";
  };
};

flaggedNotBtn.addEventListener("click", () => {
  flaggedNot.style.display = "none";
});

  if(savedAnswer){
    answered = true;

    opt.forEach(optEl => {
      const text = optEl.textContent.trim();

      if(text === savedAnswer){
          if(text === currentQuestion.answer){
          optEl.classList.add("correct");
        } else {
          optEl.classList.add("incorrect");
          errorBox.style.display = "block";
        }
      };
      

      if (savedAnswer !== currentQuestion.answer && text === currentQuestion.answer) {
      optEl.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
};

  opt.forEach(option => {
    option.addEventListener("click", () => {
      if (answered)return;

      answered = true;

      const selectedAnswer = option.textContent.trim();
      shuffledArray[currentQuestionIndex].userAnswer = selectedAnswer;
      renderProgressBar();

      if(selectedAnswer === currentQuestion.answer){
        option.classList.add("correct");
        score++;
        localStorage.setItem("score", score);
        questionsCorrect.push(currentQuestion);
        localStorage.setItem("questionsCorrect", JSON.stringify(questionsCorrect));
      } else {
        option.classList.add("incorrect");
        questionsIncorrect.push(currentQuestion);
        localStorage.setItem("questionsIncorrect", JSON.stringify(questionsIncorrect));
        errorBox.style.display = "block";
      };

      opt.forEach(optEl => {
        if(optEl.textContent.trim() === currentQuestion.answer){
          optEl.classList.add("correct");
          nextButton.style.display = "block";
        };
      });
    });
  });



  nextButton.addEventListener("click", () => {
    if(currentQuestionIndex === shuffledArray.length-1){
      checkForFlagged();
      return
    }

    currentQuestionIndex++;
    if(currentQuestionIndex < shuffledArray.length){
      if(currentQuestionIndex >= paginationStartIndex + paginationPageSize){
        paginationStartIndex = Math.min(
          shuffledArray.length - paginationPageSize,
          paginationStartIndex + paginationPageSize
        );
      };
      renderQuiz();
      renderPagination(); 
    } 
  });

  noticeQBtn.addEventListener("click", (b) => {
    noticeQ.style.display = "none";
  });

  flagButton.addEventListener("click", () => {
    shuffledArray[currentQuestionIndex].flagged = true;

    const currentQuestion = shuffledArray[currentQuestionIndex];
    const alreadyFlagged = questionsFlaggedTab20.some(q => q.question === currentQuestion.question);

    currentQuestionIndex++;

    if(currentQuestionIndex < shuffledArray.length){
      if(currentQuestionIndex >= paginationStartIndex + paginationPageSize){
        paginationStartIndex += paginationPageSize;
      };
      renderQuiz();
      renderPagination();
    } else{
      checkForFlagged();
    };

    if(!alreadyFlagged){
    const flaggedQuestion = {...currentQuestion, no:currentQuestion.no};
      
    questionsFlagged.push(flaggedQuestion);
    questionsFlaggedTab20.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab20", JSON.stringify(questionsFlaggedTab20));
    };

    
  });

    if(currentQuestionIndex === 0){
    previousButton.style.visibility = "hidden";
  } else{
    previousButton.style.visibility = "visible";
  };

  if(currentQuestion !== 0){
    previousButton.addEventListener("click", () => {
    currentQuestionIndex--;

    if(currentQuestionIndex > 0){
      if(currentQuestionIndex < paginationStartIndex){
        paginationStartIndex = Math.max(0, paginationStartIndex - paginationPageSize);
      };

      renderQuiz();
      renderPagination();
    } ;
  });
  }
};




renderQuiz();
renderPagination();
renderProgressBar();
renderTimer();
