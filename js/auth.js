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
                if(data==1)
                    alert('hi');
                else
                message.html('<br>Не верный логин или пароль!');
            }
        });
    });
});