//Werte von 2008 
var europa08: number = 4965.7;
var afrika08: number = 1028;
var norda08: number = 6600.4;
var southa08: number = 1132.6;
var asia08: number = 12954.7;
var aus08: number = 1993;

//Werte von 2018
var europa18: number = 4209.3;
var afrika18: number = 1235.5;
var norda18: number = 6035.6;
var southa18: number = 1261.5;
var asia18: number = 16274.1;
var aus18: number = 2100.5;

//Gesamtemission der Welt 

var emissiongesamt: number = europa18 + afrika18 + norda18 + southa18 + asia18 + aus18;

//Relativ dazu

var europaRe: number = (europa18 / emissiongesamt) * 100;
var afrikaRe: number = (afrika18 / emissiongesamt) * 100;
var nordaRe: number = (norda18 / emissiongesamt) * 100;
var southaRe: number = (southa18 / emissiongesamt) * 100;
var asiaRe: number = (asia18 / emissiongesamt) * 100;
var ausRe: number = (aus18 / emissiongesamt) * 100;

//2008 Vergleich zu 2018 in %

var europaVer: number = ((europa18 - europa08) / europa08) * 100;
var afrikaVer: number = ((afrika18 - afrika08) / afrika08) * 100;
var nordaVer: number = ((norda18 - norda08) / norda08) * 100;
var southaVer: number = ((southa18 - southa08) / southa08) * 100;
var asiaVer: number = ((asia18 - asia08) / asia08) * 100;
var ausVer: number = ((aus18 - aus08) / aus08) * 100;

//Vergleich in kg

var europaVerkg: number = europa18 - europa08; 
var afrikaVerkg: number = afrika18 - afrika08;
var nordaVerkg: number = norda18 - norda08;
var southaVerkg: number = southa18 - southa08;
var asiaVerkg: number = asia18 - asia08;
var ausVerkg: number = aus18 - aus08;

function europa(): void {

    document.querySelector("#titleRegion")!.innerHTML = "Europa";
    document.querySelector(".chart")?.setAttribute("style", "height:" + europaRe + "px");

    //Emission Europa
    document.querySelector("#emis")!.innerHTML = europa18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText")!.innerHTML = "CO2-Emissionen von Europa im Jahr 2018";

    //Relativ zur Welt
    document.querySelector("#rel")!.innerHTML = europaRe.toFixed(2) + " % ";
    document.querySelector("#relText")!.innerHTML = "Relativ zur Gesamtemission der Welt verursacht Europa damit";

    //2008 Vergleich zu 2018
    document.querySelector("#rate")!.innerHTML = europaVer.toFixed(2) + " % ";
    document.querySelector("#rateText")!.innerHTML = "Die Veränderung der Emission in Europa von 2018 im Vergleich zu 2008";

    //Vergleich in kg
    document.querySelector("#abs")!.innerHTML = europaVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText")!.innerHTML = "Die Veränderung der Emission in Europa von 2018 im Vergleich zu 2008";

}

window.addEventListener("load", function(): void {
    document.querySelector(".europe")?.addEventListener("click", europa);
});

function afrika(): void {

    document.querySelector("#titleRegion")!.innerHTML = "Afrika";
    document.querySelector(".chart")?.setAttribute("style", "height:" + afrikaRe + "px");

    //Emission Afrika
    document.querySelector("#emis")!.innerHTML = afrika18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText")!.innerHTML = "CO2-Emissionen von Afrika im Jahr 2018";

    //Relativ zur Welt
    document.querySelector("#rel")!.innerHTML = afrikaRe.toFixed(2) + " % ";
    document.querySelector("#relText")!.innerHTML = "Relativ zur Gesamtemission der Welt verursacht Afrika damit";

    //2008 Vergleich zu 2018
    document.querySelector("#rate")!.innerHTML = afrikaVer.toFixed(2) + " % ";
    document.querySelector("#rateText")!.innerHTML = "Die Veränderung der Emission in Afrika von 2018 im Vergleich zu 2008";

    //Vergleich in kg
    document.querySelector("#abs")!.innerHTML = afrikaVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText")!.innerHTML = "Die Veränderung der Emission in Afrika von 2018 im Vergleich zu 2008";

}

window.addEventListener("load", function(): void {
    document.querySelector(".africa")?.addEventListener("click", afrika);
});

function nordamerika(): void {

    document.querySelector("#titleRegion")!.innerHTML = "Nordamerika";
    document.querySelector(".chart")?.setAttribute("style", "height:" + nordaRe + "px");

    //Emission Nordamerika
    document.querySelector("#emis")!.innerHTML = norda18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText")!.innerHTML = "CO2-Emissionen von Nordamerika im Jahr 2018";

    //Relativ zur Welt
    document.querySelector("#rel")!.innerHTML = nordaRe.toFixed(2) + " % ";
    document.querySelector("#relText")!.innerHTML = "Relativ zur Gesamtemission der Welt verursacht Nordamerika damit";

    //2008 Vergleich zu 2018
    document.querySelector("#rate")!.innerHTML = nordaVer.toFixed(2) + " % ";
    document.querySelector("#rateText")!.innerHTML = "Die Veränderung der Emission in Nordamerika von 2018 im Vergleich zu 2008";

    //Vergleich in kg
    document.querySelector("#abs")!.innerHTML = nordaVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText")!.innerHTML = "Die Veränderung der Emission in Nordamerika von 2018 im Vergleich zu 2008";

}

window.addEventListener("load", function(): void {
    document.querySelector(".northamerica")?.addEventListener("click", nordamerika);
});

function südamerika(): void {

    document.querySelector("#titleRegion")!.innerHTML = "Südamerika";
    document.querySelector(".chart")?.setAttribute("style", "height:" + southaRe + "px");

    //Emission Südamerika
    document.querySelector("#emis")!.innerHTML = southa18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText")!.innerHTML = "CO2-Emissionen von Südamerika im Jahr 2018";

    //Relativ zur Welt
    document.querySelector("#rel")!.innerHTML = southaRe.toFixed(2) + " % ";
    document.querySelector("#relText")!.innerHTML = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit";

    //2008 Vergleich zu 2018
    document.querySelector("#rate")!.innerHTML = southaVer.toFixed(2) + " % ";
    document.querySelector("#rateText")!.innerHTML = "Die Veränderung der Emission in Südamerika von 2018 im Vergleich zu 2008";

    //Vergleich in kg
    document.querySelector("#abs")!.innerHTML = southaVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText")!.innerHTML = "Die Veränderung der Emission in Südamerika von 2018 im Vergleich zu 2008";

}

window.addEventListener("load", function(): void {
    document.querySelector(".southamerica")?.addEventListener("click", südamerika);
});

function asien(): void {

    document.querySelector("#titleRegion")!.innerHTML = "Asien";
    document.querySelector(".chart")?.setAttribute("style", "height:" + asiaRe + "px");

    //Emission Asien
    document.querySelector("#emis")!.innerHTML = asia18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText")!.innerHTML = "CO2-Emissionen von Asien im Jahr 2018";

    //Relativ zur Welt
    document.querySelector("#rel")!.innerHTML = asiaRe.toFixed(2) + " % ";
    document.querySelector("#relText")!.innerHTML = "Relativ zur Gesamtemission der Welt verursacht Asien damit";

    //2008 Vergleich zu 2018
    document.querySelector("#rate")!.innerHTML = asiaVer.toFixed(2) + " % ";
    document.querySelector("#rateText")!.innerHTML = "Die Veränderung der Emission in Asien von 2018 im Vergleich zu 2008";

    //Vergleich in kg
    document.querySelector("#abs")!.innerHTML = asiaVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText")!.innerHTML = "Die Veränderung der Emission in Asien von 2018 im Vergleich zu 2008";

}

window.addEventListener("load", function(): void {
    document.querySelector(".asia")?.addEventListener("click", asien);
});

function australien(): void {

    document.querySelector("#titleRegion")!.innerHTML = "Australien";
    document.querySelector(".chart")?.setAttribute("style", "height:" + ausRe + "px");

    //Emission Australien
    document.querySelector("#emis")!.innerHTML = aus18.toFixed(2) + " kg CO2";
    document.querySelector("#emisText")!.innerHTML = "CO2-Emissionen von Australien im Jahr 2018";

    //Relativ zur Welt
    document.querySelector("#rel")!.innerHTML = ausRe.toFixed(2) + " % ";
    document.querySelector("#relText")!.innerHTML = "Relativ zur Gesamtemission der Welt verursacht Australien damit";

    //2008 Vergleich zu 2018
    document.querySelector("#rate")!.innerHTML = ausVer.toFixed(2) + " % ";
    document.querySelector("#rateText")!.innerHTML = "Die Veränderung der Emission in Australien von 2018 im Vergleich zu 2008";

    //Vergleich in kg
    document.querySelector("#abs")!.innerHTML = ausVerkg.toFixed(2) + " kg CO2";
    document.querySelector("#absText")!.innerHTML = "Die Veränderung der Emission in Australien von 2018 im Vergleich zu 2008";

}

window.addEventListener("load", function(): void {
    document.querySelector(".australia")?.addEventListener("click", australien);
});