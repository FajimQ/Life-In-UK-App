  let questionsCorrect = JSON.parse(localStorage.getItem("questionsCorrect")) || [];
  let questionsIncorrect = JSON.parse(localStorage.getItem("questionsIncorrect")) || [];
  let questionsFlagged = JSON.parse(localStorage.getItem("questionsFlagged")) || [];

function renderResults(){
  const container = document.querySelector(".container");

  container.innerHTML = `
    <div class="results">
      <h2>You scored:</h2>
      <div class="radial-progress">
        <h1>${questionsCorrect.length} / 30</h1>
      </div>      
    </div>
    <div class="tabs">
      <ul>
        <li class= "correct">Correct</li>
        <li class= "incorrect">Incorrect</li>
        <li class= "flagged">Flagged</li>
      </ul>
    </div>
    <div class="child">
    </div>
  `;

  const correctBtn = document.querySelector(".correct");
  const incorrectBtn = document.querySelector(".incorrect");
  const flaggedBtn = document.querySelector(".flagged");
  const renderArea = document.querySelector(".child");



  correctBtn.addEventListener("click", () =>{
    renderCorrect();
  });

  incorrectBtn.addEventListener("click", () => {
    renderIncorrect();
  });

  flaggedBtn.addEventListener("click", () => {
    renderFlagged();
  });

  function renderCorrect(){
    renderArea.innerHTML = ``;

    questionsCorrect.forEach((qc, index) => {
      renderArea.innerHTML += `
       <div class= "grand-child correct-bg">
        <p class= "number"> ${index + 1} </p>
        <p class= "question"> ${qc.question} </p>
      </div>
    `;
    });
    
    if(renderArea.innerHTML === ``){
      renderArea.innerHTML +=`
      <h3> Nothing was correct </h3>
      `;
      return;
    };

  };

  function renderIncorrect(){
    renderArea.innerHTML =``;

    questionsIncorrect.forEach((qi, index) => {
      renderArea.innerHTML +=`
      <div class= "grand-child incorrect-bg">
        <p class= "number"> ${index + 1} </p>
        <p class= "question"> ${qi.question} </p>
      </div>
      `;      
    });

    if(renderArea.innerHTML === ``){
      renderArea.innerHTML +=`
      <h3> Well done!  You got all the questions correct! </h3>
      `;
      return;
    };
  };

  function renderFlagged(){
    renderArea.innerHTML = ``;

    questionsFlagged.forEach((qf, index) => {
      renderArea.innerHTML +=  `
      <div class= "grand-child">
        <p class= "number"> ${index + 1} </p>
        <p class= "question"> ${qf.question} </p>
      </div>
      `;
    });

    if(renderArea.innerHTML === ``){
      renderArea.innerHTML +=`
      <h3> No questions were flagged. </h3>
      `;
      return;
    };
  };


  renderCorrect();

  const retakeBtn = document.querySelector(".retake");

  retakeBtn.addEventListener("click", () => {
    localStorage.removeItem("score");
    localStorage.removeItem("questionsCorrect");
    localStorage.removeItem("questionsIncorrect");
    localStorage.removeItem("questionsFlagged");
    renderArea.innerHTML = "";
    window.location.href = "mockTest1.html";
  });

    

  localStorage.setItem("score", 0);

  window.addEventListener("DOMContentLoaded", () => {
    let percentage = (questionsCorrect.length/30)*100;
    const progressBar = document.querySelector(".radial-progress");

    progressBar.style.setProperty("--progress", 0);

    requestAnimationFrame(() => {
      progressBar.style.setProperty("--progress", percentage );
    })
});

  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("score");
    localStorage.removeItem("questionsCorrect");
    localStorage.removeItem("questionsIncorrect");
    localStorage.removeItem("questionsFlagged");
    renderArea.innerHTML = "";
  });

};


renderResults()
