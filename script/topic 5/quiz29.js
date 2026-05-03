const questions = [
{
question: "What is the rule of law?",
options: ["The Monarch makes all laws", "Everyone is subject to the law, including the government", "Only MPs must follow the law", "Laws apply only to citizens"],
answer: "Everyone is subject to the law, including the government",
explanation: "The rule of law means that all people, institutions, and the government itself are accountable to the law.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "What is the role of the judiciary?",
options: ["To make laws", "To interpret and apply the law", "To enforce government policy", "To manage local councils"],
answer: "To interpret and apply the law",
explanation: "Judges and courts interpret and apply laws fairly, ensuring justice is upheld.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "Which court is the highest in the United Kingdom?",
options: ["Crown Court", "Magistrates’ Court", "Supreme Court", "High Court"],
answer: "Supreme Court",
explanation: "The Supreme Court is the highest court in the UK and deals with the most important legal cases.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "What is a criminal offence?",
options: ["A dispute between neighbours", "An act that breaks the law and is punishable by the courts", "A civil disagreement", "A government policy"],
answer: "An act that breaks the law and is punishable by the courts",
explanation: "A criminal offence is a violation of the law that can lead to prosecution and penalties like fines or imprisonment.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "What is a civil case?",
options: ["A crime committed against the state", "A dispute between individuals or organizations", "A parliamentary debate", "A local council decision"],
answer: "A dispute between individuals or organizations",
explanation: "Civil cases involve disagreements between private parties, such as contract disputes or personal injury claims.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Who presides over a criminal trial in the Crown Court?",
options: ["The Prime Minister", "The Monarch", "A judge", "The Speaker of the House of Commons"],
answer: "A judge",
explanation: "A judge oversees the proceedings, ensures fairness, and instructs the jury on the law.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "What is the role of a jury?",
options: ["To make laws", "To decide the facts of a case in criminal trials", "To enforce court decisions", "To advise the Prime Minister"],
answer: "To decide the facts of a case in criminal trials",
explanation: "In criminal trials, a jury of citizens decides whether the defendant is guilty or not based on the evidence presented.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "What is a magistrates’ court?",
options: ["A court for serious crimes only", "A local court handling minor criminal cases and some civil matters", "The highest court in the UK", "A court for international law"],
answer: "A local court handling minor criminal cases and some civil matters",
explanation: "Magistrates’ courts deal with less serious criminal cases, family matters, and preliminary hearings for serious crimes.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "What is the Crown Court responsible for?",
options: ["Minor civil disputes", "Serious criminal cases and appeals from magistrates’ courts", "Passing laws", "Local council decisions"],
answer: "Serious criminal cases and appeals from magistrates’ courts",
explanation: "The Crown Court handles serious criminal trials, including indictable offences, and hears appeals from magistrates’ courts.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "What is the difference between criminal and civil law?",
options: ["Criminal law punishes offences against society; civil law resolves disputes between individuals", "Criminal law is optional; civil law is mandatory", "Criminal law applies only to MPs; civil law applies to citizens", "There is no difference"],
answer: "Criminal law punishes offences against society; civil law resolves disputes between individuals",
explanation: "Criminal law deals with offences like theft or assault, while civil law handles disputes such as contracts or personal injury claims.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "What is the purpose of the Police in the UK?",
options: ["To create laws", "To enforce the law and maintain public order", "To advise the Monarch", "To vote in Parliament"],
answer: "To enforce the law and maintain public order",
explanation: "Police officers investigate crimes, enforce laws, and ensure public safety.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "What is the function of the High Court?",
options: ["To make laws", "To handle serious civil cases and appeals from lower courts", "To oversee the police", "To manage local councils"],
answer: "To handle serious civil cases and appeals from lower courts",
explanation: "The High Court deals with complex civil cases and hears appeals from lower courts.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "What does 'Habeas Corpus' protect?",
options: ["The right to free speech", "The right to a fair trial", "The right against unlawful detention", "The right to vote"],
answer: "The right against unlawful detention",
explanation: "Habeas Corpus ensures that a person cannot be held in prison unlawfully and must be brought before a court.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "What is the role of solicitors?",
options: ["To prosecute criminal cases", "To provide legal advice and represent clients in lower courts", "To preside over trials", "To make laws"],
answer: "To provide legal advice and represent clients in lower courts",
explanation: "Solicitors offer legal guidance and can represent clients in courts, often preparing cases for barristers in higher courts.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "What is the role of barristers?",
options: ["To advise the Monarch", "To represent clients in higher courts and provide specialist legal advocacy", "To enforce laws", "To manage local councils"],
answer: "To represent clients in higher courts and provide specialist legal advocacy",
explanation: "Barristers represent clients in Crown and High Courts, providing advocacy and legal expertise.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "What is an appeal?",
options: ["A request to pass a new law", "A request to a higher court to review a lower court’s decision", "A criminal investigation", "A local council decision"],
answer: "A request to a higher court to review a lower court’s decision",
explanation: "Appeals allow parties to challenge a court decision in a higher court if they believe there was an error in law or procedure.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "What is a police caution?",
options: ["A criminal record", "A warning given for minor offences as an alternative to prosecution", "A fine imposed by a court", "A parliamentary reprimand"],
answer: "A warning given for minor offences as an alternative to prosecution",
explanation: "Police cautions are formal warnings for minor offences, recorded but not prosecuted in court.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "Who appoints judges in the UK?",
options: ["The Prime Minister and Judicial Appointments Commission", "The Monarch alone", "The House of Lords", "Local councils"],
answer: "The Prime Minister and Judicial Appointments Commission",
explanation: "Judges are selected by an independent Judicial Appointments Commission and formally appointed by the Monarch on advice from the Prime Minister.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "What is the role of the Supreme Court?",
options: ["To make new laws", "To hear the most important legal cases and ensure the law is interpreted correctly", "To manage elections", "To enforce local council decisions"],
answer: "To hear the most important legal cases and ensure the law is interpreted correctly",
explanation: "The Supreme Court is the highest judicial authority in the UK and ensures consistent interpretation of the law.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "What is meant by 'innocent until proven guilty'?",
options: ["The police must prove guilt", "Everyone is considered innocent until the court finds them guilty", "The Monarch decides guilt", "Only MPs are protected"],
answer: "Everyone is considered innocent until the court finds them guilty",
explanation: "This fundamental principle of criminal law protects individuals from unfair punishment without evidence and a fair trial.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "What is the function of a coroner?",
options: ["To prosecute crimes", "To investigate deaths that are sudden, unexplained, or suspicious", "To enforce laws", "To pass legislation"],
answer: "To investigate deaths that are sudden, unexplained, or suspicious",
explanation: "Coroners conduct investigations into certain deaths to determine the cause and circumstances.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "What is meant by 'bail'?",
options: ["A fine", "Temporary release of a suspect while awaiting trial, sometimes with conditions", "A prison sentence", "A parliamentary procedure"],
answer: "Temporary release of a suspect while awaiting trial, sometimes with conditions",
explanation: "Bail allows a defendant to remain free until their trial under specific conditions set by the court.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "What is a fine?",
options: ["A form of imprisonment", "A monetary penalty imposed for breaking the law", "A government policy", "A voting procedure"],
answer: "A monetary penalty imposed for breaking the law",
explanation: "Fines are common punishments for minor criminal or civil offences.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "What is the difference between a magistrates’ court and the Crown Court?",
options: ["Magistrates’ courts handle minor cases; Crown Court handles serious criminal cases", "Magistrates’ courts are higher than Crown Court", "There is no difference", "Magistrates’ courts deal with appeals only"],
answer: "Magistrates’ courts handle minor cases; Crown Court handles serious criminal cases",
explanation: "Magistrates’ courts handle minor criminal matters, while the Crown Court deals with serious offences and appeals from magistrates’ courts.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "What is the purpose of legal aid?",
options: ["To allow anyone to vote", "To provide free or low-cost legal advice and representation for those who cannot afford it", "To fund elections", "To appoint judges"],
answer: "To provide free or low-cost legal advice and representation for those who cannot afford it",
explanation: "Legal aid ensures that justice is accessible to everyone, regardless of income.",
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
let questionsFlaggedTab29 = JSON.parse(localStorage.getItem("questionsFlaggedTab29")) || [];

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
    const alreadyFlagged = questionsFlaggedTab29.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab29.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab29", JSON.stringify(questionsFlaggedTab29));
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
