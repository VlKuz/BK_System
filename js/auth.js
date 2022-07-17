$(document).ready(function(){
    $(".form_auth_button").on("submit", function(){
        let massage = $('.massage');
        $.ajax({
            url: '../modules/auth.php',
            method: 'POST',
            data: $(this).serialize(),
            success: function(data){
                massage.html(data);
            }
        });
    });
});