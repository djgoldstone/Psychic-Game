var alphabet = "abcdefghojklmnopqrstuvwxyz";

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userGuessesText = document.getElementById("user-guesses-text");
var remainingGuessesText = document.getElementById("remaining-guesses-text");
var userGuesses = document.getElementById("user-guess");
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

userGuesses.textContent = "You chose: ";
winsText.textContent = "Wins: ";
lossesText.textContent = "Losses: ";
remainingGuessesText.textContent = "Guesses Remaining: 10";
userGuessesText.textContent = "Your guesses so far...";

var resetFunc = () => {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
};


document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    guessedLetters.push(userGuess);
    var joinedGuesses = guessedLetters.join(" ");

    
    if (userGuess >= 0 || userGuess.length > 1) { 
        alert("Choose a letter!");
    } else {
            
        if (userGuess === computerChoice) {
            wins++;
            alert("Nice! You guessed correctly!");
            guessesLeft = 10;
            guessedLetters = [];
            resetFunc();
        } else {
            guessesLeft--;
        };
    
        if (guessesLeft === 0) {
                losses++;
                guessesLeft = 10;
                guessedLetters = [];
            };
    userGuesses.textContent = "You chose: " + userGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    remainingGuessesText.textContent = "Guesses Remaining: " + guessesLeft;
    userGuessesText.textContent = "Your guesses so far..." + joinedGuesses;

    
        } 
    

};

    

    



