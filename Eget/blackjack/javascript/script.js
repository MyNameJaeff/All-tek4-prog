let dealerTotal = 0;
let playerTotal = 0;
let acedealerTotal = 0;
let aceplayerTotal = 0;
let playerStand = false;
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
let dealerSide = document.getElementById("dealerSideDiv");
let playerSide = document.getElementById("playerSideDiv");
let player = document.getElementById("playerScoreDiv");
let dealer = document.getElementById("dealerScoreDiv");
var playerTot = document.getElementById("playerScore");
var dealerTot = document.getElementById("dealerScore");
function appendCards(array, who) {
  let i = 0;

  switch (who) {
    case "Player":
      playerSide.innerHTML = "";
      playerTotal = 0;
      aceplayerTotal = 0;
      break;
    case "Dealer":
      dealerSide.innerHTML = "";
      dealerTotal = 0;
      acedealerTotal = 0;
      break;
  }
  array.forEach((element) => {
    if (who == "Player") {
      var box = document.createElement("div");
      var cardBox = document.createElement("figure");
      var card = document.createElement("figcaption");
      var cardImg = document.createElement("img");
      cardImg.src = "images/" + element[0][0] + ".png";
      cardImg.alt = element[0][0];
      cardImg.classList = "card";
      if (element[0][1] == 11) {
        card.textContent = element[0][0] + ", " + element[0][1] + " (1)";
      } else {
        card.textContent = element[0][0] + ", " + element[0][1];
      }
      cardBox.appendChild(card);
      cardBox.appendChild(cardImg);
      box.appendChild(cardBox);
      playerSide.appendChild(box);
      playerTotal += element[0][1];
      if (element[0][1] == 11) {
        aceplayerTotal += 1;
      }
      i++;
    } else if (who == "Dealer" && i != 1) {
      var box = document.createElement("div");
      var cardBox = document.createElement("figure");
      var card = document.createElement("figcaption");
      var cardImg = document.createElement("img");
      cardImg.src = "images/" + element[0][0] + ".png";
      cardImg.alt = element[0][0];
      cardImg.classList = "card";
      if (element[0][1] == 11) {
        card.textContent = element[0][0] + ", " + element[0][1] + " (1)";
      } else {
        card.textContent = element[0][0] + ", " + element[0][1];
      }
      cardBox.appendChild(card);
      cardBox.appendChild(cardImg);
      box.appendChild(cardBox);
      dealerSide.appendChild(box);
      dealerTotal += element[0][1];
      if (element[0][1] == 11) {
        acedealerTotal += 1;
      }
      i++;
    } else if (who == "Dealer" && i == 1) {
      var box = document.createElement("div");
      var cardBox = document.createElement("figure");
      var card = document.createElement("figcaption");
      card.id = "unknownCaption";
      var cardImg = document.createElement("img");
      cardImg.id = "unknownCard";
      cardImg.src = "images/Back of Card.png";
      cardImg.alt = "unknown";
      cardImg.classList = "card unknown";
      card.textContent = element; //"Unknown Card";
      cardBox.appendChild(card);
      cardBox.appendChild(cardImg);
      box.appendChild(cardBox);
      dealerSide.appendChild(box);
      dealerTotal += element[0][1];
      if (element[0][1] == 11) {
        acedealerTotal += 1;
      }
      i++;
    }
  });
  if (who == "Player") {
    if (aceplayerTotal == 0) {
      if (playerTotal > 21) {
        playerTot.textContent =
          "Player: " + playerTotal + " which is over 21! Player busts";
        playerTot.style = "background-color:red;";
        Lost("Player");
      } else {
        playerTot.textContent = "Player: " + playerTotal;
      }
    } else {
      if (playerTotal - 11 + aceplayerTotal > 21) {
        playerTot.textContent =
          "Player: " + (playerTotal - 11 + aceplayerTotal);
        Lost("Dealer");
      } else if (playerTotal > 21) {
        "Player: " + (playerTotal - 11 + aceplayerTotal);
      } else {
        playerTot.textContent =
          "Player: " +
          playerTotal +
          " (" +
          (playerTotal - 11 + aceplayerTotal) +
          ")";
      }
    }
    player.appendChild(playerTot);
  } else if (who == "Dealer") {
    if (acedealerTotal == 0) {
      if (dealerTotal > 21 && playerStand) {
        dealerTot.textContent =
          "Dealer: " + dealerTotal + " which is over 21! Dealer busts";
        dealerTot.style = "background-color:red;";
        Lost("Dealer");
      } else if (dealerTotal > 17 && playerStand == true) {
        dealerTot.textContent = "Dealer: " + dealerTotal;
        Stand("Other");
      } else if (playerStand) {
        dealerTot.textContent = "Dealer: " + dealerTotal;
      }
    } else {
      if (dealerTotal >= 17 && playerStand) {
        dealerTot.textContent =
          "Dealer: " + (dealerTotal - 11 + acedealerTotal);
        Stand("Other");
      } else if (dealerTotal - 11 + acedealerTotal > 21 && playerStand) {
        dealerTot.textContent =
          "Dealer: " + (dealerTotal - 11 + acedealerTotal);
        Lost("Dealer");
      } else if (dealerTotal > 21 && playerStand) {
        dealerTot.textContent =
          "Dealer: " + (dealerTotal - 11 + acedealerTotal);
      } else if (
        dealerTotal - 11 + acedealerTotal >= 17 &&
        playerStand == true
      ) {
        dealerTot.textContent =
          "Dealer: " + (dealerTotal - 11 + acedealerTotal);
        Stand("Other");
      } else if (playerStand) {
        dealerTot.textContent =
          "Dealer: " +
          dealerTotal +
          " (" +
          (dealerTotal - 11 + acedealerTotal) +
          ")";
      }
    }
    dealer.appendChild(dealerTot);
  }
  if (playerHand.length == 2 && dealerHand.length == 2) {
    if (playerTotal == 21 && playerHand.length == 2) {
      playerTot.textContent =
        "Player: " + playerTotal + " which is a BLACKJACK!";
      playerTot.style = "background-color:yellow;";
      Won("Player");
    } else if (dealerTotal == 21 && dealerHand.length == 2) {
      dealerTot.textContent =
        "Dealer: " + dealerTotal + " which is a BLACKJACK!";
      dealerTot.style = "background-color:yellow;";
      Won("Dealer");
    }
  }
}
function drawExtraCard(who) {
  if (who == "Player") {
    let arr = [];
    arr.push(cardDeck[0]);
    cardDeck.shift();
    playerHand.push(arr);
    appendCards(playerHand, "Player");
  } else {
    let arr = [];
    cardDeck.shift();
    arr.push(cardDeck[1]);
    dealerHand.push(arr);
    appendCards(dealerHand, "Dealer");
  }
}
function Hit(who) {
  drawExtraCard("Player");
}
function Stand(who) {
  if (who == "Player") {
    DisableButtons();
    if (dealerTotal < 17 && dealerTotal - 11 + acedealerTotal < 17) {
      playerStand = true;
      revealDealerCard();
      drawExtraCard("Dealer");
    } else {
      revealDealerCard();
      Stand("Other"); // REVEAL THE DEALERS CARDS WHEN THIS
    }
  } else {
    let hitButton = document.getElementById("hit");
    hitButton.disabled = true;
    if (playerTotal > dealerTotal && playerTotal > !21) {
      Won("Player");
    } else if (dealerTotal > playerTotal && dealerTotal > !21) {
      Won("Dealer");
    } else {
      Draw();
    }
  }
}
function revealDealerCard() {
  let caption = document.getElementById("unknownCaption");
  let image = document.getElementById("unknownCard");
  image.src = "images/" + dealerHand[1][0][0] + ".png";
  if (dealerHand[1][0][1] == 11) {
    caption.textContent =
      dealerHand[1][0][0] + ", " + dealerHand[1][0][1] + "(1)";
  } else {
    caption.textContent = dealerHand[1][0][0] + ", " + dealerHand[1][0][1];
  }
}
function Lost(who) {
  revealDealerCard();
  if (who == "Player") {
    alert("Player lost");
  } else {
    alert("Dealer lost");
  }
  DisableButtons();
}
function Draw() {
  revealDealerCard();
  alert("It was a draw");
  DisableButtons();
}
function Won(who) {
  revealDealerCard();
  if (who == "Player") {
    alert("Player won");
  } else {
    alert("Dealer won");
  }
  DisableButtons();
}
function Restart() {
  document.getElementById("restart").disabled = true;
  location.reload();
}
function StartGame() {
  document.getElementById("restart").disabled = true;
  document.getElementById("betAmount").disabled = true;
  document.getElementById("submit").disabled = true;
  appendCards(playerHand, "Player");
  appendCards(dealerHand, "Dealer");
}
function DisableButtons() {
  document.getElementById("hit").disabled = true;
  document.getElementById("stand").disabled = true;
  document.getElementById("restart").disabled = false;
}
console.log(
  "Player: " + playerHand + "\n" + "Dealer: " + dealerHand[0] + ", ***"
);
