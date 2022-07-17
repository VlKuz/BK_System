$(document).ready(function(){
    $("#form").on("submit", function(){
        let massage = $('.massage');
        $.ajax({
            url: '../modules/auth.php',
            method: 'post',
            data: $(this).serialize(),
            success: function(data){
                $('#message').html(data);
            }
        });
    });
});