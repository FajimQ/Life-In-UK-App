const questions = [
{
question: "Who invented the World Wide Web in 1989?",
options: ["Sir Tim Berners-Lee", "Charles Babbage", "Alan Turing", "Bill Gates"],
answer: "Sir Tim Berners-Lee",
explanation: "Sir Tim Berners-Lee, a British scientist, invented the World Wide Web in 1989 while working at CERN, revolutionising global communication.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "Who is known as the 'father of the computer'?",
options: ["Charles Babbage", "Alan Turing", "Isaac Newton", "Michael Faraday"],
answer: "Charles Babbage",
explanation: "Charles Babbage designed the first mechanical computer, known as the Analytical Engine, in the 1830s — earning him the title 'father of the computer'.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "Which British scientist discovered penicillin?",
options: ["Alexander Fleming", "Isaac Newton", "Charles Darwin", "Louis Pasteur"],
answer: "Alexander Fleming",
explanation: "Alexander Fleming discovered penicillin in 1928, the world’s first antibiotic, saving millions of lives from bacterial infections.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "Who developed the theory of evolution by natural selection?",
options: ["Charles Darwin", "Gregor Mendel", "Isaac Newton", "Albert Einstein"],
answer: "Charles Darwin",
explanation: "Charles Darwin published 'On the Origin of Species' in 1859, introducing the revolutionary theory of evolution through natural selection.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "Which British scientist formulated the laws of motion and gravity?",
options: ["Isaac Newton", "Albert Einstein", "Michael Faraday", "James Watt"],
answer: "Isaac Newton",
explanation: "Sir Isaac Newton’s laws of motion and universal gravitation, published in 1687, remain foundational to modern physics.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Who is considered a pioneer of modern computer science and codebreaking during WWII?",
options: ["Alan Turing", "Charles Babbage", "John Napier", "Thomas Edison"],
answer: "Alan Turing",
explanation: "Alan Turing’s work on codebreaking at Bletchley Park and his contributions to computing laid the groundwork for modern computer science.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "Which British engineer built the first practical steam engine?",
options: ["James Watt", "George Stephenson", "Isambard Kingdom Brunel", "Richard Arkwright"],
answer: "James Watt",
explanation: "James Watt improved the steam engine in the late 18th century, fueling the Industrial Revolution.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Who built the first steam locomotive for public railways?",
options: ["George Stephenson", "Richard Trevithick", "James Watt", "Robert Stephenson"],
answer: "George Stephenson",
explanation: "George Stephenson, known as the 'Father of Railways', built the 'Rocket' locomotive and helped develop the first public railway lines.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "Which British inventor developed the spinning frame for textile production?",
options: ["Richard Arkwright", "Samuel Crompton", "John Kay", "James Hargreaves"],
answer: "Richard Arkwright",
explanation: "Sir Richard Arkwright invented the spinning frame, revolutionising textile manufacturing during the Industrial Revolution.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Who designed the Clifton Suspension Bridge in Bristol?",
options: ["Isambard Kingdom Brunel", "Christopher Wren", "George Stephenson", "John Rennie"],
answer: "Isambard Kingdom Brunel",
explanation: "Isambard Kingdom Brunel designed the Clifton Suspension Bridge and many pioneering railway and ship projects in the 19th century.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "Which British author wrote 'Hamlet' and 'Romeo and Juliet'?",
options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "George Orwell"],
answer: "William Shakespeare",
explanation: "William Shakespeare, often regarded as the greatest playwright in history, wrote classics such as 'Hamlet', 'Macbeth', and 'Romeo and Juliet'.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "Who wrote 'Pride and Prejudice'?",
options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Virginia Woolf"],
answer: "Jane Austen",
explanation: "Jane Austen wrote 'Pride and Prejudice' in 1813, a timeless novel exploring love, class, and society in Georgian England.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "Which British author created the 'Harry Potter' series?",
options: ["J.K. Rowling", "C.S. Lewis", "Terry Pratchett", "Philip Pullman"],
answer: "J.K. Rowling",
explanation: "J.K. Rowling’s 'Harry Potter' series, first published in 1997, became a global phenomenon translated into over 80 languages.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Who wrote '1984' and 'Animal Farm'?",
options: ["George Orwell", "Aldous Huxley", "H.G. Wells", "J.R.R. Tolkien"],
answer: "George Orwell",
explanation: "George Orwell’s novels '1984' and 'Animal Farm' are powerful critiques of totalitarianism and political corruption.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "Who developed the jet engine?",
options: ["Sir Frank Whittle", "Isambard Kingdom Brunel", "George Stephenson", "John Logie Baird"],
answer: "Sir Frank Whittle",
explanation: "Sir Frank Whittle, a British engineer, invented the jet engine in the 1930s, revolutionising air travel.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Who invented the first working television system?",
options: ["John Logie Baird", "Alan Turing", "Alexander Graham Bell", "Thomas Edison"],
answer: "John Logie Baird",
explanation: "John Logie Baird demonstrated the first working television in 1926, laying the foundation for modern broadcasting.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Who discovered the structure of DNA in 1953?",
options: ["Francis Crick and James Watson", "Charles Darwin and Alfred Wallace", "Isaac Newton and Robert Hooke", "Marie and Pierre Curie"],
answer: "Francis Crick and James Watson",
explanation: "Francis Crick (British) and James Watson (American) discovered the double-helix structure of DNA at the University of Cambridge in 1953.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "Who invented the telephone?",
options: ["Alexander Graham Bell", "Thomas Edison", "Michael Faraday", "Charles Babbage"],
answer: "Alexander Graham Bell",
explanation: "Alexander Graham Bell, born in Scotland, invented the telephone in 1876, transforming global communication.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "Which British scientist is known for his work on electromagnetism?",
options: ["Michael Faraday", "Isaac Newton", "James Clerk Maxwell", "Stephen Hawking"],
answer: "Michael Faraday",
explanation: "Michael Faraday made pioneering discoveries in electromagnetism and electrochemistry, leading to modern electric technology.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Who is known for the theory of black holes and cosmology?",
options: ["Stephen Hawking", "Albert Einstein", "Isaac Newton", "Roger Penrose"],
answer: "Stephen Hawking",
explanation: "Professor Stephen Hawking made groundbreaking contributions to theoretical physics, especially in the study of black holes and the origins of the universe.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "Which British architect designed St Paul’s Cathedral in London?",
options: ["Sir Christopher Wren", "Isambard Kingdom Brunel", "Norman Foster", "John Nash"],
answer: "Sir Christopher Wren",
explanation: "Sir Christopher Wren rebuilt St Paul’s Cathedral after the Great Fire of London in 1666 — one of Britain’s most iconic landmarks.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Which British athlete won four Olympic gold medals in long-distance running?",
options: ["Mo Farah", "Sebastian Coe", "Roger Bannister", "Linford Christie"],
answer: "Mo Farah",
explanation: "Sir Mo Farah is one of Britain’s greatest athletes, winning four Olympic golds in the 5,000m and 10,000m events.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "Who broke the sound barrier in 1948 in a jet aircraft designed by a British team?",
options: ["Captain Chuck Yeager", "John Derry", "Alan Shepard", "Geoffrey de Havilland"],
answer: "John Derry",
explanation: "John Derry, a British test pilot, became one of the first to break the sound barrier in a de Havilland DH 108 jet.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Which British scientist won the Nobel Prize for contributions to climate science and the ozone layer?",
options: ["Paul Crutzen", "James Lovelock", "John Tyndall", "Harold Kroto"],
answer: "Harold Kroto",
explanation: "Sir Harold Kroto, a British chemist, was awarded the Nobel Prize in Chemistry in 1996 for his discovery of fullerenes — a form of carbon.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Who was the first person to run a mile in under four minutes?",
options: ["Roger Bannister", "Mo Farah", "Sebastian Coe", "Steve Ovett"],
answer: "Roger Bannister",
explanation: "Sir Roger Bannister broke the four-minute mile barrier in 1954, a landmark achievement in athletics.",
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
let questionsFlaggedTab17 = JSON.parse(localStorage.getItem("questionsFlaggedTab17")) || [];

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
    const alreadyFlagged = questionsFlaggedTab17.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab17.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab17", JSON.stringify(questionsFlaggedTab17));
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
