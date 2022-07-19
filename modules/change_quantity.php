<?php
include '../db.php';
$book_id= trim($_POST["book_id"]);
$new_quantity= trim($_POST["new_quantity"]);
$sql = 'UPDATE `books` SET `quantity` = ? WHERE `book_id` = ?';
$query = $connect->prepare($sql);
$query->execute([$new_quantity,$book_id]);
echo 1;
?>