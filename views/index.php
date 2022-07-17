<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Авторизация</title>
</head>
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
      
  <footer id="footer">
    <div class="year">2022</div>
  </footer>
</body>
</html>