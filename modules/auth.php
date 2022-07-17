<?php
require_once "../db.php";

$login = trim($_POST["login"]);
$password = trim($_POST["password"]);
$sql = "SELECT * FROM `users` WHERE `login` = ?";
$query = $connect->prepare($sql);
$query->execute([$login]);
$user = $query->fetch(PDO::FETCH_ASSOC);

if($user && password_verify($password, $user["password"])){
    session_start();
    echo 1;
    
}else
    echo 2;
?>