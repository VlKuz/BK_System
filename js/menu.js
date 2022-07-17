function menu_generator(){
    $('.form_auth_block').remove();
    let block_up=$('.block_up');
    let container_class = document.createElement('div');
    container_class.setAttribute('id', 'container');
    container_class.className = 'container';
    block_up.after(container_class);
    container_class.append(button_generator('menu_button','show_bk','show_books()','Каталог книг'));
    container_class.append(button_generator('menu_button','buy_book','buy_books()','Купить книги у поставщика'));
    container_class.append(button_generator('menu_button','sell_book','sell_books()','Продать книги'));
    container_class.append(button_generator('menu_button','create_a_report','report_page()','Сформировать отчет'));
    container_class.append(button_generator('menu_button','exit','exit()','Выход'));
}