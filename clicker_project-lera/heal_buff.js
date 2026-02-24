"use strict";

let dumeg = 15;
let hp = document.getElementById("charter_hp");
let heal = document.getElementById("heal");

function damge(){

    game.hpValue = game.hpValue - dumeg;
    hp.style.width = game.hpValue + "px";
    

    if(game.hpValue <= 0){
        alert("You lose!");
        clearInterval(timer);
    }
}

let timer = setInterval(damge, 3000);

function healing(){
    let hl = 5;
    heal.addEventListener("click", function(){
        if(game.clicks >= 10){
            game.clicks = 0;
            game.hpValue = game.hpValue + hl;
            hp.style.width = game.hpValue + "px";
        }
    })
}
healing();