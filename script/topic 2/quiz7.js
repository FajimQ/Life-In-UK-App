const questions = [
  {
    question: "What is the capital city of the United Kingdom?",
    options: ["London", "Birmingham", "Edinburgh", "Cardiff"],
    answer: "London",
    explanation: "London is the capital of both England and the United Kingdom.",
    userAnswer: null,
    flagged: false,
    no: 1
  },
  {
    question: "Which city is the capital of Scotland?",
    options: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"],
    answer: "Edinburgh",
    explanation: "Edinburgh is Scotland's capital, known for its castle and historic architecture.",
    userAnswer: null,
    flagged: false,
    no: 2
  },
  {
    question: "Which city is the capital of Wales?",
    options: ["Cardiff", "Swansea", "Newport", "Bangor"],
    answer: "Cardiff",
    explanation: "Cardiff is the capital and largest city in Wales.",
    userAnswer: null,
    flagged: false,
    no: 3
  },
  {
    question: "Which city is the capital of Northern Ireland?",
    options: ["Belfast", "Derry/Londonderry", "Lisburn", "Newry"],
    answer: "Belfast",
    explanation: "Belfast is the capital and largest city of Northern Ireland.",
    userAnswer: null,
    flagged: false,
    no: 4
  },
  {
    question: "Which English city is famous for its two major universities, Oxford and Cambridge?",
    options: ["Oxford and Cambridge", "Manchester and Liverpool", "Bristol and Bath", "Leeds and Sheffield"],
    answer: "Oxford and Cambridge",
    explanation: "These two historic cities are home to the UK’s most prestigious universities.",
    userAnswer: null,
    flagged: false,
    no: 5
  },
  {
    question: "Which English city is known for the Roman Baths and Georgian architecture?",
    options: ["Bath", "Bristol", "York", "Exeter"],
    answer: "Bath",
    explanation: "Bath is famous for its ancient Roman baths and elegant Georgian buildings.",
    userAnswer: null,
    flagged: false,
    no: 6
  },
  {
    question: "Which city in England is home to Big Ben and the Houses of Parliament?",
    options: ["London", "Manchester", "Birmingham", "Liverpool"],
    answer: "London",
    explanation: "Big Ben and the Houses of Parliament are iconic London landmarks.",
    userAnswer: null,
    flagged: false,
    no: 7
  },
  {
    question: "Which city is known for its shipbuilding history and the Titanic?",
    options: ["Belfast", "Liverpool", "Glasgow", "Cardiff"],
    answer: "Belfast",
    explanation: "The RMS Titanic was built in Belfast’s Harland and Wolff shipyard.",
    userAnswer: null,
    flagged: false,
    no: 8
  },
  {
    question: "Which English city is famous for its cathedral and ancient walls?",
    options: ["York", "Canterbury", "Durham", "Chester"],
    answer: "York",
    explanation: "York is known for its stunning cathedral, medieval walls, and Viking history.",
    userAnswer: null,
    flagged: false,
    no: 9
  },
  {
    question: "Which city in England hosted the 2012 Olympic Games?",
    options: ["London", "Birmingham", "Manchester", "Leeds"],
    answer: "London",
    explanation: "London hosted the 2012 Olympics, making it the first city to host the event three times.",
    userAnswer: null,
    flagged: false,
    no: 10
  },
  {
    question: "What famous prehistoric monument is located in Wiltshire, England?",
    options: ["Stonehenge", "Hadrian’s Wall", "The Giant’s Causeway", "The Tower of London"],
    answer: "Stonehenge",
    explanation: "Stonehenge is a prehistoric stone circle in southern England, built around 5,000 years ago.",
    userAnswer: null,
    flagged: false,
    no: 11
  },
  {
    question: "Which city in Scotland is known for its shipbuilding and hosting the Commonwealth Games?",
    options: ["Glasgow", "Edinburgh", "Dundee", "Aberdeen"],
    answer: "Glasgow",
    explanation: "Glasgow is Scotland’s largest city and has a rich industrial heritage.",
    userAnswer: null,
    flagged: false,
    no: 12
  },
  {
    question: "Which city in Wales is known for its castle and rugby stadium?",
    options: ["Cardiff", "Swansea", "Newport", "Wrexham"],
    answer: "Cardiff",
    explanation: "Cardiff Castle and the Principality Stadium are key Welsh landmarks.",
    userAnswer: null,
    flagged: false,
    no: 13
  },
  {
    question: "Which city is famous for The Beatles?",
    options: ["Liverpool", "Manchester", "Leeds", "Bristol"],
    answer: "Liverpool",
    explanation: "Liverpool is the birthplace of The Beatles and a UNESCO City of Music.",
    userAnswer: null,
    flagged: false,
    no: 14
  },
  {
    question: "Which English city is home to Buckingham Palace?",
    options: ["London", "Bath", "Windsor", "Canterbury"],
    answer: "London",
    explanation: "Buckingham Palace, the King’s official London residence, is located in Westminster.",
    userAnswer: null,
    flagged: false,
    no: 15
  },
  {
    question: "Which landmark marks the border between England and Scotland?",
    options: ["Hadrian’s Wall", "Stonehenge", "Tower Bridge", "The Shard"],
    answer: "Hadrian’s Wall",
    explanation: "Hadrian’s Wall was built by the Romans to protect the northern frontier of their empire.",
    userAnswer: null,
    flagged: false,
    no: 16
  },
  {
    question: "Which city is known as the ‘Steel City’?",
    options: ["Sheffield", "Manchester", "Birmingham", "Leeds"],
    answer: "Sheffield",
    explanation: "Sheffield earned the nickname for its history of steel production during the Industrial Revolution.",
    userAnswer: null,
    flagged: false,
    no: 17
  },
  {
    question: "Where is the famous university city of St Andrews located?",
    options: ["Scotland", "Wales", "England", "Northern Ireland"],
    answer: "Scotland",
    explanation: "St Andrews, Scotland, is home to one of the oldest universities in the world.",
    userAnswer: null,
    flagged: false,
    no: 18
  },
  {
    question: "Which English city is known for the Roman walls and the Minster?",
    options: ["York", "Durham", "Chester", "Canterbury"],
    answer: "York",
    explanation: "York Minster and its Roman walls are key historic landmarks in northern England.",
    userAnswer: null,
    flagged: false,
    no: 19
  },
  {
    question: "Which English city is famous for its port and maritime museum?",
    options: ["Liverpool", "Bristol", "Plymouth", "Portsmouth"],
    answer: "Liverpool",
    explanation: "Liverpool was a major trade and migration port and now hosts the Maritime Museum.",
    userAnswer: null,
    flagged: false,
    no: 20
  },
  {
    question: "Which castle is the largest occupied castle in the world and an official royal residence?",
    options: ["Windsor Castle", "Edinburgh Castle", "Cardiff Castle", "Balmoral Castle"],
    answer: "Windsor Castle",
    explanation: "Windsor Castle in Berkshire is one of the official residences of the British monarch.",
    userAnswer: null,
    flagged: false,
    no: 21
  },
  {
    question: "Which London landmark is home to the Crown Jewels?",
    options: ["The Tower of London", "Buckingham Palace", "Westminster Abbey", "Windsor Castle"],
    answer: "The Tower of London",
    explanation: "The Tower of London holds the Crown Jewels and has served as a royal palace and fortress.",
    userAnswer: null,
    flagged: false,
    no: 22
  },
  {
    question: "What is the name of the river that flows through London?",
    options: ["The Thames", "The Severn", "The Mersey", "The Clyde"],
    answer: "The Thames",
    explanation: "The River Thames runs through southern England, including the capital, London.",
    userAnswer: null,
    flagged: false,
    no: 23
  },
  {
    question: "Which English city is known as the 'Second City' after London?",
    options: ["Birmingham", "Manchester", "Leeds", "Liverpool"],
    answer: "Birmingham",
    explanation: "Birmingham is the UK’s second-largest city and a major industrial centre.",
    userAnswer: null,
    flagged: false,
    no: 24
  },
  {
    question: "Which landmark is a prehistoric stone circle located on Salisbury Plain?",
    options: ["Stonehenge", "Avebury", "Hadrian’s Wall", "The White Cliffs of Dover"],
    answer: "Stonehenge",
    explanation: "Stonehenge is one of Britain’s most famous prehistoric sites.",
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
let questionsFlaggedTab7 = JSON.parse(localStorage.getItem("questionsFlaggedTab7")) || [];

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
    const alreadyFlagged = questionsFlaggedTab7.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab7.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab7", JSON.stringify(questionsFlaggedTab7));
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
