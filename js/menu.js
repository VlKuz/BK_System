function button_generator(button_class,button_id, button_onclick, button_value){
    let button = document.createElement('input');
    button.className = button_class;
    button.setAttribute('id', button_id);
    button.setAttribute('type', 'button');
    button.setAttribute('onclick', button_onclick);
    button.setAttribute('value', button_value);
    return button;
}

$(document).ready(function(){
    $(document).on('click', '#return_button', function(){
        $.ajax({
            url: '../views/menu.php',
            method: 'POST',
            data: 'menu',
            success: function(data){
                if(data){
                    $('.return_button').remove();
                    $('.button_catalog_container').remove();
                    $('.books').remove();
                    $('#block_up').after(data);
                }
                else
                    alert('error');
            }
        });
    });

    $(document).on('click','#show_bk', function(){
        $.ajax({
            url: '../modules/show_books.php',
            method: 'POST',
            data: 'books',
            success: function(data){
                if(data){
                    $('#container').remove();
                    let return_button = button_generator('return_button','return_button',' ','Назад');
                    $('#block_up').after(return_button);
                    let button_catalog_container_class = document.createElement('div');
                    button_catalog_container_class.className = 'button_catalog_container';
                    return_button.after(button_catalog_container_class);
                    button_catalog_container_class.append(button_generator('catalog_button','','change_title()','Изменить название'));
                    button_catalog_container_class.append(button_generator('catalog_button','','change_author()','Изменить автора'));
                    button_catalog_container_class.append(button_generator('catalog_button','','change_year()','Изменить год'));
                    button_catalog_container_class.append(button_generator('catalog_button','','change_price()','Изменить цену'));
                    button_catalog_container_class.append(button_generator('catalog_button','','change_quantity()','Изменить количество'));
                    $(button_catalog_container_class).after('<div class = "books"></div>');
                    $('.books').html(data);
                }else
                    alert('error');
            }
        });
    });

    $(document).on('click','#exit', function(){
        $.ajax({
            url: '../modules/exit.php',
            method: 'POST',
            data: 'exit_data',
            success: function(data){
                if(data==1)
                    window.location.reload();
                else
                    alert('error');
            }
        });
    });
    
});