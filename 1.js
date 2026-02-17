"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const boxes = document.querySelectorAll(".box");

  let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;
  let currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;

  const maxLevels = 3;

  boxes.forEach(box => box.classList.remove("active"));
  boxes[currentIndex].classList.add("active");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {

      clickCount++;
      console.log("Кліків:", clickCount);

      if (clickCount % 10 === 0) {

        boxes[currentIndex].classList.remove("active");

        currentIndex++;

        if (currentIndex >= maxLevels) {
          currentIndex = 0;
          clickCount = 0;
        }

        boxes[currentIndex].classList.add("active");
      }

      localStorage.setItem("clickCount", clickCount);
      localStorage.setItem("currentIndex", currentIndex);

    });
  });

});
