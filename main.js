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

document.getElementById("year").innerText = new Date().getFullYear();
function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    // console.log(currentScrollY);
    if (scrollDirection === "up") {
      document.getElementById("navbar-container").style.top = "0";
      document.getElementById("navbar-container").style.transition =
        "all 0.5s ease";
      //   document
      //     .getElementById("navbar-container")
      //     .classList.add("shadow-[0_0_80px_0_#2B245D21]");
    } else {
      document.getElementById("navbar-container").style.top = "-8rem";
      document.getElementById("navbar-container").style.transition =
        "all 0.5s ease";
    }

    if (currentScrollY > 0) {
      document.getElementById("navbar-container").style.boxShadow =
        "0 0 20px 0 #2B245D21";

      document.getElementById("navbar-container").style.backgroundColor =
        "#ffffff";
    } else {
      document.getElementById("navbar-container").style.boxShadow = "none";
      document.getElementById("navbar-container").style.backgroundColor =
        "#ffffff00";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();

document.getElementById("navbar-container").style.height =
  document.getElementById("navbar-content").clientHeight + "px";
