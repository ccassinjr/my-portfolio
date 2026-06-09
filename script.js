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

const navLogo = document.querySelector(".nav__logo");
navLogo.addEventListener("click", closeMenu);

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

// =====SCROLL ANIMATIONS=====

const sections = document.querySelectorAll("[data-section]");

const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        sectionObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

sections.forEach(function (section) {
  sectionObserver.observe(section);
});

// =====ACTIVE NAV LINK=====

const allSections = document.querySelectorAll("section[id]");
const allNavLinks = document.querySelectorAll(".nav__link");

const navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        allNavLinks.forEach(function (link) {
          link.classList.remove("is-active");
        });
        const activeLink = document.querySelector(
          `.nav__link[href="#${entry.target.id}"]`,
        );
        if (activeLink) {
          activeLink.classList.add("is-active");
        }
      }
    });
  },
  {
    threshold: 0.5,
  },
);

allSections.forEach(function (section) {
  navObserver.observe(section);
});

// =====FORM VALIDATION=====

const form = document.querySelector(".contact__form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const showError = function (input, message) {
  const field = input.closest(".form__field");
  const existing = field.querySelector(".form__error");
  if (existing) existing.remove();

  input.style.borderColor = "var(--accent)";

  const error = document.createElement("p");
  error.classList.add("form__error");
  error.textContent = message;
  field.appendChild(error);
};

const clearError = function (input) {
  const field = input.closest(".form__field");
  const existing = field.querySelector(".form__error");
  if (existing) existing.remove();
  input.style.borderColor = "";
};

const isValidEmail = function (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

form.addEventListener("submit", function (e) {
  let valid = true;

  if (nameInput.value.trim() === "") {
    showError(nameInput, "Please enter your name.");
    valid = false;
  } else {
    clearError(nameInput);
  }

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Please enter your email.");
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email address.");
    valid = false;
  } else {
    clearError(emailInput);
  }

  if (messageInput.value.trim() === "") {
    showError(messageInput, "Please enter a message.");
    valid = false;
  } else {
    clearError(messageInput);
  }

  if (!valid) {
    e.preventDefault();
  }
});

// Clear errors on input
[nameInput, emailInput, messageInput].forEach(function (input) {
  input.addEventListener("input", function () {
    clearError(input);
    input.style.borderColor = "";
  });
});
