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
    <?php
    shuffle($cardDeck);
    if(isset($_POST["submit"])){
        $betAmount = $_POST['betAmount'];
        if($betAmount <= 0){
            header("LOCATION: blackjack.php");
        }else{
            echo "You bet " . $betAmount . "<br>";
            $i = 0;
            foreach($cardDeck as $value){
                echo("<img src='images/".$cardDeck[$i][0].".png' width='5%' height='5%'>");
                echo($cardDeck[$i][0]." -> ". $cardDeck[$i][1]."<br>");
                $i++;
            }
        }
        echo("<hr>");
        draw_hand();
    }
    function draw_hand(){
        global $cardDeck, $playerHand, $playerTotal, $dealerHand, $dealerTotal;

        for($i = 0; $i < 7; $i++){
            array_push($playerHand,array_pop($cardDeck));    
            array_push($dealerHand, array_pop($cardDeck));
        }

        for($i = 0; $i < 2; $i++){
            echo("<img src='images/".$playerHand[$i][0].".png' width='5%' height='5%'>");
            echo($playerHand[$i][0]." -> ". $playerHand[$i][1]."<br>");
            $playerTotal[$i] += $playerHand[$i][1];
        }
        $playerTotal[2] = $playerTotal[0] + $playerTotal[1];
        if($playerTotal[0] == 11 || $playerTotal[1] == 11){
            $playerTotal[3] = $playerTotal[2] - 10;
            echo($playerTotal[2]."(".($playerTotal[3]).")");
        }
        else{
            echo($playerTotal[2]);
        }
        
        if($playerTotal[2] == 21){
            echo("BLACKJACK!!!");
        }
        echo("<hr>");


        for($i = 0; $i < 2; $i++){
            if($i == 1){
                echo("<img src='images/Back of Card.png' width='5%' height='5%'>");
            }else{
                echo("<img src='images/".$dealerHand[$i][0].".png' width='5%' height='5%'>");
            }            
            echo($dealerHand[$i][0]." -> ". $dealerHand[$i][1]."<br>");
            $dealerTotal[$i] += $dealerHand[$i][1];
        }
        $dealerTotal[2] = $dealerTotal[0] + $dealerTotal[1];
        
        if($dealerTotal[0] == 11 || $dealerTotal[1] == 11){
            $dealerTotal[3] = $dealerTotal[2] - 10;
            echo($dealerTotal[2]."(".($dealerTotal[3]).")");
        }
        else{
            echo($dealerTotal[2]);
        }
        if($dealerTotal[2] == 21){
            echo("BLACKJACK!!!");
        }
        echo("<hr>");
    }
    function draw_another($who){
        global $cardDeck, $playerHand, $playerTotal, $dealerHand, $dealerTotal;
        if($who == "Player"){
            echo("Hola");
        }
    }
    if(array_key_exists("button1", $_POST)){
        draw_another("Player");
    }else if(array_key_exists("button2", $_POST)){
        draw_another("Dealer");
    }
    
    ?>
    <form method="post" onsubmit="return false;">
        <input type="submit" name="button1"
                class="button" value="Player" />
        <input type="submit" name="button2"
                class="button" value="Dealer" />
    </form>
</main>

<script>
    const current = document.getElementById("blackjack");
    current.classList.add("active");
</script>
<?php
include "footer.php";
?>