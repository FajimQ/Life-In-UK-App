const questions = [
{
question: "Which British author wrote the Harry Potter series?",
options: ["J.R.R. Tolkien", "J.K. Rowling", "Roald Dahl", "C.S. Lewis"],
answer: "J.K. Rowling",
explanation: "J.K. Rowling is the British author who wrote the globally famous Harry Potter series.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "Which UK city is famous for its annual film festival?",
options: ["Edinburgh", "London", "Glasgow", "Manchester"],
answer: "Edinburgh",
explanation: "The Edinburgh International Film Festival is one of the oldest continually running film festivals in the world.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "Which British band is known for songs like 'Hey Jude' and 'Let It Be'?",
options: ["The Rolling Stones", "The Beatles", "Queen", "Coldplay"],
answer: "The Beatles",
explanation: "The Beatles, from Liverpool, are one of the most influential bands in music history.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "Which famous playwright wrote 'Romeo and Juliet'?",
options: ["Christopher Marlowe", "William Shakespeare", "George Bernard Shaw", "Tom Stoppard"],
answer: "William Shakespeare",
explanation: "William Shakespeare is widely regarded as England’s greatest playwright.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "Which museum in London is home to the Rosetta Stone?",
options: ["British Museum", "Natural History Museum", "Victoria and Albert Museum", "Tate Modern"],
answer: "British Museum",
explanation: "The British Museum houses the Rosetta Stone, among many other historical artifacts.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Which dance form originated in the UK and is performed in theatres worldwide?",
options: ["Ballet", "Morris dancing", "Tap dance", "Contemporary dance"],
answer: "Morris dancing",
explanation: "Morris dancing is a traditional English folk dance with a long history.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "What is the name of the British national theatre located in London?",
options: ["Royal Opera House", "National Theatre", "Globe Theatre", "Royal Albert Hall"],
answer: "National Theatre",
explanation: "The National Theatre on the South Bank hosts plays, performances, and cultural events.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "Which British painter is famous for his portrait of Queen Elizabeth II?",
options: ["Lucian Freud", "David Hockney", "Hans Holbein the Younger", "Thomas Gainsborough"],
answer: "Lucian Freud",
explanation: "Lucian Freud, a renowned British painter, is known for his expressive portraits, including of the Queen.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "What is 'The Proms'?",
options: ["A type of dance", "An annual classical music festival", "A theatre festival", "A sporting event"],
answer: "An annual classical music festival",
explanation: "The Proms is a summer festival of classical music held mainly at the Royal Albert Hall in London.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Which British author wrote 'The Chronicles of Narnia'?",
options: ["J.K. Rowling", "C.S. Lewis", "Philip Pullman", "Roald Dahl"],
answer: "C.S. Lewis",
explanation: "C.S. Lewis, from Northern Ireland, wrote the famous fantasy series 'The Chronicles of Narnia'.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "Which British city is famous for its music scene and bands like Oasis?",
options: ["Liverpool", "Manchester", "London", "Bristol"],
answer: "Manchester",
explanation: "Manchester has a rich musical heritage and produced famous bands including Oasis and The Smiths.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "Which museum is famous for contemporary and modern art in London?",
options: ["Tate Modern", "British Museum", "Victoria and Albert Museum", "National Gallery"],
answer: "Tate Modern",
explanation: "Tate Modern is a leading museum of modern and contemporary art, located on the South Bank in London.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "Who is the British artist known for the 'Spot' paintings?",
options: ["Damien Hirst", "Banksy", "Lucian Freud", "Tracey Emin"],
answer: "Damien Hirst",
explanation: "Damien Hirst is a contemporary British artist known for his 'Spot' paintings and conceptual works.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Which British festival celebrates literature, music, and arts in a town in England every summer?",
options: ["Glastonbury", "Hay Festival", "Edinburgh Festival", "Chelsea Flower Show"],
answer: "Hay Festival",
explanation: "The Hay Festival, held in Hay-on-Wye, celebrates literature, arts, and ideas.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "Which famous British singer performed 'Rolling in the Deep'?",
options: ["Adele", "Amy Winehouse", "Ed Sheeran", "Sam Smith"],
answer: "Adele",
explanation: "Adele, from London, is a globally acclaimed singer-songwriter known for hits like 'Rolling in the Deep'.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Which theatre is associated with Shakespeare in London?",
options: ["National Theatre", "Globe Theatre", "Royal Court Theatre", "Old Vic"],
answer: "Globe Theatre",
explanation: "Shakespeare’s Globe Theatre is a reconstruction of the original Elizabethan playhouse where Shakespeare's plays were performed.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Which annual awards show celebrates the best in British television?",
options: ["BAFTA TV Awards", "Oscars", "Grammys", "Emmys"],
answer: "BAFTA TV Awards",
explanation: "The BAFTA TV Awards honour the best television productions and performers in the UK.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "Which UK city is famous for its street art and graffiti culture?",
options: ["London", "Bristol", "Liverpool", "Manchester"],
answer: "Bristol",
explanation: "Bristol is internationally recognized for its street art, including works by Banksy.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "Which iconic British rock band is known for 'Bohemian Rhapsody'?",
options: ["The Beatles", "Queen", "The Rolling Stones", "Led Zeppelin"],
answer: "Queen",
explanation: "Queen, formed in London, is famous for hits like 'Bohemian Rhapsody' and 'We Will Rock You'.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Which British museum is dedicated to science and technology?",
options: ["Science Museum", "Natural History Museum", "British Museum", "Victoria and Albert Museum"],
answer: "Science Museum",
explanation: "The Science Museum in London focuses on scientific achievements and innovations.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "Which British festival is famous for music and arts in Somerset?",
options: ["Glastonbury Festival", "Edinburgh Festival", "Reading Festival", "Isle of Wight Festival"],
answer: "Glastonbury Festival",
explanation: "Glastonbury Festival is a major annual music and arts festival held in Somerset, England.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Which famous British actor played James Bond in multiple films?",
options: ["Daniel Craig", "Benedict Cumberbatch", "Tom Hardy", "Eddie Redmayne"],
answer: "Daniel Craig",
explanation: "Daniel Craig portrayed James Bond in several films, starting with 'Casino Royale' in 2006.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "Which UK city is known as the birthplace of The Beatles?",
options: ["London", "Liverpool", "Manchester", "Birmingham"],
answer: "Liverpool",
explanation: "Liverpool is famous as the hometown of The Beatles.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Which British playwright wrote 'Pygmalion', later adapted into 'My Fair Lady'?",
options: ["George Bernard Shaw", "Harold Pinter", "Tom Stoppard", "William Shakespeare"],
answer: "George Bernard Shaw",
explanation: "George Bernard Shaw was an influential British playwright and critic who wrote 'Pygmalion'.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Which British author wrote 'Matilda' and 'Charlie and the Chocolate Factory'?",
options: ["Roald Dahl", "J.K. Rowling", "Enid Blyton", "Beatrix Potter"],
answer: "Roald Dahl",
explanation: "Roald Dahl is a famous British children’s author known for imaginative stories.",
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
let questionsFlaggedTab22 = JSON.parse(localStorage.getItem("questionsFlaggedTab22")) || [];

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
    const alreadyFlagged = questionsFlaggedTab22.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab22.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab22", JSON.stringify(questionsFlaggedTab22));
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
