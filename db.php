<?php
$servername = "localhost";
$username = "admin";
$password = "";

try {
    $connect = new PDO("mysql:host=$servername;dbname=BK_system", $username, $password);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Успешное подключение к БД";
} catch(PDOException $e){
    echo "Ошибка при подключении к БД: ". $e->getMessage();
}
?>