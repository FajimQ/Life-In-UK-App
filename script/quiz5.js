const questions = [
{
  question: "What does 'tolerance' mean in the UK context?",
  options: ["Accepting and respecting people’s differences", "Ignoring everyone around you", "Forcing others to follow your views", "Only interacting with similar people"],
  answer: "Accepting and respecting people’s differences",
  explanation: "Tolerance means accepting others’ beliefs, backgrounds, and lifestyles, even if they differ from your own.",
  userAnswer: null,
  flagged: false,
  no: 1
},
{
  question: "Why is respect important in a diverse society?",
  options: ["It allows everyone to live peacefully and cooperatively", "It encourages arguments", "It promotes inequality", "It is only important in schools"],
  answer: "It allows everyone to live peacefully and cooperatively",
  explanation: "Respect is essential for harmony in a society with different cultures, religions, and beliefs.",
  userAnswer: null,
  flagged: false,
  no: 2
},
{
  question: "Which UK law protects people from discrimination?",
  options: ["Equality Act 2010", "Human Rights Act 1980", "Race Relations Act 1950", "Discrimination Act 2005"],
  answer: "Equality Act 2010",
  explanation: "The Equality Act 2010 protects individuals from unfair treatment and promotes equal opportunities.",
  userAnswer: null,
  flagged: false,
  no: 3
},
{
  question: "Which of these is a protected characteristic under UK law?",
  options: ["Age, disability, religion, and gender", "Height and hobbies only", "Education and employment only", "Marital status only"],
  answer: "Age, disability, religion, and gender",
  explanation: "Protected characteristics include age, disability, gender reassignment, race, religion, sex, sexual orientation, and marriage/civil partnership.",
  userAnswer: null,
  flagged: false,
  no: 4
},
{
  question: "What is 'mutual respect'?",
  options: ["Treating others with dignity and valuing their views", "Always agreeing with others", "Ignoring people’s opinions", "Competing for attention"],
  answer: "Treating others with dignity and valuing their views",
  explanation: "Mutual respect involves listening, understanding, and valuing different perspectives.",
  userAnswer: null,
  flagged: false,
  no: 5
},
{
  question: "Which of these actions shows respect in everyday life?",
  options: ["Listening carefully, being polite, acknowledging differences", "Interrupting people constantly", "Ignoring rules and regulations", "Mocking others"],
  answer: "Listening carefully, being polite, acknowledging differences",
  explanation: "Everyday respect includes good manners, consideration, and valuing diversity.",
  userAnswer: null,
  flagged: false,
  no: 6
},
{
  question: "Why is tolerance important in the UK?",
  options: ["It helps communities live together peacefully", "It encourages segregation", "It prevents cooperation", "It is only a school rule"],
  answer: "It helps communities live together peacefully",
  explanation: "Tolerance allows people of different faiths, cultures, and backgrounds to coexist harmoniously.",
  userAnswer: null,
  flagged: false,
  no: 7
},
{
  question: "Which of these behaviours demonstrates intolerance?",
  options: ["Discrimination, bullying, or refusing to accept differences", "Helping neighbours", "Volunteering in community projects", "Celebrating diversity"],
  answer: "Discrimination, bullying, or refusing to accept differences",
  explanation: "Intolerance involves actions that harm or exclude people because of their differences.",
  userAnswer: null,
  flagged: false,
  no: 8
},
{
  question: "What is a benefit of respecting different cultures?",
  options: ["Better understanding, stronger communities, and fewer conflicts", "Isolation", "Competition only", "Segregation"],
  answer: "Better understanding, stronger communities, and fewer conflicts",
  explanation: "Respecting different cultures fosters learning, cooperation, and social cohesion.",
  userAnswer: null,
  flagged: false,
  no: 9
},
{
  question: "How can schools in the UK teach respect and tolerance?",
  options: ["Through multicultural lessons, anti-bullying programs, and inclusive policies", "By ignoring diversity", "By enforcing segregation", "Only teaching national history"],
  answer: "Through multicultural lessons, anti-bullying programs, and inclusive policies",
  explanation: "Education promotes understanding and respectful behaviour from a young age.",
  userAnswer: null,
  flagged: false,
  no: 10
},
{
  question: "Which festival encourages understanding of different religions?",
  options: ["Diwali, Eid, Christmas, Hanukkah", "Halloween only", "April Fool’s Day", "None of the above"],
  answer: "Diwali, Eid, Christmas, Hanukkah",
  explanation: "Celebrating diverse festivals helps people learn about different religions and traditions.",
  userAnswer: null,
  flagged: false,
  no: 11
},
{
  question: "Which of these shows respect in the workplace?",
  options: ["Listening to colleagues’ ideas, avoiding discrimination, treating everyone fairly", "Ignoring coworkers", "Talking over everyone", "Making assumptions based on appearance"],
  answer: "Listening to colleagues’ ideas, avoiding discrimination, treating everyone fairly",
  explanation: "Respect at work involves equality, fairness, and valuing others’ input.",
  userAnswer: null,
  flagged: false,
  no: 12
},
{
  question: "Which of these is considered a form of intolerance?",
  options: ["Racism, sexism, homophobia, or religious discrimination", "Volunteering", "Supporting charities", "Community events"],
  answer: "Racism, sexism, homophobia, or religious discrimination",
  explanation: "Intolerance includes prejudice or unfair treatment towards people based on identity or beliefs.",
  userAnswer: null,
  flagged: false,
  no: 13
},
{
  question: "Why is respecting laws important for tolerance?",
  options: ["It ensures everyone’s rights are protected", "It only benefits the government", "It stops community involvement", "It promotes conflict"],
  answer: "It ensures everyone’s rights are protected",
  explanation: "Following laws helps maintain fairness, equality, and social harmony.",
  userAnswer: null,
  flagged: false,
  no: 14
},
{
  question: "What does the term 'anti-discrimination' mean?",
  options: ["Actions or laws that prevent unfair treatment based on identity", "Allowing prejudice", "Ignoring equality", "Segregation of groups"],
  answer: "Actions or laws that prevent unfair treatment based on identity",
  explanation: "Anti-discrimination protects people from unfair treatment due to age, race, gender, religion, or other characteristics.",
  userAnswer: null,
  flagged: false,
  no: 15
},
{
  question: "Which of these represents mutual respect in communities?",
  options: ["Listening to neighbours and valuing their opinions", "Ignoring community rules", "Bullying newcomers", "Segregating groups"],
  answer: "Listening to neighbours and valuing their opinions",
  explanation: "Mutual respect strengthens relationships and promotes peaceful coexistence.",
  userAnswer: null,
  flagged: false,
  no: 16
},
{
  question: "What is the purpose of the Equality Act 2010?",
  options: ["To protect people from unfair treatment and promote equal opportunities", "To promote competition only", "To segregate communities", "To create separate schools"],
  answer: "To protect people from unfair treatment and promote equal opportunities",
  explanation: "The Equality Act ensures fairness and prevents discrimination in work, education, and services.",
  userAnswer: null,
  flagged: false,
  no: 17
},
{
  question: "Which behaviour shows respect online?",
  options: ["Avoiding harassment, cyberbullying, and sharing misinformation", "Spreading rumours", "Trolling others", "Ignoring facts"],
  answer: "Avoiding harassment, cyberbullying, and sharing misinformation",
  explanation: "Respect and tolerance apply both offline and online, including safe digital behaviour.",
  userAnswer: null,
  flagged: false,
  no: 18
},
{
  question: "Which of these values is essential for a tolerant society?",
  options: ["Equality, fairness, and inclusion", "Hierarchy only", "Exclusion", "Segregation"],
  answer: "Equality, fairness, and inclusion",
  explanation: "A tolerant society treats all people fairly and allows everyone to participate equally.",
  userAnswer: null,
  flagged: false,
  no: 19
},
{
  question: "Which action demonstrates tolerance in schools?",
  options: ["Accepting students of different cultures, religions, and abilities", "Bullying students", "Excluding minority groups", "Ignoring differences"],
  answer: "Accepting students of different cultures, religions, and abilities",
  explanation: "Schools encourage tolerance by creating inclusive environments for all students.",
  userAnswer: null,
  flagged: false,
  no: 20
},
{
  question: "Why is listening important for respect?",
  options: ["It shows others you value their opinions and experiences", "It allows you to dominate conversations", "It discourages communication", "It is only for formal meetings"],
  answer: "It shows others you value their opinions and experiences",
  explanation: "Active listening demonstrates respect and helps build understanding.",
  userAnswer: null,
  flagged: false,
  no: 21
},
{
  question: "Which of these is an example of celebrating diversity?",
  options: ["Multicultural festivals, food fairs, and parades", "Ignoring traditions", "Limiting cultural events", "Segregating communities"],
  answer: "Multicultural festivals, food fairs, and parades",
  explanation: "Celebrating diversity acknowledges and appreciates different cultures and traditions.",
  userAnswer: null,
  flagged: false,
  no: 22
},
{
  question: "Which of these attitudes harms tolerance?",
  options: ["Prejudice, stereotyping, and discrimination", "Empathy", "Understanding differences", "Volunteering"],
  answer: "Prejudice, stereotyping, and discrimination",
  explanation: "Negative attitudes prevent peaceful coexistence and equality.",
  userAnswer: null,
  flagged: false,
  no: 23
},
{
  question: "What is the main goal of promoting respect and tolerance?",
  options: ["Peaceful coexistence and equal opportunities for everyone", "Segregation", "Conflict", "Only benefiting certain groups"],
  answer: "Peaceful coexistence and equal opportunities for everyone",
  explanation: "Respect and tolerance aim to ensure fairness, understanding, and social harmony.",
  userAnswer: null,
  flagged: false,
  no: 24
},
{
  question: "Which of these shows respect in a multicultural society?",
  options: ["Valuing different languages, traditions, and beliefs", "Forcing everyone to conform", "Ignoring cultural practices", "Promoting prejudice"],
  answer: "Valuing different languages, traditions, and beliefs",
  explanation: "Respecting cultural differences helps communities thrive and reduces conflict.",
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
let questionsFlaggedTab5 = JSON.parse(localStorage.getItem("questionsFlaggedTab5")) || [];

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
    const alreadyFlagged = questionsFlaggedTab5.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab5.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab5", JSON.stringify(questionsFlaggedTab5));
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
