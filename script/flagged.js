// grab container once
const container = document.querySelector(".container");

// read initial arrays from localStorage (these will be re-read inside renderFlagged)
let questionsFlaggedTab = JSON.parse(localStorage.getItem("questionsFlaggedTab")) || [];
let questionsFlaggedTab2 = JSON.parse(localStorage.getItem("questionsFlaggedTab2")) || [];
let questionsFlaggedTab3 = JSON.parse(localStorage.getItem("questionsFlaggedTab3")) || [];
let questionsFlaggedTab4 = JSON.parse(localStorage.getItem("questionsFlaggedTab4")) || [];
let questionsFlaggedTab5 = JSON.parse(localStorage.getItem("questionsFlaggedTab5")) || [];

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
let questionsFlaggedTab = JSON.parse(localStorage.getItem("questionsFlaggedTab")) || [];
let questionsFlaggedTab2 = JSON.parse(localStorage.getItem("questionsFlaggedTab2")) || [];
let questionsFlaggedTab3 = JSON.parse(localStorage.getItem("questionsFlaggedTab3")) || [];
let questionsFlaggedTab4 = JSON.parse(localStorage.getItem("questionsFlaggedTab4")) || [];
let questionsFlaggedTab5 = JSON.parse(localStorage.getItem("questionsFlaggedTab5")) || [];

  // build whole UI (headers, totals, containers, buttons)
  container.innerHTML = `
    <h1>Flagged</h1>

    <div class="header">
      <h2>Quiz 1</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab.length} </h2>
    </div>
    <div class="questions" id="quiz1-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz1-btn">Take Quiz</button>
    </div>

    <div class="header">
      <h2>Quiz 2</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab2.length} </h2>
    </div>
    <div class="questions" id="quiz2-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz2-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 3</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab3.length} </h2>
    </div>
    <div class="questions" id="quiz3-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz3-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 4</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab4.length} </h2>
    </div>
    <div class="questions" id="quiz4-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz4-btn">Take Quiz</button>
    </div>

     <div class="header">
      <h2>Quiz 5</h2>
      <h2 class="total"> Total Flagged: ${questionsFlaggedTab5.length} </h2>
    </div>
    <div class="questions" id="quiz5-questions"></div>
    <div class="button-wrapper">
      <button class="quiz" id="quiz5-btn">Take Quiz</button>
    </div>
  `;

  // wire the two quiz buttons (do this after innerHTML so elements exist)
  const quizBtn = document.getElementById("quiz1-btn");
  const quizBtn2 = document.getElementById("quiz2-btn");
  const quizBtn3 = document.getElementById("quiz3-btn");
  const quizBtn4 = document.getElementById("quiz4-btn");
  const quizBtn5 = document.getElementById("quiz5-btn");





  quizBtn.addEventListener("click",() => {
    let flaggedQuizQuestions = JSON.parse(localStorage.getItem("flaggedQuizQuestions")) || [];
    localStorage.setItem("flaggedQuizQuestions", JSON.stringify([...questionsFlaggedTab]));
    window.location.href = "flaggedquiz1.html";

  });

  quizBtn2.addEventListener("click", () => {
    let flaggedQuizQuestions = JSON.parse(localStorage.getItem("flaggedQuizQuestions")) || [];
    localStorage.setItem("flaggedQuizQuestions", JSON.stringify([...questionsFlaggedTab2]));
    window.location.href = "flaggedquiz1.html";
  });

  quizBtn3.addEventListener("click",() => {
        let flaggedQuizQuestions = JSON.parse(localStorage.getItem("flaggedQuizQuestions")) || [];
    localStorage.setItem("flaggedQuizQuestions", JSON.stringify([...questionsFlaggedTab3]));
    window.location.href= "flaggedquiz1.html";
  });

  quizBtn4.addEventListener("click", () => {
        let flaggedQuizQuestions = JSON.parse(localStorage.getItem("flaggedQuizQuestions")) || [];
    localStorage.setItem("flaggedQuizQuestions", JSON.stringify([...questionsFlaggedTab4]));
    window.location.href= "flaggedquiz1.html";
  });

  quizBtn5.addEventListener("click", ()=>{
        let flaggedQuizQuestions = JSON.parse(localStorage.getItem("flaggedQuizQuestions")) || [];
    localStorage.setItem("flaggedQuizQuestions", JSON.stringify([...questionsFlaggedTab5]));
    window.location.href= "flaggedquiz5.html";
  });


  // helper to render a single quiz's questions into containerId
  function renderQuestions(list, containerId, storageKey){
    const questionsContainer = document.getElementById(containerId);
    questionsContainer.innerHTML = "" ;

    if(list.length === 0){
      questionsContainer.innerHTML = `<p class="paragraph">No Questions Flagged</p>`;
      return;
    };

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
  renderQuestions(questionsFlaggedTab, "quiz1-questions", "questionsFlaggedTab");
  renderQuestions(questionsFlaggedTab2, "quiz2-questions", "questionsFlaggedTab2");
  renderQuestions(questionsFlaggedTab3, "quiz3-questions", "questionsFlaggedTab3");
  renderQuestions(questionsFlaggedTab4, "quiz4-questions", "questionsFlaggedTab4");
  renderQuestions(questionsFlaggedTab5, "quiz5-questions", "questionsFlaggedTab5");
;

if(questionsFlaggedTab.length === 0){
  quizBtn.style.display = "none";
};

if(questionsFlaggedTab2.length === 0){
  quizBtn2.style.display = "none";
};

if(questionsFlaggedTab3.length === 0){
  quizBtn3.style.display = "none";
};

if(questionsFlaggedTab4.length === 0){
  quizBtn4.style.display = "none";
};

if(questionsFlaggedTab5.length === 0){
  quizBtn5.style.display = "none";
};
};

// initial render
renderFlagged();
