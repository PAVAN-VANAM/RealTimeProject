"use strict";

// Function to add event listeners to multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Select the navbar and overlay elements, and the nav togglers
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

// Function to toggle the navbar and overlay visibility
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

// Add click event listeners to nav togglers
addEventOnElements(navTogglers, "click", toggleNavbar);

// Select the header element
const header = document.querySelector("[data-header]");

// Function to activate the header on scroll
const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// Add scroll event listener to activate header
window.addEventListener("scroll", headerActive);
