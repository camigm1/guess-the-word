const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const remaininGuessSpan = document.querySelector("span");
const messages = document.querySelector(".message");
const hiddenBtn = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function (word) {
  const placeholderWord = [];
  for (let letter of word) {
    placeholderWord.push("●");
  }
  wordInProgress.innerText = placeholderWord.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  const inputValue = guessInput.value;
  console.log(inputValue);
});
