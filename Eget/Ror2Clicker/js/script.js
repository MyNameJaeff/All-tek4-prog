var currentLunar = 0;
var currentLunarPerSecond = 0;

var Items = [];
var ItemsNames = [];
var ItemUpgrades = [];

var button = document.getElementById("getLunar").addEventListener("click", getLunar);
var lunarElement = document.getElementById("currentLunar");
var lunarPerSecond = document.getElementById("lunarPerSecond");

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
    var amoundOwned = document.createElement("h2");
    amoundOwned.textContent = "0";
    amoundOwned.classList = "amountOfOwned"+Name+" amountOfOwned";
    amoundOwned.id = "amountOfOwned"+Name;
    var Button = document.createElement("button");
    Button.id = Name;
    Button.onclick = function() { buyFromStore(Name); };
    Button.title = "Generates " + Stats/2 + " lunar coins per second";
    var Image = document.createElement("img");
    Image.src = "./images/"+Name+".webp";
    Image.alt = Name;
    var Header = document.createElement("h2");
    Header.id = BuyPrice;
    Header.classList = "PriceHeader";
    Header.textContent = Price;

    Button.appendChild(amoundOwned);
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
    lunarPerSecond.textContent = (Math.round(currentLunarPerSecond*10)/10)/2+"/s"
}
function updatePrices(){
    var i = 0;
    ItemsNames.forEach(name => {
        document.getElementById(name+"Price").textContent = Math.round(Items[i][name+"Price"]);
        Items[ItemsNames.indexOf(name)][name+"Price"] = Math.round(Items[ItemsNames.indexOf(name)][name+"Price"]);
        document.getElementById("amountOfOwned"+name).textContent = Items[ItemsNames.indexOf(name)][name+"Owned"];
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
    var priceOfWhat = what + "Price";
    //alert("Bought "+what+" for "+Items[ItemsNames.indexOf(what)][priceOfWhat]);
    currentLunar -= Items[ItemsNames.indexOf(what)][priceOfWhat];
    Items[ItemsNames.indexOf(what)][what+"Owned"] += 1;
    Items[ItemsNames.indexOf(what)][priceOfWhat] *= 1.4;
    currentLunarPerSecond += Items[ItemsNames.indexOf(what)][what+"Stats"];
    update();
}


function autoGenerate(){
    for(var i = 0;i < ItemsNames.length; i++){
        currentLunar += Items[i][ItemsNames[i]+"Stats"] * Items[i][ItemsNames[i]+"Owned"];
    }
    update();
}
autoGenerate();
setInterval(autoGenerate, 2000);
setInterval(update, 100);