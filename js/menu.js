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
                    $('.balance').remove();
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
                    alert('Название изменено!');
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

    $(document).on('click','#change_author', function(){
        let id = prompt('Введите id книги:');
        let new_author = prompt('Введите новое ФИО автора:');
        $.ajax({
            url: '../modules/change_author.php',
            method: 'POST',
            data: {book_id: id, new_author: new_author},
            success: function(data){
                if(data){
                    alert('Автор изменен!');
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
                    alert('Год изменен!');
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
                    alert('Цена изменена!');
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

    $(document).on('click','#change_quantity', function(){
        let id = prompt('Введите id книги:');
        let new_quantity = prompt('Введите новое количество:');
        $.ajax({
            url: '../modules/change_quantity.php',
            method: 'POST',
            data: {book_id: id, new_quantity: new_quantity},
            success: function(data){
                if(data){
                    alert('Количество изменено!');
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

    $(document).on('click','#add_book', function(){
        let title = prompt('Введите название книги:');
        let author  = prompt('Введите автора книги:');
        let year  = prompt('Введите год издания книги:');
        let price  = prompt('Введите цену книги:');
        let quantity  = prompt('Введите количество книг:');
        $.ajax({
            url: '../modules/add_book.php',
            method: 'POST',
            data: {title: title, author: author, year: year, price: price, quantity: quantity},
            success: function(data){
                if(data){
                    alert('Книга добавлена!');
                    alert(data);
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

    $(document).on('click','#delete_book', function(){
        let id = prompt('Введите id книги:');
        $.ajax({
            url: '../modules/delete_book.php',
            method: 'POST',
            data: {book_id: id},
            success: function(data){
                if(data){
                    alert('Книга удалена!');
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
        $('#container').remove();
        let return_button = button_generator('return_button','return_button',' ','Назад');
        $('#block_up').after(return_button);
        $.ajax({
            url: '../modules/balance.php',
            method: 'POST',
            data: 'balance',
            success: function(data){
                if(data){
                    $('#return_button').after('<div class = "balance"></div>');
                    $('.balance').html(data);
                    $.ajax({
                        url: '../modules/buy_books.php',
                        method: 'POST',
                        data: 'supplier_books',
                        success: function(data){
                            if(data){
                                let button_catalog_container_class = document.createElement('div');
                                button_catalog_container_class.className = 'button_catalog_container';
                                $('.balance').after(button_catalog_container_class);
                                button_catalog_container_class.append(button_generator('catalog_button','buy_new_book','','Купить книгу'));
                                $(button_catalog_container_class).after('<div class = "supplier_books"></div>');
                                $('.supplier_books').html(data);
                            }else
                                alert('error');
                        }
                    });
                }else
                    alert('error');
            }
        });
    });

    $(document).on('click','#buy_new_book', function(){
        let id = prompt('Введите id книги:');
        if (id<0){
            alert('Вы ввели отрицательное число!');
            return 0;
        }
        let quantity = prompt('Введите количество книг:');
        if (id<0){
            alert('Вы ввели отрицательное число!');
            return 0;
        }
        $.ajax({
            url: '../modules/buy_new_book.php',
            method: 'POST',
            data: {supplier_book_id: id, quantity: quantity},
            success: function(data){
                if(data == 0)
                    alert('Недостаточно средств для покупки!');
                else if(data == 1)
                    alert('У поставщика нет столько книг!');
                else if(data == 2){
                    //console.log(data);
                    alert('Успешная покупка!');
                    $.ajax({
                        url: '../modules/balance.php',
                        method: 'POST',
                        data: 'balance',
                        success: function(data){
                            if(data){
                                $('.balance').html(data);
                            }
                        }
                    });
                    $.ajax({
                        url: '../modules/buy_books.php',
                        method: 'POST',
                        data: 'supplier_books',
                        success: function(data){
                            if(data){
                                $('.supplier_books').html(data);
                            }else
                                alert('error');
                        }
                    });
                }else
                    alert('error');
            }
        });
    });

    $(document).on('click','#sell_book', function(){
        $('#container').remove();
        let return_button = button_generator('return_button','return_button',' ','Назад');
        $('#block_up').after(return_button);
        $.ajax({
            url: '../modules/balance.php',
            method: 'POST',
            data: 'balance',
            success: function(data){
                if(data){
                    $('#return_button').after('<div class = "balance"></div>');
                    $('.balance').html(data);
                    $.ajax({
                        url: '../modules/show_books.php',
                        method: 'POST',
                        data: 'books',
                        success: function(data){
                            if(data){
                                let button_catalog_container_class = document.createElement('div');
                                button_catalog_container_class.className = 'button_catalog_container';
                                $('.balance').after(button_catalog_container_class);
                                button_catalog_container_class.append(button_generator('catalog_button','','sell_shop_book()','Продать книгу'));
                                $(button_catalog_container_class).after('<div class = "books"></div>');
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