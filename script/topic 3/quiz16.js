const questions = [
{
question: "Who became Queen of the United Kingdom in 1952?",
options: ["Queen Elizabeth II", "Queen Victoria", "Queen Elizabeth I", "Queen Mary"],
answer: "Queen Elizabeth II",
explanation: "Queen Elizabeth II ascended the throne in 1952 and became the longest-serving British monarch until her death in 2022.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "Who was the British Prime Minister during most of the 1950s?",
options: ["Winston Churchill", "Harold Macmillan", "Clement Attlee", "Anthony Eden"],
answer: "Winston Churchill",
explanation: "Churchill returned to power as Prime Minister from 1951 to 1955, leading Britain during the early post-war years.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "When did the UK join the European Economic Community (EEC)?",
options: ["1973", "1960", "1981", "1992"],
answer: "1973",
explanation: "The UK joined the EEC, the forerunner of the European Union, in 1973 under Prime Minister Edward Heath.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "When did the UK vote to leave the European Union?",
options: ["2016", "2019", "2010", "2020"],
answer: "2016",
explanation: "In the 2016 referendum, the UK voted to leave the European Union — a process known as 'Brexit'.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "Who was the UK’s first female Prime Minister?",
options: ["Margaret Thatcher", "Theresa May", "Liz Truss", "Barbara Castle"],
answer: "Margaret Thatcher",
explanation: "Margaret Thatcher became Prime Minister in 1979, leading the Conservative government until 1990.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "What nickname was Margaret Thatcher often given?",
options: ["The Iron Lady", "The Queen of Hearts", "The People’s PM", "The Red Baroness"],
answer: "The Iron Lady",
explanation: "She was called 'The Iron Lady' for her strong leadership and firm stance on policies and the Cold War.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "What major war did Britain fight in 1982?",
options: ["The Falklands War", "The Gulf War", "The Korean War", "The Suez Crisis"],
answer: "The Falklands War",
explanation: "The Falklands War was fought in 1982 between Britain and Argentina over the Falkland Islands — Britain was victorious.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Who was the first woman to be elected as a Member of Parliament (MP)?",
options: ["Nancy Astor", "Margaret Thatcher", "Emmeline Pankhurst", "Theresa May"],
answer: "Nancy Astor",
explanation: "Nancy Astor became the first woman to take her seat in the House of Commons in 1919.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "What was the name of the economic crisis in the 1970s caused by high inflation and strikes?",
options: ["The Winter of Discontent", "The Great Depression", "The Oil Crisis", "The Recession"],
answer: "The Winter of Discontent",
explanation: "In 1978–79, Britain faced widespread strikes and economic turmoil known as the Winter of Discontent.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "What event in 1997 marked the end of British rule in Hong Kong?",
options: ["The handover of Hong Kong to China", "Hong Kong independence", "British-Chinese war", "Formation of the Commonwealth"],
answer: "The handover of Hong Kong to China",
explanation: "In 1997, Britain transferred sovereignty of Hong Kong to China after 156 years of British rule.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "Who became Prime Minister in 1997 and led the Labour government for 10 years?",
options: ["Tony Blair", "Gordon Brown", "John Major", "David Cameron"],
answer: "Tony Blair",
explanation: "Tony Blair became Prime Minister in 1997, introducing reforms in education, health, and devolution to Scotland and Wales.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "What agreement brought peace to Northern Ireland in 1998?",
options: ["The Good Friday Agreement", "The Belfast Accord", "The Peace of Ulster", "The Northern Ireland Treaty"],
answer: "The Good Friday Agreement",
explanation: "The 1998 Good Friday Agreement established a devolved government in Northern Ireland and helped end decades of conflict.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "When was the Scottish Parliament officially opened?",
options: ["1999", "1998", "2001", "2003"],
answer: "1999",
explanation: "The Scottish Parliament opened in 1999, giving Scotland its own devolved legislative body for the first time in nearly 300 years.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Who became the first Mayor of London in 2000?",
options: ["Ken Livingstone", "Boris Johnson", "Sadiq Khan", "David Cameron"],
answer: "Ken Livingstone",
explanation: "Ken Livingstone was elected as the first Mayor of London in 2000, overseeing the city’s government.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "What year did London host the Olympic Games for the third time?",
options: ["2012", "1948", "1908", "2000"],
answer: "2012",
explanation: "London hosted the Olympic Games in 2012, becoming the first city to host them three times (1908, 1948, 2012).",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Who became the UK’s first Muslim Mayor?",
options: ["Sadiq Khan", "Rishi Sunak", "Nadhim Zahawi", "Mohammad Sarwar"],
answer: "Sadiq Khan",
explanation: "Sadiq Khan was elected Mayor of London in 2016, becoming the city’s first Muslim mayor.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "When did the UK officially leave the European Union?",
options: ["31 January 2020", "23 June 2016", "29 March 2019", "1 January 2021"],
answer: "31 January 2020",
explanation: "The UK formally left the European Union on 31 January 2020, completing the Brexit process.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "Who became Prime Minister after Theresa May?",
options: ["Boris Johnson", "David Cameron", "Rishi Sunak", "Liz Truss"],
answer: "Boris Johnson",
explanation: "Boris Johnson became Prime Minister in 2019, leading the UK through the final stages of Brexit and the COVID-19 pandemic.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "What global crisis began in 2020 affecting all parts of life in the UK?",
options: ["The COVID-19 pandemic", "The financial crash", "The Gulf War", "The oil shortage"],
answer: "The COVID-19 pandemic",
explanation: "The COVID-19 pandemic began in 2020, leading to nationwide lockdowns, economic challenges, and mass vaccination efforts.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Who became the first British Asian Prime Minister?",
options: ["Rishi Sunak", "Boris Johnson", "Sadiq Khan", "Priti Patel"],
answer: "Rishi Sunak",
explanation: "Rishi Sunak became the first British Asian and Hindu Prime Minister of the UK in 2022.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "When did Queen Elizabeth II pass away?",
options: ["2022", "2021", "2019", "2020"],
answer: "2022",
explanation: "Queen Elizabeth II passed away in 2022 after a historic 70-year reign — the longest in British history.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Who succeeded Queen Elizabeth II as monarch?",
options: ["King Charles III", "Prince William", "Prince Philip", "King George VII"],
answer: "King Charles III",
explanation: "Upon Queen Elizabeth II’s death in 2022, her son became King Charles III.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "Which countries make up the United Kingdom today?",
options: ["England, Scotland, Wales, and Northern Ireland", "England, Ireland, Scotland, and Wales", "Britain and Ireland", "England and Scotland"],
answer: "England, Scotland, Wales, and Northern Ireland",
explanation: "The United Kingdom is made up of four nations: England, Scotland, Wales, and Northern Ireland.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "What is the Commonwealth?",
options: ["A group of nations formerly part of the British Empire", "The European Union", "A defence alliance", "A trade organisation"],
answer: "A group of nations formerly part of the British Empire",
explanation: "The Commonwealth is an association of countries, many once part of the British Empire, that cooperate on shared goals.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Which modern British achievement is recognised globally every year?",
options: ["The Nobel Prizes won by British scientists", "The Queen’s Birthday Parade", "The BAFTA Awards", "The Eurovision Song Contest"],
answer: "The Nobel Prizes won by British scientists",
explanation: "Britain continues to contribute to global science, winning many Nobel Prizes for innovation and discovery.",
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
let questionsFlaggedTab16 = JSON.parse(localStorage.getItem("questionsFlaggedTab16")) || [];

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
    const alreadyFlagged = questionsFlaggedTab16.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab16.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab16", JSON.stringify(questionsFlaggedTab16));
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
