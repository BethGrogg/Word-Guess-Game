var harryArray = ["hermione", "harry", "ron", "hogwarts", "hagrid", "sirius", "dumbledore", "quidditch", "snitch", "luna"];

var hiddenWord = harryArray[Math.floor(Math.random() * harryArray.length)];

var displayValues = [];

var lettersGuessed = " ";

var isSpace = true;

var numberOfGuesses = 0;

var numOfWins = 0;

var numOfGuessesLeft = 9;




var harry = {

    displayHiddenWord: function () {
        for (var i = 0; i < hiddenWord.length; i++) {

            wordArray = hiddenWord.split('');
            displayValues = displayValues + '_';
           console.log("wordArray" + wordArray);
           console.log("displayValues" + displayValues);
        }
    },

    guessedWrong: function () {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            lettersGuessed = lettersGuessed + " " + event.key;
            numberOfGuesses++;

            document.getElementById("lettersChosen").innerHTML = lettersGuessed;
        }
    },

    guessedRight: function () {

        isSpace = false;
        for (i = 0; i < displayAnswer.length; i++) {
            if (displayAnswer[i] === '_') {
                isSpace = true;
            }
        }

    },

    youLost: function () {
        document.getElementById("gameOver").innerHTML = "You lost this time.  Press any key to try again.";
    },

    youWon: function () {
        document.getElementById("gameOver").innerHTML = "You won!";
    }
}


window.onload = function () {
    document.getElementById("startMessage").innerHTML = "Press any key to begin";

};

harry.displayHiddenWord();


var displayAnswer = displayValues.split('');




document.onkeyup = function (event) {
    document.getElementById("startMessage").innerHTML = "";

    document.getElementById("wordPuzzle").innerHTML = displayValues;

    if (numberOfGuesses < 9) {

        var isLetter = false;
        for (var j = 0; j < wordArray.length; j++) {
            if (event.key === wordArray[j]) {

                isLetter = true;
                displayAnswer[j] = wordArray[j];

            }

        }
        if (isLetter === false) {
            harry.guessedWrong();
            numOfGuessesLeft--;
            document.getElementById("numberOfGuessesLeft").innerHTML = "Number of Guesses Left: " + numOfGuessesLeft;
        }
        document.getElementById("wordPuzzle").innerHTML = displayAnswer.join(" ");
        if (isLetter === true) {
            harry.guessedRight();
        }
    } else {
        harry.youLost();
    }
var youWon = false;
    if (isSpace === false) {
        harry.youWon();
        youWon = true;
        numOfWins++;
        document.getElementById("wins").innerHTML = "Games won: " + numOfWins;
        
    }
// not working....
    if (youWon === true){
        hiddenWord = harryArray[Math.floor(Math.random() * harryArray.length)];
        harry.displayHiddenWord();
        console.log(hiddenWord);
        console.log("DisplayValues: " + displayValues);
       document.getElementById("wordPuzzle").innerHTML = displayValues;
       youWon = false;
    }



}