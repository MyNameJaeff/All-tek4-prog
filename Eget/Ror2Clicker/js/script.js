var currentLunar = 10000;
var currentLunarPerSecond = 0;

var createdCharacters = [];

var button = document.getElementById("getLunar").addEventListener("click", getLunar);
var lunarElement = document.getElementById("currentLunar");
var lunarPerSecond = document.getElementById("lunarPerSecond");

class Character {
    constructor(Name, Price, Stats, Owned, UpgradePrice, UpgradeStats, UpgradesOwned){
        this.Name = Name;
        this.Price = Price;
        this.Stats = Stats;
        this.Owned = 0;
        this.UpgradePrice = UpgradePrice;
        this.UpgradeStats = UpgradeStats;
        this.UpgradesOwned = 0;
        this.pushCharacter();
        this.createdCharacters();
        setInterval(this.checkAvalible.bind(this), 100);
        setInterval(this.generateLunar.bind(this), 2000);
    }
    pushCharacter(){
        var charater = {name: this.Name, price:this.Price, stats: this.Stats,amountOwned:this.Owned, upgrades: this.Upgrades};
        createdCharacters.push(charater);
    }
    createdCharacters(){
        var Store = document.getElementById("store");
        var amountOwned = document.createElement("h2");
        var charName = this.Name;
        amountOwned.textContent = "0";
        amountOwned.classList = "amountOfOwned"+charName+" amountOfOwned";
        amountOwned.id = "amountOfOwned"+charName;
        var Button = document.createElement("button");
        Button.id = charName;
        Button.onclick = function() { buyFromStore(charName); };
        Button.title = "Generates " + this.Stats/2 + " lunar coins per second";
        var Image = document.createElement("img");
        Image.src = "./images/"+charName+".webp";
        Image.alt = charName;
        var Header = document.createElement("h2");
        Header.id = charName+"BuyPrice";
        Header.classList = "PriceHeader";
        Header.textContent = this.Price;

        Button.appendChild(amountOwned);
        Button.appendChild(Image);
        Button.appendChild(Header);
        Store.appendChild(Button);
    }
    createUpgrades(){
        var Name = this.Name + "Upgrade";
        var BuyPrice = Name + "Price";
    
        var Store = document.getElementById("store");
        var Button = document.createElement("button");
        Button.id = Name;
        Button.onclick = function() { buyUpgrades(Name); };
        Button.title = "Generates " + this.Stats/2 + " lunar coins per second";
        var Image = document.createElement("img");
        Image.src = "./images/"+Name+".webp";
        Image.alt = Name;
        var Header = document.createElement("h2");
        Header.id = BuyPrice;
        Header.classList = "PriceHeader";
        Header.textContent = this.UpgradePrice;
    
        Button.appendChild(Image);
        Button.appendChild(Header);
        Store.appendChild(Button);
    }
    buyOne(){

        if(this.UpgradesOwned > 0){
            currentLunarPerSecond += this.Stats * this.UpgradeStats;
            currentLunarPerSecond += this.Stats;
        }else{
            currentLunarPerSecond += this.Stats;
        }
        currentLunar -= this.Price;
        this.Owned += 1;
        this.Price = Math.round(this.Price * 1.4);
        document.getElementById(this.Name+"BuyPrice").textContent = this.Price;
        document.getElementById("amountOfOwned"+this.Name).textContent = this.Owned;
        document.getElementById("currentLunar").textContent = currentLunar;
    }
    buyUpgrade(){
        document.getElementById(this.Name+"Upgrade").remove();
        this.UpgradesOwned += 1;
        currentLunar -= this.UpgradePrice;
        currentLunarPerSecond += this.UpgradeStats * this.Owned * this.Stats;
    }
    generateLunar(){
        if(this.UpgradesOwned == 0){
            currentLunar += this.Stats * this.Owned;
        }else{
            currentLunar += this.Stats * this.Owned;            
            currentLunar += (this.Stats * this.Owned) * this.UpgradeStats;
        }
        document.getElementById("lunarPerSecond").textContent = currentLunarPerSecond/2+"/s";
        document.getElementById("currentLunar").textContent = currentLunar;
    }
    checkAvalible(){
        var exists = document.getElementById(this.Name+"Upgrade");
        if(currentLunar >= this.Price){
            document.getElementById(this.Name).disabled = false;
        }else{
            document.getElementById(this.Name).disabled = true;
        }
        if(exists != null){
            if(currentLunar >= this.UpgradePrice && this.Owned > 0){
                document.getElementById(this.Name+"Upgrade").disabled = false;
            }else{
                document.getElementById(this.Name+"Upgrade").disabled = true;
            }
        }
    }
}

const Commando = new Character("Commando", 10, 1, 0, 100, 1, 0);
const Huntress = new Character("Huntress", 50, 3, 0, 1000, 1, 0);
const Bandit = new Character("Bandit", 100, 5);
const MUL_T = new Character("MUL_T", 250, 8);
const Engineer = new Character("Engineer", 500, 13);
const Artificer = new Character("Artificer", 1500, 20);
const Mercenary = new Character("Mercenary", 2500, 40);
const Rex = new Character("Rex", 5000, 95);
const Loader = new Character("Loader", 15000, 230);
const Acrid = new Character("Acrid", 25000, 500);
const Captain = new Character("Captain", 50000, 1200);
const Railgunner = new Character("Railgunner", 100000, 2800);
const Void_Fiend = new Character("Void_Fiend", 250000, 7500);

Commando.createUpgrades();
Huntress.createUpgrades()

function buyFromStore(what){
    //Bad code
    switch(what){
        case "Commando":
            Commando.buyOne();
            break;
        case "Huntress":
            Huntress.buyOne();
            break;
        case "Bandit":
            Bandit.buyOne();
            break;
        case "MUL_T":
            MUL_T.buyOne();
            break;
        case "Engineer":
            Engineer.buyOne();
            break;
        case "Artificer":
            Artificer.buyOne();
            break;
        case "Mercenary":
            Mercenary.buyOne();
            break;
        case "Rex":
            Rex.buyOne();
            break;
        case "Loader":
            Loader.buyOne();
            break;
        case "Acrid":
            Acrid.buyOne();
            break;
        case "Captain":
            Captain.buyOne();
            break;
        case "Railgunner":
            Railgunner.buyOne();
            break;
        case "Void_Fiend":
            Void_Fiend.buyOne();
            break;
    }
}
function buyUpgrades(what){
    //Bad code
    switch(what){
        case "CommandoUpgrade":
            Commando.buyUpgrade();
            break;
        case "HuntressUpgrade":
            Huntress.buyUpgrade();
            break;
        case "BanditUpgrade":
            Bandit.buyUpgrade();
            break;
        case "MUL_TUpgrade":
            MUL_T.buyUpgrade();
            break;
        case "EngineerUpgrade":
            Engineer.buyUpgrade();
            break;
        case "ArtificerUpgrade":
            Artificer.buyUpgrade();
            break;
        case "MercenaryUpgrade":
            Mercenary.buyUpgrade();
            break;
        case "RexUpgrade":
            Rex.buyUpgrade();
            break;
        case "LoaderUpgrade":
            Loader.buyUpgrade();
            break;
        case "AcridUpgrade":
            Acrid.buyUpgrade();
            break;
        case "CaptainUpgrade":
            Captain.buyUpgrade();
            break;
        case "RailgunnerUpgrade":
            Railgunner.buyUpgrade();
            break;
        case "Void_FiendUpgrade":
            Void_Fiend.buyUpgrade();
            break;
    }
}
function getLunar(){
    currentLunar++;
    document.getElementById("currentLunar").textContent = currentLunar;
}

/*function createUpgrades(Name, Price, Stats){
    Name = Name + "Upgrade";
    UpgradeNames.push(Name);
    var BuyPrice = Name + "UpgradePrice";
    var Generation = Name + "UpgradeStats";
    var OwnedAmount = Name + "UpgradesOwned";
    var Item = {};
    Item[BuyPrice] = Price;
    Item[Generation] = Stats;
    Item[OwnedAmount] = 0;
    ItemUpgrades.push(Item);

    var Store = document.getElementById("store");
    var amoundOwned = document.createElement("h2");
    amoundOwned.textContent = "0";
    amoundOwned.classList = "amountOfOwned"+Name+" amountOfOwned";
    amoundOwned.id = "amountOfOwned"+Name;
    var Button = document.createElement("button");
    Button.id = Name;
    Button.onclick = function() { buyUpgrade(Name); };
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

/*

//createUpgrades("Commando", 10, 1);
update();



function getLunar(){
    currentLunar++;
    update();
}
function updateCash(){
    lunarElement.textContent = Math.round(currentLunar);
    lunarPerSecond.textContent = (Math.round(currentLunarPerSecond*10)/10)/2+"/s";
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
    for(var i = 0;i < UpgradeNames.length; i++){
        if(currentLunar >= ItemUpgrades[i][UpgradeNames[i]+"UpgradePrice"] && Items[i][ItemsNames[i]+"Owned"] > 0){
            document.getElementById(UpgradeNames[i]).disabled = false;
        }else{
            document.getElementById(UpgradeNames[i]).disabled = true;
        }
    }
}
function buyFromStore(what){
    var priceOfWhat = what + "Price";
    var thing = 0;
    //alert("Bought "+what+" for "+Items[ItemsNames.indexOf(what)][priceOfWhat]);
    currentLunar -= Items[ItemsNames.indexOf(what)][priceOfWhat];
    Items[ItemsNames.indexOf(what)][what+"Owned"] += 1;
    Items[ItemsNames.indexOf(what)][priceOfWhat] *= 1.4;
    /*if(ItemUpgrades[UpgradeNames.indexOf(what+"Upgrade")][what+"Upgrade"+"UpgradesOwned"] > 0){
        thing = Items[ItemsNames.indexOf(what+"Upgrade")][what+"Stats"] * ItemUpgrades[UpgradeNames.indexOf("Upgrade"+what)]["Upgrade"+what+"Stats"];
    }
    else{
    currentLunarPerSecond += Items[ItemsNames.indexOf(what)][what+"Stats"];
    thing = Items[ItemsNames.indexOf(what)][what+"Stats"];
    //}
    currentLunar += thing;
    update();
}
function buyUpgrade(what){
    var priceOfWhat = what + "UpgradePrice";
    var thing = 0;
    currentLunar -= ItemUpgrades[UpgradeNames.indexOf(what)][priceOfWhat];
    ItemUpgrades[UpgradeNames.indexOf(what)][what+"UpgradesOwned"] += 1;
    thing = Items[ItemsNames.indexOf(what.replace("Upgrade", ""))][what.replace("Upgrade", "")+"Stats"] * ItemUpgrades[UpgradeNames.indexOf(what)][what+"UpgradeStats"];
    currentLunarPerSecond += thing;
    update();
}
function autoGenerate(){
    for(var i = 0;i < ItemsNames.length; i++){
        currentLunar += Items[i][ItemsNames[i]+"Stats"] * Items[i][ItemsNames[i]+"Owned"];
    }
    if(ItemUpgrades.length > 0){
        UpgradeNames.forEach(name => {
            if(ItemUpgrades[UpgradeNames.indexOf(name)][name+"UpgradesOwned"] > 0){
            //currentLunarPerSecond += ItemUpgrades[UpgradeNames.indexOf(what)][what+"Stats"];
            var upgraded = Items[ItemsNames.indexOf(name.replace("Upgrade", ""))][name.replace("Upgrade", "") + "Owned"];
            currentLunar += upgraded * ItemUpgrades[UpgradeNames.indexOf(name)][name+"UpgradeStats"];
            }
        });
    }
    update();
}
autoGenerate();
setInterval(autoGenerate, 2000);
setInterval(update, 100);*/