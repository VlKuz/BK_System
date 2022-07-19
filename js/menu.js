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
                    $('.supplier_books').remove();
                    $('#save_a_report').remove();
                    $('#report_container').remove();
                    $('.report').remove();
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
                    button_catalog_container_class.append(button_generator('catalog_button','change_title','','Изменить название'));
                    button_catalog_container_class.append(button_generator('catalog_button','change_author','','Изменить автора'));
                    button_catalog_container_class.append(button_generator('catalog_button','change_year','','Изменить год'));
                    button_catalog_container_class.append(button_generator('catalog_button','change_price','','Изменить цену'));
                    button_catalog_container_class.append(button_generator('catalog_button','change_quantity','','Изменить количество'));
                    button_catalog_container_class.append(button_generator('catalog_button','add_book','','Добавить кингу'));
                    button_catalog_container_class.append(button_generator('catalog_button','delete_book','','Удалить книгу'));
                    $(button_catalog_container_class).after('<div class = "books"></div>');
                    $('.books').html(data);
                }else
                    alert('error');
            }
        });
    });

    $(document).on('click','#change_title', function(){
        let id = prompt('Введите id книги:');
        let new_title = prompt('Введите новое название книги:');
        $.ajax({
            url: '../modules/change_title.php',
            method: 'POST',
            data: {book_id: id, new_title: new_title},
            success: function(data){
                if(data){
                    $.ajax({
                        url: '../modules/show_books.php',
                        method: 'POST',
                        data: 'books',
                        success: function(data){
                            if(data){
                                $('.books').html(data);
                            }else
                                alert('error');
                        }
                    });
                }else
                    alert('error');
            }
        });
    });

    $(document).on('click','#change_year', function(){
        let id = prompt('Введите id книги:');
        let new_year = prompt('Введите новый год:');
        $.ajax({
            url: '../modules/change_year.php',
            method: 'POST',
            data: {book_id: id, new_year: new_year},
            success: function(data){
                if(data){
                    $.ajax({
                        url: '../modules/show_books.php',
                        method: 'POST',
                        data: 'books',
                        success: function(data){
                            if(data){
                                $('.books').html(data);
                            }else
                                alert('error');
                        }
                    });
                }else
                    alert('error');
            }
        });
    });

    $(document).on('click','#change_price', function(){
        let id = prompt('Введите id книги:');
        let new_price = prompt('Введите новую цену:');
        $.ajax({
            url: '../modules/change_price.php',
            method: 'POST',
            data: {book_id: id, new_price: new_price},
            success: function(data){
                if(data){
                    $.ajax({
                        url: '../modules/show_books.php',
                        method: 'POST',
                        data: 'books',
                        success: function(data){
                            if(data){
                                $('.books').html(data);
                            }else
                                alert('error');
                        }
                    });
                }else
                    alert('error');
            }
        });
    });

    $(document).on('click','#buy_book', function(){
        $.ajax({
            url: '../modules/buy_books.php',
            method: 'POST',
            data: 'supplier_books',
            success: function(data){
                if(data){
                    $('#container').remove();
                    let return_button = button_generator('return_button','return_button',' ','Назад');
                    $('#block_up').after(return_button);
                    let button_catalog_container_class = document.createElement('div');
                    button_catalog_container_class.className = 'button_catalog_container';
                    return_button.after(button_catalog_container_class);
                    button_catalog_container_class.append(button_generator('catalog_button','','buy_new_book()','Купить книгу'));
                    $(button_catalog_container_class).after('<div class = "supplier_books"></div>');
                    $('.supplier_books').html(data);
                }else
                    alert('error');
            }
        });
    });

    $(document).on('click','#sell_book', function(){
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
                    button_catalog_container_class.append(button_generator('catalog_button','','sell_shop_book()','Продать книгу'));
                    $(button_catalog_container_class).after('<div class = "books"></div>');
                    $('.books').html(data);
                }else
                    alert('error');
            }
        });
    });

    $(document).on('click','#create_a_report', function(){
        $.ajax({
            url: '../modules/create_a_report.php',
            method: 'POST',
            data: 'create_a_report',
            success: function(data){
                if(data){
                    $('#container').remove();
                    let return_button = button_generator('return_button','return_button',' ','Назад');
                    $('#block_up').after(return_button);
                    let save_a_report = button_generator('save_a_report','save_a_report',' ','Сохранить отчет');
                    $(return_button).after(save_a_report);
                    $(save_a_report).after('<div class = "report"></div>');
                    $('.report').html(data);
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