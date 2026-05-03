const questions = [
{
question: "What does it mean to be an active citizen?",
options: ["To vote, follow the law, and participate in the community", "To work in government only", "To pay taxes only", "To join a political party only"],
answer: "To vote, follow the law, and participate in the community",
explanation: "Being an active citizen means contributing to society by voting, obeying laws, volunteering, and engaging in community life.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "Why is voting important in the UK?", 
options: ["It allows citizens to influence government decisions", "It is a legal requirement for all citizens", "It is the only way to pay taxes", "It is optional for local issues only"],
answer: "It allows citizens to influence government decisions",
explanation: "Voting gives citizens a voice in choosing representatives and shaping policies at local and national levels.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "What are your responsibilities as a UK citizen?",
options: ["Pay taxes, obey the law, serve on a jury if called", "Vote only", "Work for the government", "Join a political party only"],
answer: "Pay taxes, obey the law, serve on a jury if called",
explanation: "Citizens have responsibilities including obeying laws, paying taxes, and fulfilling civic duties like jury service.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "What can you do to participate in your local community?",
options: ["Volunteer, join community groups, attend meetings", "Ignore local issues", "Wait for the government to act only", "Pay taxes only"],
answer: "Volunteer, join community groups, attend meetings",
explanation: "Active participation includes volunteering, being involved in local organizations, and attending community meetings.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "What is a petition?",
options: ["A request signed by citizens asking the government to take action", "A law passed by Parliament", "A court ruling", "A government policy document"],
answer: "A request signed by citizens asking the government to take action",
explanation: "Petitions allow citizens to formally express their opinions and request action from government or local authorities.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Why is serving on a jury important?",
options: ["It helps the government create laws", "It allows citizens to participate directly in the justice system", "It is only a formality", "It is optional for MPs only"],
answer: "It allows citizens to participate directly in the justice system",
explanation: "Jury service is a civic duty that ensures trials are fair and that citizens are directly involved in justice.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "What is the role of local councils?",
options: ["To manage local services such as schools, housing, and waste collection", "To pass national laws", "To run elections only", "To enforce the Supreme Court decisions only"],
answer: "To manage local services such as schools, housing, and waste collection",
explanation: "Local councils oversee services and decisions that directly affect residents in their areas.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "How can citizens influence local government decisions?",
options: ["Vote in local elections, attend meetings, write to councillors", "Only pay taxes", "Wait for national government decisions", "Serve in the military only"],
answer: "Vote in local elections, attend meetings, write to councillors",
explanation: "Citizens can influence local governance by participating in elections, attending public meetings, and contacting their representatives.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "What is volunteering?",
options: ["Working without pay to help others or the community", "A mandatory government duty", "Paid government work only", "Running for Parliament"],
answer: "Working without pay to help others or the community",
explanation: "Volunteering allows citizens to support community initiatives and contribute to society without financial compensation.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Why is it important to obey the law?",
options: ["To avoid fines and imprisonment only", "To maintain order and protect rights in society", "It is optional", "Only MPs must obey laws"],
answer: "To maintain order and protect rights in society",
explanation: "Obeying the law ensures fairness, safety, and protection of rights for everyone in the community.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "What is a community group?",
options: ["An organization where people come together to work on common interests", "A political party", "A government department", "The police force"],
answer: "An organization where people come together to work on common interests",
explanation: "Community groups focus on local issues, volunteering, social activities, or cultural projects.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "How can citizens help protect the environment?",
options: ["Reduce waste, recycle, volunteer for local clean-ups", "Vote only", "Ignore government regulations", "Work only in government departments"],
answer: "Reduce waste, recycle, volunteer for local clean-ups",
explanation: "Active citizens contribute to environmental protection through responsible actions and community involvement.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "What is the benefit of attending public consultations?",
options: ["To learn about government policies and give opinions", "To avoid paying taxes", "To elect MPs", "To serve on a jury"],
answer: "To learn about government policies and give opinions",
explanation: "Public consultations allow citizens to provide feedback on policies before decisions are made.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Why is it important to respect the rights of others?",
options: ["To avoid legal trouble only", "To ensure fairness and equality in society", "It is optional", "Only government officials must respect rights"],
answer: "To ensure fairness and equality in society",
explanation: "Respecting others’ rights promotes harmony, equality, and the rule of law.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "How can you find out about local issues?",
options: ["Attend council meetings, read local news, visit council websites", "Wait for government emails only", "Ask your MP only", "Ignore local issues"],
answer: "Attend council meetings, read local news, visit council websites",
explanation: "Being informed about local issues helps citizens participate effectively in their communities.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "What is a local referendum?",
options: ["A vote by local residents on a specific local issue", "A general election", "A court ruling", "A law passed by Parliament"],
answer: "A vote by local residents on a specific local issue",
explanation: "Local referendums allow communities to decide on specific policies or projects affecting their area.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "How can you help your community if you cannot vote?",
options: ["Volunteer, attend meetings, support local initiatives", "Do nothing", "Work only for national government", "Only pay taxes"],
answer: "Volunteer, attend meetings, support local initiatives",
explanation: "Citizens can actively contribute to society through community involvement even if they are not eligible to vote.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "Why is it important to be informed about current events?",
options: ["To participate in society responsibly", "To ignore elections", "It is optional", "To become a government official only"],
answer: "To participate in society responsibly",
explanation: "Being informed enables citizens to make educated decisions and engage meaningfully in public life.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "What is the role of charity work in being an active citizen?",
options: ["To provide support and improve life for those in need", "To pay taxes", "To vote only", "To serve in government only"],
answer: "To provide support and improve life for those in need",
explanation: "Charity work allows citizens to contribute positively to society and help vulnerable members of the community.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "How can citizens influence national government decisions?",
options: ["Voting, contacting MPs, participating in consultations and campaigns", "Only volunteering locally", "Only serving on juries", "Ignoring government policies"],
answer: "Voting, contacting MPs, participating in consultations and campaigns",
explanation: "Active participation includes voting, lobbying MPs, signing petitions, and engaging in public consultations.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "What is a civic duty?",
options: ["A responsibility of citizens, such as obeying the law and paying taxes", "A voluntary activity only", "A government job", "A type of law"],
answer: "A responsibility of citizens, such as obeying the law and paying taxes",
explanation: "Civic duties are responsibilities that help maintain a fair and functioning society.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Why should citizens respect diversity?",
options: ["To promote equality and prevent discrimination", "It is optional", "Only government officials must do this", "To comply with tax law"],
answer: "To promote equality and prevent discrimination",
explanation: "Respecting diversity ensures that all members of society are treated fairly and inclusively.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "How can young people participate in civic life?",
options: ["Join youth councils, volunteer, learn about government", "Wait until they turn 18 only", "Ignore politics", "Serve only in local councils"],
answer: "Join youth councils, volunteer, learn about government",
explanation: "Young people can actively engage in civic life through volunteering, education, and participation in youth organizations.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "What is the importance of attending local meetings?",
options: ["To understand community issues and voice opinions", "To pay taxes", "To vote nationally only", "To enforce laws"],
answer: "To understand community issues and voice opinions",
explanation: "Attending meetings helps citizens stay informed, participate in decisions, and influence outcomes locally.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "What is a citizen’s role in a democracy?",
options: ["To vote, follow laws, participate in community, and hold leaders accountable", "To follow laws only", "To serve in government only", "To attend school only"],
answer: "To vote, follow laws, participate in community, and hold leaders accountable",
explanation: "In a democracy, citizens contribute through voting, obeying laws, volunteering, and engaging with public institutions to ensure accountability.",
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
let questionsFlaggedTab30 = JSON.parse(localStorage.getItem("questionsFlaggedTab30")) || [];

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
    const alreadyFlagged = questionsFlaggedTab30.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab30.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab30", JSON.stringify(questionsFlaggedTab30));
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
