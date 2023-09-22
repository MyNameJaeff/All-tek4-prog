<?php
$servername = "localhost";

$username = "root";

$password = "";

$dbname = "gamlr"; 

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "CREATE TABLE IF NOT EXISTS user (
    username VARCHAR(40) NOT NULL,
    email VARCHAR(50) NOT NULL PRIMARY KEY,
    passwrd VARCHAR(50) NOT NULL,
    balance INT(11) NOT NULL,
    profilepicture VARCHAR(50)
    )";
if (!mysqli_query($conn, $sql)) {
    die("Error creating table: " . mysqli_error($conn));
}

if($conn->connect_error) {
    die("Connection Failed" . $conn->connect_error);
}

$conn->close();
?>