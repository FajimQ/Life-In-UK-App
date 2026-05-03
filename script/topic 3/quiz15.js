const questions = [
{
question: "When did the First World War begin?",
options: ["1914", "1918", "1939", "1945"],
answer: "1914",
explanation: "World War I began in 1914 after the assassination of Archduke Franz Ferdinand, leading to a global conflict involving Britain and its allies.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "Which countries were Britain’s allies in the First World War?",
options: ["France, Russia, and later the USA", "Germany, Austria-Hungary, and Italy", "Japan and China", "Spain and Portugal"],
answer: "France, Russia, and later the USA",
explanation: "Britain fought alongside France, Russia, and later the United States against Germany and its allies in World War I.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "When did the First World War end?",
options: ["1918", "1916", "1920", "1939"],
answer: "1918",
explanation: "World War I ended in November 1918 with the signing of the Armistice between the Allies and Germany.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "What is Remembrance Day held to commemorate?",
options: ["Those who died in wars and conflicts", "The Queen’s coronation", "The end of World War II", "Victory over France"],
answer: "Those who died in wars and conflicts",
explanation: "Remembrance Day (11 November) honours those who lost their lives in the two World Wars and later conflicts.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "What flower is worn to remember those who died in wars?",
options: ["Poppy", "Rose", "Daffodil", "Thistle"],
answer: "Poppy",
explanation: "The red poppy, inspired by the poem ‘In Flanders Fields’, symbolises remembrance and hope.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "When did women first get the right to vote in the UK?",
options: ["1918", "1928", "1945", "1950"],
answer: "1918",
explanation: "In 1918, women over 30 who met certain property qualifications gained the right to vote.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "When did men and women get equal voting rights?",
options: ["1928", "1918", "1935", "1948"],
answer: "1928",
explanation: "In 1928, the voting age for women was lowered to 21, giving them equal voting rights with men.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "What was the Great Depression?",
options: ["A global economic crisis in the 1930s", "A political movement", "A war between Britain and Germany", "An epidemic"],
answer: "A global economic crisis in the 1930s",
explanation: "The Great Depression was a severe worldwide economic downturn during the 1930s, causing mass unemployment and hardship.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "When did the Second World War begin?",
options: ["1939", "1940", "1941", "1945"],
answer: "1939",
explanation: "World War II began in September 1939 when Germany invaded Poland, prompting Britain and France to declare war.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Who was the British Prime Minister during most of World War II?",
options: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Harold Macmillan"],
answer: "Winston Churchill",
explanation: "Winston Churchill became Prime Minister in 1940 and led Britain through World War II with determination and inspiring speeches.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "What was the Blitz?",
options: ["German bombing campaign on British cities", "A British invasion", "A naval battle", "An Allied code name for D-Day"],
answer: "German bombing campaign on British cities",
explanation: "The Blitz was the sustained bombing of British cities by Germany between 1940 and 1941, targeting London, Coventry, and other major areas.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "Which countries were Britain’s allies in World War II?",
options: ["France, the Soviet Union, China, and the USA", "Germany and Italy", "Austria and Spain", "Portugal and Turkey"],
answer: "France, the Soviet Union, China, and the USA",
explanation: "Britain fought alongside France, the Soviet Union, China, and the USA against the Axis powers during World War II.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "When did World War II end in Europe?",
options: ["May 1945", "September 1945", "June 1944", "December 1943"],
answer: "May 1945",
explanation: "Victory in Europe (VE) Day was celebrated on 8 May 1945, marking the end of the war in Europe.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "What was the D-Day landings?",
options: ["Allied invasion of France in 1944", "German invasion of Britain", "The end of World War I", "Surrender of Japan"],
answer: "Allied invasion of France in 1944",
explanation: "D-Day (6 June 1944) was when Allied forces landed in Normandy, France, beginning the liberation of Western Europe.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "What was the Holocaust?",
options: ["The mass murder of Jews and others by the Nazis", "A battle in North Africa", "A British bombing campaign", "A peace treaty"],
answer: "The mass murder of Jews and others by the Nazis",
explanation: "The Holocaust was the genocide of six million Jews and millions of others by Nazi Germany during World War II.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Who became Prime Minister after World War II ended?",
options: ["Clement Attlee", "Winston Churchill", "Harold Wilson", "Anthony Eden"],
answer: "Clement Attlee",
explanation: "Labour leader Clement Attlee won the 1945 general election and became Prime Minister, introducing major social reforms.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "What major reform was introduced in 1948 under Clement Attlee?",
options: ["The National Health Service (NHS)", "The British Empire", "The Magna Carta", "The EU membership"],
answer: "The National Health Service (NHS)",
explanation: "The NHS was founded in 1948, providing free healthcare for all citizens, funded by taxation.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "Who was the founder of the NHS?",
options: ["Aneurin Bevan", "Clement Attlee", "Winston Churchill", "Harold Macmillan"],
answer: "Aneurin Bevan",
explanation: "Aneurin Bevan, Minister of Health in the Labour government, led the creation of the NHS in 1948.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "When did India gain independence from Britain?",
options: ["1947", "1939", "1950", "1960"],
answer: "1947",
explanation: "India gained independence from Britain in 1947, marking a major change in the British Empire.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Which country was divided into India and Pakistan in 1947?",
options: ["India", "Sri Lanka", "Burma", "Bangladesh"],
answer: "India",
explanation: "British India was divided into two independent states — India and Pakistan — in 1947.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "Who was the monarch during both World Wars?",
options: ["King George VI", "King George V", "Queen Victoria", "Queen Elizabeth II"],
answer: "King George VI",
explanation: "King George VI reigned from 1936 to 1952 and was monarch during World War II.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "What organisation was founded after World War II to promote peace?",
options: ["The United Nations", "The League of Nations", "NATO", "The European Union"],
answer: "The United Nations",
explanation: "The United Nations was founded in 1945 to encourage international peace and cooperation.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "What year did the BBC begin regular radio broadcasting?",
options: ["1922", "1918", "1939", "1945"],
answer: "1922",
explanation: "The BBC began regular radio broadcasting in 1922, becoming an important national institution.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Which war poet wrote 'Dulce et Decorum Est'?",
options: ["Wilfred Owen", "Siegfried Sassoon", "Rudyard Kipling", "Rupert Brooke"],
answer: "Wilfred Owen",
explanation: "Wilfred Owen wrote vivid, tragic poetry about the horrors of trench warfare during World War I.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "What major social change followed World War II?",
options: ["Creation of the welfare state", "Return of monarchy power", "Abolition of Parliament", "Industrial decline"],
answer: "Creation of the welfare state",
explanation: "After WWII, Britain established the welfare state to provide citizens with healthcare, housing, and social security.",
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
let questionsFlaggedTab15 = JSON.parse(localStorage.getItem("questionsFlaggedTab15")) || [];

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
    const alreadyFlagged = questionsFlaggedTab15.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab15.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab15", JSON.stringify(questionsFlaggedTab15));
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
