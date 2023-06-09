"use strict";

////////////////////////////////////////////// Mobile nav
const mobileNavList = document.querySelector(".mobile__nav_list");
const mobileNavBtn = document.querySelector(".mobile__nav-button");
const mobileNavBtnIcon = document.querySelector(".mobile__nav-button-icon");
const mobileNavBackground = document.querySelector(".mobile__nav-background");

const toggleMobileNav = function () {
  mobileNavList.classList.toggle("hidden");
  mobileNavBackground.classList.toggle("mobile__nav-scaleUp");

  setTimeout(() => {
    mobileNavList.classList.toggle("height90");
  }, 300);

  mobileNavBtnIcon.classList.toggle("mobile__nav-clicked");
};

mobileNavBtn.addEventListener("click", toggleMobileNav);

//////////////////////////////// Night mode
const darkBtns = document.querySelectorAll(".dark-mode");
const titleImg = document.querySelector(".nav__img");

const switchMode = function () {
  if (condition) {
    /////////////////// Dark mode:
    document.documentElement.style.setProperty(
      "--temporary-secondary-color",
      "#f1f3f5"
    );

    document.documentElement.style.setProperty(
      "--temporary-main-color",
      "#131313"
    );

    titleImg.src = "content/main/title.png";
  } else {
    /////////////////// Light mode:
    document.documentElement.style.setProperty(
      "--temporary-secondary-color",
      "#2d2d2d"
    );

    document.documentElement.style.setProperty(
      "--temporary-main-color",
      "#f1f3f5"
    );

    titleImg.src = "content/main/title-dark.png";
  }

  condition = !condition;
};

let condition = false;

darkBtns.forEach((btn) => btn.addEventListener("click", switchMode));

////////////////////////////////////////// Gallery slider

document.addEventListener("DOMContentLoaded", function () {
  const smallPictures = document.querySelectorAll(".slider__small-picture");
  const bigPicture = document.querySelector(".slider__big-picture img");

  smallPictures.forEach(function (picture) {
    picture.addEventListener("click", function () {
      const imagePath = picture.querySelector("img").src;
      bigPicture.src = imagePath;

      smallPictures.forEach(function (smallPic) {
        smallPic.classList.remove("active");
      });

      picture.classList.add("active");
    });
  });
});
//////////////////////////////////////////////////// smooth scroll buttons
// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section-1");

// btnScrollTo.addEventListener("click", function (e) {
//   section1.scrollIntoView({ behavior: "smooth" });
// });

// document.querySelector(".nav__list").addEventListener("click", function (e) {
//   e.preventDefault();

//   // Matching strategy
//   if (e.target.classList.contains("nav__list-item-link")) {
//     const id = e.target.getAttribute("href"); // this will give the href, #section-1 for example
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });

document.querySelectorAll(".btnScrollTo").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    //this.href // this will give the absolute url
    const id = this.getAttribute("href"); // this will give the href, #section--1 for example
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
