const lettersGuessed = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector("span");
const messages = document.querySelector(".message");
const hiddenBtn = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];
console.log(guessedLetters);
let remainingGuesses = 8;

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
    guessesRemaining(letter);
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
      revealWord.push("●");
    }
  }
  wordInProgress.innerText = revealWord.join("");
  checkWin();
  console.log(wordArray);
};

const guessesRemaining = function (guess) {
  let wordUpperCase = word.toUpperCase(); // the number still subtracts even when I guess correct letter
  if (!wordUpperCase.includes(guess)) {
    messages.innerText = `Your Letter is not in the word`;
    remainingGuesses -= 1;
  } else {
    messages.innerText = `Good Job! Your letter is part of the word`;
  }
  if (remainingGuesses === 0) {
    messages.innerHTML = `Game Over! The word was <span class="highlight>${word}</span>"`;
  } else if (remainingGuesses === 1) {
    remainingGuessSpan.innerText = `${remainingGuesses} guess`;
  } else {
    remainingGuessSpan.innerText = `${remainingGuesses}`;
  }
};

const checkWin = function () {
  if (wordInProgress.innerText === word.toUpperCase()) {
    messages.classList.add("win");
    messages.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
  }
};
