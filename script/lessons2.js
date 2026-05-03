let step = 1;
const maxStep = 3;

const lesson1 = [
  {
    video: "Videos/lv_0_20251124135755.mp4",
    videoSummary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum quisquam odio quis perspiciatis maiores fugiat eligendi dolores ullam. Impedit rem mollitia dicta beatae molestiae excepturi, vitae ab. Nisi, dolores!",
  },
  {
    fact1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum quisquam odio quis perspiciatis maiores fugiat eligendi dolores ullam. Impedit rem mollitia dicta beatae molestiae excepturi, vitae ab. Nisi, dolores!",
    fact2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum quisquam odio quis perspiciatis maiores fugiat eligendi dolores ullam. Impedit rem mollitia dicta beatae molestiae excepturi, vitae ab. Nisi, dolores!",
    fact3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum quisquam odio quis perspiciatis maiores fugiat eligendi dolores ullam. Impedit rem mollitia dicta beatae molestiae excepturi, vitae ab. Nisi, dolores!"
  }
];

const quiz = [{
  question: "Question 1.",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  answer: "Option 1",
  userAnswer: null
},{
  question: "Question 2.",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  answer: "Option 1",
  userAnswer: null
},{
  question: "Question 3.",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  answer: "Option 1",
  userAnswer: null
},{
  question: "Question 4.",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  answer: "Option 1",
  userAnswer: null
},{
  question: "Question 5.",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  answer: "Option 1",
  userAnswer: null
},{
  question: "Question 6.",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  answer: "Option 1",
  userAnswer: null
}];

let currentQuestionIndex = 0;

  const container = document.querySelector(".container");
  const questionsContainer = document.querySelector(".questions");

const fill1 = document.querySelector(".fill1");
const btnFill1 = document.querySelector(".btn-fill");
const btnLabel1 = document.querySelector(".btn-label");

const fill2 = document.querySelector(".fill2");
const btnFill2 = document.querySelector(".btn-fill2");
const btnLabel2 = document.querySelector(".btn-label2");

   let score = 0;

function showQuiz(){
  container.innerHTML =  `
  <h1> Quiz </h1>
    <h2 class="question"> ${quiz[currentQuestionIndex].question}</h2>

    <div class="answers">
    ${quiz[currentQuestionIndex].options.map(option => `<div class="ans"> ${option}</div>`).join("")}
    </div>

    <div class="buttons">
    
    <button class="quizBtnPre"> Prev </button>
    <span class="space"></span>
    <button class="quizBtn"> Next </button>
    </div>
  `;
   const quizBtn = document.querySelector(".quizBtn");
   const answers = document.querySelectorAll(".ans");
   const quizBtnPre = document.querySelector(".quizBtnPre");


   let answered = false;

  answers.forEach(opt => {
    opt.addEventListener("click", () => {
    if(answered){
      return;
    };

    answered = true;

    const selectedAnswer = opt.textContent.trim();

    quiz[currentQuestionIndex].userAnswer = selectedAnswer;

    if(selectedAnswer === quiz[currentQuestionIndex].answer){
      opt.classList.add("correct");
      score++;
    } else{
      opt.classList.add("incorrect");
    };

    

    answers.forEach(optAns => {
      if(optAns.textContent.trim() === quiz[currentQuestionIndex].answer){
        optAns.classList.add("correct");
      }
    })
   });

   
  });

  const savedAnswer = quiz[currentQuestionIndex].userAnswer;
  if(savedAnswer){
    answered = true;
    answers.forEach(opt => {
      const text = opt.textContent.trim();

      if(text === savedAnswer){
        if(text === quiz[currentQuestionIndex].answer){
          opt.classList.add("correct");
        } else{
          opt.classList.add("incorrect");
        };
      };

      answers.forEach(optEl => {
        if(optEl.textContent.trim() === quiz[currentQuestionIndex].answer){
          optEl.classList.add("correct");
        };
      });
    });
  };

 quizBtnPre.style.visibility = currentQuestionIndex === 0 ? "hidden":"visible";

   
  quizBtnPre.addEventListener("click",()=>{
    currentQuestionIndex--;
    showQuiz();
  })

  quizBtn.addEventListener("click", () => {
     if(!answered){
       return;
      };  
    currentQuestionIndex++;
    if(currentQuestionIndex <= 5){
      showQuiz();
    } else{
      container.innerHTML = `
      <h1> Quiz </h1>

      <p> Quiz and lesson done!</p>

      <h3> You got: <h3>

      <div class="radial-progress">
         <div class="center">${score} / ${quiz.length}</div>
      </div>      
      
      <div class="buttons">
      <button class="quizBtnFin"> Finish </button>
      </div>
      `;

      const radialProgress = document.querySelector(".radial-progress");
      const quizBtnFin = document.querySelector(".quizBtnFin");

        let percentage = (score/6) * 100;
        radialProgress.style.setProperty("--progress",0);

        setTimeout(()=>{
          radialProgress.style.setProperty("--progress", percentage);
        },1000);


      quizBtnFin.addEventListener("click",()=>{
        score = 0;
        window.location.href = "lessons.html";
      })

 };


 
});
 

  
};



function renderLesson(){

   const container = document.querySelector(".container");
  const questionsContainer = document.querySelector(".questions");

const fill1 = document.querySelector(".fill1");
const btnFill1 = document.querySelector(".btn-fill");
const btnLabel1 = document.querySelector(".btn-label");

const fill2 = document.querySelector(".fill2");
const btnFill2 = document.querySelector(".btn-fill2");
const btnLabel2 = document.querySelector(".btn-label2");

  container.innerHTML = `
    <h1>Lesson 2</h1>
  <div class="lesson-container">
    <div class="video">
    <video controls width="100%">
      <source src="${lesson1[0].video}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    </div>
    <h3>Description</h3>
    <div class="description">
      <p>${lesson1[0].videoSummary}</p>
  </div>

   <div class="buttons">
    <button class="previous">
    Back
    </button>
    <button class="next">
      Next
    </button>
    </div>
  `;

  if(step === 2){
    container.innerHTML = "";

    container.innerHTML = `
    <h1> Video Facts </h1>
    <p>${lesson1[1].fact1}</p>
    <p>${lesson1[1].fact2}</p>
    <p>${lesson1[1].fact3}</p>

    <div class="buttons">
    <button class="previous">
    Back
    </button>
    <button class="next">
      Next
    </button>
    </div>
    `;    
  } else if (step === 3){
    container.innerHTML = "";
    showQuiz();
  };

  const nextBtn = document.querySelector(".next");
  const backBtn = document.querySelector(".previous");

  if(backBtn){
      backBtn.style.visibility = step === 1 ? "hidden":"visible";
  };



  if(nextBtn)
 { nextBtn.addEventListener("click",() => {
    step++;
    if(step === 2){
      fill1.style.width = "100%";
      fill1.addEventListener("transitionend", () => {
      btnFill1.style.width = "100%";
      btnLabel1.style.color = "white";
      renderLesson();
      }, { once: true });
      
    } else if(step === 3){
      if(fill2){
      fill2.style.width = "100%";
      fill2.addEventListener("transitionend", () => {
        btnFill2.style.width = "100%";
        btnLabel2.style.color = "white";
        renderLesson();
      }, {once:true})}
      return;
    };
  });}
if(backBtn)
  {backBtn.addEventListener("click", () => {
    step--;
    if(step===1){
      btnFill1.style.width = "0%";
      btnLabel1.style.color = "black";
      btnFill1.addEventListener("transitionend", () => {
        fill1.style.width = "0%";
        renderLesson();
      }, {once:true});
    } else if (step === 2){
      btnFill2.style.width = "0%";
      btnLabel2.style.color = "black";
      btnFill2.addEventListener("transitionend", ()=> {
        if(fill2){
        fill2.style.width = "0%";
        renderLesson();}
      }, {once:true})
    } else{
      renderLesson();
    }
  });}
}
renderLesson();