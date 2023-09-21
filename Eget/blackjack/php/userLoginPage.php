<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css" class="stylesheet">
    <title>Gambla time</title>
</head>

<body>
    <header>
        <ul>
            <div>
                <li><a href="../index.html" id="main">Main</a></li>
                <li><a href="../html/blackjack.html" id="blackjack">Blackjack</a></li>
                <li><a href="../html/poker.html" id="poker">Poker</a></li>
            </div>
            <li><a href="php/userLoginPage.php">User</a></li>
        </ul>
    </header>
    <main>
        <form method="post" onsubmit="">
            <label for="username">Username/Email</label>
            <input type="text" name="username" id="username"><br>
            <label for="password">Password</label>
            <input type="password" name="password" id="password"><br>
            <input type="submit" value="Submit" id="submit">
        </form>
    </main>
    <footer>
        Legal mumbo jumbo goes here
    </footer>
    <script src="./javascript/script.js"></script>
    <?php
    if(isset($_POST['submit'])){
        echo("Hello");
        echo("<script>alert('hello');");
    }
    ?>
</body>

</html>