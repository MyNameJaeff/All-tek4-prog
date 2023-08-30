var currentLunar = 10000000;
const storeItems = {
    Commando:10, 
    Huntress:50,
    Bandit:100,
    MUL_T:250,
    Engineer:500,
    Artificer:1500,
    Mercenary:2500,
    Rex:5000,
    Loader: 15000,
    Acrid: 25000,
    Captain: 50000,
    Railgunner: 100000,
    Void_Fiend: 250000
};

const boughtItems = {
    Commando: 0,
    Huntress: 0,
    Bandit:0,
    MUL_T:0,
    Engineer:0,
    Artificer:0,
    Mercenary:0,
    Rex:0,
    Loader: 0,
    Acrid: 0,
    Captain: 0,
    Railgunner: 0,
    Void_Fiend: 0
};

const itemStats = {
    Commando: 1,
    Huntress: 3,
    Bandit:5,
    MUL_T:8,
    Engineer:13,
    Artificer:20,
    Mercenary:40,
    Rex:95,
    Loader: 230,
    Acrid: 500,
    Captain: 1200,
    Railgunner: 2800,
    Void_Fiend: 7500
}

var button = document.getElementById("getLunar").addEventListener("click", getLunar);
var lunarElement = document.getElementById("currentLunar");

updateStore();

function getLunar(){
    currentLunar++;
    update();
}
function updateCash(){
    lunarElement.textContent = Math.round(currentLunar);
}
function updatePrices(){
    for(const [key, value] of Object.entries(storeItems)){
        document.getElementById(key+"Price").textContent = Math.round(value);
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
            currentLunar -= storeItems.Commando;
            boughtItems.Commando += 1;
            storeItems.Commando *= 1.4;
            update();
            break;
        case "Huntress":
            alert("Bought Huntess for "+storeItems.Huntress);
            currentLunar -= storeItems.Commando;
            boughtItems.Huntress += 1;
            storeItems.Commando *= 1.4;
            update();
            break;
        case "Bandit":
            alert("Bought Huntess for "+storeItems.Bandit);
            currentLunar -= storeItems.Bandit;
            boughtItems.Bandit += 1;
            storeItems.Bandit *= 1.4;
            update();
            break;
        case "MUL_T":
            alert("Bought Huntess for "+storeItems.MUL_T);
            currentLunar -= storeItems.MUL_T;
            boughtItems.MUL_T += 1;
            storeItems.MUL_T *= 1.4;
            update();
            break;
        case "Engineer":
            alert("Bought Commando for "+storeItems.Engineer);
            currentLunar -= storeItems.Engineer;
            boughtItems.Engineer += 1;
            storeItems.Engineer *= 1.4;
            update();
            break;
        case "Artificer":
            alert("Bought Huntess for "+storeItems.Artificer);
            currentLunar -= storeItems.Artificer;
            boughtItems.Artificer += 1;
            storeItems.Artificer *= 1.4;
            update();
            break;
        case "Mercenary":
            alert("Bought Huntess for "+storeItems.Mercenary);
            currentLunar -= storeItems.Mercenary;
            boughtItems.Mercenary += 1;
            storeItems.Mercenary *= 1.4;
            update();
            break;
        case "Rex":
            alert("Bought Huntess for "+storeItems.Rex);
            currentLunar -= storeItems.Rex;
            boughtItems.Rex += 1;
            storeItems.Rex *= 1.4;
            update();
            break;
        case "Loader":
            alert("Bought Commando for "+storeItems.Loader);
            currentLunar -= storeItems.Loader;
            boughtItems.Loader += 1;
            storeItems.Loader *= 1.4;
            update();
            break;
        case "Acrid":
            alert("Bought Huntess for "+storeItems.Acrid);
            currentLunar -= storeItems.Acrid;
            boughtItems.Acrid += 1;
            storeItems.Acrid *= 1.4;
            update();
            break;
        case "Captain":
            alert("Bought Huntess for "+storeItems.Captain);
            currentLunar -= storeItems.Captain;
            boughtItems.Captain += 1;
            storeItems.Captain *= 1.4;
            update();
            break;
        case "Railgunner":
            alert("Bought Huntess for "+storeItems.Railgunner);
            currentLunar -= storeItems.Railgunner;
            boughtItems.Railgunner += 1;
            storeItems.Railgunner *= 1.4;
            update();
            break;
        case "Void_Fiend":
            alert("Bought Huntess for "+storeItems.Void_Fiend);
            currentLunar -= storeItems.Void_Fiend;
            boughtItems.Void_Fiend += 1;
            storeItems.Void_Fiend *= 1.4;
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
setInterval(update, 100);