const questions = [
{
question: "Who is the Head of State in the United Kingdom?",
options: ["The Prime Minister", "The Monarch", "The Speaker of the House of Commons", "The Chancellor of the Exchequer"],
answer: "The Monarch",
explanation: "The Monarch is the Head of State in the UK, currently serving a mainly ceremonial role within a constitutional monarchy.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "What is the role of the Monarch in Parliament?",
options: ["To make laws independently", "To give Royal Assent to laws passed by Parliament", "To lead debates in the House of Commons", "To vote on bills"],
answer: "To give Royal Assent to laws passed by Parliament",
explanation: "The Monarch formally approves legislation through Royal Assent, a constitutional formality required for a bill to become law.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "What are the two Houses of the UK Parliament?",
options: ["House of Lords and House of Commons", "Senate and House of Commons", "House of Lords and Senate", "House of Representatives and House of Lords"],
answer: "House of Lords and House of Commons",
explanation: "The UK Parliament is bicameral, consisting of the elected House of Commons and the appointed or hereditary House of Lords.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "Who is the leader of the House of Commons?",
options: ["The Monarch", "The Prime Minister", "The Speaker of the House of Commons", "The Lord Chancellor"],
answer: "The Speaker of the House of Commons",
explanation: "The Speaker chairs debates in the House of Commons, maintaining order and ensuring parliamentary rules are followed.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "What is a Member of Parliament (MP)?",
options: ["A government official", "An elected representative in the House of Commons", "A judge", "A member of the House of Lords"],
answer: "An elected representative in the House of Commons",
explanation: "MPs are elected to represent constituencies in the House of Commons and make decisions on legislation and public policy.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Which House of Parliament is primarily made up of appointed and hereditary members?",
options: ["House of Commons", "House of Lords", "Senate", "Privy Council"],
answer: "House of Lords",
explanation: "The House of Lords consists of life peers, bishops, and some hereditary peers, providing scrutiny and revision of legislation.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "What is the main function of the UK Parliament?",
options: ["To enforce the law", "To create and pass laws", "To manage local councils", "To run the National Health Service"],
answer: "To create and pass laws",
explanation: "Parliament debates, amends, and passes legislation that becomes law after receiving Royal Assent.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Who chooses the Prime Minister?",
options: ["The Monarch independently", "The House of Lords", "The elected party with majority support in the House of Commons", "The Speaker of the House of Commons"],
answer: "The elected party with majority support in the House of Commons",
explanation: "The Monarch appoints the leader of the party that has majority support in the House of Commons as Prime Minister.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "What is the role of the opposition in Parliament?",
options: ["To assist the government in all decisions", "To challenge and scrutinise the government", "To enforce laws", "To appoint MPs"],
answer: "To challenge and scrutinise the government",
explanation: "The opposition holds the government accountable by questioning policies, proposing alternatives, and participating in debates.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Who is the current Monarch in the UK?",
options: ["Queen Elizabeth II", "King Charles III", "Prince William", "Prince Harry"],
answer: "King Charles III",
explanation: "King Charles III became the UK Monarch following the passing of Queen Elizabeth II in 2022.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "What is the role of the House of Lords?",
options: ["To enforce laws", "To create laws independently", "To review and suggest amendments to bills", "To appoint MPs"],
answer: "To review and suggest amendments to bills",
explanation: "The House of Lords reviews legislation passed by the House of Commons, offering expertise and revisions but rarely blocks bills outright.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "Which ceremony marks the formal opening of a new session of Parliament?",
options: ["State Opening of Parliament", "Royal Assent", "Queen’s Speech Debate", "Budget Presentation"],
answer: "State Opening of Parliament",
explanation: "The State Opening of Parliament is an annual ceremony where the Monarch delivers the Queen’s Speech outlining the government’s agenda.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "Who presides over the House of Lords?",
options: ["The Monarch", "The Lord Speaker", "The Prime Minister", "The Speaker of the House of Commons"],
answer: "The Lord Speaker",
explanation: "The Lord Speaker chairs debates in the House of Lords and represents the House in ceremonial functions.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "What is the maximum term for a UK Parliament before a general election must be held?",
options: ["3 years", "5 years", "7 years", "10 years"],
answer: "5 years",
explanation: "A general election must be held at least every five years, although elections can be called earlier.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "Which part of Parliament debates the majority of new legislation?",
options: ["House of Lords", "House of Commons", "Privy Council", "Supreme Court"],
answer: "House of Commons",
explanation: "Most legislation is introduced and debated first in the House of Commons, where MPs vote on bills.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "What is the Queen’s Speech?",
options: ["A speech given by the Prime Minister", "A statement by the Monarch outlining the government’s agenda", "A speech in the House of Lords", "A ceremonial poem"],
answer: "A statement by the Monarch outlining the government’s agenda",
explanation: "The Queen’s Speech, delivered by the Monarch at the State Opening, sets out the proposed policies and legislation for the upcoming session.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Who can become a member of the House of Lords?",
options: ["Only elected citizens", "Life peers, bishops, and some hereditary peers", "Only judges", "Only MPs who retire"],
answer: "Life peers, bishops, and some hereditary peers",
explanation: "Membership of the House of Lords includes appointed life peers, senior bishops, and a limited number of hereditary peers.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "What is the term for the Monarch formally approving a bill?",
options: ["Royal Approval", "Royal Assent", "Queen’s Agreement", "Monarch’s Signature"],
answer: "Royal Assent",
explanation: "Royal Assent is the formal approval by the Monarch that allows a bill passed by Parliament to become law.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "Who can propose new laws in the UK?",
options: ["Only the Monarch", "Only MPs or Lords", "The Prime Minister alone", "The Supreme Court"],
answer: "Only MPs or Lords",
explanation: "New laws, or bills, are proposed by Members of Parliament or Members of the House of Lords and must pass both Houses to become law.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Which of these is a responsibility of the Monarch in modern UK government?",
options: ["Running the NHS", "Making laws independently", "Appointing the Prime Minister and giving Royal Assent to laws", "Presiding over Parliament daily"],
answer: "Appointing the Prime Minister and giving Royal Assent to laws",
explanation: "The Monarch’s responsibilities are largely ceremonial, including appointing the Prime Minister and granting Royal Assent.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "What is the main role of MPs in Parliament?",
options: ["Enforce laws", "Represent constituents, debate, and vote on legislation", "Run the monarchy", "Judge legal cases"],
answer: "Represent constituents, debate, and vote on legislation",
explanation: "MPs represent local areas, debate proposed laws, and vote on legislation in the House of Commons.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Which part of Parliament can delay bills and suggest amendments but rarely veto them?",
options: ["House of Commons", "House of Lords", "Privy Council", "Supreme Court"],
answer: "House of Lords",
explanation: "The House of Lords reviews legislation, can suggest amendments, and delay bills, but cannot permanently block most legislation.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "What is a constitutional monarchy?",
options: ["A monarchy with absolute power", "A monarchy where the Monarch shares power with Parliament", "A republic", "A monarchy with no Parliament"],
answer: "A monarchy where the Monarch shares power with Parliament",
explanation: "The UK is a constitutional monarchy, meaning the Monarch’s powers are limited by law and shared with an elected Parliament.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Who is responsible for chairing debates and maintaining order in the House of Commons?",
options: ["The Monarch", "The Prime Minister", "The Speaker of the House of Commons", "The Lord Chancellor"],
answer: "The Speaker of the House of Commons",
explanation: "The Speaker chairs debates in the House of Commons, ensuring rules are followed and debates are conducted fairly.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Which is the upper house of the UK Parliament?",
options: ["House of Commons", "House of Lords", "Senate", "Privy Council"],
answer: "House of Lords",
explanation: "The House of Lords is the upper house, responsible for reviewing legislation passed by the House of Commons.",
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
let questionsFlaggedTab26 = JSON.parse(localStorage.getItem("questionsFlaggedTab26")) || [];

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
    questionsFlaggedTab26.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab26", JSON.stringify(questionsFlaggedTab26));
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
