
const container = document.querySelector(".container");

function renderLessons(){

  container.innerHTML = `
    <div class="container">
    <div class="tab">
      <div class="content">
      <h2>Lesson 1</h2>
      <p class="arrow-button">></p>
      </div>
      <div class="sub-sect-tab">
        <div class="video">
          <video controls width="100%">
           <source src="Videos/lv_0_20251216113107.mp4"" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="text-content">
          <h3>Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in est tempore veniam, recusandae non. Fugit, earum facere ratione cupiditate perspiciatis sunt quisquam repellendus asperiores quis, possimus facilis neque commodi?</p>
        </div>
        <div class="button-area">
          <button><a href="lesson1.html">Start Now </a> </button>
        </div>
      </div>
    </div>
    <div class="tab">
      <div class="content">
      <h2>Lesson 2</h2>
      <p class="arrow-button">></p>
      </div>
      <div class="sub-sect-tab">
        <div class="video">
          <video controls width="100%">
           <source src="Videos/lv_0_20251124135755.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="text-content">
          <h3>Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in est tempore veniam, recusandae non. Fugit, earum facere ratione cupiditate perspiciatis sunt quisquam repellendus asperiores quis, possimus facilis neque commodi?</p>
        </div>
        <div class="button-area">
          <button><a href="lesson2.html">Start Now </a> </button>
        </div>
      </div>
    </div>
    <div class="tab">
      <div class="content">
      <h2>Lesson 3</h2>
      <p class="arrow-button">></p>
      </div>
    </div>
  </div>
  `;
  const arrowButton = document.querySelectorAll(".arrow-button");
  const tab = document.querySelectorAll(".tab");

 arrowButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("rotate");
    const parentTab = btn.closest(".tab");
    parentTab.classList.toggle("expand");
  });
 });


};

  

renderLessons();
