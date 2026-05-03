const questions = [
{
  question: "What does 'community' mean in the UK context?",
  options: ["A group of people living or working together locally", "A group of strangers passing by", "A government department", "A business organisation"],
  answer: "A group of people living or working together locally",
  explanation: "Community refers to people in a local area who interact, help each other, and share common interests.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "What is 'diversity' in UK communities?",
  options: ["People with different cultures, beliefs, and backgrounds living together", "Everyone being the same", "Excluding outsiders", "Only cultural events"],
  answer: "People with different cultures, beliefs, and backgrounds living together",
  explanation: "Diversity describes the mix of different backgrounds, faiths, and cultures in society.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "What does 'mutual respect' mean?",
  options: ["Valuing and accepting others' views even if you disagree", "Always agreeing with everyone", "Ignoring others’ opinions", "Competing for attention"],
  answer: "Valuing and accepting others' views even if you disagree",
  explanation: "Mutual respect means treating everyone with dignity and considering different opinions.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "What is the main benefit of community activities?",
  options: ["Bringing people together and supporting each other", "Causing disagreements", "Focusing on individual gain only", "Reducing social interaction"],
  answer: "Bringing people together and supporting each other",
  explanation: "Community activities strengthen local relationships and help improve neighbourhoods.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "Which of these is a way to contribute to your community?",
  options: ["Volunteering, fundraising, joining local groups", "Ignoring neighbours", "Moving frequently", "Working abroad exclusively"],
  answer: "Volunteering, fundraising, joining local groups",
  explanation: "Active involvement helps support and improve the local community.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "What is 'social cohesion'?",
  options: ["People in a community feeling connected and working together", "Excluding certain groups", "Strict law enforcement", "Economic competition"],
  answer: "People in a community feeling connected and working together",
  explanation: "Social cohesion is the sense of belonging and cooperation among members of a community.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "Which of these is an example of cultural diversity in the UK?",
  options: ["Different festivals, food, languages, and traditions", "All people wearing the same clothes", "Everyone speaking only English", "No cultural events allowed"],
  answer: "Different festivals, food, languages, and traditions",
  explanation: "Cultural diversity is seen through the variety of cultural practices and celebrations in the UK.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "Which of these is a core British value related to diversity?",
  options: ["Respect and tolerance for different backgrounds", "Ignoring differences", "Discrimination", "Segregation by community"],
  answer: "Respect and tolerance for different backgrounds",
  explanation: "British values emphasise respecting and tolerating all people, regardless of background.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "Which term describes helping neighbours or local groups?",
  options: ["Volunteering", "Protesting", "Ignoring", "Competing"],
  answer: "Volunteering",
  explanation: "Volunteering involves offering time or skills to benefit the community.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "Why is community spirit important?",
  options: ["It strengthens local relationships and helps everyone", "It allows people to compete aggressively", "It separates people into groups", "It discourages cooperation"],
  answer: "It strengthens local relationships and helps everyone",
  explanation: "Community spirit fosters support, cooperation, and a sense of belonging.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "Which of these festivals is an example of religious diversity in the UK?",
  options: ["Diwali, Eid, Christmas, Hanukkah", "Halloween only", "Bonfire Night only", "None of the above"],
  answer: "Diwali, Eid, Christmas, Hanukkah",
  explanation: "The UK celebrates many religious festivals, reflecting its multi-faith society.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "What is a 'multi-faith society'?",
  options: ["A society where people of different religions live together", "A country with one official religion", "A place with no religion", "A society that bans religion"],
  answer: "A society where people of different religions live together",
  explanation: "The UK is a multi-faith society with Christians, Muslims, Hindus, Sikhs, Jews, and others.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Which of these is a national celebration of a patron saint in the UK?",
  options: ["St George’s Day, St Andrew’s Day, St David’s Day, St Patrick’s Day", "Halloween", "Valentine’s Day", "April Fool’s Day"],
  answer: "St George’s Day, St Andrew’s Day, St David’s Day, St Patrick’s Day",
  explanation: "Each nation in the UK has a patron saint celebrated annually.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "Which symbol represents Wales in national celebrations?",
  options: ["Red Dragon", "Lion", "Thistle", "Shamrock"],
  answer: "Red Dragon",
  explanation: "The red dragon is a national symbol of Wales, featured on the Welsh flag.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "Which symbol represents Scotland in national celebrations?",
  options: ["Thistle", "Rose", "Dragon", "Shamrock"],
  answer: "Thistle",
  explanation: "The thistle is the national emblem of Scotland.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "Which symbol represents England in national celebrations?",
  options: ["Rose", "Thistle", "Dragon", "Shamrock"],
  answer: "Rose",
  explanation: "The rose is the national emblem of England.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "Which symbol represents Northern Ireland in national celebrations?",
  options: ["Shamrock", "Rose", "Thistle", "Dragon"],
  answer: "Shamrock",
  explanation: "The shamrock is Northern Ireland’s national emblem.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "Which of these is a benefit of volunteering in the UK?",
  options: ["Meeting people, learning skills, helping society", "Skipping work", "Avoiding taxes", "Receiving government housing automatically"],
  answer: "Meeting people, learning skills, helping society",
  explanation: "Volunteering connects people, builds skills, and strengthens communities.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "Which UK public broadcaster promotes community and diversity?",
  options: ["BBC", "ITV", "Sky", "Channel 4 only for news"],
  answer: "BBC",
  explanation: "The BBC informs, educates, and entertains the public, reflecting diversity.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "What is a key aspect of respecting diversity?",
  options: ["Avoiding discrimination and valuing differences", "Treating everyone exactly the same", "Ignoring different cultures", "Promoting one culture only"],
  answer: "Avoiding discrimination and valuing differences",
  explanation: "Respecting diversity means recognising and valuing people’s differences.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "Which of these represents community help in the UK?",
  options: ["Local food banks, charities, and volunteer groups", "Private clubs only", "Government offices only", "None of the above"],
  answer: "Local food banks, charities, and volunteer groups",
  explanation: "Community support includes charities, volunteering, and helping local people in need.",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "Which of these events celebrate cultural diversity in the UK?",
  options: ["Carnivals, food festivals, parades, music events", "Sports only", "Political campaigns only", "Shopping festivals only"],
  answer: "Carnivals, food festivals, parades, music events",
  explanation: "Diverse communities celebrate with festivals showcasing different cultures and traditions.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which principle supports everyone being treated equally in a community?",
  options: ["Equality and fairness", "Hierarchy only", "Segregation", "Exclusion of minorities"],
  answer: "Equality and fairness",
  explanation: "Equality ensures all individuals have the same opportunities and rights in society.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "What does celebrating national holidays promote in communities?",
  options: ["Unity, shared identity, and participation", "Division only", "Exclusivity", "Ignoring traditions"],
  answer: "Unity, shared identity, and participation",
  explanation: "National celebrations bring people together and strengthen community bonds.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "Which attitude helps communities thrive in the UK?",
  options: ["Respecting diversity, cooperating, volunteering", "Ignoring others, competition only, isolation", "Discrimination", "Exclusion of new residents"],
  answer: "Respecting diversity, cooperating, volunteering",
  explanation: "Thriving communities value respect, cooperation, and active participation.",
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
let questionsFlaggedTab4 = JSON.parse(localStorage.getItem("questionsFlaggedTab4")) || [];

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
    const alreadyFlagged = questionsFlaggedTab4.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab4.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab4", JSON.stringify(questionsFlaggedTab4));
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
