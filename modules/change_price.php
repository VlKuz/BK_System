<?php
include '../db.php';
$book_id= trim($_POST["book_id"]);
$new_price= trim($_POST["new_price"]);
$sql = 'UPDATE `books` SET `price` = ? WHERE `book_id` = ?';
$query = $connect->prepare($sql);
$query->execute([$new_price,$book_id]);
echo 1;
?>