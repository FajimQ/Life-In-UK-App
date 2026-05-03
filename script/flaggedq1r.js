  let questionsCorrectFl = JSON.parse(localStorage.getItem("questionsCorrectFl")) || [];
  let questionsIncorrectFl = JSON.parse(localStorage.getItem("questionsIncorrectFl")) || [];
  let questionsFlaggedFl= JSON.parse(localStorage.getItem("questionsFlaggedFl")) || [];



function renderResults(){
  const container = document.querySelector(".container");
  let flaggedScore1 = parseInt(localStorage.getItem("flaggedScore1")) || 0;
    let flaggedQuizQuestions = JSON.parse(localStorage.getItem("flaggedQuizQuestions")) || [];

  const totalQuestions = flaggedQuizQuestions.length;

  container.innerHTML = `
    <div class="results">
      <h2>You scored:</h2>
      <div class="radial-progress">
        <h1>${flaggedScore1} / ${totalQuestions}</h1>
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

    questionsCorrectFl.forEach((qc, index) => {
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

    questionsIncorrectFl.forEach((qi, index) => {
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

    questionsFlaggedFl.forEach((qf, index) => {
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
    localStorage.removeItem("flaggedScore1");
    localStorage.removeItem("questionsCorrectFl");
    localStorage.removeItem("questionsIncorrectFl");
    localStorage.removeItem("questionsFlaggedFl");
    let questionsFlaggedTab = JSON.parse(localStorage.getItem("questionsFlaggedTab"))||[];
    questionsFlaggedTab.forEach((q) => {
      delete q.userAnswer;
    });
    localStorage.setItem("questionsFlaggedTab", JSON.stringify(questionsFlaggedTab));
    renderArea.innerHTML = "";
    window.location.href = "flaggedquiz1.html";
  });

    

  localStorage.setItem("flaggedScore1", 0);

  window.addEventListener("DOMContentLoaded", () => {
    let percentage = (flaggedScore1/totalQuestions)*100;
    const progressBar = document.querySelector(".radial-progress");

    progressBar.style.setProperty("--progress", 0);

    requestAnimationFrame(() => {
      progressBar.style.setProperty("--progress", percentage );
    })
});

  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("flaggedScore1");
    localStorage.removeItem("questionsCorrectFl");
    localStorage.removeItem("questionsIncorrectFl");
    localStorage.removeItem("questionsFlaggedFl");
    renderArea.innerHTML = "";
  });

};



renderResults()
