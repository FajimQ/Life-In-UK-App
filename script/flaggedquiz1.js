let questionsFlaggedTab = JSON.parse(localStorage.getItem("questionsFlaggedTab"))||[];
let flaggedQuizQuestions = JSON.parse(localStorage.getItem("flaggedQuizQuestions")) ||[];
let currentQuestionIndex = 0;

let paginationStartIndex = 0;
const paginationPageSize = 8;



let questionsCorrectFl = JSON.parse(localStorage.getItem("questionsCorrectFl")) || [];
let questionsIncorrectFl = JSON.parse(localStorage.getItem("questionsIncorrectFl")) || [];
let questionsFlaggedFl = JSON.parse(localStorage.getItem("questionsFlaggedFl")) || [];
let flaggedScore1 = localStorage.getItem("flaggedScore1") || 0;
flaggedScore1 = parseInt(flaggedScore1);

function shuffleArr(arr){
  let newArr = [...arr];

  for(let i = newArr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  };

  return newArr;
};



const shuffledArray = shuffleArr(flaggedQuizQuestions);

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
      const pBtn = document.createElement("button");
      pBtn.textContent = "<";
      pBtn.addEventListener("click", () => {
        paginationStartIndex = Math.max(0, paginationStartIndex - paginationPageSize);
        renderFlaggedQuiz();
        renderPagination();
      });
      pagination.appendChild(pBtn);
    };

    
  
  shuffledArray.slice(paginationStartIndex, endIndex).forEach((_, index) => {
    const btn = document.createElement("button");
    const actualIndex = paginationStartIndex + index;
    const savedAnswer = shuffledArray[actualIndex].userAnswer;

    btn.textContent = paginationStartIndex + index +1;
    btn.classList.add("button");

    if(currentQuestionIndex === paginationStartIndex + index){
      btn.classList.add("active");
    };

   

    btn.addEventListener("click", () => {
      currentQuestionIndex = paginationStartIndex + index;
      renderPagination();
      renderFlaggedQuiz();
    });

    if(savedAnswer){
      if(savedAnswer === shuffledArray[actualIndex].answer){
        btn.classList.add("button-correct");
      } else{
        btn.classList.add("button-incorrect");
      };
  };

    

    pagination.appendChild(btn);

  });

  if(paginationStartIndex + paginationPageSize < totalQuestions){
      const nBtn =  document.createElement("button");
      nBtn.textContent = ">";
      nBtn.addEventListener("click",() => {
        paginationStartIndex = Math.min(totalQuestions - paginationPageSize, paginationStartIndex + paginationPageSize);
        renderFlaggedQuiz();
        renderPagination();
      });
      pagination.appendChild(nBtn);
    };

  
};

function updatePagination(){
  const button = document.querySelectorAll(".numbers");

  button.forEach((btn,index) => {
    if(paginationStartIndex + index === currentQuestionIndex){
      btn.classList.add("active");
    } else{
      btn.classList.remove("active");
    };
  });
};

function renderFlaggedQuiz(){
  const questions = document.querySelector(".questions");
  const currentQuestion = shuffledArray[currentQuestionIndex];

  questions.innerHTML = `
    <h2>Question ${currentQuestionIndex + 1} of ${questionsFlaggedTab.length}</h2>
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

  let answered = false;

  const options = document.querySelectorAll(".ans");
  const errorNoti = document.querySelector(".errornoti");
  const flagBtn = document.querySelector(".flag");
  const nextBtn = document.querySelector(".next");
  const preBtn = document.querySelector(".previous");
  const noticeQ = document.querySelector(".notice");
  const noticeQBtn = noticeQ.querySelector("button");
  const flaggedNot = document.querySelector(".flagged");
  const flaggedNotBtn = flaggedNot.querySelector("button");
 


  const savedAnswer = currentQuestion.userAnswer;

  function checkForFlagged(){
  const flaggedQuestions = shuffledArray.filter(q => q.flagged);
  const unansweredQuestions = shuffledArray.filter(q => !q.flagged && !q.userAnswer);


  if(flaggedQuestions.length > 0){
    flaggedNot.style.display = "block";
  } else if(unansweredQuestions.length > 0){
    noticeQ.style.display = "block";
  } 
  else{
    window.location.href = "flaggedquiz1results.html";
  };
};

flaggedNotBtn.addEventListener("click", () => {
  flaggedNot.style.display = "none";
});

  if(savedAnswer){
    answered = true;

    nextBtn.style.display = "block";

    options.forEach((optEl) => {
      const text = optEl.textContent.trim();

      if(text === savedAnswer){
        if(savedAnswer === currentQuestion.answer){
          optEl.classList.add("correct");     
        } else{
          optEl.classList.add("incorrect");
          errorNoti.style.display = "block";
        };
      };

      if(savedAnswer !== currentQuestion.answer && text === currentQuestion.answer){
        optEl.classList.add("correct");
      };
    });
  };



  options.forEach(opt => {
    opt.addEventListener("click", () => {
      currentQuestion.userAnswer = opt.textContent;

      if(answered)return;

      answered = true;
      shuffledArray[currentQuestionIndex].flagged = false;

      const selectedAnswer = opt.textContent.trim();
      shuffledArray[currentQuestionIndex].userAnswer = selectedAnswer;
      localStorage.setItem("questionsFlaggedTab", JSON.stringify(shuffledArray));

      renderProgressBar();

      if(selectedAnswer === currentQuestion.answer){
        opt.classList.add("correct");
         flaggedScore1++;
         localStorage.setItem("flaggedScore1", flaggedScore1);
         questionsCorrectFl.push(currentQuestion);
         localStorage.setItem("questionsCorrectFl", JSON.stringify(questionsCorrectFl));
      } else{
        opt.classList.add("incorrect");
        questionsIncorrectFl.push(currentQuestion);
        localStorage.setItem("questionsIncorrectFl", JSON.stringify(questionsIncorrectFl));
        errorNoti.style.display = "block";
      };

      options.forEach(o => {
        if(o.textContent.trim() === currentQuestion.answer){
          o.classList.add("correct");
        };
      });

      nextBtn.style.display = "block";
    });
  });

  if(currentQuestionIndex === shuffledArray.length -1){
      nextBtn.textContent = "Finish";
    } else{
      nextBtn.textContent = "Next";
    };

  nextBtn.addEventListener("click", () => {
     if(currentQuestionIndex === shuffledArray.length - 1){
      checkForFlagged();
      return
     };

    currentQuestionIndex++;
    if(currentQuestionIndex < shuffledArray.length){
      if(currentQuestionIndex >= paginationStartIndex + paginationPageSize){
        paginationStartIndex += paginationPageSize;
      };
      renderFlaggedQuiz();
      renderPagination();
    }
  });

  noticeQBtn.addEventListener("click", (b) => {
    noticeQ.style.display = "none";
  });

  preBtn.addEventListener("click", () => {
    currentQuestionIndex--;
    if(currentQuestionIndex < shuffledArray.length){
      paginationStartIndex = Math.max(0, paginationStartIndex - paginationPageSize);
    };
    renderFlaggedQuiz();
    renderPagination();
  });


  flagBtn.addEventListener("click", () => {
    shuffledArray[currentQuestionIndex].flagged = true;

    const currentQuestion = questionsFlaggedTab[currentQuestionIndex];

    currentQuestionIndex++;

    if(currentQuestionIndex < shuffledArray.length){
      if(currentQuestionIndex >= paginationStartIndex + paginationPageSize){
        paginationStartIndex += paginationPageSize;
      };
      renderFlaggedQuiz();
      renderPagination();
    } else{
      checkForFlagged();
    };
    questionsFlaggedFl.push(currentQuestion);
    localStorage.setItem("questionsFlaggedFl", JSON.stringify(questionsFlaggedFl));
  });
};


renderFlaggedQuiz();
renderPagination();
renderProgressBar();