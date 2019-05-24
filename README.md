# Psychic-Game

___

The Psychic-Game assignment required the use of JavaScript in order to establish the game logic whereby a letter is chosen randomly by the computer. If the user guesses correctly by entering keystrokes within within 10 tries, a win is added to their win total and an alert displays on the browser congratulating them for outsmarting the computer. If not, a loss is added to the loss total, a new letter is randomly selected by the computer, and the guesses remaining restart from 10.  

Initially I created the text formatting on the HTML file using a Bootstrap jumbotron to keep everything tidy and added additional p tags with unique id's.  Next I linked the JavaScript file to the HTML file using a script tag. Variables were created with the choice of all 26 letters of the alphabet contained within a single string. Next, variables containing wins, losses, and guessesLeft were created with their starting values. An empty array with assigned to the variable guessedLetters in order to store the users keyup events within each turn of 10 guesses. The variable computerChoice was assigned to math.random.

## Built With

___

* HTML
* CSS
* Bootstrap
* JavaScript
* Caffiene

___

![Index Page](assets/images/index_page_screenshot.png)