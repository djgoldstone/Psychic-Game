var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

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
console.log(computerChoice);

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    guessedLetters.push(userGuess);

        if (userGuess === computerChoice) {
            wins++;
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
        userGuessesText.textContent = "Your guesses so far..." + guessedLetters;

    
    
    };

    

    



