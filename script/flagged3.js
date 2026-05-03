// grab container once
const container = document.querySelector(".container");

// read initial arrays from localStorage (these will be re-read inside renderFlagged)
let questionsFlaggedTab11 = JSON.parse(localStorage.getItem("questionsFlaggedTab11")) || [];
let questionsFlaggedTab12 = JSON.parse(localStorage.getItem("questionsFlaggedTab12")) || [];
let questionsFlaggedTab13 = JSON.parse(localStorage.getItem("questionsFlaggedTab13")) || [];
let questionsFlaggedTab14 = JSON.parse(localStorage.getItem("questionsFlaggedTab14")) || [];
let questionsFlaggedTab15 = JSON.parse(localStorage.getItem("questionsFlaggedTab15")) || [];
let questionsFlaggedTab16 = JSON.parse(localStorage.getItem("questionsFlaggedTab16")) || [];
let questionsFlaggedTab17 = JSON.parse(localStorage.getItem("questionsFlaggedTab17")) || [];
let questionsFlaggedTab18 = JSON.parse(localStorage.getItem("questionsFlaggedTab18")) || [];
let questionsFlaggedTab19 = JSON.parse(localStorage.getItem("questionsFlaggedTab19")) || [];
let questionsFlaggedTab20 = JSON.parse(localStorage.getItem("questionsFlaggedTab20")) || [];

/*
  IMPORTANT: single delegated listener for remove buttons.
  Put this outside renderFlagged so it's registered once and works
  even when DOM is replaced.
*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    // parse attributes from the clicked element (which quiz, and which question no)
    const no = parseInt(e.target.dataset.no, 10);
    const key = e.target.dataset.key;

    // read the relevant array from localStorage (always read fresh)
    let arr = JSON.parse(localStorage.getItem(key)) || [];
    // remove the clicked question by its number
    arr = arr.filter(q => q.no !== no);
    // write updated array back to localStorage
    localStorage.setItem(key, JSON.stringify(arr));

    // re-render UI (renderFlagged will re-read from localStorage)
    renderFlagged();
  }
});

function renderFlagged(){
  // re-read arrays from localStorage HERE so UI always reflects current storage
let questionsFlaggedTab11 = JSON.parse(localStorage.getItem("questionsFlaggedTab11")) || [];
let questionsFlaggedTab12 = JSON.parse(localStorage.getItem("questionsFlaggedTab12")) || [];
let questionsFlaggedTab13 = JSON.parse(localStorage.getItem("questionsFlaggedTab13")) || [];
let questionsFlaggedTab14 = JSON.parse(localStorage.getItem("questionsFlaggedTab14")) || [];
let questionsFlaggedTab15 = JSON.parse(localStorage.getItem("questionsFlaggedTab15")) || [];
let questionsFlaggedTab16 = JSON.parse(localStorage.getItem("questionsFlaggedTab16")) || [];
let questionsFlaggedTab17 = JSON.parse(localStorage.getItem("questionsFlaggedTab17")) || [];
let questionsFlaggedTab18 = JSON.parse(localStorage.getItem("questionsFlaggedTab18")) || [];
let questionsFlaggedTab19 = JSON.parse(localStorage.getItem("questionsFlaggedTab19")) || [];
let questionsFlaggedTab20 = JSON.parse(localStorage.getItem("questionsFlaggedTab20")) || [];
  // build whole UI (headers, totals, containers, buttons)
  container.innerHTML = `
    <h1>Flagged</h1>

    <div class="header">
      <h2>Quiz 1</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab11.length} </h2>
    </div>
    <div class="questions" id="quiz11-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz11-btn">Take Quiz</button>
    </div>

    <div class="header">
      <h2>Quiz 2</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab12.length} </h2>
    </div>
    <div class="questions" id="quiz12-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz12-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 3</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab13.length} </h2>
    </div>
    <div class="questions" id="quiz13-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz13-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 4</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab14.length} </h2>
    </div>
    <div class="questions" id="quiz14-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz14-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 5</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab15.length} </h2>
    </div>
    <div class="questions" id="quiz15-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz15-btn">Take Quiz</button>
    </div>

    <div class="header">
      <h2>Quiz 6</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab16.length} </h2>
    </div>
    <div class="questions" id="quiz16-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz16-btn">Take Quiz</button>
    </div>

    <div class="header">
      <h2>Quiz 7</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab17.length} </h2>
    </div>
    <div class="questions" id="quiz17-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz17-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 8</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab18.length} </h2>
    </div>
    <div class="questions" id="quiz18-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz18-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 9</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab19.length} </h2>
    </div>
    <div class="questions" id="quiz19-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz19-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 10</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab20.length} </h2>
    </div>
    <div class="questions" id="quiz20-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz20-btn">Take Quiz</button>
    </div>
  `;

  // wire the two quiz buttons (do this after innerHTML so elements exist)
  const quizBtn = document.getElementById("quiz11-btn");
  const quizBtn2 = document.getElementById("quiz12-btn");
  const quizBtn3 = document.getElementById("quiz13-btn");
  const quizBtn4 = document.getElementById("quiz14-btn");
  const quizBtn5 = document.getElementById("quiz15-btn");
  const quizBtn6 = document.getElementById("quiz16-btn");
  const quizBtn7 = document.getElementById("quiz17-btn");
  const quizBtn8 = document.getElementById("quiz18-btn");
  const quizBtn9 = document.getElementById("quiz19-btn");
  const quizBtn10 = document.getElementById("quiz20-btn");

  quizBtn.addEventListener("click",() => {
    window.location.href = "flaggedquiz1.html";
  });

  quizBtn2.addEventListener("click", () => {
    window.location.href = "flaggedquiz1.html";
  });

  quizBtn3.addEventListener("click",() => {
    window.location.href= "flaggedquiz1.html";
  });

  quizBtn4.addEventListener("click", () => {
    window.location.href= "flaggedquiz1.html";
  });

  quizBtn5.addEventListener("click", ()=>{
    window.location.href= "flaggedquiz1.html";
  });

    quizBtn6.addEventListener("click",() => {
    window.location.href = "flaggedquiz1.html";
  });

  quizBtn7.addEventListener("click", () => {
    window.location.href = "flaggedquiz1.html";
  });

  quizBtn8.addEventListener("click",() => {
    window.location.href= "flaggedquiz1.html";
  });

  quizBtn9.addEventListener("click", () => {
    window.location.href= "flaggedquiz1.html";
  });

  quizBtn10.addEventListener("click", ()=>{
    window.location.href= "flaggedquiz1.html";
  });

  // helper to render a single quiz's questions into containerId
  function renderQuestions(list, containerId, storageKey){
    const questionsContainer = document.getElementById(containerId);
    questionsContainer.innerHTML = "" ;

    if(list.length === 0){
      questionsContainer.innerHTML = `<p class="paragraph">No Questions Flagged</p>`;
      return;
    }

    // build markup for each question
    list.forEach(q => {
      questionsContainer.innerHTML += `
        <div class="question-container">
          <!-- data-key tells the remove handler which localStorage key to edit -->
          <h3 class="remove" data-no="${q.no}" data-key="${storageKey}">X</h3>
          <div class="title">
            <h3>Question ${q.no}</h3>
            <h3 class="arrow">></h3>
          </div>
          <h4>${q.question}</h4>
          <p>${q.answer}</p>
        </div>
      `;
    });
  }

  // call render for both quizzes, passing the correct localStorage key names
  renderQuestions(questionsFlaggedTab11, "quiz11-questions", "questionsFlaggedTab11");
  renderQuestions(questionsFlaggedTab12, "quiz12-questions", "questionsFlaggedTab12");
  renderQuestions(questionsFlaggedTab13, "quiz13-questions", "questionsFlaggedTab13");
  renderQuestions(questionsFlaggedTab14, "quiz14-questions", "questionsFlaggedTab14");
  renderQuestions(questionsFlaggedTab15, "quiz15-questions", "questionsFlaggedTab15");
  renderQuestions(questionsFlaggedTab16, "quiz16-questions", "questionsFlaggedTab16");
  renderQuestions(questionsFlaggedTab17, "quiz17-questions", "questionsFlaggedTab17");
  renderQuestions(questionsFlaggedTab18, "quiz18-questions", "questionsFlaggedTab18");
  renderQuestions(questionsFlaggedTab19, "quiz19-questions", "questionsFlaggedTab19");
  renderQuestions(questionsFlaggedTab20, "quiz20-questions", "questionsFlaggedTab20");
;

if(questionsFlaggedTab11.length === 0){
  quizBtn.style.display = "none";
};

if(questionsFlaggedTab12.length === 0){
  quizBtn2.style.display = "none";
};

if(questionsFlaggedTab13.length === 0){
  quizBtn3.style.display = "none";
};

if(questionsFlaggedTab14.length === 0){
  quizBtn4.style.display = "none";
};

if(questionsFlaggedTab15.length === 0){
  quizBtn5.style.display = "none";
};

if(questionsFlaggedTab16.length === 0){
  quizBtn6.style.display = "none";
};

if(questionsFlaggedTab17.length === 0){
  quizBtn7.style.display = "none";
};

if(questionsFlaggedTab18.length === 0){
  quizBtn8.style.display = "none";
};

if(questionsFlaggedTab19.length === 0){
  quizBtn9.style.display = "none";
};

if(questionsFlaggedTab20.length === 0){
  quizBtn10.style.display = "none";
};
}

// initial render
renderFlagged();
