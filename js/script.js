const lettersGuessed = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const remaininGuessSpan = document.querySelector("span");
const messages = document.querySelector(".message");
const hiddenBtn = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];
console.log(guessedLetters);

const placeholder = function (word) {
  const placeholderWord = [];
  for (let letter of word) {
    placeholderWord.push("●");
  }
  wordInProgress.innerText = placeholderWord.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
  messages.innerText = "";
  e.preventDefault();
  let inputValue = guessInput.value;
  console.log(inputValue);
  let validLetter = checkLetter(inputValue);

  console.log(checkLetter(inputValue));
  makeGuess(validLetter);
});

const checkLetter = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input === "") {
    messages.innerText = "Please type in a letter";
  } else if (input.length > 1) {
    messages.innerText = "Make sure to put only one letter";
  } else if (!input.match(acceptedLetter)) {
    messages.innerText = "Please enter a letter, not a symbol";
  } else {
    return input;
  }
};

const makeGuess = function (letter) {
  const guessingLetter = letter.toUpperCase();
  if (guessedLetters.includes(guessingLetter)) {
    messages.innerText = "You already made that guess!";
  } else {
    guessedLetters.push(guessingLetter);
    lettersAlreadyGuessed();
    console.log(guessedLetters);
    updateWord(guessedLetters);
  }
};

const lettersAlreadyGuessed = function () {
  lettersGuessed.innerHTML = "";
  guessedLetters.forEach((x) => {
    let li = document.createElement("li");
    li.innerText = x;
    lettersGuessed.append(li);
  });
};

lettersAlreadyGuessed();

const updateWord = function (arr) {
  let wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const revealWord = [];
  for (let letter of wordArray) {
    if (arr.includes(letter)) {
      revealWord.push(letter.toUpperCase());
    } else {
      revealWord.push("");
    }
  }
  wordInProgress.innerText = revealWord.join("");
  checkWin();
  console.log(wordArray);
};

const checkWin = function () {
  if (wordInProgress.innerText === word.toUpperCase()) {
    messages.classList.add("win");
    messages.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
  }
};
