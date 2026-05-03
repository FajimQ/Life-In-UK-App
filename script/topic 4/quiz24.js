const questions = [
{
question: "What is the most widely practised religion in the UK?",
options: ["Christianity", "Islam", "Hinduism", "Judaism"],
answer: "Christianity",
explanation: "Christianity, particularly the Church of England, is the largest religion in the UK.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "Which church is the official church of England?",
options: ["Roman Catholic Church", "Church of Scotland", "Church of England", "Methodist Church"],
answer: "Church of England",
explanation: "The Church of England is the established church in England and plays a ceremonial role in national life.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "Which holiday is associated with the Christian celebration of Jesus' birth?",
options: ["Easter", "Christmas", "Ramadan", "Diwali"],
answer: "Christmas",
explanation: "Christmas, celebrated on 25th December, commemorates the birth of Jesus Christ.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "Which day commemorates Jesus' resurrection in Christianity?",
options: ["Christmas", "Easter", "Boxing Day", "Remembrance Day"],
answer: "Easter",
explanation: "Easter Sunday celebrates the resurrection of Jesus Christ and is a major Christian festival in the UK.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "What is the main place of worship for Muslims in the UK?",
options: ["Church", "Synagogue", "Mosque", "Temple"],
answer: "Mosque",
explanation: "Muslims worship in mosques, which are present in many towns and cities across the UK.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Where do Jewish people worship in the UK?",
options: ["Mosque", "Synagogue", "Church", "Temple"],
answer: "Synagogue",
explanation: "Jewish communities in the UK gather in synagogues for religious services and community events.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "Which religious festival is celebrated by Muslims by fasting during the day for a month?",
options: ["Easter", "Ramadan", "Diwali", "Hanukkah"],
answer: "Ramadan",
explanation: "Ramadan is the Islamic holy month during which Muslims fast from dawn to sunset.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Which religious community celebrates Diwali in the UK?",
options: ["Christians", "Hindus", "Muslims", "Jews"],
answer: "Hindus",
explanation: "Diwali, the festival of lights, is celebrated by Hindu communities in the UK.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "Which day commemorates those who have died in wars in the UK?",
options: ["Christmas", "Remembrance Day", "Easter", "Boxing Day"],
answer: "Remembrance Day",
explanation: "Remembrance Day, on 11 November, honours the fallen soldiers of the armed forces.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Which religious leader is associated with the Anglican Church in England?",
options: ["Pope", "Archbishop of Canterbury", "Chief Rabbi", "Imam"],
answer: "Archbishop of Canterbury",
explanation: "The Archbishop of Canterbury is the senior bishop and principal leader of the Church of England.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "What is a faith community?",
options: ["A group of people living in the same street", "A group of people sharing the same religion or beliefs", "A government department", "A social club"],
answer: "A group of people sharing the same religion or beliefs",
explanation: "Faith communities are groups where people practice religion together and support each other socially and spiritually.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "Which of these is a responsibility of citizens towards religious communities?",
options: ["To attend all services", "To respect beliefs and freedom of worship", "To convert to one religion", "To donate money only to the Church of England"],
answer: "To respect beliefs and freedom of worship",
explanation: "Citizens in the UK are expected to respect the religious beliefs and practices of others, ensuring freedom of worship.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "Which UK law protects freedom of religion?",
options: ["Human Rights Act 1998", "Magna Carta", "Habeas Corpus Act", "Bill of Rights 1689"],
answer: "Human Rights Act 1998",
explanation: "The Human Rights Act 1998 guarantees freedom of thought, conscience, and religion in the UK.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Which Christian festival is celebrated 40 days before Easter?",
options: ["Advent", "Lent", "Christmas", "Pentecost"],
answer: "Lent",
explanation: "Lent is a 40-day period of fasting and reflection observed by many Christians leading up to Easter.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "Which community activity is common in UK towns and villages?",
options: ["Neighbourhood watch", "Only online groups", "Private clubs only", "Government meetings only"],
answer: "Neighbourhood watch",
explanation: "Many communities in the UK have Neighbourhood Watch programs where residents work together to improve local safety.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Who can perform religious marriages in the UK?",
options: ["Any resident", "Only government officials", "Registered religious ministers or celebrants", "Police officers"],
answer: "Registered religious ministers or celebrants",
explanation: "Religious marriages must be conducted by authorised ministers or celebrants in registered places of worship.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Which festival marks the end of Ramadan?",
options: ["Eid al-Fitr", "Easter", "Christmas", "Diwali"],
answer: "Eid al-Fitr",
explanation: "Eid al-Fitr is a Muslim festival celebrating the end of Ramadan with prayers, feasting, and charity.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "Which UK law allows voluntary organisations and charities to operate freely?",
options: ["Charities Act 2011", "Magna Carta", "Bill of Rights 1689", "Habeas Corpus Act 1679"],
answer: "Charities Act 2011",
explanation: "The Charities Act 2011 regulates charities in England and Wales, allowing them to operate for public benefit.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "Which faith is associated with the Sabbath on Saturday?",
options: ["Christianity", "Judaism", "Islam", "Hinduism"],
answer: "Judaism",
explanation: "In Judaism, the Sabbath (Shabbat) is observed from Friday evening to Saturday evening as a day of rest and worship.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Which Christian service is usually held on Sundays?",
options: ["Mass", "Bible Study", "Church service", "Easter vigil"],
answer: "Church service",
explanation: "Most Christian denominations hold services on Sunday, which is considered a holy day.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "Which UK legislation prevents discrimination based on religion?",
options: ["Equality Act 2010", "Human Rights Act 1998", "Bill of Rights 1689", "Habeas Corpus Act 1679"],
answer: "Equality Act 2010",
explanation: "The Equality Act 2010 protects people from discrimination based on religion or belief in the UK.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "What is the purpose of interfaith dialogue?",
options: ["To debate religion", "To encourage understanding and cooperation between different faiths", "To convert people", "To form political parties"],
answer: "To encourage understanding and cooperation between different faiths",
explanation: "Interfaith dialogue promotes mutual respect and understanding among different religious communities.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "Which UK national event often includes moments of reflection for the whole community?",
options: ["Remembrance Day", "Christmas", "Easter", "New Year"],
answer: "Remembrance Day",
explanation: "Remembrance Day involves moments of silence and reflection, honoring those who served in conflicts.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Which group often organises community events in towns and villages?",
options: ["Local councils", "Faith groups and voluntary organisations", "Police only", "Schools only"],
answer: "Faith groups and voluntary organisations",
explanation: "Faith and voluntary groups often play a key role in organising community activities, festivals, and charity events.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Which UK law protects freedom of expression and religion together?",
options: ["Human Rights Act 1998", "Charities Act 2011", "Equality Act 2010", "Bill of Rights 1689"],
answer: "Human Rights Act 1998",
explanation: "The Human Rights Act 1998 ensures individuals can express beliefs and practise religion freely while respecting the law.",
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
let questionsFlaggedTab24 = JSON.parse(localStorage.getItem("questionsFlaggedTab24")) || [];

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
    const alreadyFlagged = questionsFlaggedTab24.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab24.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab24", JSON.stringify(questionsFlaggedTab24));
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
