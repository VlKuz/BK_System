<?php
include '../modules/header.php';
echo '<body>';
include "../modules/system_name.php";
?>
    <div class="form_auth_block">
        <form id="auth_from" class="form_auth_block_content">
            <p class="form_auth_block_head_text">Авторизация</p>
            <input id="login" type="login" name="login" placeholder="Введите логин" required><br>
            <input id="pass" type="password" name="auth_pass" placeholder="Введите пароль" required >
            <input class="form_auth_button" type="submit" name="form_auth_submit">Войти</input>
        </form>
        <div class="message"></div>
    </div>
<?php
include '../modules/footer.php';
?>
</body>
</html>