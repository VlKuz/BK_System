<?php
require_once "../db.php";
$name="Влад";
$last_name = "Кузнецов";
$login = "admin";
$password = "123";
$email = "admin@mail.ru";

$sql_search = "SELECT * FROM `users` WHERE `login` = ?";
$query = $connect->prepare($sql_search);
$query->execute([$login]);
$user = $query->fetch(PDO::FETCH_ASSOC);
if($user)
    echo "Пользователь с таким логином уже существует!";
else{
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO `users` (`name`, `last_name`,`login`, `password`, `email`) VALUES (?,?,?,?,?)";
    $query = $connect->prepare($sql);
    if($query->execute([$name, $last_name,  $login, $hash, $email]))
        echo "Регистрация прошла успешно!";
    else
        echo "Ошибка при регистрации!";
}
?>