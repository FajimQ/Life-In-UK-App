// grab container once
const container = document.querySelector(".container");

// read initial arrays from localStorage (these will be re-read inside renderFlagged)
let questionsFlaggedTab21 = JSON.parse(localStorage.getItem("questionsFlaggedTab21")) || [];
let questionsFlaggedTab22 = JSON.parse(localStorage.getItem("questionsFlaggedTab22")) || [];
let questionsFlaggedTab23 = JSON.parse(localStorage.getItem("questionsFlaggedTab23")) || [];
let questionsFlaggedTab24 = JSON.parse(localStorage.getItem("questionsFlaggedTab24")) || [];
let questionsFlaggedTab25 = JSON.parse(localStorage.getItem("questionsFlaggedTab25")) || [];

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
let questionsFlaggedTab21 = JSON.parse(localStorage.getItem("questionsFlaggedTab21")) || [];
let questionsFlaggedTab22 = JSON.parse(localStorage.getItem("questionsFlaggedTab22")) || [];
let questionsFlaggedTab23 = JSON.parse(localStorage.getItem("questionsFlaggedTab23")) || [];
let questionsFlaggedTab24 = JSON.parse(localStorage.getItem("questionsFlaggedTab24")) || [];
let questionsFlaggedTab25 = JSON.parse(localStorage.getItem("questionsFlaggedTab25")) || [];

  // build whole UI (headers, totals, containers, buttons)
  container.innerHTML = `
    <h1>Flagged</h1>

    <div class="header">
      <h2>Quiz 1</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab21.length} </h2>
    </div>
    <div class="questions" id="quiz21-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz21-btn">Take Quiz</button>
    </div>

    <div class="header">
      <h2>Quiz 2</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab22.length} </h2>
    </div>
    <div class="questions" id="quiz22-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz22-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 3</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab23.length} </h2>
    </div>
    <div class="questions" id="quiz23-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz23-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 4</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab24.length} </h2>
    </div>
    <div class="questions" id="quiz24-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz24-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 5</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab25.length} </h2>
    </div>
    <div class="questions" id="quiz25-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz25-btn">Take Quiz</button>
    </div>
  `;

  // wire the two quiz buttons (do this after innerHTML so elements exist)
  const quizBtn = document.getElementById("quiz21-btn");
  const quizBtn2 = document.getElementById("quiz22-btn");
  const quizBtn3 = document.getElementById("quiz23-btn");
  const quizBtn4 = document.getElementById("quiz24-btn");
  const quizBtn5 = document.getElementById("quiz25-btn");

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
  renderQuestions(questionsFlaggedTab21, "quiz21-questions", "questionsFlaggedTab21");
  renderQuestions(questionsFlaggedTab22, "quiz22-questions", "questionsFlaggedTab22");
  renderQuestions(questionsFlaggedTab23, "quiz23-questions", "questionsFlaggedTab23");
  renderQuestions(questionsFlaggedTab24, "quiz24-questions", "questionsFlaggedTab24");
  renderQuestions(questionsFlaggedTab25, "quiz25-questions", "questionsFlaggedTab25");
;

if(questionsFlaggedTab21.length === 0){
  quizBtn.style.display = "none";
};

if(questionsFlaggedTab22.length === 0){
  quizBtn2.style.display = "none";
};

if(questionsFlaggedTab23.length === 0){
  quizBtn3.style.display = "none";
};

if(questionsFlaggedTab24.length === 0){
  quizBtn4.style.display = "none";
};

if(questionsFlaggedTab25.length === 0){
  quizBtn5.style.display = "none";
};
}

// initial render
renderFlagged();
