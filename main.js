// Aos

// import Swiper from "swiper";

import { Swiper } from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
// const Swiper = require("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs");

// Lenis

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

AOS.init();

// Swiper
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2000,
  },
  navigation: {
    prevEl: ".slide-left",
    nextEl: ".slide-right",
  },
  slidesPerView: 1,
  // breakpoints: {
  //   640: {
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  // },
});
