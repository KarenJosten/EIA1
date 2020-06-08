"use strict";
//Werte von 2008 
var europa08 = 4965.7;
var afrika08 = 1028;
var norda08 = 6600.4;
var southa08 = 1132.6;
var asia08 = 12954.7;
var aus08 = 1993;
//Werte von 2018
var europa18 = 4209.3;
var afrika18 = 1235.5;
var norda18 = 6035.6;
var southa18 = 1261.5;
var asia18 = 16274.1;
var aus18 = 2100.5;
//Gesamtemission der Welt 
var emissiongesamt = europa18 + afrika18 + norda18 + southa18 + asia18 + aus18;
//Relativ dazu
var europaRe = (europa18 / emissiongesamt) * 100;
var afrikaRe = (afrika18 / emissiongesamt) * 100;
var nordaRe = (norda18 / emissiongesamt) * 100;
var southaRe = (southa18 / emissiongesamt) * 100;
var asiaRe = (asia18 / emissiongesamt) * 100;
var ausRe = (aus18 / emissiongesamt) * 100;
//2008 Vergleich zu 2018 in %
var europaVer = ((europa18 - europa08) / europa08) * 100;
var afrikaVer = ((afrika18 - afrika08) / afrika08) * 100;
var nordaVer = ((norda18 - norda08) / norda08) * 100;
var southaVer = ((southa18 - southa08) / southa08) * 100;
var asiaVer = ((asia18 - asia08) / asia08) * 100;
var ausVer = ((aus18 - aus08) / aus08) * 100;
//Vergleich in kg
var europaVerkg = europa18 - europa08;
var afrikaVerkg = afrika18 - afrika08;
var nordaVerkg = norda18 - norda08;
var southaVerkg = southa18 - southa08;
var asiaVerkg = asia18 - asia08;
var ausVerkg = aus18 - aus08;

window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", europa);
    document.querySelector(".africa").addEventListener("click", afrika);
    document.querySelector(".northamerica").addEventListener("click", nordamerika);
    document.querySelector(".southamerica").addEventListener("click", südamerika);
    document.querySelector(".asia").addEventListener("click", asien);
    document.querySelector(".australia").addEventListener("click", australien);
});

function europa() {
    document.querySelector("#titleRegion").innerHTML = "Europa";
    document.querySelector(".chart").setAttribute("style", "height:" + europaRe + "px");
    //Emission Europa
    document.querySelector("#emis").innerHTML = europa18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText").innerHTML = "CO2-Emissionen von Europa im Jahr 2018";
    //Relativ zur Welt
    document.querySelector("#rel").innerHTML = europaRe.toFixed(2) + " % ";
    document.querySelector("#relText").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Europa damit";
    //2008 Vergleich zu 2018
    document.querySelector("#rate").innerHTML = europaVer.toFixed(2) + " % ";
    document.querySelector("#rateText").innerHTML = "Die Veränderung der Emission in Europa von 2018 im Vergleich zu 2008";
    //Vergleich in kg
    document.querySelector("#abs").innerHTML = europaVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText").innerHTML = "Die Veränderung der Emission in Europa von 2018 im Vergleich zu 2008";
}

function afrika() {
    document.querySelector("#titleRegion").innerHTML = "Afrika";
    document.querySelector(".chart").setAttribute("style", "height:" + afrikaRe + "px");
    //Emission Afrika
    document.querySelector("#emis").innerHTML = afrika18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText").innerHTML = "CO2-Emissionen von Afrika im Jahr 2018";
    //Relativ zur Welt
    document.querySelector("#rel").innerHTML = afrikaRe.toFixed(2) + " % ";
    document.querySelector("#relText").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Afrika damit";
    //2008 Vergleich zu 2018
    document.querySelector("#rate").innerHTML = afrikaVer.toFixed(2) + " % ";
    document.querySelector("#rateText").innerHTML = "Die Veränderung der Emission in Afrika von 2018 im Vergleich zu 2008";
    //Vergleich in kg
    document.querySelector("#abs").innerHTML = afrikaVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText").innerHTML = "Die Veränderung der Emission in Afrika von 2018 im Vergleich zu 2008";
}

function nordamerika() {
    document.querySelector("#titleRegion").innerHTML = "Nordamerika";
    document.querySelector(".chart").setAttribute("style", "height:" + nordaRe + "px");
    //Emission Nordamerika
    document.querySelector("#emis").innerHTML = norda18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText").innerHTML = "CO2-Emissionen von Nordamerika im Jahr 2018";
    //Relativ zur Welt
    document.querySelector("#rel").innerHTML = nordaRe.toFixed(2) + " % ";
    document.querySelector("#relText").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Nordamerika damit";
    //2008 Vergleich zu 2018
    document.querySelector("#rate").innerHTML = nordaVer.toFixed(2) + " % ";
    document.querySelector("#rateText").innerHTML = "Die Veränderung der Emission in Nordamerika von 2018 im Vergleich zu 2008";
    //Vergleich in kg
    document.querySelector("#abs").innerHTML = nordaVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText").innerHTML = "Die Veränderung der Emission in Nordamerika von 2018 im Vergleich zu 2008";
}

function südamerika() {
    document.querySelector("#titleRegion").innerHTML = "Südamerika";
    document.querySelector(".chart").setAttribute("style", "height:" + southaRe + "px");
    //Emission Südamerika
    document.querySelector("#emis").innerHTML = southa18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText").innerHTML = "CO2-Emissionen von Südamerika im Jahr 2018";
    //Relativ zur Welt
    document.querySelector("#rel").innerHTML = southaRe.toFixed(2) + " % ";
    document.querySelector("#relText").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit";
    //2008 Vergleich zu 2018
    document.querySelector("#rate").innerHTML = southaVer.toFixed(2) + " % ";
    document.querySelector("#rateText").innerHTML = "Die Veränderung der Emission in Südamerika von 2018 im Vergleich zu 2008";
    //Vergleich in kg
    document.querySelector("#abs").innerHTML = southaVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText").innerHTML = "Die Veränderung der Emission in Südamerika von 2018 im Vergleich zu 2008";
}

function asien() {
    document.querySelector("#titleRegion").innerHTML = "Asien";
    document.querySelector(".chart").setAttribute("style", "height:" + asiaRe + "px");
    //Emission Asien
    document.querySelector("#emis").innerHTML = asia18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText").innerHTML = "CO2-Emissionen von Asien im Jahr 2018";
    //Relativ zur Welt
    document.querySelector("#rel").innerHTML = asiaRe.toFixed(2) + " % ";
    document.querySelector("#relText").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Asien damit";
    //2008 Vergleich zu 2018
    document.querySelector("#rate").innerHTML = asiaVer.toFixed(2) + " % ";
    document.querySelector("#rateText").innerHTML = "Die Veränderung der Emission in Asien von 2018 im Vergleich zu 2008";
    //Vergleich in kg
    document.querySelector("#abs").innerHTML = asiaVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText").innerHTML = "Die Veränderung der Emission in Asien von 2018 im Vergleich zu 2008";
}

function australien() {
    document.querySelector("#titleRegion").innerHTML = "Australien";
    document.querySelector(".chart").setAttribute("style", "height:" + ausRe + "px");
    //Emission Australien
    document.querySelector("#emis").innerHTML = aus18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText").innerHTML = "CO2-Emissionen von Australien im Jahr 2018";
    //Relativ zur Welt
    document.querySelector("#rel").innerHTML = ausRe.toFixed(2) + " % ";
    document.querySelector("#relText").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Australien damit";
    //2008 Vergleich zu 2018
    document.querySelector("#rate").innerHTML = ausVer.toFixed(2) + " % ";
    document.querySelector("#rateText").innerHTML = "Die Veränderung der Emission in Australien von 2018 im Vergleich zu 2008";
    //Vergleich in kg
    document.querySelector("#abs").innerHTML = ausVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText").innerHTML = "Die Veränderung der Emission in Australien von 2018 im Vergleich zu 2008";
}

//# sourceMappingURL=script.js.map