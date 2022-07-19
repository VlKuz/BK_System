<?php
include '../db.php';
$book_id= trim($_POST["book_id"]);
$new_title= trim($_POST["new_title"]);
$sql = 'UPDATE `books` SET `title` = ? WHERE `book_id` = ?';
$query = $connect->prepare($sql);
$query->execute([$new_title,$book_id]);
echo 1;
?>