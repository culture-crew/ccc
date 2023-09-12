import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

const bannerSwiper = new Swiper('.banner-swiper', {
    slidePerView: '1',
    centeredSlides: true,    
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})