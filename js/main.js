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

  //СЛАЙДЕР ПРОЕКТЫ
  var mySwiper = new Swiper ('.projects__swiper-container', {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    }
  });
  var next = $('.projects__swiper-button-next');
  var prev = $('.projects__swiper-button-prev');
  var bullets = $('.projects__swiper-pagination');

  next.css('left', prev.width() + 27 + bullets.width() + 27 )
  bullets.css('left', prev.width() + 27);
  // КОНЕЦ СЛАЙДЕРА

  //СЛАЙДЕР 6 ШАГОВ
  var SwiperStep = new Swiper ('.sixsteps__swiper-container', {
    spaceBetween: 30,
    pagination: {
      el: '.sixsteps__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.sixsteps__swiper-button-next',
      prevEl: '.sixsteps__swiper-button-prev',
    }
  });

  // отсупы между кнопка свайпера
  var nextStep = $('.sixsteps__swiper-button-next'); 
  var prevStep = $('.sixsteps__swiper-button-prev');
  var bulletsStep = $('.sixsteps__swiper-pagination');
  //Кнопки шагов в меню
  var stepAll = document.querySelectorAll('.step');
  // Отступы между кнопками навигации
  nextStep.css('left', prevStep.width() + 27 + bulletsStep.width() + 27 );
  bulletsStep.css('left', prevStep.width() + 27);
  // конец отсупы между кнопка свайпера

  // Функция дизактивации кнопок
  function stepDesable(){
    stepAll.forEach( function(elem){
      elem.classList.remove('step--active');
    });
  };

  // Вешаем обработчик события на изменения слайдера
  SwiperStep[0].on('slideChange', function () {
    stepDesable();
    stepAll[this.activeIndex].classList.add('step--active');
  });

  //Вешаем обработчик события на нажитие кнопок меню
  stepAll.forEach( function(elem, index){
    elem.addEventListener('click', function(event){
      var target =  event.target;
      if(target.classList.contains('step') || target.parentNode.classList.contains('step')){
        SwiperStep.forEach(function(elem){
          elem.slideTo(index);
        });
      }
    });
  });
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
    
    
    //ВАЛИДАЦИЯ ФОРМЫ
    var formsClass = [
      ".modal__form",
      ".measurement__form",
      ".control__form",
      ".footer__form"
    ];

    for (var i = 0; i<formsClass.length; i++) {
      formValidale(formsClass[i])
    }

    function formValidale(form) {
      $(form).validate({
        errorClass: "invalid",
        rules: {
          UserName: {
            required: true,
            minlength: 2,
            maxlength: 15
          }, //поле должно быть обязательное
          UserPhone: {
            required: true,
            minlength: 17
          }, 
          UserEmail: {
            required: true,
            email: true
          },
          UserQuestion: "required",
          PolicyCheckbox: "required"
        },
        // сообщения об шибке
        messages: {
          UserName: {
            required: "Заполните поле",
            minlength: "Имя не короче двух символов",
            maxlength: "Имя не больше 15 символов"
          }, 
          UserPhone: {
            required: "Заполните поле",
            minlength: "Введите полный номер"
          },
          UserEmail: {
            required: "Заполните поле",
            email: "Введите в формате: name@domain.com"
          },
          UserQuestion: "Заполните поле",
          PolicyCheckbox: "Ознакомьтесь с обработкой данных"
        }
      });
    };  
   


      // submitHandler: function(form) {
      //   $.ajax({
      //     type: "POST",
      //     url: "./send.php",
      //     data: $(form).serialize(), //преобразуем данные из формы в одну строку
      //     success: function (response) {
      //       alert('форма отправлена');
      //       $(form)[0].reset();
      //       modal.removeClass('modal--visible');
      //     }
      //   });
      // }
    // });

    

    //МАСКА ДЛЯ НОМЕРА ТЕЛЕФОНА 
    $('[type=tel]').mask('+7(000) 000-00-00');

    //ЯНДЕКС КАРТЫ 
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [47.244729, 39.723187],
              zoom: 9
          }, {
              //autoFitToViewport: 'always',
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Наш офис',
              balloonContent: 'Вход со двора'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/mapmarker.png',
              // Размеры метки.
              iconImageSize: [32, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          });
          //Сообщаем карте, что ей следует привести свои размеры к размерам контейнера.
          myMap.container.fitToViewport();
          myMap.behaviors.disable('scrollZoom'); //отключить зум мышкой
      
      myMap.geoObjects
          .add(myPlacemark);
  });

 //ПЛАВНЫЙ СКРОЛЛ К ЯКОРЮ
  const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
//КОНЕЦ JS
});


 
