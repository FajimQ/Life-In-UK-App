const questions = [
{
question: "Who founded the Women's Social and Political Union (WSPU) in 1903?",
options: ["Emmeline Pankhurst", "Millicent Fawcett", "Elizabeth Fry", "Mary Seacole"],
answer: "Emmeline Pankhurst",
explanation: "Emmeline Pankhurst founded the WSPU in 1903, leading the militant suffragette movement that fought for women’s right to vote.",
userAnswer: null,
flagged: false,
no: 1
},
{
question: "What was the main goal of the suffragette movement?",
options: ["To gain the right to vote for women", "To improve working conditions", "To abolish slavery", "To promote education for girls"],
answer: "To gain the right to vote for women",
explanation: "The suffragette movement campaigned for women’s right to vote, using both peaceful and militant tactics to achieve political equality.",
userAnswer: null,
flagged: false,
no: 2
},
{
question: "When did women over the age of 30 first gain the right to vote in the UK?",
options: ["1918", "1928", "1945", "1901"],
answer: "1918",
explanation: "In 1918, women over 30 who met property qualifications were granted the right to vote after World War I.",
userAnswer: null,
flagged: false,
no: 3
},
{
question: "When were women granted equal voting rights with men in the UK?",
options: ["1928", "1939", "1945", "1951"],
answer: "1928",
explanation: "The Representation of the People (Equal Franchise) Act 1928 gave women the same voting rights as men, allowing all adults over 21 to vote.",
userAnswer: null,
flagged: false,
no: 4
},
{
question: "Which British Prime Minister was the first woman to hold the position?",
options: ["Margaret Thatcher", "Theresa May", "Harriet Harman", "Barbara Castle"],
answer: "Margaret Thatcher",
explanation: "Margaret Thatcher became Britain’s first female Prime Minister in 1979, serving until 1990. She was known as the 'Iron Lady'.",
userAnswer: null,
flagged: false,
no: 5
},
{
question: "Who led the National Union of Women's Suffrage Societies (NUWSS)?",
options: ["Millicent Fawcett", "Emmeline Pankhurst", "Elizabeth Fry", "Mary Wollstonecraft"],
answer: "Millicent Fawcett",
explanation: "Millicent Fawcett led the NUWSS, which campaigned for women’s suffrage through peaceful, lawful methods.",
userAnswer: null,
flagged: false,
no: 6
},
{
question: "Who wrote 'A Vindication of the Rights of Woman' (1792)?",
options: ["Mary Wollstonecraft", "Jane Austen", "Florence Nightingale", "Charlotte Brontë"],
answer: "Mary Wollstonecraft",
explanation: "Mary Wollstonecraft’s book 'A Vindication of the Rights of Woman' argued that women should have equal education and opportunities as men.",
userAnswer: null,
flagged: false,
no: 7
},
{
question: "When was the Equal Pay Act passed in the UK?",
options: ["1970", "1965", "1985", "1990"],
answer: "1970",
explanation: "The Equal Pay Act 1970 made it illegal to pay women less than men for the same work or work of equal value.",
userAnswer: null,
flagged: false,
no: 8
},
{
question: "When was the Sex Discrimination Act introduced?",
options: ["1975", "1960", "1980", "1995"],
answer: "1975",
explanation: "The Sex Discrimination Act 1975 made it unlawful to discriminate against individuals based on sex or marital status in employment and education.",
userAnswer: null,
flagged: false,
no: 9
},
{
question: "Who was the British nurse of Jamaican descent who helped soldiers during the Crimean War?",
options: ["Mary Seacole", "Florence Nightingale", "Elizabeth Fry", "Emmeline Pankhurst"],
answer: "Mary Seacole",
explanation: "Mary Seacole was a pioneering nurse and businesswoman who cared for soldiers on the front lines during the Crimean War.",
userAnswer: null,
flagged: false,
no: 10
},
{
question: "Who campaigned for better conditions for women in prisons?",
options: ["Elizabeth Fry", "Mary Seacole", "Emmeline Pankhurst", "Millicent Fawcett"],
answer: "Elizabeth Fry",
explanation: "Elizabeth Fry was a Quaker reformer who campaigned for humane treatment of prisoners, especially women, in the early 19th century.",
userAnswer: null,
flagged: false,
no: 11
},
{
question: "Which famous suffragette died after being trampled by the King's horse at the 1913 Derby?",
options: ["Emily Davison", "Millicent Fawcett", "Mary Seacole", "Elizabeth Fry"],
answer: "Emily Davison",
explanation: "Emily Davison became a martyr for the suffragette movement when she was fatally injured at the Epsom Derby in 1913.",
userAnswer: null,
flagged: false,
no: 12
},
{
question: "When did women first sit in the House of Commons?",
options: ["1919", "1928", "1939", "1950"],
answer: "1919",
explanation: "Nancy Astor became the first woman to take her seat in the House of Commons in 1919.",
userAnswer: null,
flagged: false,
no: 13
},
{
question: "Who was the first woman to be elected as a Member of Parliament (MP)?",
options: ["Constance Markievicz", "Nancy Astor", "Margaret Thatcher", "Barbara Castle"],
answer: "Constance Markievicz",
explanation: "Constance Markievicz was elected in 1918 but did not take her seat as a member of Sinn Féin. Nancy Astor was the first to sit in Parliament.",
userAnswer: null,
flagged: false,
no: 14
},
{
question: "When did the first women become members of the House of Lords?",
options: ["1958", "1930", "1965", "1979"],
answer: "1958",
explanation: "The Life Peerages Act 1958 allowed women to become life peers and sit in the House of Lords for the first time.",
userAnswer: null,
flagged: false,
no: 15
},
{
question: "Which law gave women equal rights in employment and education?",
options: ["Sex Discrimination Act 1975", "Equal Pay Act 1970", "Equality Act 2010", "Representation of the People Act 1918"],
answer: "Sex Discrimination Act 1975",
explanation: "The Sex Discrimination Act 1975 prohibited unfair treatment based on sex in employment, training, and education.",
userAnswer: null,
flagged: false,
no: 16
},
{
question: "Which law combined previous anti-discrimination laws into one comprehensive act?",
options: ["Equality Act 2010", "Human Rights Act 1998", "Equal Pay Act 1970", "Sex Discrimination Act 1975"],
answer: "Equality Act 2010",
explanation: "The Equality Act 2010 unified and strengthened previous anti-discrimination laws, protecting people from unfair treatment.",
userAnswer: null,
flagged: false,
no: 17
},
{
question: "Who became the second female Prime Minister of the UK?",
options: ["Theresa May", "Margaret Thatcher", "Barbara Castle", "Harriet Harman"],
answer: "Theresa May",
explanation: "Theresa May served as the UK’s second female Prime Minister from 2016 to 2019.",
userAnswer: null,
flagged: false,
no: 18
},
{
question: "Who was the first woman to lead the Labour Party?",
options: ["Margaret Beckett", "Barbara Castle", "Harriet Harman", "Angela Rayner"],
answer: "Margaret Beckett",
explanation: "Margaret Beckett briefly served as acting leader of the Labour Party in 1994, the first woman to do so.",
userAnswer: null,
flagged: false,
no: 19
},
{
question: "Which social reformer campaigned to end child labour and improve working conditions?",
options: ["Lord Shaftesbury", "Elizabeth Fry", "Mary Wollstonecraft", "Emmeline Pankhurst"],
answer: "Lord Shaftesbury",
explanation: "Although not a woman, Lord Shaftesbury played a major role in 19th-century social reform, including improving conditions for women and children.",
userAnswer: null,
flagged: false,
no: 20
},
{
question: "When was same-sex marriage legalised in England and Wales?",
options: ["2014", "2010", "2005", "2018"],
answer: "2014",
explanation: "Same-sex marriage became legal in England and Wales in March 2014 under the Marriage (Same Sex Couples) Act 2013.",
userAnswer: null,
flagged: false,
no: 21
},
{
question: "Who became the first woman Bishop in the Church of England?",
options: ["Libby Lane", "Rowan Williams", "Sarah Mullally", "Anne Stevens"],
answer: "Libby Lane",
explanation: "Libby Lane became the Church of England’s first female bishop in 2015, marking a major step in gender equality within the church.",
userAnswer: null,
flagged: false,
no: 22
},
{
question: "Who was the first female Speaker of the House of Commons?",
options: ["Betty Boothroyd", "Theresa May", "Margaret Beckett", "Harriet Harman"],
answer: "Betty Boothroyd",
explanation: "Betty Boothroyd became the first female Speaker of the House of Commons in 1992, serving until 2000.",
userAnswer: null,
flagged: false,
no: 23
},
{
question: "Which 19th-century author highlighted women’s struggles through novels like 'Pride and Prejudice'?",
options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"],
answer: "Jane Austen",
explanation: "Jane Austen’s novels offered insight into women’s social limitations and aspirations in the early 19th century.",
userAnswer: null,
flagged: false,
no: 24
},
{
question: "Which British woman won the Nobel Peace Prize for her humanitarian work?",
options: ["Mother Teresa", "Malala Yousafzai", "Emily Hobhouse", "Jane Addams"],
answer: "Malala Yousafzai",
explanation: "Although Pakistani-born, Malala Yousafzai became a UK citizen and won the Nobel Peace Prize in 2014 for advocating girls’ education.",
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
let questionsFlaggedTab19 = JSON.parse(localStorage.getItem("questionsFlaggedTab19")) || [];

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
    const alreadyFlagged = questionsFlaggedTab19.some(q => q.question === currentQuestion.question);

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
    questionsFlaggedTab19.push(flaggedQuestion);

    localStorage.setItem("questionsFlagged", JSON.stringify(questionsFlagged));
    localStorage.setItem("questionsFlaggedTab19", JSON.stringify(questionsFlaggedTab19));
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
