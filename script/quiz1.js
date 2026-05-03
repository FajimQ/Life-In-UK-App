const questions = [
{
  question: "What are British values?",
  options: ["Democracy, rule of law, individual liberty, mutual respect, and tolerance", "Wearing traditional British clothes", "Learning British history", "Only following laws without question"],
  answer: "Democracy, rule of law, individual liberty, mutual respect, and tolerance",
  explanation: "British values include democracy, rule of law, individual liberty, and respect and tolerance for others.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "Which value emphasizes freedom of thought and belief?",
  options: ["Individual liberty", "Rule of law", "Community spirit", "Equality"],
  answer: "Individual liberty",
  explanation: "Individual liberty allows people to hold their own opinions and beliefs.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "What does 'rule of law' mean?",
  options: ["Everyone, including leaders, must follow the law", "Laws only apply to citizens", "Rules are suggestions", "Laws can be ignored by government officials"],
  answer: "Everyone, including leaders, must follow the law",
  explanation: "The rule of law ensures fair and equal application of laws.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "What is mutual respect?",
  options: ["Accepting and valuing others’ views even if you disagree", "Always agreeing with everyone", "Ignoring other people’s opinions", "Competing with others for respect"],
  answer: "Accepting and valuing others’ views even if you disagree",
  explanation: "Mutual respect means treating others with dignity, even when opinions differ.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "Why is tolerance important in the UK?",
  options: ["Allows people of different beliefs and backgrounds to live together peacefully", "Forces one religion on everyone", "Discourages cultural events", "Limits freedom of speech"],
  answer: "Allows people of different beliefs and backgrounds to live together peacefully",
  explanation: "Tolerance ensures harmony in a multi-faith and diverse society.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "Which of these is a responsibility of UK citizens?",
  options: ["Voting in elections", "Breaking minor laws", "Ignoring community issues", "Avoiding taxes"],
  answer: "Voting in elections",
  explanation: "Citizens are expected to take part in civic duties, including voting.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "What is community spirit?",
  options: ["People helping and supporting each other locally", "Competition between neighbours", "Living alone without contact", "Government-led volunteering"],
  answer: "People helping and supporting each other locally",
  explanation: "Community spirit is about working together and supporting each other.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "Which law protects people from discrimination?",
  options: ["Equality Act 2010", "Human Rights Act 1998", "Race Relations Act 1965", "Freedom of Information Act 2000"],
  answer: "Equality Act 2010",
  explanation: "The Equality Act protects individuals from unfair treatment and promotes equal opportunities.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "What is one way people can contribute to their community?",
  options: ["Volunteering, fundraising, joining community groups", "Avoiding involvement", "Protesting regularly", "Working abroad"],
  answer: "Volunteering, fundraising, joining community groups",
  explanation: "These activities help improve the local area and strengthen social bonds.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "What is the purpose of respecting diversity?",
  options: ["To ensure peaceful coexistence and equality", "To separate communities", "To enforce one culture", "To ignore differences"],
  answer: "To ensure peaceful coexistence and equality",
  explanation: "Respecting diversity means valuing people from all backgrounds and beliefs.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "What does the term 'multi-faith society' describe?",
  options: ["A society with people who follow different religions", "A country with one official religion", "A secular state with no religion", "A group that excludes religion"],
  answer: "A society with people who follow different religions",
  explanation: "The UK has people practicing multiple faiths who coexist peacefully.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "Which is the established church in England?",
  options: ["The Church of England", "The Catholic Church", "The Free Church", "The Methodist Church"],
  answer: "The Church of England",
  explanation: "The Church of England is the official state church, led by the monarch.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Who is the Supreme Governor of the Church of England?",
  options: ["The King", "The Archbishop of Canterbury", "The Prime Minister", "The Pope"],
  answer: "The King",
  explanation: "The British monarch is the Supreme Governor of the Church of England.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "Which faith has the largest number of followers in the UK?",
  options: ["Christianity", "Islam", "Hinduism", "Sikhism"],
  answer: "Christianity",
  explanation: "Christianity is the largest religion, but the UK is multi-faith.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "What is a benefit of volunteering?",
  options: ["Meeting people and learning new skills", "Avoiding taxes", "Guaranteed employment", "Getting housing"],
  answer: "Meeting people and learning new skills",
  explanation: "Volunteering allows skill development and social interaction.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "What is St George’s Day associated with?",
  options: ["England", "Scotland", "Wales", "Northern Ireland"],
  answer: "England",
  explanation: "St George’s Day celebrates England’s patron saint.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "What is St Andrew’s Day associated with?",
  options: ["Scotland", "Wales", "Ireland", "England"],
  answer: "Scotland",
  explanation: "St Andrew’s Day celebrates Scotland’s patron saint.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "What is St David’s Day associated with?",
  options: ["Wales", "Scotland", "England", "Northern Ireland"],
  answer: "Wales",
  explanation: "St David’s Day celebrates Wales’s patron saint.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "What is St Patrick’s Day associated with?",
  options: ["Northern Ireland", "Scotland", "Wales", "England"],
  answer: "Northern Ireland",
  explanation: "St Patrick’s Day celebrates Ireland’s patron saint, observed in Northern Ireland.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "Which day is Remembrance Day in the UK?",
  options: ["11 November", "25 December", "1 January", "5 November"],
  answer: "11 November",
  explanation: "Remembrance Day honors those who died in wars.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "What flower symbolizes Remembrance Day?",
  options: ["Red poppy", "Rose", "Daffodil", "Thistle"],
  answer: "Red poppy",
  explanation: "The red poppy is worn in memory of fallen soldiers.",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "What is the Big Society?",
  options: ["A government initiative to empower local communities", "A social media network", "A political group", "A business organisation"],
  answer: "A government initiative to empower local communities",
  explanation: "The Big Society encourages people to take active roles in improving their communities.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which of these shows respect and tolerance?",
  options: ["Listening to others’ opinions", "Ignoring everyone", "Forcing beliefs on others", "Criticizing different opinions"],
  answer: "Listening to others’ opinions",
  explanation: "Respect and tolerance involve valuing and considering others’ views.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "Why is community involvement important?",
  options: ["It strengthens local areas and brings people together", "It wastes time", "It only benefits politicians", "It creates competition"],
  answer: "It strengthens local areas and brings people together",
  explanation: "Community involvement builds stronger and more supportive neighborhoods.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "What is the main message of British values?",
  options: ["Everyone should contribute, respect others, and live peacefully together", "Focus only on yourself", "Communities should remain separate", "Ignore laws and rules"],
  answer: "Everyone should contribute, respect others, and live peacefully together",
  explanation: "British values promote respect, equality, and positive participation in society.",
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
let questionsFlaggedTab = JSON.parse(localStorage.getItem("questionsFlaggedTab")) || [];

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
    const alreadyFlagged = questionsFlaggedTab.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab", JSON.stringify(questionsFlaggedTab));
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
