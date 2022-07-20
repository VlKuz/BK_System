<?php
include '../db.php';
$sql = 'SELECT * FROM `supplier_books`';
$result = $connect->query($sql);
echo '<br>';
echo '<table>';
echo '<tr>';
echo '<th>id</th>';
echo '<th>Название</th>';
echo '<th>Автор</th>';
echo '<th>Год</th>';
echo '<th>Цена</th>';
echo '<th>Количество</th>';
while($row = $result->fetch(PDO::FETCH_ASSOC)){
    echo '<tr>';
    echo'<td>'.$row['supplier_book_id'].'</td>';
    echo '<td>'.$row['title'].'</td>';
    echo'<td>'.$row['author'].'</td>';
    echo'<td>'.$row['year'].'</td>';
    echo'<td>'.$row['price'].'</td>';
    echo'<td>'.$row['quantity'].'</td>';
    echo '</tr>';
}
?>