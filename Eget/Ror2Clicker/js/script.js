var currentLunar = 0;
const storeItems = {
    Commando:10, 
    Huntress:50,
};

const boughtItems = {
    Commando: 0,
    Huntress: 0,
};

const itemStats = {
    Commando: 1,
    Huntress: 3,
}

var button = document.getElementById("getLunar").addEventListener("click", getLunar);
var lunarElement = document.getElementById("currentLunar");

updateStore();

function getLunar(){
    currentLunar++;
    update();
}
function updateCash(){
    lunarElement.textContent = currentLunar;
}
function updatePrices(){
    for(const [key, value] of Object.entries(storeItems)){
        document.getElementById(key+"Price").textContent = value;
    }
}
function update(){
    updateCash();
    updateStore();
    updatePrices();
}
function updateStore(){
    for(const [key, value] of Object.entries(storeItems)){
        if(currentLunar >= value){
            document.getElementById(key).disabled = false;
        }else{
            document.getElementById(key).disabled = true;
        }
    }
}
function buyFromStore(what){
    switch(what){
        case "Commando":
            alert("Bought Commando for "+storeItems.Commando);
            currentLunar -= 10;
            boughtItems.Commando += 1;
            storeItems.Commando *= 1.4;
            update();
            break;
        case "Huntress":
            alert("Bought Huntess for "+storeItems.Huntress);
            currentLunar -= 50;
            boughtItems.Huntress += 1;
            storeItems.Huntress *= 1.4;
            update();
            break;
        default:
            alert("You are poor");
    }
}
function autoGenerate(){
    for(const [key, value] of Object.entries(boughtItems)){
        currentLunar += itemStats[key] * value;
    }
    update();
}
setInterval(autoGenerate, 2000);

var fs = require('fs');
var files = fs.readdirSync("./images");
function createButtons(){
    files.forEach(survivor => {
        document.createElement
    });
}
createButtons();