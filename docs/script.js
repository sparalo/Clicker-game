var golds = 0;
var x = 1;

var upcupcake = 0;
var cupcakeCost = 10;
var cupcake = 0

var uppotion = 0;
var potionCost = 500;
var potion = 0;

var uplicorne = 0
var licorneCost = 1000
var licorne = 0

var UWU = document.getElementById("myAudio");

function buyCupcake() {
    if (golds >= cupcakeCost) {
        golds = golds - cupcakeCost;
        cupcake = cupcake + 1;
        upcupcake = upcupcake + 1;
        cupcakeCost = Math.round(cupcakeCost * 1.15);
        displayGolds();


        document.getElementById("golds").innerHTML = golds;
        document.getElementById("cupcakecost").innerHTML = cupcakeCost;
        document.getElementById("cupcake").innerHTML = cupcake;
    }
}

function buyPotion() {
    if (golds >= potionCost) {
        golds = golds - potionCost;
        potion = potion + 250;
        uppotion = uppotion + 1;
        potionCost = Math.round(potionCost * 1.50);
        displayGolds();


        document.getElementById("golds").innerHTML = golds;
        document.getElementById("potioncost").innerHTML = potionCost;
        document.getElementById("potion").innerHTML = potion;
    }
}

function buyLicorne() {
    if (golds >= licorneCost) {
        golds = golds - licorneCost;
        licorne = licorne + 500;
        uplicorne = uplicorne + 1;
        licorneCost = Math.round(licorneCost * 2);
        displayGolds();


        document.getElementById("golds").innerHTML = golds;
        document.getElementById("licornecost").innerHTML = licorneCost;
        document.getElementById("licorne").innerHTML = licorne;
    }
}

function addGold(x) {
    golds = golds + x;
    console.log()
}



function displayGolds() {

    let inter = setInterval(() => {

        golds += potion + cupcake + licorne;


        cursorssss = document.getElementById("cupcake").innerHTML = upcupcake;
        cursorsss = document.getElementById("potion").innerHTML = uppotion;
        cursorss = document.getElementById("licorne").innerHTML = uplicorne;
        moneyy = document.getElementById("money").innerHTML = golds;
        console.log(golds);

    }, 100);
}

function money() {
    addGold(x);
}

function playAudio() {
    addGold(x);
    var bruit = new Audio();
    bruit.src = "uwu.mp3";
    bruit.play();
}


function loadGame() {

    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.golds !== "undefined") golds = savedGame.golds;
    if (typeof savedGame.cupcake !== "undefined") cupcake = savedGame.cupcake;
    if (typeof savedGame.cupcakeCost !== "undefined") cupcakeCost = savedGame.cupcakeCost;
    if (typeof savedGame.potion !== "undefined") potion = savedGame.potion;
    if (typeof savedGame.potionCost !== "undefined") potionCost = savedGame.potionCost;
    if (typeof savedGame.licorne !== "undefined") licorne = savedGame.licorne;
    if (typeof savedGame.licorneCost !== "undefined") licorneCost = savedGame.licorneCost;
}

function saveGame() {
    var gameSave = {
        golds: golds,
        cupcake: cupcake,
        cupcakeCost: cupcakeCost,
        potion: potion,
        potionCost: potionCost,
        licorne: licorne,
        licorneCost: licorneCost,
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

window.onload = function () {
    loadGame();
    displayGolds();
    document.getElementById("cupcakecost").innerHTML = cupcakeCost;
    document.getElementById("cupcake").innerHTML = cupcake;
    document.getElementById("potioncost").innerHTML = potionCost;
    document.getElementById("potion").innerHTML = potion;
    document.getElementById("licornecost").innerHTML = licorneCost;
    document.getElementById("licorne").innerHTML = licorne;
}

setInterval(function () {
    saveGame();
}, 3000);