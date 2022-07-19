<?php
session_start();
include 'header.php';
echo '<body>';
if(isset($_SESSION["user_name"])){
    include 'system_name.php';
    include 'menu.php';
}else{
    include 'system_name.php';
    echo '<div class="form_auth_block">
    <form id="auth_form" class="form_auth_block_content">
        <p class="form_auth_block_head_text">Авторизация</p>
        <input id="login" type="login" name="login" placeholder="Введите логин" required><br>
        <input id="pass" type="password" name="password" placeholder="Введите пароль" required >
        <button class="form_auth_button">Войти</button>
    </form>
    <div class="message"></div>
</div>';
} 
include 'footer.php';
?>
</body>
</html>