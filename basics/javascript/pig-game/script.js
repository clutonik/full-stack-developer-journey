"use strict";

// Create constants for player score DOM elements
const p0ScoreElement = document.getElementById("score--0");
const p1ScoreElement = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdScoreBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");
let diceNumber = 0;
let p1Score = 0;
let p2Score = 0;
let currentScore = 0;
let activePlayer = 0;

// Function to Initialize Game
const initializeGame = function () {
  p0ScoreElement.textContent = 0;
  p1ScoreElement.textContent = 0;
  diceElement.classList.add("hidden");
};

// Initialize Game
initializeGame();

// Generate Random Number for Dice
const generateRandomDiceNumber = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

// Function to switch Player
const switchPlayer = function () {
  currentScore = 0;
  // Reset current score of active player to 0 before switching
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  // Switch Active Player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Get All Players
  const players = document.querySelectorAll(".player");
  // Loop over players and switch their active status
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains("player--active")) {
      players[i].classList.remove("player--active");
    } else {
      players[i].classList.add("player--active");
    }
  }
};

// Function to Roll Dice
const rollDice = function () {
  // check which player is active
  diceNumber = generateRandomDiceNumber();
  // Switch Player if the rolled number is 1
  if (diceNumber === 1) {
    console.log("Switching Player as the player rolled: ", diceNumber);
    switchPlayer();
    return;
  } else {
    currentScore += diceNumber;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
    diceElement.src = `dice-${diceNumber}.png`;
    diceElement.classList.remove("hidden");
  }
};

// Function to Hold Current Score
const holdScore = function () {
  let totalScore = Number(
    document.getElementById(`score--${activePlayer}`).textContent
  );
  totalScore += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = totalScore;
  switchPlayer();
};

// Add EventListener for Roll Dice Button
rollDiceBtn.addEventListener("click", rollDice);

// Add EventListener for Hold Button
holdScoreBtn.addEventListener("click", holdScore);

// Add EventListener for New Game Button
newGameBtn.addEventListener("click", initializeGame);
