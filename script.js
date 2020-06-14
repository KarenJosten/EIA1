"use strict";
//Aufgabe 7.1
window.addEventListener("load", function () {
    document.querySelector("#A").addEventListener("click", function () { playSample(0); });
    document.querySelector("#C").addEventListener("click", function () { playSample(1); });
    document.querySelector("#F").addEventListener("click", function () { playSample(2); });
    document.querySelector("#G").addEventListener("click", function () { playSample(3); });
    document.querySelector("#hihat").addEventListener("click", function () { playSample(4); });
    document.querySelector("#kick").addEventListener("click", function () { playSample(5); });
    document.querySelector("#laugh1").addEventListener("click", function () { playSample(6); });
    document.querySelector("#laugh2").addEventListener("click", function () { playSample(7); });
    document.querySelector("#snare").addEventListener("click", function () { playSample(8); });
    //drumpad 7.2
    document.querySelector("#play-button").addEventListener("click", drumPad);
});
//Array mit allen Sounds
var btn = ["sounds/A.mp3", "sounds/C.mp3", "sounds/F.mp3", "sounds/G.mp3", "sounds/hihat.mp3", "sounds/kick.mp3", "sounds/laugh-1.mp3", "sounds/laugh-2.mp3", "sounds/snare.mp3"];
// tslint:disable-next-line: typedef
function playSample(sounds) {
    var sound = new Audio(btn[sounds]);
    sound.play();
}
//Aufgabe 7.2
function drumPad() {
    setInterval(function () {
        playSample(4);
        playSample(5);
        playSample(8);
    }, 1000);
}
//# sourceMappingURL=script.js.map