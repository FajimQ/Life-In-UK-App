// grab container once
const container = document.querySelector(".container");

// read initial arrays from localStorage (these will be re-read inside renderFlagged)
let questionsFlaggedTab26 = JSON.parse(localStorage.getItem("questionsFlaggedTab26")) || [];
let questionsFlaggedTab27 = JSON.parse(localStorage.getItem("questionsFlaggedTab27")) || [];
let questionsFlaggedTab28 = JSON.parse(localStorage.getItem("questionsFlaggedTab28")) || [];
let questionsFlaggedTab29 = JSON.parse(localStorage.getItem("questionsFlaggedTab29")) || [];
let questionsFlaggedTab30 = JSON.parse(localStorage.getItem("questionsFlaggedTab30")) || [];

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
let questionsFlaggedTab26 = JSON.parse(localStorage.getItem("questionsFlaggedTab26")) || [];
let questionsFlaggedTab27 = JSON.parse(localStorage.getItem("questionsFlaggedTab27")) || [];
let questionsFlaggedTab28 = JSON.parse(localStorage.getItem("questionsFlaggedTab28")) || [];
let questionsFlaggedTab29 = JSON.parse(localStorage.getItem("questionsFlaggedTab29")) || [];
let questionsFlaggedTab30 = JSON.parse(localStorage.getItem("questionsFlaggedTab30")) || [];

  // build whole UI (headers, totals, containers, buttons)
  container.innerHTML = `
    <h1>Flagged</h1>

    <div class="header">
      <h2>Quiz 1</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab26.length} </h2>
    </div>
    <div class="questions" id="quiz26-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz26-btn">Take Quiz</button>
    </div>

    <div class="header">
      <h2>Quiz 2</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab27.length} </h2>
    </div>
    <div class="questions" id="quiz27-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz27-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 3</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab28.length} </h2>
    </div>
    <div class="questions" id="quiz28-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz28-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 4</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab29.length} </h2>
    </div>
    <div class="questions" id="quiz29-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz29-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 5</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab30.length} </h2>
    </div>
    <div class="questions" id="quiz30-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz30-btn">Take Quiz</button>
    </div>
  `;

  // wire the two quiz buttons (do this after innerHTML so elements exist)
  const quizBtn = document.getElementById("quiz26-btn");
  const quizBtn2 = document.getElementById("quiz27-btn");
  const quizBtn3 = document.getElementById("quiz28-btn");
  const quizBtn4 = document.getElementById("quiz29-btn");
  const quizBtn5 = document.getElementById("quiz30-btn");

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
  renderQuestions(questionsFlaggedTab26, "quiz26-questions", "questionsFlaggedTab226");
  renderQuestions(questionsFlaggedTab27, "quiz27-questions", "questionsFlaggedTab27");
  renderQuestions(questionsFlaggedTab28, "quiz28-questions", "questionsFlaggedTab28");
  renderQuestions(questionsFlaggedTab29, "quiz29-questions", "questionsFlaggedTab29");
  renderQuestions(questionsFlaggedTab30, "quiz30-questions", "questionsFlaggedTab30");
;

if(questionsFlaggedTab26.length === 0){
  quizBtn.style.display = "none";
};

if(questionsFlaggedTab27.length === 0){
  quizBtn2.style.display = "none";
};

if(questionsFlaggedTab28.length === 0){
  quizBtn3.style.display = "none";
};

if(questionsFlaggedTab29.length === 0){
  quizBtn4.style.display = "none";
};

if(questionsFlaggedTab30.length === 0){
  quizBtn5.style.display = "none";
};
}

// initial render
renderFlagged();
