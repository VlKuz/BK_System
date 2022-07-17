<?php
include "../modules/header.php";
?>
<body>
  <div id="block_up" class="block_up">
    <a class="system_name" href="index.html">BK control system</a>
  </div>
    <div class="form_auth_block">
        <div class="form_auth_block_content">
          <p class="form_auth_block_head_text">Авторизация</p>
            <input id="login" type="login" name="login" placeholder="Введите логин" required><br>
            <input id="pass" type="password" name="auth_pass" placeholder="Введите пароль" required >
            <button class="form_auth_button" type="button" name="form_auth_submit" onclick="user_auth()">Войти</button>
        </div>
      </div>
  <?php
  include "../modules/footer.php";
  ?>
</body>
</html>