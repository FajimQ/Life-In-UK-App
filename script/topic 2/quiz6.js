const questions = [
{
  question: "How many nations make up the United Kingdom?",
  options: ["Four", "Three", "Two", "Five"],
  answer: "Four",
  explanation: "The United Kingdom (UK) is made up of four nations: England, Scotland, Wales, and Northern Ireland.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "What are the four nations of the United Kingdom?",
  options: [
    "England, Scotland, Wales, and Northern Ireland",
    "England, Scotland, Ireland, and Wales",
    "England, Scotland, Wales, and the Republic of Ireland",
    "England, Scotland, and Ireland"
  ],
  answer: "England, Scotland, Wales, and Northern Ireland",
  explanation: "The four nations forming the UK are England, Scotland, Wales, and Northern Ireland.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "What is the full official name of the UK?",
  options: [
    "The United Kingdom of Great Britain and Northern Ireland",
    "The British Empire",
    "Great Britain and Ireland",
    "The Kingdom of Britain"
  ],
  answer: "The United Kingdom of Great Britain and Northern Ireland",
  explanation: "The UK's full name reflects its composition of Great Britain and Northern Ireland.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "Which nations make up Great Britain?",
  options: [
    "England, Scotland, and Wales",
    "England and Northern Ireland",
    "Scotland and Wales only",
    "England, Wales, and Ireland"
  ],
  answer: "England, Scotland, and Wales",
  explanation: "Great Britain refers to the island that includes England, Scotland, and Wales.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "Which part of the UK is located on the island of Ireland?",
  options: ["Northern Ireland", "Scotland", "Wales", "England"],
  answer: "Northern Ireland",
  explanation: "Northern Ireland is on the island of Ireland, sharing a border with the Republic of Ireland.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "What is the capital city of England?",
  options: ["London", "Edinburgh", "Cardiff", "Belfast"],
  answer: "London",
  explanation: "London is the capital of England and also the capital of the United Kingdom.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "What is the capital city of Scotland?",
  options: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"],
  answer: "Edinburgh",
  explanation: "Edinburgh is the capital city of Scotland, known for its historic castle and annual festivals.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "What is the capital city of Wales?",
  options: ["Cardiff", "Swansea", "Newport", "Bangor"],
  answer: "Cardiff",
  explanation: "Cardiff is the capital and largest city of Wales.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "What is the capital city of Northern Ireland?",
  options: ["Belfast", "Derry/Londonderry", "Lisburn", "Newry"],
  answer: "Belfast",
  explanation: "Belfast is the capital and largest city of Northern Ireland.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "What is the largest country within the UK by population?",
  options: ["England", "Scotland", "Wales", "Northern Ireland"],
  answer: "England",
  explanation: "England has the largest population among the four nations of the UK.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "Which nation within the UK has its own parliament?",
  options: ["Scotland", "England", "Wales", "Northern Ireland"],
  answer: "Scotland",
  explanation: "Scotland has its own devolved parliament in Edinburgh.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "Which nation within the UK has its own assembly in Cardiff?",
  options: ["Wales", "Scotland", "England", "Northern Ireland"],
  answer: "Wales",
  explanation: "Wales has its own devolved parliament called the Senedd, located in Cardiff.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Which nation within the UK has its assembly in Belfast?",
  options: ["Northern Ireland", "Scotland", "Wales", "England"],
  answer: "Northern Ireland",
  explanation: "The Northern Ireland Assembly meets in Belfast to handle devolved matters.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "Which nation in the UK does not have its own devolved parliament or assembly?",
  options: ["England", "Scotland", "Wales", "Northern Ireland"],
  answer: "England",
  explanation: "England is governed directly by the UK Parliament in Westminster.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "Which body governs the entire United Kingdom?",
  options: ["The UK Parliament", "The Scottish Parliament", "The Senedd", "The Northern Ireland Assembly"],
  answer: "The UK Parliament",
  explanation: "The UK Parliament in Westminster governs the whole United Kingdom.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "Which sea separates Great Britain from Ireland?",
  options: ["The Irish Sea", "The North Sea", "The English Channel", "The Atlantic Ocean"],
  answer: "The Irish Sea",
  explanation: "The Irish Sea lies between Great Britain and the island of Ireland.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "What body of water separates England from France?",
  options: ["The English Channel", "The North Sea", "The Atlantic Ocean", "The Bristol Channel"],
  answer: "The English Channel",
  explanation: "The English Channel separates southern England from northern France.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "What is the name of the mountain range separating England and Scotland?",
  options: ["The Cheviot Hills", "The Pennines", "The Grampians", "The Cotswolds"],
  answer: "The Cheviot Hills",
  explanation: "The Cheviot Hills mark part of the natural border between England and Scotland.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "Which nation within the UK is known for its lochs and highlands?",
  options: ["Scotland", "Wales", "England", "Northern Ireland"],
  answer: "Scotland",
  explanation: "Scotland is famous for its highlands, lochs (lakes), and mountainous terrain.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "Which nation is known for the Giant’s Causeway?",
  options: ["Northern Ireland", "Scotland", "Wales", "England"],
  answer: "Northern Ireland",
  explanation: "The Giant’s Causeway, a UNESCO World Heritage Site, is located in Northern Ireland.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "What is the name of the highest mountain in the UK?",
  options: ["Ben Nevis", "Snowdon", "Scafell Pike", "Slieve Donard"],
  answer: "Ben Nevis",
  explanation: "Ben Nevis, located in Scotland, is the UK’s highest peak at 1,345 metres (4,413 ft).",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "Which nation within the UK has the smallest population?",
  options: ["Northern Ireland", "Wales", "Scotland", "England"],
  answer: "Northern Ireland",
  explanation: "Northern Ireland has the smallest population among the four UK nations.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which UK nation is known as the 'Land of Song'?",
  options: ["Wales", "Scotland", "England", "Northern Ireland"],
  answer: "Wales",
  explanation: "Wales is often called the 'Land of Song' for its strong musical traditions and choirs.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "Which nation has the largest freshwater lake in the UK?",
  options: ["Northern Ireland", "Scotland", "Wales", "England"],
  answer: "Northern Ireland",
  explanation: "Lough Neagh in Northern Ireland is the largest lake in the UK by surface area.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "What is the capital city of the United Kingdom?",
  options: ["London", "Edinburgh", "Cardiff", "Belfast"],
  answer: "London",
  explanation: "London serves as both the capital of England and the United Kingdom as a whole.",
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
let questionsFlaggedTab6 = JSON.parse(localStorage.getItem("questionsFlaggedTab6")) || [];

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
    const alreadyFlagged = questionsFlaggedTab6.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab6.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab6", JSON.stringify(questionsFlaggedTab6));
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
