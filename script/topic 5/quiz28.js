const questions = [
{
question: "Who can vote in UK general elections?",
options: ["All residents of the UK", "UK citizens aged 18 or over", "Only property owners", "Only members of a political party"],
answer: "UK citizens aged 18 or over",
explanation: "UK citizens aged 18 and over are eligible to vote in general elections. Certain Commonwealth and EU citizens may also vote in local elections.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "What is a general election?",
options: ["An election to choose the Prime Minister directly", "An election to choose MPs for the House of Commons", "An election to choose members of the House of Lords", "A referendum only"],
answer: "An election to choose MPs for the House of Commons",
explanation: "A general election selects Members of Parliament (MPs) who will represent constituencies in the House of Commons.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "How often are general elections held in the UK?",
options: ["Every 3 years", "Every 5 years", "Every 7 years", "Every 10 years"],
answer: "Every 5 years",
explanation: "General elections are held at least every five years, although elections can be called earlier under certain circumstances.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "What is a political party?",
options: ["A group of MPs only", "An organization of people with shared political ideas and policies", "The Monarch’s advisors", "Civil servants"],
answer: "An organization of people with shared political ideas and policies",
explanation: "Political parties gather support to influence government policies and stand candidates in elections.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "Who becomes Prime Minister after a general election?",
options: ["The Monarch chooses freely", "The leader of the party with the most seats in the House of Commons", "The Speaker of the House of Commons", "A member of the House of Lords"],
answer: "The leader of the party with the most seats in the House of Commons",
explanation: "The leader of the party with majority support in the House of Commons is invited by the Monarch to become Prime Minister.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "What is a constituency?",
options: ["A local area represented by an MP", "A political party office", "A polling station", "A government department"],
answer: "A local area represented by an MP",
explanation: "The UK is divided into constituencies, each represented by one Member of Parliament in the House of Commons.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "What is the House of Commons?",
options: ["The lower house of Parliament, where MPs debate and vote on legislation", "The upper house of Parliament", "The Monarch’s advisory council", "A local government body"],
answer: "The lower house of Parliament, where MPs debate and vote on legislation",
explanation: "The House of Commons is the elected chamber of Parliament responsible for making laws and representing the public.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "What is the voting age in the UK?",
options: ["16", "17", "18", "21"],
answer: "18",
explanation: "UK citizens aged 18 and over are eligible to vote in general elections, referendums, and local elections.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "What is a ballot paper?",
options: ["A document listing candidates and parties for voting", "A government policy document", "A Parliamentary report", "A civil service form"],
answer: "A document listing candidates and parties for voting",
explanation: "Ballot papers allow voters to mark their choice for candidates or parties during elections.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "What is the first-past-the-post system?",
options: ["A system where the candidate with the most votes in a constituency wins", "A proportional voting system", "A system where all votes are shared equally", "A system where the Monarch decides the winner"],
answer: "A system where the candidate with the most votes in a constituency wins",
explanation: "In UK general elections, the candidate with the most votes in each constituency becomes the MP for that area.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "What is a referendum?",
options: ["An election for MPs only", "A vote by the public on a specific issue", "A local council meeting", "A Cabinet decision"],
answer: "A vote by the public on a specific issue",
explanation: "Referendums allow citizens to vote directly on particular issues, such as the Brexit referendum in 2016.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "Who can stand as a candidate in a general election?",
options: ["Any UK citizen over 18", "Only MPs", "Only members of the House of Lords", "Only government ministers"],
answer: "Any UK citizen over 18",
explanation: "To stand as a candidate in a general election, a person must meet eligibility requirements including being at least 18 and a UK citizen, Commonwealth citizen, or citizen of the Republic of Ireland.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "What is a polling station?",
options: ["A place where votes are cast during elections", "A local government office", "The House of Commons", "A Cabinet meeting room"],
answer: "A place where votes are cast during elections",
explanation: "Polling stations are designated locations where voters go to cast their ballots on election day.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "What is a voter registration?",
options: ["A process to select MPs", "The process of signing up to vote in elections", "The announcement of election results", "A Cabinet decision"],
answer: "The process of signing up to vote in elections",
explanation: "All eligible voters must register before an election to ensure they can cast their vote.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "Which of these is an example of a UK political party?",
options: ["Labour Party", "Democratic Party", "Republican Party", "Green Party of Canada"],
answer: "Labour Party",
explanation: "The Labour Party is one of the main political parties in the UK, alongside the Conservative Party, Liberal Democrats, and others.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "What is tactical voting?",
options: ["Voting for your favorite candidate only", "Voting to prevent a less preferred candidate from winning", "Not voting at all", "Voting multiple times"],
answer: "Voting to prevent a less preferred candidate from winning",
explanation: "Tactical voting occurs when voters choose a candidate not because they are the first choice, but to influence the overall outcome.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Who counts the votes after an election?",
options: ["Civil servants and election officials", "MPs", "The Prime Minister", "The Monarch"],
answer: "Civil servants and election officials",
explanation: "Election officials, supervised by local authorities, count the votes to ensure accuracy and fairness.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "What is the role of the Electoral Commission?",
options: ["To organize, supervise elections, and ensure fairness", "To pass laws", "To appoint the Prime Minister", "To run the NHS"],
answer: "To organize, supervise elections, and ensure fairness",
explanation: "The Electoral Commission oversees elections and referendums in the UK, ensuring they are conducted fairly and transparently.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "What is the purpose of a by-election?",
options: ["To replace an MP who has resigned or died between general elections", "To pass a new law", "To approve the budget", "To elect the Prime Minister"],
answer: "To replace an MP who has resigned or died between general elections",
explanation: "By-elections fill vacant parliamentary seats outside of the normal general election cycle.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Which type of election uses proportional representation in the UK?",
options: ["General elections", "European Parliament elections", "Local council elections", "All of the above"],
answer: "European Parliament elections",
explanation: "Some UK elections, such as the European Parliament elections (when the UK participated), use proportional representation rather than first-past-the-post.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "What is a manifesto?",
options: ["A public statement of policies and promises by a political party", "A law passed by Parliament", "A civil service document", "A court ruling"],
answer: "A public statement of policies and promises by a political party",
explanation: "Before elections, parties publish a manifesto outlining the policies they plan to implement if elected.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Who is responsible for organizing local and national elections?",
options: ["The Monarch", "Local authorities and the Electoral Commission", "MPs", "The Prime Minister alone"],
answer: "Local authorities and the Electoral Commission",
explanation: "Local councils manage the logistics of elections locally, supervised by the Electoral Commission for fairness.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "What does it mean to vote 'by proxy'?",
options: ["Voting in person at a polling station", "Authorizing someone else to vote on your behalf", "Voting in secret", "Voting multiple times"],
answer: "Authorizing someone else to vote on your behalf",
explanation: "Proxy voting allows a registered voter to appoint another person to cast their vote if they cannot attend the polling station.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "What is a hung parliament?",
options: ["When no single party has a majority in the House of Commons", "When the Monarch refuses to give Royal Assent", "When Parliament passes a controversial law", "When all MPs agree unanimously"],
answer: "When no single party has a majority in the House of Commons",
explanation: "A hung parliament occurs when no party wins more than half the seats, often leading to coalitions or minority governments.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "What is the first step in the UK voting process?",
options: ["Counting votes", "Registering to vote", "Casting the vote", "Publishing the manifesto"],
answer: "Registering to vote",
explanation: "Voters must first register to vote before they can participate in any election or referendum.",
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
let questionsFlaggedTab28 = JSON.parse(localStorage.getItem("questionsFlaggedTab28")) || [];

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
    const alreadyFlagged = questionsFlaggedTab28.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab28.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab28", JSON.stringify(questionsFlaggedTab28));
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
