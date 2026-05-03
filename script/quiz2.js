const questions = [
{
  question: "What is a key responsibility of UK citizens?",
  options: ["Voting in elections", "Ignoring local issues", "Breaking laws intentionally", "Avoiding taxes"],
  answer: "Voting in elections",
  explanation: "Citizens are expected to participate in democratic processes such as voting.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "Which of these is a legal duty for all UK residents?",
  options: ["Obeying the law", "Ignoring laws selectively", "Following only local rules", "Making up your own rules"],
  answer: "Obeying the law",
  explanation: "Everyone must follow the law to maintain a fair and safe society.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "What is one way people can participate in democracy?",
  options: ["Voting, standing for election, or joining a political party", "Ignoring elections", "Avoiding public debates", "Working abroad only"],
  answer: "Voting, standing for election, or joining a political party",
  explanation: "Participation in democracy strengthens the political system and community.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "What is the difference between a right and a responsibility?",
  options: ["Rights are freedoms; responsibilities are duties", "Rights are duties; responsibilities are freedoms", "They mean the same thing", "Responsibilities are optional, rights are not"],
  answer: "Rights are freedoms; responsibilities are duties",
  explanation: "Rights allow freedoms, while responsibilities are duties to others and society.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "Which right allows people to express opinions freely?",
  options: ["Freedom of speech", "Right to vote", "Right to privacy", "Freedom of assembly"],
  answer: "Freedom of speech",
  explanation: "Freedom of speech enables people to express their ideas and beliefs.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "Which law protects individuals’ human rights in the UK?",
  options: ["Human Rights Act 1998", "Equality Act 2010", "Criminal Justice Act", "Freedom of Information Act"],
  answer: "Human Rights Act 1998",
  explanation: "The Human Rights Act ensures basic freedoms such as speech, assembly, and privacy.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "Which responsibility relates to paying for public services?",
  options: ["Paying taxes", "Donating to friends only", "Ignoring bills", "Volunteering occasionally"],
  answer: "Paying taxes",
  explanation: "Taxes support essential public services like healthcare, education, and policing.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "What does the term 'active citizen' mean?",
  options: ["Someone who participates in society and helps the community", "Someone who stays at home", "Someone who ignores laws", "Someone who only works abroad"],
  answer: "Someone who participates in society and helps the community",
  explanation: "Active citizens engage in volunteering, voting, and supporting local initiatives.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "Which of these is a responsibility in your local community?",
  options: ["Volunteering, recycling, supporting local groups", "Ignoring local issues", "Breaking minor rules", "Only focusing on work"],
  answer: "Volunteering, recycling, supporting local groups",
  explanation: "Contributing locally strengthens communities and promotes sustainability.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "Which freedom allows people to follow their religion?",
  options: ["Freedom of religion", "Freedom of speech", "Freedom of assembly", "Right to privacy"],
  answer: "Freedom of religion",
  explanation: "People are free to practice their religion or belief without interference.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "Which freedom allows peaceful public gatherings?",
  options: ["Freedom of assembly", "Freedom of speech", "Freedom of religion", "Right to vote"],
  answer: "Freedom of assembly",
  explanation: "Freedom of assembly allows people to gather peacefully for meetings or demonstrations.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "Which of these is a responsibility when using your freedoms?",
  options: ["Respecting others’ rights", "Ignoring others’ opinions", "Doing whatever you want without limits", "Breaking laws if you disagree"],
  answer: "Respecting others’ rights",
  explanation: "Freedom comes with responsibility to ensure the rights of others are protected.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Which of the following is a civic responsibility?",
  options: ["Voting in elections", "Sleeping at home", "Traveling abroad", "Shopping online"],
  answer: "Voting in elections",
  explanation: "Voting is a key way citizens participate in democracy.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "Which right ensures fair treatment by authorities?",
  options: ["Right to a fair trial", "Freedom of speech", "Freedom of religion", "Right to protest"],
  answer: "Right to a fair trial",
  explanation: "Everyone is entitled to a fair hearing under the law.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "Which responsibility involves protecting the environment?",
  options: ["Recycling and reducing waste", "Ignoring pollution", "Using more plastic", "Traveling only by car"],
  answer: "Recycling and reducing waste",
  explanation: "Taking care of the environment is part of civic duties in the UK.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "Which responsibility relates to the safety of others?",
  options: ["Following road rules", "Watching TV", "Sleeping in", "Ignoring signs"],
  answer: "Following road rules",
  explanation: "Obeying laws like traffic rules keeps everyone safe.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "Which freedom allows people to choose their leaders?",
  options: ["Right to vote", "Freedom of speech", "Freedom of assembly", "Right to privacy"],
  answer: "Right to vote",
  explanation: "Voting allows citizens to choose representatives democratically.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "Which of the following is a duty of citizens towards law enforcement?",
  options: ["Reporting crimes and cooperating with investigations", "Ignoring crimes", "Helping criminals", "Avoiding authorities"],
  answer: "Reporting crimes and cooperating with investigations",
  explanation: "Citizens support law and order by reporting crimes and assisting police when necessary.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "Which responsibility helps protect vulnerable people?",
  options: ["Volunteering or supporting charities", "Avoiding community work", "Ignoring issues", "Breaking minor laws"],
  answer: "Volunteering or supporting charities",
  explanation: "Helping others contributes to a fair and caring society.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "Which freedom protects people’s private life and home?",
  options: ["Right to privacy", "Freedom of speech", "Freedom of assembly", "Right to vote"],
  answer: "Right to privacy",
  explanation: "The right to privacy safeguards personal information and home life.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "Which responsibility helps maintain community health?",
  options: ["Following public health guidelines", "Ignoring hygiene", "Breaking quarantine rules", "Refusing vaccinations"],
  answer: "Following public health guidelines",
  explanation: "Following laws and health advice protects everyone in the community.",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "Which responsibility involves fairness in workplaces and schools?",
  options: ["Treating others equally and without discrimination", "Favoring some people", "Ignoring policies", "Allowing bullying"],
  answer: "Treating others equally and without discrimination",
  explanation: "Respecting equality ensures everyone has fair opportunities.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which right allows people to complain about government decisions?",
  options: ["Freedom of expression", "Freedom of religion", "Right to vote", "Right to a fair trial"],
  answer: "Freedom of expression",
  explanation: "Freedom of expression lets people voice opinions about laws and policies.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "Which responsibility helps maintain safe communities?",
  options: ["Reporting crimes and dangerous situations", "Ignoring problems", "Breaking minor rules", "Avoiding police"],
  answer: "Reporting crimes and dangerous situations",
  explanation: "Alerting authorities helps prevent harm and protects the public.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "Which responsibility supports the democratic process?",
  options: ["Voting, respecting others’ opinions, and following the law", "Ignoring elections", "Protesting violently", "Breaking minor laws"],
  answer: "Voting, respecting others’ opinions, and following the law",
  explanation: "Active, responsible participation maintains a strong democracy.",
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
let questionsFlaggedTab2 = JSON.parse(localStorage.getItem("questionsFlaggedTab2")) || [];

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
    const alreadyFlagged = questionsFlaggedTab2.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab2.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab2", JSON.stringify(questionsFlaggedTab2));
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
