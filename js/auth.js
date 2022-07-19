$(document).ready(function(){
    $("#auth_form").submit(function (e){
        e.preventDefault();
        let message = $('.message');
        let form_data = $(this).serialize();
        $.ajax({
            url: '../modules/auth.php',
            method: 'POST',
            data: form_data,
            success: function(data){
                if(data==1){
                    //message.html('<br>Добро пожаловать!');
                    window.location.reload();
                }
                else
                    message.html('<br>Не верный логин или пароль!');
            }
        });
    });
});