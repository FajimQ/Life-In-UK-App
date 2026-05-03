const questions = [
{
question: "What is the most common type of housing in the UK?",
options: ["Detached house", "Terraced house", "Flat/apartment", "Cottage"],
answer: "Terraced house",
explanation: "Terraced houses, lined in rows with shared walls, are very common in UK towns and cities.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "Which form of transport is most widely used for commuting in London?",
options: ["Bus", "Underground (Tube)", "Taxi", "Bicycle"],
answer: "Underground (Tube)",
explanation: "The London Underground, also known as the Tube, is the primary rapid transit system in London.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "What is the main meal of the day for most people in the UK?",
options: ["Breakfast", "Lunch", "Dinner/Evening meal", "Tea"],
answer: "Dinner/Evening meal",
explanation: "Dinner, usually in the evening, is traditionally the largest meal of the day in the UK.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "What is 'afternoon tea'?",
options: ["A large evening meal", "A light meal with tea, sandwiches, and cakes", "Breakfast", "A type of coffee ritual"],
answer: "A light meal with tea, sandwiches, and cakes",
explanation: "Afternoon tea is a British tradition of enjoying tea with small snacks, typically in mid-afternoon.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "Which supermarket chain originated in the UK?",
options: ["Tesco", "Walmart", "Kroger", "Aldi"],
answer: "Tesco",
explanation: "Tesco is a British supermarket chain, founded in London in 1919.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "What is the legal drinking age in the UK?",
options: ["16", "18", "21", "25"],
answer: "18",
explanation: "It is illegal to buy alcohol in the UK if you are under 18 years old.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "Which takeaway food is traditionally British?",
options: ["Fish and chips", "Pizza", "Sushi", "Tacos"],
answer: "Fish and chips",
explanation: "Fish and chips is a classic British takeaway dish, usually wrapped in paper and eaten hot.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "What does the NHS provide?",
options: ["Private healthcare", "Free public healthcare funded by taxes", "Health insurance", "Charity healthcare"],
answer: "Free public healthcare funded by taxes",
explanation: "The NHS (National Health Service) provides healthcare free at the point of use for UK residents.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "Which monarch appears on all UK banknotes?",
options: ["Queen Elizabeth II", "King Charles III", "Queen Victoria", "Prince William"],
answer: "Queen Elizabeth II",
explanation: "Banknotes in the UK traditionally feature the reigning monarch, most recently Queen Elizabeth II.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "What is the largest religion in the UK?",
options: ["Christianity", "Islam", "Hinduism", "Judaism"],
answer: "Christianity",
explanation: "Christianity, particularly the Church of England, is the largest religion in the UK.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "Which public holiday is celebrated on 25th December?",
options: ["Easter", "Christmas Day", "Boxing Day", "New Year"],
answer: "Christmas Day",
explanation: "Christmas Day is a national holiday in the UK, celebrated on 25th December.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "What is a 'pub'?",
options: ["A library", "A place to eat and drink socially", "A school", "A museum"],
answer: "A place to eat and drink socially",
explanation: "Pubs (public houses) are central to British social life, serving drinks and meals.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "What is the national flower of England?",
options: ["Rose", "Daffodil", "Thistle", "Shamrock"],
answer: "Rose",
explanation: "The rose is the national flower of England and a historic emblem.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "What traditional clothing is associated with Scotland?",
options: ["Kimono", "Kilt", "Sari", "Toga"],
answer: "Kilt",
explanation: "Kilts are traditional Scottish garments, often worn at formal events or cultural festivals.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "What is the official currency of the UK?",
options: ["Euro", "US Dollar", "Pound Sterling", "Yen"],
answer: "Pound Sterling",
explanation: "The UK uses the pound (£), also called sterling, as its official currency.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Which festival is celebrated with fireworks on 5th November?",
options: ["Easter", "Bonfire Night/Guy Fawkes Night", "Christmas", "Halloween"],
answer: "Bonfire Night/Guy Fawkes Night",
explanation: "Bonfire Night commemorates the failure of the Gunpowder Plot in 1605 and is celebrated with fireworks and bonfires.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "What is the most common way to travel long distances in the UK?",
options: ["Car", "Train", "Bicycle", "Walking"],
answer: "Train",
explanation: "The UK has an extensive train network connecting cities and regions, making trains the main method for long-distance travel.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "What is the traditional Sunday meal in the UK?",
options: ["Fish and chips", "Full English breakfast", "Roast dinner with meat, potatoes, and vegetables", "Sandwiches"],
answer: "Roast dinner with meat, potatoes, and vegetables",
explanation: "The Sunday roast is a traditional family meal, often served with gravy and Yorkshire pudding.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "What is the UK’s most popular sport?",
options: ["Cricket", "Football (Soccer)", "Tennis", "Rugby"],
answer: "Football (Soccer)",
explanation: "Football is the most widely played and followed sport in the UK.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "What is a neighbourhood watch?",
options: ["A local police office", "A TV show", "A community program where residents help monitor safety", "A government department"],
answer: "A community program where residents help monitor safety",
explanation: "Neighbourhood Watch groups involve local residents working together to reduce crime and improve community safety.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "Which institution provides public libraries in the UK?",
options: ["The NHS", "Local councils", "The BBC", "The House of Commons"],
answer: "Local councils",
explanation: "Public libraries and reading resources are funded and managed by local councils.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "What is a voluntary organisation?",
options: ["A government office", "A charity run by volunteers", "A political party", "A private company"],
answer: "A charity run by volunteers",
explanation: "Voluntary organisations are charities or community groups run by volunteers to support local needs.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "Which holiday is the May Bank Holiday?",
options: ["1st May public holiday", "Christmas Day", "Easter Monday", "Halloween"],
answer: "1st May public holiday",
explanation: "The May Bank Holiday is celebrated on the first Monday of May each year.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Why is recycling important in communities?",
options: ["To create more waste", "To reduce waste and protect the environment", "To generate taxes", "To decorate parks"],
answer: "To reduce waste and protect the environment",
explanation: "Recycling helps manage waste sustainably, conserving resources and protecting the environment.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "What is a suburb in the UK?",
options: ["A city centre", "A rural village", "A residential area on the outskirts of a town or city", "A type of park"],
answer: "A residential area on the outskirts of a town or city",
explanation: "Suburbs are residential neighborhoods outside city centers where many people live.",
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
let questionsFlaggedTab21 = JSON.parse(localStorage.getItem("questionsFlaggedTab21")) || [];

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
    const alreadyFlagged = questionsFlaggedTab21.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab21.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab21", JSON.stringify(questionsFlaggedTab21));
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
