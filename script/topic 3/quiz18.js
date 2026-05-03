const questions = [
{
question: "Who was the first king to unite England under one rule?",
options: ["Alfred the Great", "William the Conqueror", "Edward the Confessor", "Henry II"],
answer: "Alfred the Great",
explanation: "Alfred the Great (871–899) defended England against Viking invasions and established the foundations for a unified English kingdom.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "Who led the Norman invasion of England in 1066?",
options: ["William the Conqueror", "Harold Godwinson", "Henry I", "Edward the Confessor"],
answer: "William the Conqueror",
explanation: "William, Duke of Normandy, invaded England in 1066, defeating Harold II at the Battle of Hastings and becoming King William I.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "Who was known as the 'Lionheart' for his bravery in the Crusades?",
options: ["Richard I", "Henry V", "Edward I", "Richard III"],
answer: "Richard I",
explanation: "King Richard I, known as Richard the Lionheart, earned fame for his military leadership during the Crusades.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "Which monarch signed the Magna Carta in 1215?",
options: ["King John", "Edward I", "Henry III", "William the Conqueror"],
answer: "King John",
explanation: "King John was forced by his barons to sign the Magna Carta in 1215, limiting royal power and establishing key rights.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "Who defeated the Spanish Armada in 1588?",
options: ["Queen Elizabeth I", "Queen Mary I", "Henry VIII", "James I"],
answer: "Queen Elizabeth I",
explanation: "Under Queen Elizabeth I’s rule, the English navy defeated the Spanish Armada in 1588, securing England’s independence and naval dominance.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Who was responsible for establishing the Church of England?",
options: ["Henry VIII", "Elizabeth I", "James I", "Mary I"],
answer: "Henry VIII",
explanation: "King Henry VIII broke from the Roman Catholic Church in the 1530s and founded the Church of England.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "Who was the longest-reigning British monarch before Queen Elizabeth II?",
options: ["Queen Victoria", "George III", "Elizabeth I", "Henry VIII"],
answer: "Queen Victoria",
explanation: "Queen Victoria reigned from 1837 to 1901, overseeing the expansion of the British Empire and a period of great industrial progress.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Who led the Parliamentarian forces during the English Civil War?",
options: ["Oliver Cromwell", "Charles I", "James II", "Henry VII"],
answer: "Oliver Cromwell",
explanation: "Oliver Cromwell led the Parliamentarian forces against King Charles I, later ruling as Lord Protector during the Commonwealth period.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "Who were William and Mary?",
options: ["Monarchs who ruled jointly after the Glorious Revolution", "Leaders of the Norman invasion", "Victorian reformers", "Explorers of the New World"],
answer: "Monarchs who ruled jointly after the Glorious Revolution",
explanation: "William III and Mary II ruled jointly after the Glorious Revolution of 1688, establishing parliamentary supremacy.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Who was known as the 'Iron Duke'?",
options: ["The Duke of Wellington", "The Duke of York", "The Duke of Edinburgh", "The Duke of Lancaster"],
answer: "The Duke of Wellington",
explanation: "Arthur Wellesley, the Duke of Wellington, defeated Napoleon at the Battle of Waterloo in 1815 and later became Prime Minister.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "Who was the famous British nurse during the Crimean War?",
options: ["Florence Nightingale", "Mary Seacole", "Emily Pankhurst", "Elizabeth Fry"],
answer: "Florence Nightingale",
explanation: "Florence Nightingale improved sanitary conditions in military hospitals during the Crimean War, earning her fame as the 'Lady with the Lamp'.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "Who fought for prison reform and humane treatment of inmates?",
options: ["Elizabeth Fry", "Florence Nightingale", "Mary Seacole", "Emmeline Pankhurst"],
answer: "Elizabeth Fry",
explanation: "Elizabeth Fry campaigned in the early 19th century to improve prison conditions, particularly for women.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "Who was the leader of the women's suffrage movement?",
options: ["Emmeline Pankhurst", "Florence Nightingale", "Mary Seacole", "Queen Victoria"],
answer: "Emmeline Pankhurst",
explanation: "Emmeline Pankhurst led the campaign for women's right to vote in the early 20th century through the suffragette movement.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Who was the British Prime Minister during most of World War II?",
options: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Anthony Eden"],
answer: "Winston Churchill",
explanation: "Winston Churchill served as Prime Minister from 1940 to 1945, leading Britain to victory in World War II.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "Who succeeded Winston Churchill as Prime Minister after World War II?",
options: ["Clement Attlee", "Harold Macmillan", "Anthony Eden", "Neville Chamberlain"],
answer: "Clement Attlee",
explanation: "Clement Attlee became Prime Minister in 1945, establishing the National Health Service (NHS) and expanding social welfare.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Who was the first female British Prime Minister?",
options: ["Margaret Thatcher", "Theresa May", "Barbara Castle", "Harriet Harman"],
answer: "Margaret Thatcher",
explanation: "Margaret Thatcher, known as the 'Iron Lady', was Britain’s first female Prime Minister, serving from 1979 to 1990.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Which scientist formulated the theory of gravity?",
options: ["Isaac Newton", "Charles Darwin", "Michael Faraday", "Stephen Hawking"],
answer: "Isaac Newton",
explanation: "Sir Isaac Newton developed the laws of motion and universal gravitation, profoundly influencing modern science.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "Who is known as the founder of modern nursing?",
options: ["Florence Nightingale", "Mary Seacole", "Elizabeth Fry", "Emily Davison"],
answer: "Florence Nightingale",
explanation: "Florence Nightingale revolutionised nursing practices and established the first professional nursing school.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "Who developed the theory of evolution?",
options: ["Charles Darwin", "Gregor Mendel", "Isaac Newton", "Francis Crick"],
answer: "Charles Darwin",
explanation: "Charles Darwin proposed the theory of evolution by natural selection in 'On the Origin of Species' (1859).",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Who broke the four-minute mile record in 1954?",
options: ["Roger Bannister", "Sebastian Coe", "Mo Farah", "Steve Ovett"],
answer: "Roger Bannister",
explanation: "Sir Roger Bannister became the first person to run a mile in under four minutes, a milestone in athletics.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "Who became the first British woman to win a Nobel Prize in Science?",
options: ["Dorothy Hodgkin", "Rosalind Franklin", "Mary Somerville", "Ada Lovelace"],
answer: "Dorothy Hodgkin",
explanation: "Dorothy Hodgkin won the Nobel Prize in Chemistry in 1964 for her work on the structures of vital biochemical substances.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Who was the architect of St Paul’s Cathedral?",
options: ["Sir Christopher Wren", "Isambard Kingdom Brunel", "John Nash", "Norman Foster"],
answer: "Sir Christopher Wren",
explanation: "Sir Christopher Wren rebuilt St Paul’s Cathedral after the Great Fire of London in 1666.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "Who was the famous British nurse of Jamaican descent who worked during the Crimean War?",
options: ["Mary Seacole", "Florence Nightingale", "Elizabeth Fry", "Emmeline Pankhurst"],
answer: "Mary Seacole",
explanation: "Mary Seacole, a British-Jamaican nurse, cared for soldiers during the Crimean War and is celebrated as a medical pioneer.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Who was the British scientist famous for his work on black holes?",
options: ["Stephen Hawking", "Isaac Newton", "James Clerk Maxwell", "Michael Faraday"],
answer: "Stephen Hawking",
explanation: "Professor Stephen Hawking made groundbreaking contributions to cosmology and the study of black holes.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Who was the British monarch during the First World War?",
options: ["King George V", "Queen Victoria", "Edward VII", "George VI"],
answer: "King George V",
explanation: "King George V was the British monarch from 1910 to 1936, leading the country during World War I.",
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
let questionsFlaggedTab18 = JSON.parse(localStorage.getItem("questionsFlaggedTab18")) || [];

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
    const alreadyFlagged = questionsFlaggedTab18.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab18.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab18", JSON.stringify(questionsFlaggedTab18));
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
