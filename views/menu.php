<?php
session_start();
echo '<div id="container" class="container">
<div class="user">'.$_SESSION["user_name"].'</div>
<input class="menu_button" id="show_bk" type="button" value="Каталог книг">
<input class="menu_button" id="buy_book" type="button" value="Купить книги у поставщика">
<input class="menu_button" id="sell_book" type="button" value="Продать книги">
<input class="menu_button" id="create_a_report" type="button" value="Сформировать отчет">
<input class="menu_button" id="exit" type="button" value="Выход"></div>';
?>