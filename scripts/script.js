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

const nav = document.querySelector(".nav");

////////////////////////////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__list-item")) {
    const link = e.target;
    const siblings = link
      .closest(".nav__list")
      .querySelectorAll(".nav__list-item");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

//////////////////////////////// Night mode
const darkBtns = document.querySelectorAll(".dark-mode");
const titleImg = document.querySelector(".nav__img");

const toDark = function () {
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

    titleImg.src = "content/title.png";
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

    titleImg.src = "content/title-dark.png";
  }

  condition = !condition;
};

let condition = false;

darkBtns.forEach((btn) => btn.addEventListener("click", toDark));
