const container = document.querySelector(".container");

const topicsArr = [
  {
    paragraph: `Topic 1: The Values and Principles of the UK.`,
    progressValue: `90%`,
    buttonLink: "quiztopic1.html"
  },{
    paragraph: `Topic 2: What is the UK?`,
    progressValue: `80%`,
    buttonLink:"quiztopic2.html"
  },{
    paragraph: `Topic 3: A Long And Illustrous History`,
    progressValue: `70%`,
    buttonLink:"quiztopic3.html"
  },{
    paragraph: `Topic 4: A Modern, Thriving Society`,
    progressValue: `60%`,
    buttonLink:"quiztopic4.html"
  },{
    paragraph: `Topic 5: The UK Government, The Law and Your Role`,
    progressValue: `0%`,
    buttonLink:"quiztopic5.html"
  }
];

const lessonsArr = [
  {
    paragraph:"View Lesson 1",
    progressValue: "0%"
  },{
    paragraph:"View Lesson 2",
    progressValue: "10%"
  },{
    paragraph:"View Lesson 3",
    progressValue: "20%"
  },{
    paragraph:"View Lesson 4",
    progressValue: "30%"
  },{
    paragraph:"View Lesson 5",
    progressValue: "40%"
  }
]

let currentTopicIndex = 0;
let currentLessoonsIndex = 0;

function renderHome(){

  container.innerHTML = `
    <div class="topics-card">
      <div class="content">
        <div class="paragraph">
          <p class="topic1"></p>
        </div>
        <div class="buttons">
          <a class="topics-button" href=${topicsArr[currentTopicIndex].buttonLink}> <button>View</button></a>
        </div>
      </div>
      <svg height="120" width="120">
        <circle class="empty-progress" cx="75" cy="45"  r="35"></circle>
        <circle class="progress-line"  cx="75" cy="45"  r="35"></circle>
      </svg>
     <span class="progress-value"> </span>
      <div class="right-button">
        >
      </div>
      <div class="left-button">
        < 
      </div>
      <div class="pagination">
        <div class="page1"></div>
        <div class="page2"></div>
        <div class="page3"></div>
        <div class="page4"></div>
        <div class="page5"></div>
      </div>
    </div>
    <h2>Lessons</h2>
    <div class="lessons-card">
      <div class="lessonicon-container">
      <a href="lessons.html">
        <div class="lessons-icon"></div>
      </div>
      </a>
      
      <div class="lessons-content">
        <div class="paragraph-lessons">
          <p class="lessons-topic"></p>
        </div>
        <div class="lessons-btn">
          <button>View</button>
        </div>
      </div>
      <div class="progress-bar2">
         <svg height="120" width="120">
        <circle class="empty-progress2" cx="75" cy="60"  r="35"></circle>
        <circle class="progress-line2"  cx="75" cy="60"  r="35"></circle>
      </svg>
      <span class="progress-value2"></span>
      <div class="right-button2">
        >
      </div>
      <div class="left-button2">
        < 
      </div>
       <div class="pagination2">
        <div class="page12"></div>
        <div class="page22"></div>
        <div class="page32"></div>
        <div class="page42"></div>
        <div class="page52"></div>
      </div>
      </div>
      
    </div>
    <h2>Quizzes</h2>
    <div class="all-icons">
     <a href="topics.html"> <div class="quiz-icon">
        <div class="icon"></div>
        <p>Quizzes</p>
      </div>
      </a>
      <a href="flaggedtopics.html">
      <div class="flagged-icon">
        <div class="icon2"></div>
        <p>Flagged</p>
      </div>
      </a>
      <div class="mistake-icon">
        <div class="icon3"></div>
        <p>Mistakes</p>
      </div>
    </div>
  `;

  setupHome();
};

function setupHome (){
  const btnRight = document.querySelector(".right-button");
  const btnLeft = document.querySelector(".left-button");
  const circle = document.querySelector(".progress-line");
  const circle2 = document.querySelector(".progress-line2");

  const topicsButton = document.querySelector(".topics-button");

  const radius2 = circle2.r.baseVal.value;
  const circumferance2 = 2 * Math.PI * radius2;

  const radius = circle.r.baseVal.value;
  const circumferance = 2 * Math.PI * radius;

  const topic = document.querySelector(".topic1");
  const progressValue = document.querySelector(".progress-value");

  const topic2 = document.querySelector(".lessons-topic");
  const progressValue2 = document.querySelector(".progress-value2");
  
  const content = document.querySelector(".content");
  const lessonsContent = document.querySelector(".lessons-content")

  const btnRight2 = document.querySelector(".right-button2");
  const btnLeft2 = document.querySelector(".left-button2");

  const pages = document.querySelectorAll(".pagination div");
  const pages2 = document.querySelectorAll(".pagination2 div");

  circle.style.strokeDasharray = circumferance;

  function setProgress(percent){
    const offset = circumferance - (percent/ 100) * circumferance;
    circle.style.strokeDashoffset = offset;
  }


  function showTopic(index){
    content.classList.add("fade-out");
    progressValue.classList.add("fade-out");

    setTimeout(() => {
      topic.textContent = topicsArr[index].paragraph;
      progressValue.textContent = topicsArr[index].progressValue;
      topicsButton.href = topicsArr[index].buttonLink;
      setProgress(parseInt(topicsArr[index].progressValue));

      content.classList.remove("fade-out");
      progressValue.classList.remove("fade-out");

      content.classList.add("fade-in");
      progressValue.classList.add("fade-in");
      
      setTimeout(()=> {
        content.classList.remove("fade-in");
        progressValue.classList.remove("fade-in");
      },300);
    }, 300);
  };

  function setProgress2(percent){
    const offset = circumferance2 - (percent/100) * circumferance2;
    circle2.style.strokeDashoffset = offset;
  }

   function showTopic2(index){
    lessonsContent.classList.add("fade-out");
    progressValue2.classList.add("fade-out");

    setTimeout(() => {
      topic2.textContent = lessonsArr[index].paragraph;
      progressValue2.textContent = lessonsArr[index].progressValue;
      setProgress2(parseInt(lessonsArr[index].progressValue));

      lessonsContent.classList.remove("fade-out");
      progressValue2.classList.remove("fade-out");

      lessonsContent.classList.add("fade-in");
      progressValue2.classList.add("fade-in");
      
      setTimeout(()=> {
        lessonsContent.classList.remove("fade-in");
        progressValue2.classList.remove("fade-in");
      },300);
    }, 300);
  };

  btnRight.addEventListener("click", ()=>{
    
    currentTopicIndex = (currentTopicIndex  + 1)% topicsArr.length;
    showTopic(currentTopicIndex);
    renderPagination();
  });
  
  btnLeft.addEventListener("click", ()=> {
    
    currentTopicIndex = (currentTopicIndex  - 1 + topicsArr.length) % topicsArr.length;
    showTopic(currentTopicIndex);
    renderPagination();
  });

  btnRight2.addEventListener("click", ()=>{
    
    currentLessoonsIndex = (currentLessoonsIndex + 1) % lessonsArr.length;
    showTopic2(currentLessoonsIndex);
    renderPagination();
  });
  
  btnLeft2.addEventListener("click", ()=> {
    
    currentLessoonsIndex = (currentLessoonsIndex - 1 + lessonsArr.length) % lessonsArr.length;
    showTopic2(currentLessoonsIndex);
    renderPagination();
  })

  function renderPagination(){
  pages.forEach(p => p.classList.remove("active"));
  pages[currentTopicIndex].classList.add("active");

  pages2.forEach(p => p.classList.remove("active"));
  pages2[currentLessoonsIndex].classList.add("active");
  };
  
  renderPagination();
  showTopic(currentTopicIndex);
  showTopic2(currentLessoonsIndex);
}

renderHome();