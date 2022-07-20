<?php
include '../db.php';

$sql = 'SELECT * FROM `report` WHERE `report_id` = ?';
$query = $connect->prepare($sql);
$query->execute([1]);
$report = $query->fetch(PDO::FETCH_ASSOC);
$report['balance'];

$book_id = trim($_POST['book_id']);
$quantity = trim($_POST['quantity']);

$sql = 'SELECT * FROM `books` WHERE `book_id` = ?';
$query = $connect->prepare($sql);
$query->execute([$book_id]);
$shop_book = $query->fetch(PDO::FETCH_ASSOC);
if($shop_book){
    if($shop_book['quantity']<$quantity)
        echo 0;
    else{
        $sql = 'UPDATE `books` SET `quantity` = ? WHERE `book_id` = ?';
        $query = $connect->prepare($sql);
        $query->execute([$shop_book['quantity']-$quantity, $shop_book['book_id']]);

        $total_balance=$report['balance']+($quantity*$shop_book['price']);
        $sql = 'UPDATE `report` SET `balance` = ? WHERE `report_id` = ?';
        $query = $connect->prepare($sql);
        $query->execute([$total_balance, 1]);

        $sql = 'UPDATE `report` SET `sold_books` = ? WHERE `report_id` = ?';
        $query = $connect->prepare($sql);
        $query->execute([$report['sold_books']+$quantity, 1]);

        $sold_amount = $quantity*$shop_book['price'];
        $sql = 'UPDATE `report` SET `sold_amount` = ? WHERE `report_id` = ?';
        $query = $connect->prepare($sql);
        $query->execute([$report['sold_amount']+$sold_amount, 1]);
        echo 1;
    }
}
?>