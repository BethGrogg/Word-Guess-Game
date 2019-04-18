var harryArray = ["hermione", "harry", "ron", "hogwarts", "hagrid", "sirius", "dumbledore", "quidditch", "snitch", "luna"];

var hiddenWord = harryArray[Math.floor(Math.random() * harryArray.length)];

var displayValues = [];

var lettersGuessed = " ";

var isSpace = true;

var numberOfGuesses = 0;

var numOfWins = 0;

var numOfGuessesLeft = 9;

var newGame = false;



//object holds the functions
var harry = {
    //Replaces each letter in the hidden word with a '_' (doesn't have the spaces in between the '_' yet)
    displayHiddenWord: function () {
        for (var i = 0; i < hiddenWord.length; i++) {

            wordArray = hiddenWord.split('');
            displayValues = displayValues + '_';

        }
    },
    //When the letter isn't in te word--this first makes sure that the key pressed was a letter.  
    //Then it adds this letter to the list of letters that were guessed wrong and displays it.  
    //This also increases the counter of how many wrong guesses the user has made.
    guessedWrong: function () {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            lettersGuessed = lettersGuessed + " " + event.key;
            numberOfGuesses++;

            document.getElementById("lettersChosen").innerHTML = lettersGuessed;
        }
    },

    //If the user guessed the right letter, it then checks to see if there are any '_' left to see if game
    //is over or to continue
    guessedRight: function () {

        isSpace = false;
        for (i = 0; i < displayAnswer.length; i++) {
            if (displayAnswer[i] === '_') {
                isSpace = true;
            }
        }

    },
    //displays the you lost message
    youLost: function () {
        document.getElementById("gameOver").innerHTML = "You lost this time.  Try again!";



    },
    //displays the you won message
    youWon: function () {

        document.getElementById("gameOver").innerHTML = "You won!";

    }
}

//when page loads, the start message displays; game doesn't start until a key is pressed
window.onload = function () {
    document.getElementById("startMessage").innerHTML = "Press any key to begin";


};

//calling to display the '_' for the length of the hidden word
harry.displayHiddenWord();

//creates an array with each letter (or '_' until letter is guessed) a value in the array
var displayAnswer = displayValues.split('');

//when a key is pressed, sound starts, start message is "" and make sure there are no letters chosen displayed yet
document.onkeyup = function (event) {

    var mainSound = document.getElementById("mainAudio");
    mainSound.play();

    document.getElementById("startMessage").innerHTML = "";
    document.getElementById("lettersChosen").innerHTML = "";
 //   document.getElementById("wordPuzzle").innerHTML = displayValues;

    //checks to make sure the user has guesses left
    //checks through the array of letters to see if the user chose a letter in the word or not
    if (numberOfGuesses < 9) {

        var isLetter = false;
        for (var j = 0; j < wordArray.length; j++) {
            if (event.key === wordArray[j]) {

                isLetter = true;
                displayAnswer[j] = wordArray[j];

            }

        }

        //if the letter is not in the word, decreases the number of guesses left and displays this number
        if (isLetter === false) {
            harry.guessedWrong();
            if (numOfGuessesLeft >= 2) {
                numOfGuessesLeft--;
                document.getElementById("numberOfGuessesLeft").innerHTML = "Number of Guesses Left: " + numOfGuessesLeft;
            }
        }
        document.getElementById("wordPuzzle").innerHTML = displayAnswer.join(" ");
        
        //letter is in word
        if (isLetter === true) {
            harry.guessedRight();
        }

    } else {
        //no guesses left so end of game
        harry.youLost();
        document.getElementById("wordPuzzle").innerHTML = "";
        document.getElementById("lettersChosen").innerHTML = "";
        document.getElementById("numberOfGuessesLeft").innerHTML = "";
        newGame = true;

        var losingSound = document.getElementById("loseAudio");
        losingSound.play();

    }
    //spaces have all been filled so user wins
    //displays winning information
    if (isSpace === false) {
        var winningSound = document.getElementById("winAudio");
        winningSound.play();
        harry.youWon();
        
        newGame = true;
        numOfWins++;
        document.getElementById("wins").innerHTML = "Games won: " + numOfWins;
        document.getElementById("numberOfGuessesLeft").innerHTML = "Number of Guesses Left: " + 9;

    }

    //starts a new game when user either wins or loses
    if (newGame) {

        hiddenWord = harryArray[Math.floor(Math.random() * harryArray.length)];

        displayValues = "";
        harry.displayHiddenWord();

        displayAnswer = displayValues.split('');

        document.getElementById("wordPuzzle").innerHTML = displayAnswer.join(" ");
        
        newGame = false;
        isSpace = true;
        lettersGuessed = " ";
        numberOfGuesses = 0;
        numOfGuessesLeft = 9;



    }


}