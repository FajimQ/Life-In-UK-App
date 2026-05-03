const questions = [
  {
    question: "Which landmark is the official residence of the British monarch in London?",
    options: ["Buckingham Palace", "Windsor Castle", "Kensington Palace", "The Tower of London"],
    answer: "Buckingham Palace",
    explanation: "Buckingham Palace is the London residence and administrative headquarters of the British monarch.",
    userAnswer: null,
    flagged: false,
    no: 1
  },
  {
    question: "Which castle is the oldest and largest occupied castle in the world?",
    options: ["Windsor Castle", "Edinburgh Castle", "Cardiff Castle", "Balmoral Castle"],
    answer: "Windsor Castle",
    explanation: "Windsor Castle, located in Berkshire, is both the oldest and largest occupied castle in the world.",
    userAnswer: null,
    flagged: false,
    no: 2
  },
  {
    question: "Which landmark houses the Crown Jewels?",
    options: ["The Tower of London", "Buckingham Palace", "St Paul’s Cathedral", "Houses of Parliament"],
    answer: "The Tower of London",
    explanation: "The Tower of London, built by William the Conqueror, is home to the Crown Jewels and has a rich royal history.",
    userAnswer: null,
    flagged: false,
    no: 3
  },
  {
    question: "Which structure connects the River Thames in London and opens for ships to pass?",
    options: ["Tower Bridge", "London Bridge", "Westminster Bridge", "Millennium Bridge"],
    answer: "Tower Bridge",
    explanation: "Tower Bridge is a famous symbol of London, known for its bascules that lift to allow ships through.",
    userAnswer: null,
    flagged: false,
    no: 4
  },
  {
    question: "Where does the UK Parliament meet?",
    options: ["Palace of Westminster", "Buckingham Palace", "Windsor Castle", "10 Downing Street"],
    answer: "Palace of Westminster",
    explanation: "The Palace of Westminster, also known as the Houses of Parliament, is where the UK Parliament meets.",
    userAnswer: null,
    flagged: false,
    no: 5
  },
  {
    question: "What is Big Ben?",
    options: ["The nickname for the Great Bell of the clock tower at Westminster", "A London train station", "A museum", "A cathedral"],
    answer: "The nickname for the Great Bell of the clock tower at Westminster",
    explanation: "Big Ben is the nickname for the Great Bell in the Elizabeth Tower at the Palace of Westminster.",
    userAnswer: null,
    flagged: false,
    no: 6
  },
  {
    question: "Which cathedral is one of the most famous in London and hosts national services?",
    options: ["St Paul’s Cathedral", "Westminster Abbey", "Canterbury Cathedral", "Durham Cathedral"],
    answer: "St Paul’s Cathedral",
    explanation: "St Paul’s Cathedral, designed by Sir Christopher Wren, is one of London’s most iconic landmarks.",
    userAnswer: null,
    flagged: false,
    no: 7
  },
  {
    question: "Where are many British monarchs crowned and buried?",
    options: ["Westminster Abbey", "St Paul’s Cathedral", "Canterbury Cathedral", "York Minster"],
    answer: "Westminster Abbey",
    explanation: "Westminster Abbey is a historic church where coronations, royal weddings, and burials take place.",
    userAnswer: null,
    flagged: false,
    no: 8
  },
  {
    question: "Which prehistoric monument is located in Wiltshire, England?",
    options: ["Stonehenge", "Hadrian’s Wall", "Tintagel Castle", "Avebury"],
    answer: "Stonehenge",
    explanation: "Stonehenge is a prehistoric stone circle dating back over 4,000 years, one of the UK’s most iconic sites.",
    userAnswer: null,
    flagged: false,
    no: 9
  },
  {
    question: "What is Hadrian’s Wall?",
    options: ["A Roman fortification in northern England", "A medieval castle", "A church", "A palace wall"],
    answer: "A Roman fortification in northern England",
    explanation: "Hadrian’s Wall was built by the Romans to protect their territory in Britain from northern tribes.",
    userAnswer: null,
    flagged: false,
    no: 10
  },
  {
    question: "Who was the first Prime Minister of the UK?",
    options: ["Sir Robert Walpole", "Winston Churchill", "William Pitt", "Benjamin Disraeli"],
    answer: "Sir Robert Walpole",
    explanation: "Sir Robert Walpole is generally regarded as the first Prime Minister, serving from 1721 to 1742.",
    userAnswer: null,
    flagged: false,
    no: 11
  },
  {
    question: "Who was the UK’s leader during World War II?",
    options: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Margaret Thatcher"],
    answer: "Winston Churchill",
    explanation: "Sir Winston Churchill led Britain through most of World War II and is one of the nation’s most celebrated leaders.",
    userAnswer: null,
    flagged: false,
    no: 12
  },
  {
    question: "Which British scientist developed the theory of evolution?",
    options: ["Charles Darwin", "Isaac Newton", "Stephen Hawking", "Alexander Fleming"],
    answer: "Charles Darwin",
    explanation: "Charles Darwin proposed the theory of evolution by natural selection, changing our understanding of biology.",
    userAnswer: null,
    flagged: false,
    no: 13
  },
  {
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Isaac Newton", "Charles Darwin", "Alan Turing"],
    answer: "Alexander Fleming",
    explanation: "Scottish scientist Alexander Fleming discovered penicillin in 1928, revolutionising modern medicine.",
    userAnswer: null,
    flagged: false,
    no: 14
  },
  {
    question: "Which British physicist developed the laws of motion and gravity?",
    options: ["Isaac Newton", "Albert Einstein", "James Watt", "Stephen Hawking"],
    answer: "Isaac Newton",
    explanation: "Sir Isaac Newton formulated the laws of motion and universal gravitation, laying foundations for classical physics.",
    userAnswer: null,
    flagged: false,
    no: 15
  },
  {
    question: "Who was the first woman Prime Minister of the United Kingdom?",
    options: ["Margaret Thatcher", "Theresa May", "Elizabeth I", "Queen Victoria"],
    answer: "Margaret Thatcher",
    explanation: "Margaret Thatcher, known as the 'Iron Lady', served as Prime Minister from 1979 to 1990.",
    userAnswer: null,
    flagged: false,
    no: 16
  },
  {
    question: "Which UK city is famous for The Beatles?",
    options: ["Liverpool", "London", "Manchester", "Birmingham"],
    answer: "Liverpool",
    explanation: "Liverpool is the hometown of The Beatles, one of the most famous bands in history.",
    userAnswer: null,
    flagged: false,
    no: 17
  },
  {
    question: "Which Scottish city is known for its annual arts festival?",
    options: ["Edinburgh", "Glasgow", "Aberdeen", "Inverness"],
    answer: "Edinburgh",
    explanation: "The Edinburgh Festival is one of the world’s largest arts festivals, held every August in Scotland’s capital.",
    userAnswer: null,
    flagged: false,
    no: 18
  },
  {
    question: "Which British author wrote the 'Harry Potter' series?",
    options: ["J.K. Rowling", "Jane Austen", "Charles Dickens", "George Orwell"],
    answer: "J.K. Rowling",
    explanation: "J.K. Rowling wrote the globally famous 'Harry Potter' series, set partly in the UK.",
    userAnswer: null,
    flagged: false,
    no: 19
  },
  {
    question: "Which English playwright is considered one of the greatest writers in history?",
    options: ["William Shakespeare", "Charles Dickens", "George Orwell", "Oscar Wilde"],
    answer: "William Shakespeare",
    explanation: "William Shakespeare, from Stratford-upon-Avon, is often called England’s national poet and wrote many famous plays.",
    userAnswer: null,
    flagged: false,
    no: 20
  },
  {
    question: "Where was William Shakespeare born?",
    options: ["Stratford-upon-Avon", "London", "Oxford", "Cambridge"],
    answer: "Stratford-upon-Avon",
    explanation: "Shakespeare was born and raised in Stratford-upon-Avon, a town that attracts many visitors each year.",
    userAnswer: null,
    flagged: false,
    no: 21
  },
  {
    question: "Which London museum holds the Rosetta Stone and other world artefacts?",
    options: ["The British Museum", "The Natural History Museum", "The Science Museum", "The Tate Modern"],
    answer: "The British Museum",
    explanation: "The British Museum houses millions of artefacts, including the Rosetta Stone and the Elgin Marbles.",
    userAnswer: null,
    flagged: false,
    no: 22
  },
  {
    question: "Which city is home to the University of Oxford?",
    options: ["Oxford", "Cambridge", "London", "Bath"],
    answer: "Oxford",
    explanation: "The University of Oxford, one of the world’s oldest universities, is located in the city of Oxford.",
    userAnswer: null,
    flagged: false,
    no: 23
  },
  {
    question: "Which British nurse became famous for her work during the Crimean War?",
    options: ["Florence Nightingale", "Mary Seacole", "Edith Cavell", "Elizabeth Fry"],
    answer: "Florence Nightingale",
    explanation: "Florence Nightingale revolutionised nursing practices during the Crimean War and founded modern nursing.",
    userAnswer: null,
    flagged: false,
    no: 24
  },
  {
    question: "Which British monarch reigned for more than 70 years until 2022?",
    options: ["Queen Elizabeth II", "Queen Victoria", "King George VI", "King Charles III"],
    answer: "Queen Elizabeth II",
    explanation: "Queen Elizabeth II served as the UK’s longest-reigning monarch, from 1952 to 2022.",
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
let questionsFlaggedTab10 = JSON.parse(localStorage.getItem("questionsFlaggedTab10")) || [];

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
    const alreadyFlagged = questionsFlaggedTab10.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab10.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab10", JSON.stringify(questionsFlaggedTab10));
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
