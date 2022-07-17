<?php
include '../modules/header.php';
echo '<body>';
include "../modules/system_name.php";
?>
    <div class="form_auth_block">
        <form id="auth_from" class="form_auth_block_content">
            <p class="form_auth_block_head_text">Авторизация</p>
            <input id="login" type="login" name="login" placeholder="Введите логин" required><br>
            <input id="pass" type="password" name="password" placeholder="Введите пароль" required >
            <button class="form_auth_button" name="form_auth_submit">Войти</button>
        </form>
        <div class="message"></div>
    </div>
<?php
include '../modules/footer.php';
?>
</body>
</html>