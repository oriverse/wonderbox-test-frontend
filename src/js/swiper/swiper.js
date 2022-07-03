/* eslint-disable import/no-extraneous-dependencies */
import Swiper from 'swiper/swiper-bundle.esm';
import 'swiper/swiper-bundle.css';

export const heroSwiper = new Swiper('#hero_carousel', {
  direction: 'horizontal',
  loop: true,
  roundLenghts: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.hero-button-next',
    prevEl: '.hero-button-prev'
  }
});

export const productSwiper = new Swiper('#products_carousel', {
  loop: false,
  spaceBetween: 40,
  pagination: {
    el: '.product-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.product-button-next',
    prevEl: '.product-button-prev'
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1025: {
      slidesPerView: 4
    }
  }
});
