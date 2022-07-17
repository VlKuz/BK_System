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
    let top_part=$('.form_auth_block');
    let container_class = document.createElement('div');
    container_class.setAttribute('id', 'container');
    container_class.className = 'container';
    top_part.after(container_class);
    container_class.append(button_generator('menu_button','show_bk','show_books()','Каталог книг'));
    container_class.append(button_generator('menu_button','buy_book','buy_books()','Купить книги у поставщика'));
    container_class.append(button_generator('menu_button','sell_book','sell_books()','Продать книги'));
    container_class.append(button_generator('menu_button','create_a_report','report_page()','Сформировать отчет'));
    container_class.append(button_generator('menu_button','exit','exit()','Выход'));
    let footer = footer_generator();
    container_class.after(footer);
}