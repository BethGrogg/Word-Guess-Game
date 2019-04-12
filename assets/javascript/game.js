var harryArray = ["hermione", "harry", "ron", "hogwarts", "hagrid", "sirius", "dumbledore", "quidditch", "snitch", "luna"];

var hiddenWord = harryArray[Math.floor(Math.random() * harryArray.length)];

var displayValues = [];

var lettersGuessed = " ";

var isSpace = true;

var numberOfGuesses = 0;

var numOfWins = 0;

var numOfGuessesLeft = 9;

var newGame = false;




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
        document.getElementById("gameOver").innerHTML = "You lost this time.  Try again!";
       
  

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
    var mainSound = document.getElementById("mainAudio");
mainSound.play();
    document.getElementById("startMessage").innerHTML = "";
    document.getElementById("lettersChosen").innerHTML = "";
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
            if (numOfGuessesLeft >= 2) {
            numOfGuessesLeft--;
            document.getElementById("numberOfGuessesLeft").innerHTML = "Number of Guesses Left: " + numOfGuessesLeft;
            }
        }
        document.getElementById("wordPuzzle").innerHTML = displayAnswer.join(" ");

        if (isLetter === true) {
            harry.guessedRight();
        }
    } else {
        harry.youLost();
        document.getElementById("wordPuzzle").innerHTML = "";
        document.getElementById("lettersChosen").innerHTML = "";
        document.getElementById("numberOfGuessesLeft").innerHTML = "";
        newGame = true;
        
      var losingSound = document.getElementById("loseAudio");
      losingSound.play();

    }
    //var youWon = false;
    if (isSpace === false) {
        var winningSound = document.getElementById("winAudio");
        winningSound.play();
        harry.youWon();
        //youWon = true;
        newGame = true;
        numOfWins++;
        document.getElementById("wins").innerHTML = "Games won: " + numOfWins;
        document.getElementById("numberOfGuessesLeft").innerHTML = "Number of Guesses Left: " + 9;
        
    }
  
   // if (youWon === true) {
      if (newGame) {   
 
        hiddenWord = harryArray[Math.floor(Math.random() * harryArray.length)];
       
        displayValues = "";
        harry.displayHiddenWord();

        displayAnswer = displayValues.split('');
        
        document.getElementById("wordPuzzle").innerHTML = displayAnswer.join(" ");
        //youWon = false;
          newGame = false;
        isSpace = true;
        lettersGuessed = " ";
        numberOfGuesses = 0;
        numOfGuessesLeft = 9;
        
       
       
    }
   

}