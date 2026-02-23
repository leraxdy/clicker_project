"use strict";

window.game = {
    currentIndex: 0,
    clicks: 0,
    hpValue: 150,
    enemyHp: 100
};



document.addEventListener("DOMContentLoaded", function () {
  let enHp = document.getElementById("enemy_hp");
  const boxes = document.querySelectorAll(".box");
  let clickCount = 0;

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      game.enemyHp = game.enemyHp - 10;
      enHp.style.width = game.enemyHp + "px";
      clickCount++;
      game.clicks++;
      console.log("Кликов:", clickCount);
      active();
      
    });
  })
  ;
  document.addEventListener("keydown", (e) => {
    if(e.code === "KeyQ" && game.clicks >= 4){
      clickCount = clickCount + 2;
      game.clicks = 0;
    }
    if(e.code === "KeyE" && game.clicks >= 6){
      clickCount += 5;
      game.clicks = 0;
    }
    console.log("Кликов:", clickCount);
    active();
  })

  function active(){ 
    if (clickCount % 10 === 0) {
      boxes[game.currentIndex].classList.remove("active");

      game.currentIndex++;
      if (game.currentIndex >= boxes.length) {
        game.currentIndex = 0;
        game.hpValue = 150;
      }
      
      boxes[game.currentIndex].classList.add("active");
      game.enemyHp = 100;
    }
  }

});

