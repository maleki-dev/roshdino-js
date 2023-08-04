"use strict";

const inputField = document.querySelector(".guess");
const numberElement = document.querySelector(".number");
const checkButton = document.querySelector(".check");
const messageElement = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");
const againButton = document.querySelector(".again");

let secretNumber = Math.floor(Math.random() * 20);
let score = 20;
let highScore = 0;
console.log("secretNumber", secretNumber);

function displayMessage(text) {
  messageElement.textContent = text;
}

checkButton.addEventListener("click", () => {
  const inputValue = Number(inputField.value);
  if (inputValue !== secretNumber) {
    if (score > 1) {
      displayMessage(
        inputValue > secretNumber ? "بیا پایین تر!" : "برو بالاتر!"
      );
      score -= 1;
      scoreElement.textContent = score;
    } else {
      displayMessage("شما بازنده شده اید!");
      scoreElement.textContent = 0;
    }
  } else if (inputValue === secretNumber) {
    displayMessage("شما برنده شدید!!");
    numberElement.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    numberElement.style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      highscoreElement.textContent = highScore;
    }
  }
});

againButton.addEventListener("click", () => {
  numberElement.textContent = "?";
  document.body.style.backgroundColor = "#222";
  numberElement.style.width = "15rem";
  inputField.value = "";
  scoreElement.textContent = 0;
  displayMessage("شروع حدس زدن...");
});
