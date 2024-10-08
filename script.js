document.getElementById('menu').addEventListener('change', function() {
    var menuElement = document.querySelector('.menu');
    if (this.checked) {
      menuElement.classList.add('menu-no-border');
    } else {
      menuElement.classList.remove('menu-no-border');
    }
  });


var swiper = new Swiper('.mySwiper-1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.mySwiper-2', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
        }  
});

let tabInputs = document.querySelectorAll('.tabinput');

tabInputs.forEach(function(input){

    input.addEventListener('change', function(){
        let id=input.ariaValueMax;
        let thisSwiper=document.getElementById('swiper-'+id);
        thisSwiper.swiper.update();
    })
});
