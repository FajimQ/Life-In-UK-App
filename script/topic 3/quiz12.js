const questions = [
{
question: "After the Romans left Britain, which groups invaded the country?",
options: ["Angles, Saxons, and Jutes", "Vikings", "Normans", "Romans"],
answer: "Angles, Saxons, and Jutes",
explanation: "After the Romans withdrew around AD 410, Britain was invaded by tribes from northern Europe — the Angles, Saxons, and Jutes — who settled across the country.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "The name ‘England’ comes from which group of people?",
options: ["The Angles", "The Romans", "The Celts", "The Normans"],
answer: "The Angles",
explanation: "The name ‘England’ derives from ‘Angle-land’, meaning the land of the Angles.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "Who were the Vikings?",
options: ["Invaders from Scandinavia", "Farmers from France", "Roman soldiers", "Merchants from Spain"],
answer: "Invaders from Scandinavia",
explanation: "The Vikings were seafaring warriors and traders from Denmark, Norway, and Sweden who invaded and settled parts of Britain from the late 8th century.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "What was the Danelaw?",
options: ["An area of England under Viking control", "A law passed by King Alfred", "A Roman road", "A medieval charter"],
answer: "An area of England under Viking control",
explanation: "The Danelaw referred to parts of northern and eastern England where Viking laws and customs were observed.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "Which Anglo-Saxon king successfully defended England against Viking invasion?",
options: ["Alfred the Great", "William the Conqueror", "Harold II", "Edward the Confessor"],
answer: "Alfred the Great",
explanation: "Alfred the Great, king of Wessex, defeated the Vikings in battle and helped unite England in the 9th century.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Who became king after Alfred the Great and continued uniting England?",
options: ["Aethelstan", "Edward the Confessor", "Harold II", "William I"],
answer: "Aethelstan",
explanation: "Aethelstan, Alfred’s grandson, became the first king to rule over a united England.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "When did the Norman Conquest take place?",
options: ["1066", "1215", "800", "1485"],
answer: "1066",
explanation: "The Norman Conquest occurred in 1066 when William, Duke of Normandy, defeated King Harold at the Battle of Hastings.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Who was defeated at the Battle of Hastings?",
options: ["King Harold II", "William the Conqueror", "King Edward", "King Alfred"],
answer: "King Harold II",
explanation: "King Harold II was defeated by William the Conqueror at the Battle of Hastings in 1066.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "Which famous document did William the Conqueror commission in 1086?",
options: ["The Domesday Book", "The Magna Carta", "The Bill of Rights", "The Book of Kells"],
answer: "The Domesday Book",
explanation: "The Domesday Book recorded land ownership and resources across England for taxation purposes.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "What language did Norman rulers introduce to England?",
options: ["French", "German", "Latin", "Celtic"],
answer: "French",
explanation: "The Normans brought the French language to England, influencing English vocabulary and law.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "Who signed the Magna Carta in 1215?",
options: ["King John", "King Edward I", "William the Conqueror", "Henry VIII"],
answer: "King John",
explanation: "King John was forced by his barons to sign the Magna Carta in 1215, limiting royal power and establishing that even the king was subject to the law.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "What did the Magna Carta guarantee?",
options: ["The rule of law and rights for free men", "Voting rights for all", "Freedom of religion", "The abolition of slavery"],
answer: "The rule of law and rights for free men",
explanation: "The Magna Carta established that everyone, including the king, must obey the law and granted rights to free men.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "What was Parliament originally created for?",
options: ["To advise the king and approve taxes", "To write the Bible", "To elect the monarch", "To manage trade"],
answer: "To advise the king and approve taxes",
explanation: "Parliament began as a council of nobles and clergy who advised the monarch and agreed to new taxes.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Which war was fought between the House of Lancaster and the House of York?",
options: ["The Wars of the Roses", "The Hundred Years’ War", "The Civil War", "The Scottish War"],
answer: "The Wars of the Roses",
explanation: "The Wars of the Roses (1455–1485) were fought between the House of Lancaster (red rose) and the House of York (white rose) for the English throne.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "Who became king after winning the Battle of Bosworth Field in 1485?",
options: ["Henry VII", "Richard III", "Edward IV", "William I"],
answer: "Henry VII",
explanation: "Henry Tudor defeated Richard III at the Battle of Bosworth Field, becoming King Henry VII and starting the Tudor dynasty.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Which famous medieval document influenced modern democracy?",
options: ["The Magna Carta", "The Bible", "The Domesday Book", "The King’s Charter"],
answer: "The Magna Carta",
explanation: "The Magna Carta became a foundation for constitutional government and the development of democracy.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "What was the Black Death?",
options: ["A plague that killed millions in the 14th century", "A battle between nobles", "A Viking invasion", "A famine"],
answer: "A plague that killed millions in the 14th century",
explanation: "The Black Death (1348–1350) was a devastating plague that killed about one-third of Britain’s population.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "What was one major result of the Black Death?",
options: ["Labour shortages and social change", "More wars", "New castles were built", "Stronger monarchy"],
answer: "Labour shortages and social change",
explanation: "The Black Death caused a shortage of workers, leading to higher wages and social mobility for peasants.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "Which war was fought between England and France from 1337 to 1453?",
options: ["The Hundred Years’ War", "The Wars of the Roses", "The Civil War", "The Napoleonic War"],
answer: "The Hundred Years’ War",
explanation: "The Hundred Years’ War was a long conflict between England and France over territorial claims and succession.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Who was a famous English leader during the Hundred Years’ War?",
options: ["King Henry V", "Richard III", "Edward the Confessor", "William I"],
answer: "King Henry V",
explanation: "Henry V led England to victory at the Battle of Agincourt in 1415, one of England’s greatest military triumphs.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "What architectural style became popular during the Middle Ages?",
options: ["Gothic", "Baroque", "Romanesque", "Victorian"],
answer: "Gothic",
explanation: "Gothic architecture, with its pointed arches and tall windows, was used in many cathedrals and churches during the Middle Ages.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "What was the main religion in medieval England?",
options: ["Christianity", "Judaism", "Islam", "Paganism"],
answer: "Christianity",
explanation: "Christianity, under the Roman Catholic Church, was the dominant religion throughout the Middle Ages.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "What was the name of the system where peasants worked land owned by nobles?",
options: ["Feudal system", "Democracy", "Republic", "Guild system"],
answer: "Feudal system",
explanation: "The feudal system organised society by land ownership, with peasants working for lords in exchange for protection.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Which Scottish hero fought against English rule in the late 13th century?",
options: ["William Wallace", "Robert the Bruce", "Alexander II", "David I"],
answer: "William Wallace",
explanation: "William Wallace led the Scots in their struggle for independence against English rule, famously defeating the English at the Battle of Stirling Bridge in 1297.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Which Scottish king won independence for Scotland from England?",
options: ["Robert the Bruce", "William Wallace", "James I", "Charles I"],
answer: "Robert the Bruce",
explanation: "Robert the Bruce defeated the English at the Battle of Bannockburn in 1314, securing Scotland’s independence for a time.",
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
let questionsFlaggedTab12 = JSON.parse(localStorage.getItem("questionsFlaggedTab12")) || [];

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
    const alreadyFlagged = questionsFlaggedTab12.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab12.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab12", JSON.stringify(questionsFlaggedTab12));
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
