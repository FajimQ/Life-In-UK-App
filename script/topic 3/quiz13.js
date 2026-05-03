const questions = [
{
question: "Which king founded the Tudor dynasty in 1485?",
options: ["Henry VII", "Henry VIII", "Edward VI", "Richard III"],
answer: "Henry VII",
explanation: "Henry VII became king after defeating Richard III at the Battle of Bosworth Field in 1485, starting the Tudor dynasty.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "Which king broke away from the Roman Catholic Church and created the Church of England?",
options: ["Henry VIII", "Edward VI", "James I", "Charles I"],
answer: "Henry VIII",
explanation: "Henry VIII established the Church of England in the 1530s after the Pope refused to grant him a divorce from Catherine of Aragon.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "What was the main reason Henry VIII created the Church of England?",
options: ["To divorce his wife", "To gain wealth from monasteries", "To stop wars", "To follow Protestant beliefs"],
answer: "To divorce his wife",
explanation: "Henry VIII wanted to annul his marriage to Catherine of Aragon, which the Pope refused to approve, leading him to break from Rome.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "Who succeeded Henry VIII as monarch?",
options: ["Edward VI", "Mary I", "Elizabeth I", "James I"],
answer: "Edward VI",
explanation: "Henry VIII’s son, Edward VI, became king at age nine and continued Protestant reforms.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "Which queen tried to restore Catholicism in England?",
options: ["Mary I", "Elizabeth I", "Anne Boleyn", "Catherine Parr"],
answer: "Mary I",
explanation: "Mary I, Henry VIII’s daughter, attempted to restore Catholicism and persecuted Protestants, earning her the nickname ‘Bloody Mary’.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Who became queen after Mary I?",
options: ["Elizabeth I", "Anne Boleyn", "Jane Seymour", "Catherine Howard"],
answer: "Elizabeth I",
explanation: "Elizabeth I, daughter of Henry VIII and Anne Boleyn, became queen in 1558 and established Protestantism firmly in England.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "What was the name of the failed Spanish attempt to invade England in 1588?",
options: ["The Spanish Armada", "The Battle of Trafalgar", "The War of Roses", "The Great Armada"],
answer: "The Spanish Armada",
explanation: "In 1588, Philip II of Spain sent the Spanish Armada to invade England, but it was defeated by Elizabeth’s navy and bad weather.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Which period of English history is known for peace and exploration under Elizabeth I?",
options: ["The Elizabethan Age", "The Victorian Era", "The Industrial Age", "The Stuart Era"],
answer: "The Elizabethan Age",
explanation: "The Elizabethan Age (1558–1603) was marked by peace, overseas exploration, and cultural growth, especially in theatre and poetry.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "Who wrote plays such as Hamlet and Macbeth during Elizabeth I’s reign?",
options: ["William Shakespeare", "Geoffrey Chaucer", "John Milton", "Charles Dickens"],
answer: "William Shakespeare",
explanation: "William Shakespeare, England’s most famous playwright, wrote many of his great works during the reign of Elizabeth I and James I.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Which Scottish king became king of England in 1603?",
options: ["James VI of Scotland", "Charles I", "Henry VII", "Robert the Bruce"],
answer: "James VI of Scotland",
explanation: "James VI of Scotland became James I of England in 1603, uniting the crowns of England and Scotland.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "What was the name of the 1605 plot to blow up Parliament and kill King James I?",
options: ["The Gunpowder Plot", "The Glorious Revolution", "The Civil War", "The Spanish Plot"],
answer: "The Gunpowder Plot",
explanation: "The Gunpowder Plot of 1605 was a failed attempt by Guy Fawkes and other Catholics to blow up Parliament and assassinate King James I.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "When is Guy Fawkes Night celebrated in the UK?",
options: ["5 November", "25 December", "1 January", "11 November"],
answer: "5 November",
explanation: "Guy Fawkes Night (Bonfire Night) is celebrated on 5 November with fireworks and bonfires to mark the failure of the Gunpowder Plot.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "Which conflict broke out in 1642 between the king and Parliament?",
options: ["The English Civil War", "The Glorious Revolution", "The Hundred Years’ War", "The War of the Roses"],
answer: "The English Civil War",
explanation: "The English Civil War (1642–1651) was fought between supporters of King Charles I (Royalists) and supporters of Parliament (Parliamentarians).",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Who led the Parliamentarian army during the Civil War?",
options: ["Oliver Cromwell", "Henry VIII", "James I", "Charles II"],
answer: "Oliver Cromwell",
explanation: "Oliver Cromwell led the Parliamentarian army (the ‘New Model Army’) and later became Lord Protector of England.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "What happened to King Charles I after the Civil War?",
options: ["He was executed", "He fled to France", "He abdicated", "He was imprisoned for life"],
answer: "He was executed",
explanation: "King Charles I was tried and executed in 1649 for treason, marking a historic moment when a monarch was held accountable by Parliament.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "What kind of government existed in England after Charles I was executed?",
options: ["A republic", "A monarchy", "A dictatorship", "A democracy"],
answer: "A republic",
explanation: "After Charles I’s execution, England became a republic known as the Commonwealth, led by Oliver Cromwell.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "What title did Oliver Cromwell take when ruling the country?",
options: ["Lord Protector", "Prime Minister", "King", "Governor"],
answer: "Lord Protector",
explanation: "Oliver Cromwell ruled as Lord Protector of the Commonwealth from 1653 until his death in 1658.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "What event in 1660 marked the return of the monarchy?",
options: ["The Restoration", "The Glorious Revolution", "The Reformation", "The Magna Carta"],
answer: "The Restoration",
explanation: "The Restoration in 1660 marked the return of Charles II to the throne after the collapse of Cromwell’s republic.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "Which two disasters struck London in the 1660s?",
options: ["The Great Plague and the Great Fire of London", "The Civil War and the Armada", "The Famine and the Flood", "The War and the Rebellion"],
answer: "The Great Plague and the Great Fire of London",
explanation: "The Great Plague (1665) and the Great Fire of London (1666) devastated the city during Charles II’s reign.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Who became king after Charles II died in 1685?",
options: ["James II", "William III", "George I", "Henry VIII"],
answer: "James II",
explanation: "Charles II’s brother, James II, became king in 1685 but was unpopular for his Catholic faith and attempts to increase royal power.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "What was the Glorious Revolution of 1688?",
options: ["The overthrow of King James II by William of Orange", "The English Civil War", "The end of the Tudor dynasty", "The founding of Parliament"],
answer: "The overthrow of King James II by William of Orange",
explanation: "The Glorious Revolution in 1688 saw Protestant William of Orange and his wife Mary invited to take the throne, replacing James II without bloodshed.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "What did the Bill of Rights of 1689 establish?",
options: ["That Parliament had more power than the monarch", "That the monarch ruled without Parliament", "Religious freedom for all", "The end of monarchy"],
answer: "That Parliament had more power than the monarch",
explanation: "The Bill of Rights of 1689 limited the powers of the monarch and confirmed that Parliament was supreme.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "What religious group gained more freedom under William and Mary?",
options: ["Protestants", "Catholics", "Jews", "Muslims"],
answer: "Protestants",
explanation: "The Toleration Act (1689) gave freedom of worship to Protestant dissenters, though not full equality.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Which two countries were united under one monarch after the Glorious Revolution?",
options: ["England and Scotland", "England and Ireland", "England and Wales", "Scotland and Ireland"],
answer: "England and Scotland",
explanation: "After 1688, England and Scotland shared a monarch, although they remained separate kingdoms until the Act of Union in 1707.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Who succeeded William and Mary on the throne?",
options: ["Queen Anne", "George I", "James II", "Elizabeth I"],
answer: "Queen Anne",
explanation: "Queen Anne became monarch in 1702 and was the last of the Stuart monarchs.",
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
let questionsFlaggedTab13 = JSON.parse(localStorage.getItem("questionsFlaggedTab13")) || [];

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
    const alreadyFlagged = questionsFlaggedTab13.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab13.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab13", JSON.stringify(questionsFlaggedTab13));
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
