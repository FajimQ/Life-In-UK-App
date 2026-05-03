const questions = [
  {
    question: "What type of government does the United Kingdom have?",
    options: ["A constitutional monarchy and parliamentary democracy", "A republic", "A dictatorship", "A federal monarchy"],
    answer: "A constitutional monarchy and parliamentary democracy",
    explanation: "The UK is both a constitutional monarchy, with a reigning monarch, and a parliamentary democracy governed by elected representatives.",
    userAnswer: null,
    flagged: false,
    no: 1
  },
  {
    question: "Which ocean lies to the west of the UK?",
    options: ["The Atlantic Ocean", "The Pacific Ocean", "The Indian Ocean", "The Arctic Ocean"],
    answer: "The Atlantic Ocean",
    explanation: "The Atlantic Ocean lies to the west of the British Isles.",
    userAnswer: null,
    flagged: false,
    no: 2
  },
  {
    question: "What is the longest river in the United Kingdom?",
    options: ["The River Severn", "The River Thames", "The River Trent", "The River Clyde"],
    answer: "The River Severn",
    explanation: "The River Severn, about 220 miles (354 km) long, is the UK’s longest river, flowing through Wales and England.",
    userAnswer: null,
    flagged: false,
    no: 3
  },
  {
    question: "Which river flows through London?",
    options: ["The River Thames", "The River Clyde", "The River Severn", "The River Tyne"],
    answer: "The River Thames",
    explanation: "The River Thames runs through southern England, including London, and is a key part of its geography and history.",
    userAnswer: null,
    flagged: false,
    no: 4
  },
  {
    question: "What are the main mountain ranges in the UK?",
    options: ["The Scottish Highlands, the Pennines, and the Cambrian Mountains", "The Alps, Pyrenees, and Carpathians", "The Rockies and Andes", "The Himalayas and Karakoram"],
    answer: "The Scottish Highlands, the Pennines, and the Cambrian Mountains",
    explanation: "The Highlands dominate Scotland, the Pennines stretch through northern England, and the Cambrian Mountains run through Wales.",
    userAnswer: null,
    flagged: false,
    no: 5
  },
  {
    question: "Where is Ben Nevis located?",
    options: ["Scotland", "Wales", "England", "Northern Ireland"],
    answer: "Scotland",
    explanation: "Ben Nevis, near Fort William in Scotland, is the highest mountain in the UK.",
    userAnswer: null,
    flagged: false,
    no: 6
  },
  {
    question: "What is the highest mountain in the UK?",
    options: ["Ben Nevis", "Snowdon", "Scafell Pike", "Slieve Donard"],
    answer: "Ben Nevis",
    explanation: "Ben Nevis in Scotland is the UK’s highest mountain at 1,345 metres (4,413 feet).",
    userAnswer: null,
    flagged: false,
    no: 7
  },
  {
    question: "What is the highest mountain in Wales?",
    options: ["Snowdon", "Ben Nevis", "Scafell Pike", "Slieve Donard"],
    answer: "Snowdon",
    explanation: "Snowdon, located in Snowdonia National Park, is Wales’s highest peak.",
    userAnswer: null,
    flagged: false,
    no: 8
  },
  {
    question: "Which region of England is known as the ‘Lake District’?",
    options: ["North West England", "South East England", "East Midlands", "Yorkshire"],
    answer: "North West England",
    explanation: "The Lake District, in Cumbria, is famous for its lakes, mountains, and association with poet William Wordsworth.",
    userAnswer: null,
    flagged: false,
    no: 9
  },
  {
    question: "Where is the Giant’s Causeway located?",
    options: ["Northern Ireland", "Scotland", "Wales", "England"],
    answer: "Northern Ireland",
    explanation: "The Giant’s Causeway is a natural rock formation in County Antrim, Northern Ireland.",
    userAnswer: null,
    flagged: false,
    no: 10
  },
  {
    question: "What are the ‘White Cliffs of Dover’ known for?",
    options: ["They mark England’s closest point to continental Europe", "They are volcanic cliffs", "They contain ancient fossils", "They are used for farming"],
    answer: "They mark England’s closest point to continental Europe",
    explanation: "The White Cliffs of Dover overlook the English Channel, symbolising Britain’s natural and historical gateway to Europe.",
    userAnswer: null,
    flagged: false,
    no: 11
  },
  {
    question: "What body of water separates Great Britain from France?",
    options: ["The English Channel", "The Irish Sea", "The North Sea", "The Atlantic Ocean"],
    answer: "The English Channel",
    explanation: "The English Channel separates southern England from northern France.",
    userAnswer: null,
    flagged: false,
    no: 12
  },
  {
    question: "What is the name of the group of islands to the north of Scotland?",
    options: ["The Shetland Islands and Orkney Islands", "The Channel Islands", "The Hebrides", "The Faroe Islands"],
    answer: "The Shetland Islands and Orkney Islands",
    explanation: "These island groups lie north of mainland Scotland and have a rich Norse heritage.",
    userAnswer: null,
    flagged: false,
    no: 13
  },
  {
    question: "What separates Northern Ireland from Great Britain?",
    options: ["The Irish Sea", "The English Channel", "The Atlantic Ocean", "The Bristol Channel"],
    answer: "The Irish Sea",
    explanation: "The Irish Sea separates the islands of Great Britain and Ireland.",
    userAnswer: null,
    flagged: false,
    no: 14
  },
  {
    question: "Which region of England is known as the ‘Garden of England’?",
    options: ["Kent", "Surrey", "Norfolk", "Devon"],
    answer: "Kent",
    explanation: "Kent earned this nickname due to its fruit-growing, hop fields, and green countryside.",
    userAnswer: null,
    flagged: false,
    no: 15
  },
  {
    question: "Where are the Cotswolds located?",
    options: ["South West and central England", "Northern Ireland", "Wales", "Scotland"],
    answer: "South West and central England",
    explanation: "The Cotswolds are famous for their rolling hills, historic villages, and honey-coloured stone cottages.",
    userAnswer: null,
    flagged: false,
    no: 16
  },
  {
    question: "Which region is home to England’s capital, London?",
    options: ["South East England", "East of England", "South West England", "Midlands"],
    answer: "South East England",
    explanation: "London is located in the South East region of England.",
    userAnswer: null,
    flagged: false,
    no: 17
  },
  {
    question: "Which part of the UK is known for its rugged mountains and lochs?",
    options: ["Scotland", "Wales", "Northern Ireland", "South West England"],
    answer: "Scotland",
    explanation: "Scotland is famous for its mountainous Highlands and freshwater lochs such as Loch Ness.",
    userAnswer: null,
    flagged: false,
    no: 18
  },
  {
    question: "What is Loch Ness famous for?",
    options: ["A legendary monster said to live there", "Being the deepest lake in Europe", "Its volcanic origin", "Its saltwater ecosystem"],
    answer: "A legendary monster said to live there",
    explanation: "Loch Ness in Scotland is famous for the legend of the ‘Loch Ness Monster’.",
    userAnswer: null,
    flagged: false,
    no: 19
  },
  {
    question: "Which region of Northern Ireland is famous for its coastal scenery?",
    options: ["The Antrim Coast", "The Fermanagh Lakes", "The Mourne Mountains", "The Belfast Hills"],
    answer: "The Antrim Coast",
    explanation: "The Antrim Coast includes the Giant’s Causeway and other spectacular coastal landmarks.",
    userAnswer: null,
    flagged: false,
    no: 20
  },
  {
    question: "What is the capital of Scotland located near?",
    options: ["The Firth of Forth", "The River Clyde", "Loch Lomond", "Ben Nevis"],
    answer: "The Firth of Forth",
    explanation: "Edinburgh lies on the southern shore of the Firth of Forth estuary.",
    userAnswer: null,
    flagged: false,
    no: 21
  },
  {
    question: "Which area of England is known for its national parks and moorlands?",
    options: ["Yorkshire", "Surrey", "Norfolk", "Kent"],
    answer: "Yorkshire",
    explanation: "Yorkshire is home to the Yorkshire Dales and North York Moors National Parks.",
    userAnswer: null,
    flagged: false,
    no: 22
  },
  {
    question: "What region of Wales contains most of its mountains?",
    options: ["North Wales", "South Wales", "Mid Wales", "West Wales"],
    answer: "North Wales",
    explanation: "North Wales is home to Snowdonia National Park, with Wales’s highest mountains.",
    userAnswer: null,
    flagged: false,
    no: 23
  },
  {
    question: "What is the main island of the UK called?",
    options: ["Great Britain", "The British Isles", "The Channel Islands", "Ireland"],
    answer: "Great Britain",
    explanation: "Great Britain includes England, Scotland, and Wales.",
    userAnswer: null,
    flagged: false,
    no: 24
  },
  {
    question: "What does the term 'British Isles' describe?",
    options: ["A group of islands including Great Britain, Ireland, and nearby smaller islands", "Only England and Wales", "The Channel Islands only", "The Scottish Highlands"],
    answer: "A group of islands including Great Britain, Ireland, and nearby smaller islands",
    explanation: "The British Isles is a geographical term for the islands of Great Britain, Ireland, and surrounding smaller islands.",
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
let questionsFlaggedTab8 = JSON.parse(localStorage.getItem("questionsFlaggedTab8")) || [];

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
    const alreadyFlagged = questionsFlaggedTab8.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab8.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab8", JSON.stringify(questionsFlaggedTab8));
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
