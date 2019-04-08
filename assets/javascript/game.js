var harry = {

    displayHiddenWord: function () {
        for (var i = 0; i < hiddenWord.length; i++) {

            wordArray = hiddenWord.split('');
            displayValues = displayValues + '_';

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

var harryArray = ["hermione", "harry", "ron", "hogwarts", "hagrid", "sirius", "dumbledore", "quidditch", "snitch", "luna"];

var hiddenWord = harryArray[Math.floor(Math.random() * harryArray.length)];

var displayValues = [];

var lettersGuessed = " ";

var isSpace = true;

var numberOfGuesses = 0;

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
        }
        document.getElementById("wordPuzzle").innerHTML = displayAnswer.join(" ");
        if (isLetter === true) {
            harry.guessedRight();
        }
    } else {
        harry.youLost();
    }

    if (isSpace === false) {
        harry.youWon();

    }



}