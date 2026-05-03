const questions = [
{
question: "Who is the head of the UK government?",
options: ["The Monarch", "The Prime Minister", "The Speaker of the House of Commons", "The Lord Chancellor"],
answer: "The Prime Minister",
explanation: "The Prime Minister is the head of the government and is responsible for running the country and making policy decisions.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "What is the main role of the Prime Minister?",
options: ["To create laws independently", "To lead the government and make policy decisions", "To enforce the law", "To preside over the Supreme Court"],
answer: "To lead the government and make policy decisions",
explanation: "The Prime Minister oversees the operation of the government, sets policy direction, and represents the UK internationally.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "What is the Cabinet?",
options: ["The Monarch’s advisors", "A group of senior ministers chosen by the Prime Minister to lead government departments", "The House of Lords", "Local council leaders"],
answer: "A group of senior ministers chosen by the Prime Minister to lead government departments",
explanation: "The Cabinet is made up of senior ministers who head government departments and meet to decide government policy.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "Which political party forms the government in the UK?",
options: ["The party with the most seats in the House of Lords", "The party with the most MPs in the House of Commons", "The Monarch’s preferred party", "The party with the most local council seats"],
answer: "The party with the most MPs in the House of Commons",
explanation: "The political party with the majority of MPs in the House of Commons forms the government, and its leader becomes Prime Minister.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "What is the main role of government departments?",
options: ["To pass laws in Parliament", "To deliver public services and implement government policy", "To chair debates in Parliament", "To enforce court rulings"],
answer: "To deliver public services and implement government policy",
explanation: "Government departments are responsible for running specific areas such as education, health, transport, and defence.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Who is responsible for deciding the overall direction of government policy?",
options: ["The Monarch", "The Prime Minister and Cabinet", "The Speaker of the House of Commons", "The Lord Chancellor"],
answer: "The Prime Minister and Cabinet",
explanation: "The Prime Minister and Cabinet collectively decide the policies and priorities of the government.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "What is a government minister?",
options: ["An elected MP", "A senior member of the Cabinet or department in charge of a government area", "A judge", "A local council leader"],
answer: "A senior member of the Cabinet or department in charge of a government area",
explanation: "Ministers are responsible for leading government departments and making decisions within their area of responsibility.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Which document outlines the government’s proposed policies for the year?",
options: ["Queen’s Speech", "Royal Assent", "Budget Statement", "White Paper"],
answer: "Queen’s Speech",
explanation: "The Queen’s Speech, delivered at the State Opening of Parliament, sets out the government’s legislative agenda for the coming year.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "What is the Civil Service?",
options: ["Elected members of Parliament", "Permanent staff who work for the government regardless of which party is in power", "Judges and magistrates", "The Cabinet only"],
answer: "Permanent staff who work for the government regardless of which party is in power",
explanation: "Civil servants are non-political employees who implement government policies and run public services.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Who can make laws in the UK?",
options: ["Only the Monarch", "Only the Prime Minister", "Parliament, which includes the House of Commons and House of Lords", "Local councils only"],
answer: "Parliament, which includes the House of Commons and House of Lords",
explanation: "Parliament debates, votes on, and passes laws, which the government then implements.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "Who is responsible for running the National Health Service (NHS)?",
options: ["Local councils", "Government departments", "The Monarch", "The Supreme Court"],
answer: "Government departments",
explanation: "Government departments, such as the Department of Health and Social Care, oversee the NHS and ensure it delivers healthcare services.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "What is the difference between the government and Parliament?",
options: ["Government enforces laws; Parliament creates laws", "Government and Parliament are the same", "Parliament enforces laws; Government creates laws", "Government is local; Parliament is national"],
answer: "Government enforces laws; Parliament creates laws",
explanation: "Parliament passes laws, while the government, through its departments, implements policies and delivers services.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "Which of these is an important duty of the Prime Minister?",
options: ["Chairing Cabinet meetings", "Appointing Cabinet ministers", "Representing the UK abroad", "All of the above"],
answer: "All of the above",
explanation: "The Prime Minister chairs Cabinet meetings, appoints ministers, and represents the UK in international matters.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "What is a government White Paper?",
options: ["A law passed by Parliament", "A policy document outlining proposals for new laws or changes", "A judicial ruling", "The Queen’s Speech"],
answer: "A policy document outlining proposals for new laws or changes",
explanation: "White Papers are published by the government to set out detailed proposals before legislation is introduced.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "What is devolution?",
options: ["The transfer of powers from the UK Parliament to Scotland, Wales, and Northern Ireland", "The passing of laws in Parliament", "A judicial process", "Local elections only"],
answer: "The transfer of powers from the UK Parliament to Scotland, Wales, and Northern Ireland",
explanation: "Devolution gives certain powers to regional governments while the UK Parliament retains responsibility for reserved matters.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Which body checks the work of the government?",
options: ["The Monarch", "Parliament", "The Supreme Court only", "Local councils"],
answer: "Parliament",
explanation: "Parliament holds the government to account through debates, questioning ministers, and committee inquiries.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Who can propose government policies?",
options: ["Civil servants only", "Ministers and the Prime Minister", "MPs in opposition only", "The Monarch"],
answer: "Ministers and the Prime Minister",
explanation: "Ministers, led by the Prime Minister, propose policies which are then debated in Parliament and implemented by government departments.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "What is the main role of local government?",
options: ["Make national laws", "Deliver services such as education, housing, and waste management locally", "Approve the Queen’s Speech", "Enforce immigration rules"],
answer: "Deliver services such as education, housing, and waste management locally",
explanation: "Local councils manage local services and make decisions affecting their communities, while national policy is handled by central government.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "What is the Privy Council?",
options: ["A group of MPs in the House of Commons", "A formal body of advisors to the Monarch, mainly ceremonial today", "The Cabinet", "A committee of judges"],
answer: "A formal body of advisors to the Monarch, mainly ceremonial today",
explanation: "The Privy Council advises the Monarch and performs certain formal duties, although real political power rests with the government.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Which UK official is responsible for foreign policy?",
options: ["The Prime Minister", "The Foreign Secretary", "The Monarch", "The Speaker of the House of Commons"],
answer: "The Foreign Secretary",
explanation: "The Foreign Secretary, a senior Cabinet minister, manages the UK’s international relations and foreign policy.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "What is a policy?",
options: ["A law passed by Parliament", "A plan or course of action by the government", "A court decision", "A local council meeting"],
answer: "A plan or course of action by the government",
explanation: "Government policies are plans or strategies to address issues and guide decisions on public services and legislation.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Who decides on taxation and spending in the UK?",
options: ["The Monarch", "The Prime Minister and the Treasury, approved by Parliament", "Local councils only", "The Supreme Court"],
answer: "The Prime Minister and the Treasury, approved by Parliament",
explanation: "The government proposes budgets and tax policies, which must be approved by Parliament before they take effect.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "Which body implements government policies and services across the UK?",
options: ["Civil Service", "House of Lords", "Parliament only", "Local courts"],
answer: "Civil Service",
explanation: "The Civil Service carries out government policies, runs public services, and supports ministers regardless of political party.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Who is responsible for public spending and economic policy?",
options: ["The Prime Minister alone", "The Chancellor of the Exchequer", "The Speaker of the House of Commons", "The Monarch"],
answer: "The Chancellor of the Exchequer",
explanation: "The Chancellor of the Exchequer, a senior Cabinet minister, oversees taxation, public spending, and economic policy.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Who oversees the work of government ministers to ensure laws are implemented correctly?",
options: ["Parliamentary committees", "The Monarch", "The Supreme Court only", "Local councils"],
answer: "Parliamentary committees",
explanation: "Parliamentary committees scrutinise the work of government departments and ministers, ensuring transparency and accountability.",
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
let questionsFlaggedTab27 = JSON.parse(localStorage.getItem("questionsFlaggedTab27")) || [];

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
    const alreadyFlagged = questionsFlaggedTab27.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab27.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab27", JSON.stringify(questionsFlaggedTab27));
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
