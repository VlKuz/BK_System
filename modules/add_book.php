<?php
include '../db.php';
$title= trim($_POST["title"]);
$author= trim($_POST["author"]);
$year= trim($_POST["year"]);
$price= trim($_POST["price"]);
$quantity= trim($_POST["quantity"]);
$sql = "INSERT INTO `books` (`title`, `author`,`year`, `price`, `quantity`) VALUES (?,?,?,?,?)";
$query = $connect->prepare($sql);
$query->execute([$title, $author,  $year, $price, $quantity]);
echo 1;
?>