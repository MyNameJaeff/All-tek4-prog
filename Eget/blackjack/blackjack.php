<?php
include "header.php";
$cardDeck = array(
    "Two of Clubs"=>2, "Three of Clubs"=>3, "Four of Clubs"=>4, "Five of Clubs"=>5, "Six of Clubs"=>6, "Seven of Clubs"=>7,
     "Eight of Clubs"=>8, "Nine of Clubs"=>9, "Ten of Clubs"=>10, "Jack of Clubs"=>10, "Queen of Clubs"=>10, "King of Clubs"=>10, "Ace of clubs"=>11,
     "Two of Spades"=>2, "Three of Spades"=>3, "Four of Spades"=>4, "Five of Spades"=>5, "Six of Spades"=>6, "Seven of Spades"=>7,
     "Eight of Spades"=>8, "Nine of Spades"=>9, "Ten of Spades"=>10, "Jack of Spades"=>10, "Queen of Spades"=>10, "King of Spades"=>10, "Ace of Spades"=>11,
     "Two of Diamonds"=>2, "Three of Diamonds"=>3, "Four of Diamonds"=>4, "Five of Diamonds"=>5, "Six of Diamonds"=>6, "Seven of Diamonds"=>7,
     "Eight of Diamonds"=>8, "Nine of Diamonds"=>9, "Ten of Diamonds"=>10, "Jack of Diamonds"=>10, "Queen of Diamonds"=>10, "King of Diamonds"=>10, "Ace of Diamonds"=>11,
     "Two of Hearts"=>2, "Three of Hearts"=>3, "Four of Hearts"=>4, "Five of Hearts"=>5, "Six of Hearts"=>6, "Seven of Hearts"=>7,
     "Eight of Hearts"=>8, "Nine of Hearts"=>9, "Ten of Hearts"=>10, "Jack of Hearts"=>10, "Queen of Hearts"=>10, "King of Hearts"=>10, "Ace of Hearts"=>11,
);
?>
<main>
    <h1>Weclome to blackjack</h1>
    <form method="POST">
        <label for="betAmount">How much to bet (>0):</label>
        <input type="numbers"  id="betAmount" name="betAmount" required>
        <input type="submit" value="Submit" name="submit">
    </form><br>
    <?php
    function shuffle_assoc($my_array)
	{
        $keys = array_keys($my_array);

        shuffle($keys);

        foreach($keys as $key) {
            $new[$key] = $my_array[$key];
        }

        $my_array = $new;

        return $my_array;
    }

    if(isset($_POST["submit"])){
        $betAmount = $_POST['betAmount'];
        if($betAmount <= 0){
            header("LOCATION: blackjack.php");
        }else{
            echo "You bet " . $betAmount . "<br>";
            $cardDeck = shuffle_assoc($cardDeck);
            foreach($cardDeck as $card => $card_value){
                echo("<img src='images/".$card.".png' width='5%' height='5%'>");
                echo($card." -> ". $card_value."<br>");
            }
        }
    }
    ?>
</main>

<script>
    const current = document.getElementById("blackjack");
    current.classList.add("active");
</script>
<?php
include "footer.php";
?>