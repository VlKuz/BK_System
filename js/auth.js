function user_auth(){
    let user_login = document.getElementById('login');

    let user_pass = document.getElementById('pass');

    if (user_login.value==''||user_pass.value=='')
        alert('Одно из полей не заполнено!');
    else if (user_login.value=='admin'&&user_pass.value==123){
        alert('Добро пожаловать!');
        menu_generator();
    }
    else
        alert('Неверный логин или пароль!');
}