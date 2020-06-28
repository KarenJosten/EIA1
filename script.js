"use strict";
//Aufgabe 9
//habe mich an den Lösungen anderer orientiert
window.addEventListener("load", function () {
    //Array mit To-Dos
    let liste = ["EIA machen", "Essay schreiben", "PP vorbereiten"];
    //Eingabe
    var list = document.querySelector("#li");
    //neues To-Do
    var newlist = document.querySelector("#newlist");
    todos();
    //button
    var btn = document.querySelector("#btn");
    //delete
    var dlte = document.getElementsByClassName("fas fa-trash-alt");
    //ein To Do löschen
    for (var x = 0; x < dlte.length; x++) {
        dlte[x].onclick = function () {
            // tslint:disable-next-line: typedef
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
    // tslint:disable-next-line: typedef
    btn.addEventListener("click", function () {
        liste.push(list.value);
        todos();
        list.value = "";
        console.log(liste);
    });
    //alle to dos die im Array gespeichert sind
    function todos() {
        newlist.innerHTML = "";
        for (var i = 0; i < liste.length; 
        //+1 neues neues to do 
        i++) {
            //checkbox und delete icons werden hinzugefügt (vor und nach liste)
            newlist.innerHTML += "<div>" + "<input type='checkbox' id='checkbox'>" + liste[i] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
        }
        //Anzahl der To-Dos
        var anzahl = document.querySelector("#anzahl");
        anzahl.innerHTML = liste.length;
    }
});
//# sourceMappingURL=script.js.map