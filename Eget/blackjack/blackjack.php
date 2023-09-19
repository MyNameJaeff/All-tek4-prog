<?php
include "header.php";
$cardDeck = array(
   array("Two of Clubs",2), array("Three of Clubs",3), array("Four of Clubs",4), array("Five of Clubs",5), array("Six of Clubs",6), array("Seven of Clubs",7,
    ), array("Eight of Clubs",8), array("Nine of Clubs",9), array("Ten of Clubs",10), array("Jack of Clubs",10), array("Queen of Clubs",10), array("King of Clubs",10), array("Ace of clubs",11,
    ), array("Two of Spades",2), array("Three of Spades",3), array("Four of Spades",4), array("Five of Spades",5), array("Six of Spades",6), array("Seven of Spades",7,
    ), array("Eight of Spades",8), array("Nine of Spades",9), array("Ten of Spades",10), array("Jack of Spades",10), array("Queen of Spades",10), array("King of Spades",10), array("Ace of Spades",11,
    ), array("Two of Diamonds",2), array("Three of Diamonds",3), array("Four of Diamonds",4), array("Five of Diamonds",5), array("Six of Diamonds",6), array("Seven of Diamonds",7,
    ), array("Eight of Diamonds",8), array("Nine of Diamonds",9), array("Ten of Diamonds",10), array("Jack of Diamonds",10), array("Queen of Diamonds",10), array("King of Diamonds",10), array("Ace of Diamonds",11,
    ), array("Two of Hearts",2), array("Three of Hearts",3), array("Four of Hearts",4), array("Five of Hearts",5), array("Six of Hearts",6), array("Seven of Hearts",7,
    ), array("Eight of Hearts",8), array("Nine of Hearts",9), array("Ten of Hearts",10), array("Jack of Hearts",10), array("Queen of Hearts",10), array("King of Hearts",10), array("Ace of Hearts",11)
);
$playerHand = array();
$dealerHand = array();
$playerTotal = array();
$dealerTotal = array();
?>
<main>
    <h1>Weclome to blackjack</h1>
    <form method="POST">
        <label for="betAmount">How much to bet (>0):</label>
        <input type="numbers"  id="betAmount" name="betAmount" required>
        <input type="submit" value="Submit" name="submit">
    </form><br>
    <div id="playTable">
        <div id="playerSide">
            <div id="playerCards"></div>
        </div>
        <hr></hr>
        <div id="dealerSide">
        </div>
    </div>
    <button name="hit" id="hit" onclick="Hit('Player')">Hit</button>
    <button name="stand" id="stand" onclick="Stand('Player')">Stand</button>
</main>

<script>
    const current = document.getElementById("blackjack");
    current.classList.add("active");
</script>
<?php
include "footer.php";
?>