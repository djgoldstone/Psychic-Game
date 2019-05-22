var alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var guessedLetters = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userGuessesText = document.getElementById("user-guesses-text");
var remainingGuessesText = document.getElementById("remaining-guesses-text");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerChoice = Math.floor(Math.random() * alphabet.length);
}
