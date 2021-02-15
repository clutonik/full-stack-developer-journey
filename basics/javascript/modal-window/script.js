"use strict";

// Creating constants for commonly used DOM elements.
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// Reusable function to hide modal window
const hideModalWindow = function () {
  modal.classList.add("hidden"); // Adding back hidden class
  overlay.classList.add("hidden");
};

// Reusable function to show modal window
const showModalWindow = function () {
  modal.classList.remove("hidden"); // Adding back hidden class
  overlay.classList.remove("hidden");
};

// Logging all elements selected with class .show-modal
console.log(btnsShowModal);

// Accessing or modifying all elements selected through querySelectorAll()
for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(btnsShowModal[i].textContent);
}

// Adding event listeners for all elements selected through querySelectorAll()
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", showModalWindow);
}

// Add eventListener to close modal window
btnCloseModal.addEventListener("click", hideModalWindow);

// Hide Modal Window if we click on overlay
overlay.addEventListener("click", hideModalWindow);

// Add eventListener for key press (Esc)
// We need to use global scope for key press event listeners
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModalWindow();
  }
});
