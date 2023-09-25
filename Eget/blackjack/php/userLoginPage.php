<!DOCTYPE html>
<html lang="en">

<?php
include "databaseConfg.php";
?>
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
        <form method="post" enctype="multipart/form-data" class="registerform">
            <div class="registusernames">
                <label for="username">Username</label><br>
                <input type="text" class="username" name="username" required>
            </div>
            <div class="registeremail">
                <label for="email">Email</label><br>
                <input type="email" class="email" name="email" required>
            </div>
            <div class="registerpassword">
                <label for="password">Password</label><br>
                <input type="password" class="password" name="password" required><br>
                <label for="repeatpassword">Repeat the password</label><br>
                <input type="password" class="password" name="repeatpassword" required>
            </div>
            <div class="registerprofilepic">
                <label for="profilepic">Profile picture</label><br>
                <input type="file" class="profilepic" name="profilepic" accept="image/png, image/jpeg">
            </div><br>
            <input type="submit" value="Register" name="register" class="registersubmit">
        </form>
    </main>
    <footer>
        Legal mumbo jumbo goes here
    </footer>
    <script src="../javascript/script.js"></script>
    
     <?php
    if(isset($_POST['register'])){
        $username = $_POST['username'];
        $username = $_POST['email'];
        $password = $_POST['password'];
        $repeatpassword = $_POST['repeatpassword'];
        $profilepic = $_FILES['profilepic']['name'];
        if(empty($profilepic)){
            $profilepic = "backupimage.png";
        }
        $conn = new mysqli($servername, "root", "", $dbname);
        
        $sql = "SELECT * FROM user WHERE email='$email'";
        $results = mysqli_query($conn, $sql);
        if(empty(mysqli_num_rows($results))){
            if($password == $repeatpassword){
                $password = password_hash($password, PASSWORD_DEFAULT);
                echo("<script>alert($username, $email, $password, $profilepic);</script>");
                $sql = "INSERT INTO `user` (`username`, `email`, `passwrd`, `balance`, `profilepicture`) VALUES ('$username', '$email', '$password', '1000', NULL);";
                //$result = $conn->query($sql);
                echo("<script>alert('$password');</script>");
                $result = TRUE;
                if($result){
                    echo("New record created succesfully");
                    $temp_name = $_FILES['profilepic']['tmp_name'];
                    $location = '../uploads/';
                    move_uploaded_file($temp_name, $location.$profilepic);
                    $_SESSION["user"] = $username;
                    //echo "<script>window.location.href='../index.php';</script>";
                }else{
                    echo("Error:".$sql."<br>".$conn->error);
                    echo("<script>alert('FUCK3');</script>");
                }
            }
            else{
                echo("Passwords do not match");
            }
        }
        else{
            echo("email is already registered");
        }
        $conn->close();
    }
    ?>
</body>

</html>