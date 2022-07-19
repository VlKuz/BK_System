<?php
include '../db.php';
$book_id= trim($_POST["book_id"]);
$new_year= trim($_POST["new_year"]);
$sql = 'UPDATE `books` SET `year` = ? WHERE `book_id` = ?';
$query = $connect->prepare($sql);
$query->execute([$new_year,$book_id]);
echo 1;
?>