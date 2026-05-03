const questions = [
{
question: "Who were the first people to live in Britain after the last Ice Age?",
options: ["Hunter-gatherers", "Romans", "Vikings", "Celts"],
answer: "Hunter-gatherers",
explanation: "The earliest people in Britain were hunter-gatherers who lived off the land after the last Ice Age, around 10,000 years ago.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "What was the name given to the early farming communities that built stone monuments like Stonehenge?",
options: ["Neolithic people", "Romans", "Normans", "Anglo-Saxons"],
answer: "Neolithic people",
explanation: "Neolithic (New Stone Age) people farmed the land and built monuments such as Stonehenge and Skara Brae.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "What is Stonehenge believed to have been used for?",
options: ["A temple or burial site", "A Roman fort", "A Viking shipyard", "A royal palace"],
answer: "A temple or burial site",
explanation: "Stonehenge, built around 3000–2000 BC, is believed to have been used for ceremonies or burials.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "Who were the Celts?",
options: ["Tribes from central Europe who settled in Britain", "Roman soldiers", "Vikings from Scandinavia", "Farmers from Africa"],
answer: "Tribes from central Europe who settled in Britain",
explanation: "The Celts were Iron Age tribes who migrated from central Europe and lived in Britain before the Roman invasion.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "What were Celtic leaders called?",
options: ["Druids", "Knights", "Senators", "Generals"],
answer: "Druids",
explanation: "Druids were Celtic priests who performed religious ceremonies and advised tribal leaders.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "When did the Romans first attempt to invade Britain?",
options: ["55 BC", "1066 AD", "43 AD", "410 AD"],
answer: "55 BC",
explanation: "Julius Caesar first attempted to invade Britain in 55 BC, but his army was forced to withdraw.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "Which Roman emperor successfully invaded Britain in AD 43?",
options: ["Emperor Claudius", "Julius Caesar", "Nero", "Augustus"],
answer: "Emperor Claudius",
explanation: "The successful Roman invasion of Britain was led by Emperor Claudius in AD 43.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Who led a famous rebellion against the Romans in AD 60–61?",
options: ["Boudicca", "Cleopatra", "Queen Victoria", "Catherine of Aragon"],
answer: "Boudicca",
explanation: "Boudicca, queen of the Iceni tribe, led a major revolt against the Roman occupiers.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "What was the name of the wall built by the Romans to protect northern Britain from tribal attacks?",
options: ["Hadrian’s Wall", "The Great Wall of Britain", "Offa’s Dyke", "The Iron Wall"],
answer: "Hadrian’s Wall",
explanation: "Hadrian’s Wall, built around AD 122, marked the northern boundary of the Roman Empire in Britain.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Which area of Britain remained unconquered by the Romans?",
options: ["Scotland", "England", "Wales", "Cornwall"],
answer: "Scotland",
explanation: "The Romans never fully conquered Scotland, which remained outside their control.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "What was the capital of Roman Britain?",
options: ["Londinium", "Eboracum", "Camulodunum", "Bath"],
answer: "Londinium",
explanation: "Londinium (modern-day London) became the capital of Roman Britain and an important trading centre.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "What did the Romans introduce to Britain?",
options: ["Roads, towns, law, and written records", "Gunpowder", "Steam engines", "Castles"],
answer: "Roads, towns, law, and written records",
explanation: "The Romans brought roads, new towns, written language (Latin), and systems of law and government to Britain.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "What language did the Romans bring to Britain?",
options: ["Latin", "Celtic", "Greek", "Old English"],
answer: "Latin",
explanation: "Latin was the language of government and education during Roman rule in Britain.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "What religion did the Romans introduce to Britain?",
options: ["Christianity", "Islam", "Judaism", "Hinduism"],
answer: "Christianity",
explanation: "Christianity spread in Roman Britain and became an established religion by the 4th century AD.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "When did the Romans leave Britain?",
options: ["Around AD 410", "AD 1066", "AD 55", "AD 700"],
answer: "Around AD 410",
explanation: "The Romans withdrew from Britain around AD 410 as their empire was under threat elsewhere.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Why did the Romans leave Britain?",
options: ["They needed to defend other parts of their empire", "They were defeated by the Celts", "The climate was too cold", "They found no resources"],
answer: "They needed to defend other parts of their empire",
explanation: "Roman troops left to defend other parts of the empire as it came under attack from barbarian tribes.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Which group began invading Britain after the Romans left?",
options: ["Angles, Saxons, and Jutes", "Vikings", "Celts", "Normans"],
answer: "Angles, Saxons, and Jutes",
explanation: "After the Romans left, tribes from northern Europe — the Angles, Saxons, and Jutes — began to settle in Britain.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "What kind of buildings did the Romans construct across Britain?",
options: ["Stone villas, baths, and forts", "Wooden castles", "Thatched huts", "Skyscrapers"],
answer: "Stone villas, baths, and forts",
explanation: "Roman architecture in Britain included villas, temples, baths, and military forts.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "What is Skara Brae?",
options: ["A Neolithic village in Orkney", "A Roman town", "A Celtic fort", "A Viking settlement"],
answer: "A Neolithic village in Orkney",
explanation: "Skara Brae is a well-preserved Neolithic village in Orkney, northern Scotland, dating back over 5,000 years.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "What did the Celts build for defence?",
options: ["Hill forts", "Castles", "Walls", "Stone towers"],
answer: "Hill forts",
explanation: "Celtic tribes built hill forts on elevated ground for defence and as community centres.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "Which famous Roman road still exists in parts of Britain today?",
options: ["Watling Street", "The Great North Road", "Hadrian’s Way", "The A1"],
answer: "Watling Street",
explanation: "Watling Street was one of the main Roman roads connecting Dover to northwestern Britain.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "What did the Romans call Britain?",
options: ["Britannia", "Albion", "Angleland", "Caledonia"],
answer: "Britannia",
explanation: "The Romans called the island ‘Britannia’, and it became a Roman province under that name.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "What were Roman soldiers called?",
options: ["Legionaries", "Knights", "Warriors", "Squires"],
answer: "Legionaries",
explanation: "Roman soldiers were known as legionaries and served in units called legions.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Which Roman town was destroyed by a volcanic eruption on the continent, giving us insight into Roman life?",
options: ["Pompeii", "Londinium", "Colchester", "Bath"],
answer: "Pompeii",
explanation: "Though not in Britain, Pompeii’s preservation has taught historians about Roman daily life, similar to that in Roman Britain.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "What legacy did the Romans leave behind in Britain?",
options: ["Roads, towns, language, and law", "Castles and knights", "Steam engines", "Feudal system"],
answer: "Roads, towns, language, and law",
explanation: "The Romans left lasting influences in infrastructure, governance, and culture — some still visible today.",
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
let questionsFlaggedTab11 = JSON.parse(localStorage.getItem("questionsFlaggedTab11")) || [];

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
    const alreadyFlagged = questionsFlaggedTab11.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab11.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab11", JSON.stringify(questionsFlaggedTab11));
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
