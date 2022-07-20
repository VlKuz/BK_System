<?php
include '../db.php';
$sql = 'SELECT * FROM `report` WHERE `report_id` = ?';
$query = $connect->prepare($sql);
$query->execute([1]);
$report = $query->fetch(PDO::FETCH_ASSOC);

$income = $report['sold_amount'] - $report['purchase_amount'];
$sql = 'UPDATE `report` SET `income` = ? WHERE `report_id` = ?';
$query = $connect->prepare($sql);
$query->execute([$income, 1]);

echo '<br><div class="report_container" id="report_container">
<div class="report_item"><p>Денежные средства: '.$report['balance'].'</p></div>
<div class="report_item"><p>Куплено книг: '.$report['purchased_books'].'</p></div>
<div class="report_item"><p>Продано книг: '.$report['sold_books'].'</p></div>
<div class="report_item"><p>Куплено книг на сумму: '.$report['purchase_amount'].'</p></div>
<div class="report_item"><p>Продано книг на сумму: '.$report['sold_amount'].'</p></div>
<div class="report_item"><p>Прибыль: '.$income.'</p></div>
</div>';