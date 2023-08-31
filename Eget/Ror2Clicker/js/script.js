var currentLunar = 0;

var Items = [];
var ItemsNames = [];

var button = document.getElementById("getLunar").addEventListener("click", getLunar);
var lunarElement = document.getElementById("currentLunar");

function createBuyable(Name, Price, Stats){
    ItemsNames.push(Name);
    var BuyPrice = Name + "Price";
    var Generation = Name + "Stats";
    var OwnedAmount = Name + "Owned";
    var Item = {};
    Item[BuyPrice] = Price;
    Item[Generation] = Stats;
    Item[OwnedAmount] = 0;
    Items.push(Item);

    var Store = document.getElementById("store");
    var Button = document.createElement("button");
    Button.id = Name;
    Button.onclick = function() { buyFromStore(Name); };
    var Image = document.createElement("img");
    Image.src = "./images/"+Name+".webp";
    Image.alt = Name;
    var Header = document.createElement("h2");
    Header.id = BuyPrice;
    Header.textContent = Price;

    Button.appendChild(Image);
    Button.appendChild(Header);
    Store.appendChild(Button);
}

createBuyable("Commando", 10, 1);
createBuyable("Huntress", 50, 3);
createBuyable("Bandit", 100, 5);
createBuyable("MUL_T", 250, 8);
createBuyable("Engineer", 500, 13);
createBuyable("Artificer", 1500, 20);
createBuyable("Mercenary", 2500, 40);
createBuyable("Rex", 5000, 95);
createBuyable("Loader", 15000, 230);
createBuyable("Acrid", 25000, 500);
createBuyable("Captain", 50000, 1200);
createBuyable("Railgunner", 100000, 2800);
createBuyable("Void_Fiend", 250000, 7500);
update();



function getLunar(){
    currentLunar++;
    update();
}
function updateCash(){
    lunarElement.textContent = Math.round(currentLunar);
}
function updatePrices(){
    var i = 0;
    ItemsNames.forEach(name => {
        document.getElementById(name+"Price").textContent = Math.round(Items[i][name+"Price"]);
        i++;
    });
}
function update(){
    updateCash();
    updateStore();
    updatePrices();
}
function updateStore(){
    for(var i = 0;i < ItemsNames.length; i++){
        if(currentLunar >= Items[i][ItemsNames[i]+"Price"]){
            document.getElementById(ItemsNames[i]).disabled = false;
        }else{
            document.getElementById(ItemsNames[i]).disabled = true;
        }
    }
}
function buyFromStore(what){
    switch(what){
        case "Commando":
            alert("Bought Commando for "+Items[0].CommandoPrice);
            currentLunar -= Items[0].CommandoPrice;
            Items[0].CommandoOwned += 1;
            Items[0].CommandoPrice *= 1.4;
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
    console.log("Hello");
    for(var i = 0;i < ItemsNames.length; i++){
        currentLunar += Items[i][ItemsNames[i]+"Stats"] * Items[i][ItemsNames[i]+"Owned"];
    }
    update();
}
autoGenerate();
setInterval(autoGenerate, 2000);
setInterval(update, 100);