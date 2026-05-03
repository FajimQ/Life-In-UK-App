const questions = [
{
question: "Which sport is considered the national sport of England?",
options: ["Cricket", "Football (Soccer)", "Rugby", "Tennis"],
answer: "Football (Soccer)",
explanation: "Football is the most widely played and followed sport in England, making it a central part of English culture.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "The Ashes is a famous competition played between which countries?",
options: ["England and Australia", "England and New Zealand", "Scotland and Ireland", "Wales and England"],
answer: "England and Australia",
explanation: "The Ashes is a historic cricket series played between England and Australia, dating back to 1882.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "Which annual tennis tournament is held in London?",
options: ["US Open", "French Open", "Wimbledon", "Australian Open"],
answer: "Wimbledon",
explanation: "Wimbledon, held at the All England Club in London, is the oldest and most prestigious tennis tournament in the world.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "Which horse race is known as the 'Grand National'?",
options: ["A greyhound race", "A long-distance steeplechase", "A flat race at Ascot", "A polo tournament"],
answer: "A long-distance steeplechase",
explanation: "The Grand National is a famous annual horse race held at Aintree Racecourse near Liverpool.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "What is the term for the traditional Scottish sport played with a heavy ball?",
options: ["Hurling", "Shinty", "Caber toss", "Curling"],
answer: "Caber toss",
explanation: "The caber toss is a traditional Scottish Highland Games event in which competitors throw a large wooden pole called a caber.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Which of these sports originated in the UK?",
options: ["Football (Soccer)", "Basketball", "Baseball", "Volleyball"],
answer: "Football (Soccer)",
explanation: "Modern football (soccer) was codified in England in the 19th century.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "The FA Cup is associated with which sport?",
options: ["Cricket", "Football", "Rugby", "Hockey"],
answer: "Football",
explanation: "The FA Cup is the oldest national football competition in the world, organized by the Football Association.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Rugby is divided into which two main types?",
options: ["Rugby League and Rugby Union", "Rugby A and Rugby B", "Rugby Indoor and Outdoor", "Rugby Professional and Amateur"],
answer: "Rugby League and Rugby Union",
explanation: "Rugby League and Rugby Union are the two major codes of rugby played in the UK and worldwide.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "Which city hosts the London Marathon annually?",
options: ["Manchester", "London", "Edinburgh", "Birmingham"],
answer: "London",
explanation: "The London Marathon is a major annual long-distance running event attracting participants from all over the world.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "What is the Premier League?",
options: ["The top professional football league in England", "A cricket tournament", "A rugby competition", "A tennis championship"],
answer: "The top professional football league in England",
explanation: "The Premier League is England’s highest level professional football league, widely watched internationally.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "Which sport uses the term 'innings'?",
options: ["Football", "Cricket", "Rugby", "Tennis"],
answer: "Cricket",
explanation: "In cricket, an 'innings' is the period in which a team or player bats before switching with the fielding side.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "Which UK city is home to the Wimbledon tennis tournament?",
options: ["Manchester", "London", "Bristol", "Liverpool"],
answer: "London",
explanation: "Wimbledon, the world-famous tennis tournament, is held in the Wimbledon district of London.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "Which traditional Scottish event involves dancing, music, and athletic competitions?",
options: ["Highland Games", "Eisteddfod", "May Day", "Glastonbury Festival"],
answer: "Highland Games",
explanation: "The Highland Games are Scottish festivals featuring traditional music, dance, and sports like caber toss and hammer throw.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Which sport is associated with Lord’s Cricket Ground?",
options: ["Football", "Cricket", "Rugby", "Tennis"],
answer: "Cricket",
explanation: "Lord’s Cricket Ground in London is known as the 'Home of Cricket'.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "Which major football event is hosted every four years in Europe?",
options: ["FA Cup", "FIFA World Cup", "UEFA European Championship", "Premier League"],
answer: "UEFA European Championship",
explanation: "The UEFA European Championship, or Euros, is held every four years with European national teams competing.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Which British sport is played on ice with stones and brooms?",
options: ["Curling", "Hockey", "Ice Football", "Skating"],
answer: "Curling",
explanation: "Curling is a winter sport in which players slide stones on ice towards a target area, sweeping to guide the stone.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Which long-distance footrace is famous in the UK?",
options: ["London Marathon", "Boston Marathon", "New York Marathon", "Paris Marathon"],
answer: "London Marathon",
explanation: "The London Marathon is a key annual running event attracting thousands of runners.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "What is the Six Nations Championship?",
options: ["A football tournament", "A rugby union competition", "A cricket series", "A tennis competition"],
answer: "A rugby union competition",
explanation: "The Six Nations Championship is an annual rugby union competition involving England, Scotland, Wales, Ireland, France, and Italy.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "Which sport is associated with Henley and Oxford-Cambridge competitions?",
options: ["Rowing", "Sailing", "Swimming", "Canoeing"],
answer: "Rowing",
explanation: "The Henley Royal Regatta and Oxford-Cambridge Boat Race are famous rowing competitions in the UK.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Which British city is home to Anfield, the stadium of Liverpool FC?",
options: ["Manchester", "Liverpool", "London", "Birmingham"],
answer: "Liverpool",
explanation: "Anfield is the home stadium of Liverpool Football Club.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "Which UK sport uses the terms 'try' and 'conversion'?",
options: ["Football", "Rugby", "Cricket", "Tennis"],
answer: "Rugby",
explanation: "In rugby, scoring a 'try' and following it with a 'conversion' are ways to gain points.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Which famous UK horse race is run at Ascot?",
options: ["Grand National", "Royal Ascot", "Cheltenham Gold Cup", "Epsom Derby"],
answer: "Royal Ascot",
explanation: "Royal Ascot is a prestigious horse racing event held annually in Ascot, Berkshire.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "Which type of football is played mainly in Scotland and Northern England historically?",
options: ["Gaelic Football", "Rugby", "Association Football (Soccer)", "Shinty"],
answer: "Shinty",
explanation: "Shinty is a traditional Scottish sport played with sticks and a ball, similar to field hockey.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Which event is a major international multi-sport competition hosted by the UK?",
options: ["Olympics", "Commonwealth Games", "FIFA World Cup", "Tour de France"],
answer: "Commonwealth Games",
explanation: "The Commonwealth Games is a multi-sport event involving athletes from the Commonwealth nations, hosted in the UK several times.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Which UK sport involves hitting a shuttlecock over a net?",
options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
answer: "Badminton",
explanation: "Badminton is a popular recreational sport in the UK, played both indoors and competitively.",
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
let questionsFlaggedTab23 = JSON.parse(localStorage.getItem("questionsFlaggedTab23")) || [];

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
    const alreadyFlagged = questionsFlaggedTab23.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab23.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab23", JSON.stringify(questionsFlaggedTab23));
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
