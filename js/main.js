/*
document.addEventListener("DOMContentLoaded", (event) =>{ 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
 // Функция события нажатия кнопки
  const pressESC = (event) => {
    if(event.keyCode === 27){ // Если код кнопки 27(ESC) закрываем модальную форму
      document.removeEventListener('keyup', pressESC);
      modal.classList.remove('modal--visible');
    }
  };
 // Функция открытия и закрытия модального окна 
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
    // если modal Имеет класс modal--visible добавляем событие keyup
    if(modal.classList.contains('modal--visible')){
      document.addEventListener('keyup', pressESC);
    }
    else{ // иначе удаляем событие
      document.removeEventListener('keyup', pressESC);
    }
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
// закрытие модального окна при нажатии вне формы
  modal.addEventListener('click', (event)=>{
    const target = event.target;
    if(target.classList.contains('modal')){
      switchModal();
    }
  });
  
});

*/

$(document).ready(function () {
  //МОДАЛЬНОЕ ОКНО
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
     
  var pressESC = function (event) {
    if(event.keyCode === 27){ // Если код кнопки 27(ESC) закрываем модальную форму
      $(document).unbind('keyup', pressESC);
      modal.removeClass('modal--visible');
    }
  }
  
  var switchModal = function (){
    modal.toggleClass('modal--visible');
    // если modal Имеет класс modal--visible добавляем событие keyup
    if(modal.hasClass('modal--visible')){
      $(document).on('keyup', pressESC);
    }
    else{ // иначе удаляем событие
      $(document).unbind('keyup', pressESC);
    }
  };
  
  modalBtn.on('click', switchModal);  

  closeBtn.on('click', switchModal);

  modal.on('click', function(event){
    var target = event.target;
    if(target.classList.contains('modal')){
      modal.removeClass('modal--visible'); 
    }
  });

  //СЛАЙДЕР
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 27 + bullets.width() + 27 )
  bullets.css('left', prev.width() + 27);
  // КОНЕЦ СЛАЙДЕРА

// СТРЕЛКА НАВЕРХ
    $(window).scroll(function(){
      if(window.matchMedia('(min-width: 992px)').matches){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
      }else {
        $('.scrollup').fadeOut();
      };
    });
        
    $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    }); 
    // КОНЕЦ СТРЕЛКИ НАВЕРХ
    
    //АКТИВАЦИЯ СКРИПТА ДЛЯ АНИМАЦИИ
    new WOW().init();         

});


 
