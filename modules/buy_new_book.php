<?php
include '../db.php';

$sql = 'SELECT * FROM `report` WHERE `report_id` = ?';
$query = $connect->prepare($sql);
$query->execute([1]);
$report = $query->fetch(PDO::FETCH_ASSOC);
$report['balance'];

$supplier_book_id = trim($_POST['supplier_book_id']);
$quantity = trim($_POST['quantity']);

$sql = 'SELECT * FROM `supplier_books` WHERE `supplier_book_id` = ?';
$query = $connect->prepare($sql);
$query->execute([$supplier_book_id]);
$supplier_book = $query->fetch(PDO::FETCH_ASSOC);

if(($quantity*$supplier_book['price'])>$report['balance']){
    echo 0;
    return 0;
}

if(($supplier_book['quantity']-$quantity)<0){
    echo 1;
    return 0;
}

$sql = 'SELECT * FROM `books` WHERE `title` = ? AND `author` = ?' ;
$query = $connect->prepare($sql);
$query->execute([$supplier_book['title'], $supplier_book['author']]);
$shop_book = $query->fetch(PDO::FETCH_ASSOC);

if($shop_book){
    $sql = 'UPDATE `books` SET `quantity` = ? WHERE `book_id` = ?';
    $query = $connect->prepare($sql);
    $query->execute([$shop_book['quantity']+$quantity, $shop_book['book_id']]);

    $sql = 'UPDATE `supplier_books` SET `quantity` = ? WHERE `supplier_book_id` = ?';
    $query = $connect->prepare($sql);
    $query->execute([$supplier_book['quantity']-$quantity, $supplier_book['supplier_book_id']]);

    $total_balance=$report['balance']-($quantity*$supplier_book['price']);
    $sql = 'UPDATE `report` SET `balance` = ? WHERE `report_id` = ?';
    $query = $connect->prepare($sql);
    $query->execute([$total_balance, 1]);
    echo 2;
}else{
    $sql = "INSERT INTO `books` (`title`, `author`,`year`, `price`, `quantity`) VALUES (?,?,?,?,?)";
    $query = $connect->prepare($sql);
    $query->execute([$supplier_book['title'], $supplier_book['author'], $supplier_book['year'], $supplier_book['price'], $quantity]);

    $sql = 'UPDATE `supplier_books` SET `quantity` = ? WHERE `supplier_book_id` = ?';
    $query = $connect->prepare($sql);
    $query->execute([$supplier_book['quantity']-$quantity, $supplier_book['supplier_book_id']]);

    $total_balance=$report['balance']-($quantity*$supplier_book['price']);
    $sql = 'UPDATE `report` SET `balance` = ? WHERE `report_id` = ?';
    $query = $connect->prepare($sql);
    $query->execute([$total_balance, 1]);
    echo 2;
}
?>