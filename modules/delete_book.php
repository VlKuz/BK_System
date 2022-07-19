<?php
include '../db.php';
$book_id= trim($_POST["book_id"]);
$sql = 'DELETE FROM `books` WHERE `book_id` = ?';
$query = $connect->prepare($sql);
$query->execute([$book_id]);
echo 1;
?>