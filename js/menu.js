function button_generator(button_class,button_id, button_onclick, button_value){
    let button = document.createElement('input');
    button.className = button_class;
    button.setAttribute('id', button_id);
    button.setAttribute('type', 'button');
    button.setAttribute('onclick', button_onclick);
    button.setAttribute('value', button_value);
    return button;
}
function menu_generator(){
    $('.form_auth_block').remove();
    let container_class = $('.container');
    container_class.append(button_generator('menu_button','show_bk',' ','Каталог книг'));
    container_class.append(button_generator('menu_button','buy_book',' ','Купить книги у поставщика'));
    container_class.append(button_generator('menu_button','sell_book',' ','Продать книги'));
    container_class.append(button_generator('menu_button','create_a_report',' ','Сформировать отчет'));
    container_class.append(button_generator('menu_button','exit',' ','Выход'));
}

$(document).ready(function(){

    $(document).on('click','#show_bk', function(){
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