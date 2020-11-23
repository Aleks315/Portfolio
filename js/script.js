$(document).ready(function() {
  //Функции отключения и включения скролла
  function scrollOff() {
    $('html,body').css('overflow', 'hidden');
  }

  function scrollOn() {
    $('html,body').css('overflow', 'visible');
  }


  //БУРГЕР-МЕНЮ:
  //Список переменных
  const btnBurger = $('.header__menu_btn-burger'),
    menu = $('.header__menu'),
    btnCloseMenu = $('.header__menu_btn-close'),
    menuItem = $('.header__menu_item');

  //Открыть всплывающее меню
  btnBurger.on('click', function() {
    menu.addClass('menu-open');
    btnCloseMenu.addClass('menu-open');
    btnBurger.addClass('hidden');
    scrollOff();
  });

  //Закрыть всплывающее меню
  btnCloseMenu.on('click', function() {
    menu.removeClass('menu-open');
    btnBurger.removeClass('hidden');
    scrollOn();
  });
  //Закрыть всп.меню при клике на пункт меню
  menuItem.on('click', function() {
    menu.removeClass('menu-open');
    btnBurger.removeClass('hidden');
    scrollOn();
  });
  //Плавный скролл до блока по клику на пункт меню
  $(document).on("click", ".scroll-link", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 500);
  });
});
