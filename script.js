let secretNumber;
let attempts = 0;
let maxAttempts = 10;
let maxNumber = 100;

// Get HTML elements
const difficulty = document.getElementById("difficulty");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartButton = document.getElementById("restartButton");

// Start a new game
function startGame() {

```
attempts = 0;

if (difficulty.value === "easy") {
    maxNumber = 50;
}
else if (difficulty.value === "medium") {
    maxNumber = 100;
}
else {
    maxNumber = 200;
}

secretNumber = Math.floor(Math.random() * maxNumber) + 1;

attemptsDisplay.textContent = attempts;
message.textContent = "Game started! Make your guess.";

guessInput.value = "";
guessInput.disabled = false;
guessButton.disabled = false;

guessInput.focus();
```

}

// Check the user's guess
function checkGuess() {

```
const guess = Number(guessInput.value);

if (guess < 1 || guess > maxNumber || guessInput.value === "") {
    message.textContent =
        "Please enter a number between 1 and " + maxNumber + ".";
    return;
}

attempts++;

attemptsDisplay.textContent = attempts;

if (guess === secretNumber) {

    message.textContent =
        "🎉 Correct! You guessed the number in " +
        attempts +
        " attempts!";

    guessInput.disabled = true;
    guessButton.disabled = true;

}
else if (guess < secretNumber) {

    message.textContent = "📈 Too low! Try a higher number.";

}
else {

    message.textContent = "📉 Too high! Try a lower number.";

}


// Maximum attempts
if (attempts >= maxAttempts && guess !== secretNumber) {

    message.textContent =
        "😢 Game over! The correct number was " +
        secretNumber +
        ".";

    guessInput.disabled = true;
    guessButton.disabled = true;
}

guessInput.value = "";
```

}

// Button events
guessButton.addEventListener("click", checkGuess);

restartButton.addEventListener("click", startGame);

difficulty.addEventListener("change", startGame);

// Start the first game
startGame();
