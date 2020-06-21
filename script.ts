//Aufgabe 8

window.addEventListener("load", function() {

    document.querySelector("#A").addEventListener("click", function() {playSample(0); });
    document.querySelector("#C").addEventListener("click", function() {playSample(1); });
    document.querySelector("#F").addEventListener("click", function() {playSample(2); });
    document.querySelector("#G").addEventListener("click", function() {playSample(3); });
    document.querySelector("#hihat").addEventListener("click", function() {playSample(4); });
    document.querySelector("#kick").addEventListener("click", function() {playSample(5); });
    document.querySelector("#laugh1").addEventListener("click", function() {playSample(6); });
    document.querySelector("#laugh2").addEventListener("click", function() {playSample(7); });
    document.querySelector("#snare").addEventListener("click", function() {playSample(8); });
    //document.querySelector("#play-button").addEventListener("click", drumPad );
    document.querySelector("#playbutton").addEventListener("click", playbtn);
    document.querySelector("#trashbutton").addEventListener("click", deleteBeat);
    document.querySelector("#microphone").addEventListener("click", record);

});

//Array mit allen Sounds
var btn: string [] = ["sounds/A.mp3", "sounds/C.mp3", "sounds/F.mp3", "sounds/G.mp3", "sounds/hihat.mp3", "sounds/kick.mp3", "sounds/laugh-1.mp3", "sounds/laugh-2.mp3", "sounds/snare.mp3"];
//Beat für Loop
var loop: number [] = [4, 5, 8];
//var snd: string [] = ["sounds/G.mp3", "sounds/hihat.mp3", "sounds/laugh-2.mp3"];
var i: number = 0;
//playbutton und stopbutton
var interval: number = 0;

function playbtn(): void {
    // tslint:disable-next-line: typedef
    let playstop = document.querySelector("#playbutton");

    if (playstop.className == "fas fa-play") {
        playstop.className = "fas fa-stop";
        playBeat();
    } else {
        playstop.className = "fas fa-play";
        stopBeat();
    }
}
//Stopbutton
function stopBeat(): void {
   clearInterval(interval);
}

//Loop
function playBeat(): void {
            // tslint:disable-next-line: typedef
            interval = setInterval (function () {
            playSample(loop[i]); 
            //+1
            i++;
            //Wenn i größer oder gleich als Länge von loop ist -> i = 0
            if (i >= loop.length) {
                i = 0;
            }
        },                          600);
    }

//aktuellen Beat löschen
function deleteBeat(): void {
    //leeres Array
    loop = [];
}

//neuen Beat aufnehmen
var recordBeat: boolean = false;

function record(): void {
    if (recordBeat == false) {
        recordBeat = true;
    } else {
        recordBeat = false;
    }
}

// tslint:disable-next-line: typedef
function playSample(sounds: number) { 

    var sound: HTMLAudioElement = new Audio(btn[sounds]);
    sound.play();

    if (recordBeat == true) {
        loop.push(sounds);
    }
}

/*keydown
window.addEventListener("load", function() {
    document.querySelector("#A").addEventListener("keydown", function() {playSample(0); });
    });

var pad1: HTMLAudioElement = new Audio(btn[0]);
// tslint:disable-next-line: typedef
window.document.getElementById(function())
var code = e.keydown;
var kc = document.charset, string: (e.keydown);


switch (kc) {
        case "R":
            pad1.load();
            pad1.play();
            break;
    }*/
