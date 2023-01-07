document.querySelectorAll(".header__dropdown-simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 25,
});
})

// шапка подменю декстоп

document.querySelectorAll(".header__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header__dropdown");

    document.querySelectorAll(".header__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("header__btn_active");
      }
    });

    document.querySelectorAll(".header__dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("header__dropdown_active");
      }
    })
    dropdown.classList.toggle("header__dropdown_active");
    btn.classList.toggle("header__btn_active");
    let contains = btn.classList.contains('header__btn_active');
      if (contains == true) {
        btn.blur()
      };
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__list_bottom")) {
    document.querySelectorAll(".header__dropdown").forEach(el => {
        el.classList.remove("header__dropdown_active");
    })
     document.querySelectorAll(".header__btn").forEach(el => {
        el.classList.remove("header__btn_active");
    });
  }
});

// бургер-меню

let btn = document.querySelector('.header__burger-btn_def');
let menu = document.querySelector('.header__nav_top');
let exit = document.querySelector('.header__burger-btn_exit');
let item = document.querySelectorAll('.header__item_top');
let logo = document.querySelector('.header__logo');
let searchBtn = document.querySelector('.header__search-btn');

btn.addEventListener('click',
  function(){
    menu.classList.add('header__nav_top-active');
    exit.classList.add('header__burger-btn_exit-active');
    btn.classList.remove('header__burger-btn_def');
    logo.classList.add('header__logo_none');
    searchBtn.classList.add('header__search-btn_none');
    document.body.classList.add('stop-scroll');
  });

exit.addEventListener('click',
  function(){
    menu.classList.remove('header__nav_top-active');
    exit.classList.remove('header__burger-btn_exit-active');
    btn.classList.add('header__burger-btn_def');
    logo.classList.remove('header__logo_none');
    searchBtn.classList.remove('header__search-btn_none')
    document.body.classList.remove('stop-scroll');
  });

item.forEach(function(el) {
  el.addEventListener('click',
  function (){
    menu.classList.toggle('header__nav_top-active');
    exit.classList.toggle('header__burger-btn_exit-active');
    btn.classList.add('header__burger-btn_def');
    logo.classList.remove('header__logo_none');
    searchBtn.classList.remove('header__search-btn_none')
    document.body.classList.remove('stop-scroll');
  })
});

// якоря скролл

$(function(){

  $('.header__link_1').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#about-us').offset().top }, 1000);
    e.preventDefault();
  });

  $('.header__link_2').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#gallery').offset().top }, 1000);
    e.preventDefault();
  });

  $('.header__link_3').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#catalog').offset().top }, 1000);
    e.preventDefault();
  });

  $('.header__link_4').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#events').offset().top }, 1000);
    e.preventDefault();
  });

  $('.header__link_5').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#progects').offset().top }, 1000);
    e.preventDefault();
  });

  $('.header__link_6').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
    e.preventDefault();
  });

});


// поиск-раскрытие
let search = document.querySelector('.header__search-container');
let searchMob = document.querySelector('.header__search_adaptive');
let searchExit = document.querySelector('.header__search-exit')

searchBtn.addEventListener('click',
  function(){
    searchBtn.classList.toggle('header__search-btn_act');
    search.classList.toggle('header__search-container_act');
    searchMob.classList.toggle('header__search_adaptive-active')
  });

searchExit.addEventListener('click',
  function(){
    searchBtn.classList.toggle('header__search-btn_act');
    search.classList.toggle('header__search-container_act');
    searchMob.classList.toggle('header__search_adaptive-active')
  });

// каталог лево

let inf = document.querySelector('.catalog__painter-inf');
let noInf = document.querySelector('.catalog__painter-no-inf');
let painter = document.querySelectorAll('.catalog__painter-btn');
let painterDomeniko = document.querySelector('.catalog__painter-btn_domeniko')

painter.forEach(function(it) {
  it.addEventListener('click',
  function(){
    inf.classList.remove('catalog__painter-inf_act');
    noInf.classList.add('catalog__painter-no-inf_act');
  })
});

painterDomeniko.addEventListener('click',
  function() {
    inf.classList.add('catalog__painter-inf_act');
    noInf.classList.remove('catalog__painter-no-inf_act');
  })


// слайдер

const swiperHero = new Swiper('.hero__swiper-container', {
  direction: 'horizontal',
  effect: 'fade',
  speed: 500,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4000
  }
});

const swiper = new Swiper('.gallery__right', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 34,
  breakpoints: {
    // when window width is >= 1025px
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
     // when window width is >= 769px
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: ".gallery__pagination",
    type: "fraction"
  }
});

const swiper2 = new Swiper('.events__swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 34,
  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    953: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    595: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    }
  },

  navigation: {
    nextEl: '.events__nav-btn_next',
    prevEl: '.events__nav-btn_prev',
  },

  // If we need pagination
  pagination: {
    el: '.events__pagination',
    clickable: true
  }

});

const swiper3 = new Swiper('.progects__swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 34,
  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    }
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// селект
const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false
}
)

// каталог скролл

$(function(){

  $('.catalog__painter-btn').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#catalog__left').offset().top }, 1000);
    e.preventDefault();
  });

});

// аккордион

$( function() {
  $( ".catalog__list-years" ).accordion({
    heightStyle: "content"
  });
} );


// тултип

tippy('.progects__tooltip-btn_1', {
  content: 'Пример современных тенденций — современная методология разработки',
});

tippy('.progects__tooltip-btn_2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('.progects__tooltip-btn_3', {
  content: 'В стремлении повысить качество',
});

// карта

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 14,
    });
    var myPlacemark = new ymaps.GeoObject({
      geometry: {
          type: "Point",
          coordinates: [55.758468, 37.601088]
      }
    });
    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-mark.svg',
      iconImageSize: [23, 23],
      iconImageOffset: [-3, -42]
    });
    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }

// валидация

const validation = new JustValidate('#form', {

  focusInvalidField: true,
  lockForm: true,

});

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя!',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя должно состоять максимум из 30 символов',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон!',
    },
  ]);

  // Маска

  var selector = document.getElementById("tel");

  var im = new Inputmask("+7 999-999-99-99");
  im.mask(selector);
