<?php
include '../modules/header.php';
echo '<body>';
include "../modules/system_name.php";
?>
    <div class="form_auth_block">
        <div class="form_auth_block_content">
          <p class="form_auth_block_head_text">Авторизация</p>
            <input id="login" type="login" name="login" placeholder="Введите логин" required><br>
            <input id="pass" type="password" name="auth_pass" placeholder="Введите пароль" required >
            <button class="form_auth_button" name="form_auth_submit" onclick="user_auth()">Войти</button>
        </div>
        <div class="message"></div>
    </div>
<?php
include '../modules/footer.php';
?>
</body>
</html>