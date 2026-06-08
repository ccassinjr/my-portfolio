"use strict";

// =====HAMBURGER MENU=====

const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const openMenu = function () {
  navToggle.classList.add("is-open");
  navList.classList.add("is-open");
  navToggle.setAttribute("aria-expanded", "true");
};
const closeMenu = function () {
  navToggle.classList.remove("is-open");
  navList.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

navToggle.addEventListener("click", function () {
  const isOpen = navList.classList.contains("is-open");
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close on nav link click

navLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// Close on Esc key

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// Close menu on scroll
window.addEventListener("scroll", function () {
  if (navList.classList.contains("is-open")) {
    closeMenu();
  }
});
