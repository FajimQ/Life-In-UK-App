const questions = [
{
  question: "What is the process to become a UK citizen called?",
  options: ["Naturalisation", "Immigration", "Registration", "Residency"],
  answer: "Naturalisation",
  explanation: "Naturalisation is the legal process for foreign nationals to become UK citizens.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "Which of these is a requirement for naturalisation?",
  options: ["Living in the UK for at least 5 years", "Being born abroad without residence", "Working remotely outside the UK", "Never visiting the UK before application"],
  answer: "Living in the UK for at least 5 years",
  explanation: "Applicants must usually have lived in the UK for 5 years before applying for citizenship.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "Which test must applicants pass to become a UK citizen?",
  options: ["Life in the UK Test", "UK History Exam", "British Citizenship Quiz", "English Language Test Only"],
  answer: "Life in the UK Test",
  explanation: "The Life in the UK Test assesses knowledge of British history, culture, and society.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "Which language must applicants demonstrate proficiency in?",
  options: ["English, Welsh, or Scottish Gaelic", "French or German", "Only Latin", "Mandarin or Hindi"],
  answer: "English, Welsh, or Scottish Gaelic",
  explanation: "Applicants must prove ability in one of the UK’s official languages.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "Which ceremony finalises UK citizenship?",
  options: ["Oath of allegiance", "National holiday celebration", "Parliament visit", "Voting registration"],
  answer: "Oath of allegiance",
  explanation: "Citizenship is completed by taking an oath or affirmation of allegiance to the UK.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "Who must take the Oath of Allegiance?",
  options: ["All new citizens aged 18 and over", "All children under 10", "UK-born citizens", "Foreign tourists"],
  answer: "All new citizens aged 18 and over",
  explanation: "Adults formally pledge loyalty to the Crown during the ceremony.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "Which right do naturalised citizens gain immediately?",
  options: ["Right to vote in all elections", "Automatic royal title", "Tax exemption", "Free housing"],
  answer: "Right to vote in all elections",
  explanation: "Naturalised citizens can vote in general, local, and European elections.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "Which is a responsibility of all UK citizens?",
  options: ["Obeying the law", "Skipping taxes", "Ignoring elections", "Breaking rules occasionally"],
  answer: "Obeying the law",
  explanation: "All citizens must follow UK law to maintain social order.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "Which age group must pass the Life in the UK Test?",
  options: ["Applicants aged 18 and over", "Under 10", "Children between 11–17 only", "Everyone regardless of age"],
  answer: "Applicants aged 18 and over",
  explanation: "Adults taking the naturalisation route must complete the test.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "Which of these documents is needed for a citizenship application?",
  options: ["Passport or residence permit", "Driving licence only", "School ID card", "Library card"],
  answer: "Passport or residence permit",
  explanation: "Proof of identity and lawful residence is required for citizenship.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "How long must someone hold Indefinite Leave to Remain (ILR) before applying?",
  options: ["12 months", "1 month", "5 years", "10 years"],
  answer: "12 months",
  explanation: "Applicants usually must have held ILR for at least 12 months before naturalisation.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "Which is a reason for citizenship refusal?",
  options: ["Serious criminal convictions", "High income", "Being born abroad", "Working abroad temporarily"],
  answer: "Serious criminal convictions",
  explanation: "Certain criminal histories can prevent naturalisation.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Which test includes questions about British values?",
  options: ["Life in the UK Test", "English grammar test", "Maths test", "Driving test"],
  answer: "Life in the UK Test",
  explanation: "The test includes questions on history, culture, and British values.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "What does an Oath of Allegiance pledge?",
  options: ["Loyalty to the Crown and UK laws", "Only to local government", "To a private organisation", "To a foreign country"],
  answer: "Loyalty to the Crown and UK laws",
  explanation: "Citizens pledge allegiance to the monarch and commitment to UK law.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "Which benefit do UK citizens have over residents?",
  options: ["Full political and social rights", "Free travel abroad", "Special tax exemption", "Automatic employment guarantee"],
  answer: "Full political and social rights",
  explanation: "Citizens gain rights like voting, running for office, and public service eligibility.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "Which principle is emphasised in the citizenship process?",
  options: ["Integration and respect for UK laws", "Ignoring local customs", "Prioritising foreign laws", "Exclusively preserving heritage"],
  answer: "Integration and respect for UK laws",
  explanation: "New citizens are expected to integrate and respect British society and laws.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "Which ceremony includes the pledge to ‘uphold rights and freedoms’?",
  options: ["Citizenship ceremony", "Wedding ceremony", "Birthday celebration", "Local council meeting"],
  answer: "Citizenship ceremony",
  explanation: "The citizenship ceremony includes an oath and a commitment to rights and responsibilities.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "Which type of residence is needed before naturalisation?",
  options: ["Indefinite Leave to Remain (ILR)", "Temporary visitor visa", "Tourist visa", "Student visa only"],
  answer: "Indefinite Leave to Remain (ILR)",
  explanation: "ILR allows the applicant to live permanently in the UK before applying for citizenship.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "Which of these shows loyalty to the UK?",
  options: ["Following laws, respecting values, and engaging in community life", "Ignoring UK customs", "Breaking minor laws", "Remaining isolated from society"],
  answer: "Following laws, respecting values, and engaging in community life",
  explanation: "Citizens show loyalty through lawful, respectful participation in society.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "Which benefit comes with UK citizenship in terms of travel?",
  options: ["UK passport", "Automatic visa to all countries", "Free international flights", "Exclusive airport lounges"],
  answer: "UK passport",
  explanation: "A UK passport allows visa-free or easier travel to many countries.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "Who decides if someone meets the requirements for citizenship?",
  options: ["Home Office", "Local council only", "Police", "The Prime Minister personally"],
  answer: "Home Office",
  explanation: "The Home Office assesses applications and ensures requirements are met.",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "Which citizenship status allows voting and public service eligibility?",
  options: ["UK citizen", "Permanent resident only", "Visitor", "Temporary worker"],
  answer: "UK citizen",
  explanation: "Only citizens have full political rights and public service eligibility.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which of these is a core value tested in the Life in the UK Test?",
  options: ["Respect, democracy, and the rule of law", "Obedience only", "Exclusive national pride", "Ignoring others’ rights"],
  answer: "Respect, democracy, and the rule of law",
  explanation: "The test emphasises British values including respect, democracy, and fairness.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "Which ceremony marks the official start of UK citizenship?",
  options: ["Taking the Oath of Allegiance", "Life in the UK Test completion", "Receiving ILR", "First UK tax payment"],
  answer: "Taking the Oath of Allegiance",
  explanation: "The ceremony with the oath is the formal point at which citizenship is granted.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "Which of these responsibilities continues after gaining citizenship?",
  options: ["Obeying the law and participating in community life", "Ignoring rules", "Breaking laws occasionally", "Living abroad permanently"],
  answer: "Obeying the law and participating in community life",
  explanation: "Citizens maintain duties to respect the law and contribute to society.",
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
let questionsFlaggedTab3 = JSON.parse(localStorage.getItem("questionsFlaggedTab3")) || [];

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
    const alreadyFlagged = questionsFlaggedTab3.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab3.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab3", JSON.stringify(questionsFlaggedTab3));
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
