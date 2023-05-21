"use strict";

const nav = document.querySelector(".nav");

///////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__list-item")) {
    const link = e.target;
    const siblings = link
      .closest(".nav__list")
      .querySelectorAll(".nav__list-item");
    //const logo = link.closest(".nav__list").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    //logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

//////////////////////////////// Night mode
const DarkBtn = document.querySelector(".dark-mode");
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

let condition = true;
DarkBtn.addEventListener("click", toDark);
