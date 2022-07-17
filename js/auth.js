$(document).ready(function(){
    $("#auth_from").submit(function (e){
        e.preventDefault();
        let message = $('.message');
        let form_data = $(this).serialize();
        $.ajax({
            url: '../modules/auth.php',
            method: 'POST',
            data: form_data,
            success: function(data){
                if(data==1){
                    message.html('<br>Добро пожаловать!');
                    menu_generator();
                }
                else
                    message.html('<br>Не верный логин или пароль!');
            }
        });
    });
});