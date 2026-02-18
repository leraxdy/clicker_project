"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const boxes = document.querySelectorAll(".box");
  let clickCount = 0;
  let currentIndex = 0;

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      clickCount++;
      console.log("Кликов:", clickCount);
      active();
      
    });
  })
  ;
  document.addEventListener("keydown", (e) => {
    if(e.key === "q"){
      clickCount = clickCount + 2;
    }
    if(e.key === "e"){
      clickCount += 5;
    }
    console.log("Кликов:", clickCount);
    active();
  })

  function active(){ 
    if (clickCount % 10 === 0) {
      boxes[currentIndex].classList.remove("active");

      currentIndex++;
      if (currentIndex >= boxes.length) {
        currentIndex = 0;
      }

      boxes[currentIndex].classList.add("active");
    }
  }

});

