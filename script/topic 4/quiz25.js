const questions = [
{
question: "Who invented the telephone?",
options: ["Alexander Graham Bell", "Isaac Newton", "Thomas Edison", "James Watt"],
answer: "Alexander Graham Bell",
explanation: "Alexander Graham Bell, born in Scotland, is credited with inventing the first practical telephone.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "Who developed the theory of evolution by natural selection?",
options: ["Isaac Newton", "Charles Darwin", "Stephen Hawking", "Michael Faraday"],
answer: "Charles Darwin",
explanation: "Charles Darwin, an English naturalist, developed the theory of evolution, famously published in 'On the Origin of Species'.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "Which British scientist discovered penicillin?",
options: ["Alexander Fleming", "Edward Jenner", "Joseph Lister", "Michael Faraday"],
answer: "Alexander Fleming",
explanation: "Alexander Fleming discovered penicillin in 1928, revolutionising medicine and antibiotics.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "Who invented the steam engine?",
options: ["James Watt", "Isaac Newton", "George Stephenson", "Robert Fulton"],
answer: "James Watt",
explanation: "James Watt, a Scottish inventor, improved the steam engine, which was crucial to the Industrial Revolution.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "Which British scientist is famous for the laws of motion and gravity?",
options: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Charles Darwin"],
answer: "Isaac Newton",
explanation: "Sir Isaac Newton formulated the laws of motion and universal gravitation, foundational to physics.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Who invented the World Wide Web?",
options: ["Alan Turing", "Tim Berners-Lee", "Charles Babbage", "Guglielmo Marconi"],
answer: "Tim Berners-Lee",
explanation: "Tim Berners-Lee, a British scientist, invented the World Wide Web in 1989 while working at CERN.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "Which British engineer developed the first practical railway locomotive?",
options: ["George Stephenson", "James Watt", "Isambard Kingdom Brunel", "Richard Trevithick"],
answer: "George Stephenson",
explanation: "George Stephenson designed and built the first successful railway locomotives in the early 19th century.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Who was the first woman to win a Nobel Prize?",
options: ["Dorothy Hodgkin", "Marie Curie", "Rosalind Franklin", "Ada Lovelace"],
answer: "Marie Curie",
explanation: "Marie Curie, although Polish-born, conducted significant research in the UK and inspired British women scientists; notable UK women scientists include Dorothy Hodgkin.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "Who is known as the 'father of modern computing'?",
options: ["Alan Turing", "Charles Babbage", "Stephen Hawking", "Tim Berners-Lee"],
answer: "Alan Turing",
explanation: "Alan Turing was a pioneering British mathematician and computer scientist who contributed to the development of modern computing.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Which British inventor is famous for the first practical telephone exchange?",
options: ["Alexander Graham Bell", "Michael Faraday", "John Logie Baird", "James Watt"],
answer: "Alexander Graham Bell",
explanation: "Alexander Graham Bell’s work in telecommunications included developing practical telephone systems.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "Who invented the television?",
options: ["John Logie Baird", "Tim Berners-Lee", "Isaac Newton", "Alexander Graham Bell"],
answer: "John Logie Baird",
explanation: "John Logie Baird, a Scottish inventor, demonstrated the first working television system in the 1920s.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "Which British chemist is known for discovering oxygen?",
options: ["Joseph Priestley", "Humphry Davy", "Henry Cavendish", "Robert Boyle"],
answer: "Joseph Priestley",
explanation: "Joseph Priestley, an English chemist, is credited with the discovery of oxygen in the 18th century.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "Who was the British engineer behind the Great Western Railway and famous bridges?",
options: ["Isambard Kingdom Brunel", "George Stephenson", "James Watt", "Robert Stephenson"],
answer: "Isambard Kingdom Brunel",
explanation: "Isambard Kingdom Brunel was a leading civil engineer who built bridges, tunnels, and the Great Western Railway.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Which British author created the fictional detective Sherlock Holmes?",
options: ["Agatha Christie", "J.K. Rowling", "Arthur Conan Doyle", "Roald Dahl"],
answer: "Arthur Conan Doyle",
explanation: "Sir Arthur Conan Doyle created the famous detective Sherlock Holmes, a major contribution to literature.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "Who invented the first practical submarine?",
options: ["John Philip Holland", "Robert Fulton", "George Garrett", "Isambard Kingdom Brunel"],
answer: "George Garrett",
explanation: "George Garrett, a British engineer, developed one of the first practical submarines in the 19th century.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Which British scientist discovered electromagnetic induction?",
options: ["Michael Faraday", "Isaac Newton", "James Watt", "Alexander Graham Bell"],
answer: "Michael Faraday",
explanation: "Michael Faraday, a British physicist and chemist, discovered electromagnetic induction, leading to modern electrical engineering.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Who created the first computer program?",
options: ["Charles Babbage", "Ada Lovelace", "Alan Turing", "Tim Berners-Lee"],
answer: "Ada Lovelace",
explanation: "Ada Lovelace, an English mathematician, is credited with writing the first algorithm intended for a machine, considered the first computer program.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "Which British scientist proved the germ theory of disease?",
options: ["Edward Jenner", "Joseph Lister", "Alexander Fleming", "Louis Pasteur"],
answer: "Joseph Lister",
explanation: "Joseph Lister introduced antiseptic surgery, proving that germs could cause infection.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "Which British inventor is credited with developing the electric motor?",
options: ["Michael Faraday", "Isaac Newton", "James Watt", "George Stephenson"],
answer: "Michael Faraday",
explanation: "Michael Faraday’s experiments with electricity led to the development of the electric motor and generator.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Who invented the first practical steam-powered ship?",
options: ["Robert Fulton", "Isambard Kingdom Brunel", "George Stephenson", "James Watt"],
answer: "Robert Fulton",
explanation: "Robert Fulton built one of the first successful steam-powered ships; British engineers also made key contributions to early steam navigation.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "Which British scientist worked on black holes and cosmology?",
options: ["Stephen Hawking", "Isaac Newton", "Michael Faraday", "Charles Darwin"],
answer: "Stephen Hawking",
explanation: "Stephen Hawking was a theoretical physicist who made groundbreaking contributions to the understanding of black holes and the universe.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Which British chemist discovered sodium and potassium?",
options: ["Humphry Davy", "Joseph Priestley", "Michael Faraday", "James Watt"],
answer: "Humphry Davy",
explanation: "Humphry Davy, a British chemist, isolated several chemical elements including sodium and potassium.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "Which British engineer designed the SS Great Britain, the first iron-hulled steamship?",
options: ["Isambard Kingdom Brunel", "George Stephenson", "James Watt", "Robert Fulton"],
answer: "Isambard Kingdom Brunel",
explanation: "Brunel designed the SS Great Britain, pioneering iron shipbuilding and steam propulsion.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Who invented the safety lamp for miners?",
options: ["Humphry Davy", "Michael Faraday", "James Watt", "George Stephenson"],
answer: "Humphry Davy",
explanation: "Humphry Davy invented the Davy lamp, improving safety for coal miners.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Who discovered the smallpox vaccine?",
options: ["Edward Jenner", "Alexander Fleming", "Joseph Lister", "Michael Faraday"],
answer: "Edward Jenner",
explanation: "Edward Jenner, an English physician, developed the first smallpox vaccine in 1796, saving countless lives.",
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
let questionsFlaggedTab25 = JSON.parse(localStorage.getItem("questionsFlaggedTab25")) || [];

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
    const alreadyFlagged = questionsFlaggedTab20.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab25.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab25", JSON.stringify(questionsFlaggedTab25));
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
