$(function () {

  
  $(function(){
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 5;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    
    if(month < 10)
    month = '0' + month.toString();
    if(day < 10)
    day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day;
    
    $('.form__input--date').attr('max', maxDate);
  });
  
  $('.slider__list').slick ({
    dots: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  infinite: false,
  initialSlide: 1,
  prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23px" height="46px" viewBox="0 0 23 46" version="1.1"><g id="surface1"><path fill="#4442BA" d="M 0.84375 20.96875 C -0.277344 22.09375 -0.277344 23.917969 0.84375 25.039062 L 15.21875 39.414062 C 16.34375 40.539062 18.167969 40.539062 19.289062 39.414062 C 20.414062 38.292969 20.414062 36.46875 19.289062 35.34375 L 6.945312 23 L 19.28125 10.65625 C 20.402344 9.53125 20.402344 7.707031 19.28125 6.585938 C 18.15625 5.460938 16.332031 5.460938 15.210938 6.585938 L 0.835938 20.960938 Z M 0.84375 20.96875 "></g></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23px" height="46px" viewBox="0 0 23 46" version="1.1"><g id="surface1"><path fill="#4442BA" d="M 22.15625 20.96875 C 23.277344 22.09375 23.277344 23.917969 22.15625 25.039062 L 7.78125 39.414062 C 6.65625 40.539062 4.832031 40.539062 3.710938 39.414062 C 2.585938 38.292969 2.585938 36.46875 3.710938 35.34375 L 16.054688 23 L 3.71875 10.65625 C 2.597656 9.53125 2.597656 7.707031 3.71875 6.585938 C 4.84375 5.460938 6.667969 5.460938 7.789062 6.585938 L 22.164062 20.960938 Z M 22.15625 20.96875 "/></g></svg></button>',
  responsive: [
    {
      breakpoint : 1200,
      settings: {
        centerMode: false,
        variableWidth: false,
      }
    }
  ]  
});


let animArr = [$('.header__title'), $('.header__link'), $('.benefits__title'), $('.benefits__subtitle'), $('.benefits__img'), $('.benefits__description'), $('.form__item'), $('.form__btn')];

  for (let i = 0; i < animArr.length; i++) {
    is_fully_shown(animArr[i]);
  }
  
  function is_fully_shown(target) {
    var wt = $(window).scrollTop(); 
    var wh = $(window).height();    
    var eh = $(target).height();  
    var et = $(target).offset().top;
    
    if (wt > 300) {
      $('.benefits__aside-img').css({top: - (wt - 300)});
    } else {
    $('.benefits__aside-img').css({top: 0});
  }
    
    
    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
      console.log(wt);
      target.addClass('active');
      return true;
    } 
  }

  $(window).scroll(function watchingFunc(){
    for (let i = 0; i < animArr.length; i++) {
      is_fully_shown(animArr[i]);
    }
  });



  new Typewriter('.header__typing', {
  strings: ['Собрали только лучшее из всей индустрии!', 'Лучшая площадка для игры в боулинг!', 'Отполированные до блеска дорожки!'],
  autoStart: true,
  delay: 90,
  loop: true,
});


$(".header__link").on("click", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();

  //забираем идентификатор бока с атрибута href
  var id  = $(this).attr('href'),
  
  //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});


})