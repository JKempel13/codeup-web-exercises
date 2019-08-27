"use strict";
var numSequence= ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a","Enter"];
var newNumSequence = ["ArrowUp","ArrowLeft","ArrowDown","ArrowLeft","a","b","a","Enter"];
var countPosition = 0;

// $(document).keyup(function(event){
//     if (event.key === numSequence[countPosition]) {
//         countPosition++;
//         console.log(event.key);
//     } else {
//         countPosition = 0;
//     }
//     if (countPosition === 11) {
//         alert('you have added 30 lives!');
//         $("body").css("background-image", "url('img/super-contra.gif')");
//         $('img').css('background-image', "url('img/Super_contra.jpg')");
//         $('h1').css('color','white');
//     }

$(document).keyup(function(event){
    if (event.key === newNumSequence[countPosition]) {
        countPosition++;
    } else {
        countPosition = 0;
    }
    if (countPosition === 8) {
        alert('Game Over!');
        $('body').css("background-image", "url('img/game-over.gif')");
        $('audio').css(8)
    }
});