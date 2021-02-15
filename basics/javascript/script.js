"use strict";

/*
  TODO: Add below explanations:
  - Explain DOM Tree structure
  - 

*/

// Generate Random Number for game
const getRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1; // Get random numbers between 1-21
};

// variables needed to Initialize the game
let secretNumber = 0;
const messageString = "Start guessing...";
let score = 20; // Create a variable to manage user score
let highScore = 0;

// Method to initialize the game
const initializeGame = function () {
  secretNumber = getRandomNumber();
  console.log("Secret Number: ", secretNumber);
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = messageString;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
};

// Initialize the game
initializeGame();

// Function to reset the game
const resetGame = function () {
  score = 20;
  initializeGame();
  return;
};

// Function to Update high score
const updateHighScore = function () {
  if (score <= highScore) {
    console.log("Could not defeat previous best");
  } else if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = score;
  }
};

// Function to decrease the score after incorrect guess
const decreaseAndUpdateScore = function (domElement) {
  if (score == 1) {
    document.querySelector(".message").textContent = "Game Over!! Try Again...";
    updateBgColor("body", "red");
    console.log(document.querySelector(".message").textContent);
    resetGame();
    return;
  }
  score--;
  document.querySelector(domElement).textContent = score;
};

// Function to make CSS Modifications through javascript
const updateBgColor = function (domElement, bgColor) {
  document.querySelector(domElement).style.backgroundColor = bgColor;
};

// Fetching text from an HTML element
// Document refers to the whole HTML structure and querySelector is a method
// which can be used to select a specific element using its 'id' or ''class'
const message = document.querySelector(".message").textContent;
console.log(message);

// We can also change contents of an HTML element in javascript
// document.querySelector(".message").textContent = "Modified Content";
// console.log(document.querySelector(".message").textContent);

// To read values from input HTML element, we need to use .value instead of .textContent
// When we read values from an input HTML element, its type is always 'string'
console.log(document.querySelector(".guess").value);

// Adding eventListeners
document.querySelector(".check").addEventListener("click", function () {
  // Check if any value was supplied or not
  const guessedNumber = Number(document.querySelector(".guess").value);
  if (!guessedNumber) {
    // Modify another HTML element if no value specified in input
    document.querySelector(".message").textContent = "No Guess made";
  } else if (guessedNumber === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    updateHighScore();
    updateBgColor("body", "green");
  } else if (guessedNumber < secretNumber) {
    document.querySelector(".message").textContent = "Too low";
    decreaseAndUpdateScore(".score");
  } else if (guessedNumber > secretNumber) {
    document.querySelector(".message").textContent = "Too High";
    decreaseAndUpdateScore(".score");
  }
});

// EventListener for resetting game through again button

document.querySelector(".again").addEventListener("click", function () {
  resetGame();
});
