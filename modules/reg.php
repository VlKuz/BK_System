<?php
require_once "../db.php";
$name="Иван";
$last_name = "Смирнов";
$login = "user1";
$password = "12345";
$email = "user1@mail.ru";

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