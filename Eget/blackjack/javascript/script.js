function Deck(Name, Value) {
  this.name = Name;
  this.value = Value;
}
const cardDeck = [
  ["Two of Clubs", 2],
  ["Three of Clubs", 3],
  ["Four of Clubs", 4],
  ["Five of Clubs", 5],
  ["Six of Clubs", 6],
  ["Seven of Clubs", 7],
  ["Eight of Clubs", 8],
  ["Nine of Clubs", 9],
  ["Ten of Clubs", 10],
  ["Jack of Clubs", 10],
  ["Queen of Clubs", 10],
  ["King of Clubs", 10],
  ["Ace of clubs", 11],
  ["Two of Spades", 2],
  ["Three of Spades", 3],
  ["Four of Spades", 4],
  ["Five of Spades", 5],
  ["Six of Spades", 6],
  ["Seven of Spades", 7],
  ["Eight of Spades", 8],
  ["Nine of Spades", 9],
  ["Ten of Spades", 10],
  ["Jack of Spades", 10],
  ["Queen of Spades", 10],
  ["King of Spades", 10],
  ["Ace of Spades", 11],
  ["Two of Diamonds", 2],
  ["Three of Diamonds", 3],
  ["Four of Diamonds", 4],
  ["Five of Diamonds", 5],
  ["Six of Diamonds", 6],
  ["Seven of Diamonds", 7],
  ["Eight of Diamonds", 8],
  ["Nine of Diamonds", 9],
  ["Ten of Diamonds", 10],
  ["Jack of Diamonds", 10],
  ["Queen of Diamonds", 10],
  ["King of Diamonds", 10],
  ["Ace of Diamonds", 11],
  ["Two of Hearts", 2],
  ["Three of Hearts", 3],
  ["Four of Hearts", 4],
  ["Five of Hearts", 5],
  ["Six of Hearts", 6],
  ["Seven of Hearts", 7],
  ["Eight of Hearts", 8],
  ["Nine of Hearts", 9],
  ["Ten of Hearts", 10],
  ["Jack of Hearts", 10],
  ["Queen of Hearts", 10],
  ["King of Hearts", 10],
  ["Ace of Hearts", 11],
];
const shuffledArray = cardDeck.sort((a, b) => 0.5 - Math.random());
const playerHand = [];
const dealerHand = [];

for (let i = 0; i < 2; i++) {
    let arr = [];
    arr.push(cardDeck[0]);
    cardDeck.shift();
    playerHand.push(arr);
    arr = [];
    cardDeck.shift();
    arr.push(cardDeck[1]);
    dealerHand.push(arr);
}
let table = document.getElementById("playTable");
function appendCards(array, who){
    let i = 0;
    array.forEach(element => {
        if(who == "Player" || i != 1){
            var card = document.createElement("p");
            var cardImg = document.createElement("img");
            console.log(element);
            cardImg.src = "images/"+element[0][0]+".png";
            cardImg.alt = "A";
            cardImg.classList = "card";
            card.textContent = element;
            table.appendChild(card);
            table.appendChild(cardImg);
            i++;
        }else if(who == "Dealer" && i == 1){
            var card = document.createElement("p");
            var cardImg = document.createElement("img");
            console.log(element);
            cardImg.src = "images/Back of Card.png";
            cardImg.alt = "A";
            cardImg.classList = "card";
            card.textContent = element;
            table.appendChild(card);
            table.appendChild(cardImg);
            i++;
        }
    });
    
}
appendCards(playerHand, "Player");
appendCards(dealerHand, "Dealer");
function drawExtraCard(who){
    if(who == "Player"){
        let arr = [];
        arr.push(cardDeck[0]);
        cardDeck.shift();
        playerHand.push(arr);
    }else{
        let arr = [];
        cardDeck.shift();
        arr.push(cardDeck[1]);
        dealerHand.push(arr);
    }
}
console.log("Player: " + playerHand + "\n" + "Dealer: " + dealerHand);
