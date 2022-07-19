<?php
include '../db.php';
$book_id= trim($_POST["book_id"]);
$new_author= trim($_POST["new_author"]);
$sql = 'UPDATE `books` SET `author` = ? WHERE `book_id` = ?';
$query = $connect->prepare($sql);
$query->execute([$new_author,$book_id]);
echo 1;
?>