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
    echo "Успешная авторизация<br>";
    echo $user["last_name"]," ",$user["name"];
    
}else
    echo "Не верный логин или пароль";
?>