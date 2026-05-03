const questions = [
  {
    question: "What is the national flag of the United Kingdom called?",
    options: ["Union Flag", "Union Jack", "British Flag", "UK Banner"],
    answer: "Union Flag",
    explanation: "The national flag of the UK is officially called the Union Flag, though it is commonly known as the Union Jack.",
    userAnswer: null,
    flagged: false,
    no: 1
  },
  {
    question: "Which flowers represent the four nations of the UK?",
    options: ["Rose, Thistle, Daffodil, Shamrock", "Rose, Lily, Sunflower, Thistle", "Daffodil, Rose, Shamrock, Thistle", "Rose, Thistle, Shamrock, Lily"],
    answer: "Rose, Thistle, Daffodil, Shamrock",
    explanation: "The rose represents England, the thistle Scotland, the daffodil Wales, and the shamrock Northern Ireland.",
    userAnswer: null,
    flagged: false,
    no: 2
  },
  {
    question: "Which flower represents England?",
    options: ["Rose", "Thistle", "Daffodil", "Shamrock"],
    answer: "Rose",
    explanation: "The red rose is the national emblem of England.",
    userAnswer: null,
    flagged: false,
    no: 3
  },
  {
    question: "Which flower represents Scotland?",
    options: ["Thistle", "Rose", "Daffodil", "Shamrock"],
    answer: "Thistle",
    explanation: "The thistle is the national symbol of Scotland.",
    userAnswer: null,
    flagged: false,
    no: 4
  },
  {
    question: "Which flower represents Wales?",
    options: ["Daffodil", "Rose", "Thistle", "Shamrock"],
    answer: "Daffodil",
    explanation: "The daffodil is a symbol of Wales, especially worn on St David's Day.",
    userAnswer: null,
    flagged: false,
    no: 5
  },
  {
    question: "Which flower represents Northern Ireland?",
    options: ["Shamrock", "Rose", "Thistle", "Daffodil"],
    answer: "Shamrock",
    explanation: "The shamrock is the national emblem of Northern Ireland.",
    userAnswer: null,
    flagged: false,
    no: 6
  },
  {
    question: "What is the national animal of England?",
    options: ["Lion", "Unicorn", "Dragon", "Eagle"],
    answer: "Lion",
    explanation: "The lion is a historic symbol of England, often appearing in royal emblems and coats of arms.",
    userAnswer: null,
    flagged: false,
    no: 7
  },
  {
    question: "What is the national animal of Scotland?",
    options: ["Unicorn", "Lion", "Dragon", "Eagle"],
    answer: "Unicorn",
    explanation: "The unicorn is the national symbol of Scotland, representing purity and strength.",
    userAnswer: null,
    flagged: false,
    no: 8
  },
  {
    question: "Which symbol represents Wales?",
    options: ["Red Dragon", "Lion", "Unicorn", "Eagle"],
    answer: "Red Dragon",
    explanation: "The red dragon is a national symbol of Wales, appearing on the Welsh flag.",
    userAnswer: null,
    flagged: false,
    no: 9
  },
  {
    question: "Which saint is the patron of England?",
    options: ["St George", "St Andrew", "St David", "St Patrick"],
    answer: "St George",
    explanation: "St George is the patron saint of England, celebrated on 23 April.",
    userAnswer: null,
    flagged: false,
    no: 10
  },
  {
    question: "Which saint is the patron of Scotland?",
    options: ["St Andrew", "St George", "St David", "St Patrick"],
    answer: "St Andrew",
    explanation: "St Andrew is the patron saint of Scotland, celebrated on 30 November.",
    userAnswer: null,
    flagged: false,
    no: 11
  },
  {
    question: "Which saint is the patron of Wales?",
    options: ["St David", "St George", "St Andrew", "St Patrick"],
    answer: "St David",
    explanation: "St David is the patron saint of Wales, celebrated on 1 March.",
    userAnswer: null,
    flagged: false,
    no: 12
  },
  {
    question: "Which saint is the patron of Northern Ireland?",
    options: ["St Patrick", "St David", "St Andrew", "St George"],
    answer: "St Patrick",
    explanation: "St Patrick is the patron saint of Northern Ireland, celebrated on 17 March.",
    userAnswer: null,
    flagged: false,
    no: 13
  },
  {
    question: "Which UK holiday marks the King’s official birthday?",
    options: ["Trooping the Colour", "Guy Fawkes Night", "Remembrance Day", "St George’s Day"],
    answer: "Trooping the Colour",
    explanation: "Trooping the Colour is a military parade held annually in London to celebrate the monarch’s official birthday.",
    userAnswer: null,
    flagged: false,
    no: 14
  },
  {
    question: "Which UK holiday is observed on 5 November to remember the Gunpowder Plot?",
    options: ["Guy Fawkes Night", "Remembrance Day", "St Andrew’s Day", "Boxing Day"],
    answer: "Guy Fawkes Night",
    explanation: "Guy Fawkes Night commemorates the failed Gunpowder Plot of 1605 with fireworks and bonfires.",
    userAnswer: null,
    flagged: false,
    no: 15
  },
  {
    question: "Which day is Remembrance Day in the UK?",
    options: ["11 November", "25 December", "1 January", "5 November"],
    answer: "11 November",
    explanation: "Remembrance Day is observed on 11 November to honour those who died in wars.",
    userAnswer: null,
    flagged: false,
    no: 16
  },
  {
    question: "Which flower symbolises Remembrance Day?",
    options: ["Red Poppy", "Rose", "Daffodil", "Thistle"],
    answer: "Red Poppy",
    explanation: "The red poppy is worn to commemorate those who lost their lives in military service.",
    userAnswer: null,
    flagged: false,
    no: 17
  },
  {
    question: "Which UK holiday is celebrated on 26 December?",
    options: ["Boxing Day", "Christmas Day", "New Year’s Day", "St Patrick’s Day"],
    answer: "Boxing Day",
    explanation: "Boxing Day, 26 December, is a public holiday traditionally associated with giving to the poor.",
    userAnswer: null,
    flagged: false,
    no: 18
  },
  {
    question: "Which UK landmark is used as the backdrop for New Year’s Eve celebrations in London?",
    options: ["London Eye", "Tower of London", "Buckingham Palace", "Big Ben"],
    answer: "London Eye",
    explanation: "The London Eye is the main site for New Year’s Eve fireworks in London.",
    userAnswer: null,
    flagged: false,
    no: 19
  },
  {
    question: "Which national flag is flown on UK government buildings?",
    options: ["Union Flag", "Red Dragon", "Saltire", "St George’s Cross"],
    answer: "Union Flag",
    explanation: "The Union Flag is flown on official buildings to represent the entire United Kingdom.",
    userAnswer: null,
    flagged: false,
    no: 20
  },
  {
    question: "Which symbol represents the British monarchy and appears on coins?",
    options: ["The Crown", "The Red Dragon", "The Unicorn", "The Lion"],
    answer: "The Crown",
    explanation: "The crown symbolises royal authority and appears on many official items, including coins and government emblems.",
    userAnswer: null,
    flagged: false,
    no: 21
  },
  {
    question: "What is the Royal Coat of Arms used for?",
    options: ["To represent the monarchy on official documents", "To decorate churches", "For sports teams", "To mark historical sites only"],
    answer: "To represent the monarchy on official documents",
    explanation: "The Royal Coat of Arms represents the monarch’s authority and appears on passports, coins, and official state items.",
    userAnswer: null,
    flagged: false,
    no: 22
  },
  {
    question: "Which national holiday celebrates the birth of Jesus Christ?",
    options: ["Christmas Day", "Easter", "Boxing Day", "New Year’s Day"],
    answer: "Christmas Day",
    explanation: "Christmas Day, on 25 December, celebrates the birth of Jesus Christ and is widely observed across the UK.",
    userAnswer: null,
    flagged: false,
    no: 23
  },
  {
    question: "Which Christian holiday celebrates the resurrection of Jesus Christ?",
    options: ["Easter", "Christmas", "Good Friday", "Epiphany"],
    answer: "Easter",
    explanation: "Easter celebrates the resurrection of Jesus and is one of the most important Christian festivals.",
    userAnswer: null,
    flagged: false,
    no: 24
  },
  {
    question: "Which day follows Easter Sunday and is a public holiday in the UK?",
    options: ["Easter Monday", "Good Friday", "Palm Sunday", "Ascension Day"],
    answer: "Easter Monday",
    explanation: "Easter Monday is a public holiday following Easter Sunday, celebrated with various local traditions.",
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
let questionsFlaggedTab9 = JSON.parse(localStorage.getItem("questionsFlaggedTab9")) || [];

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
    const alreadyFlagged = questionsFlaggedTab9.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab9.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab9", JSON.stringify(questionsFlaggedTab9));
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
