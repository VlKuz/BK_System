<?php
include '../db.php';
$sql = 'SELECT * FROM `report` WHERE `report_id` = ?';
$query = $connect->prepare($sql);
$query->execute([1]);
$report = $query->fetch(PDO::FETCH_ASSOC);
echo '<h2>'.'Денежные средства: '.$report['balance'].'</h2>';
?>