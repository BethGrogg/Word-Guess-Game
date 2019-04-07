var harryArray = ["Hermione", "Harry", "Ron"];

var hiddenWord = harryArray[Math.floor(Math.random() * harryArray.length)];

var displayValues = "";

console.log(hiddenWord);


for (var i = 0; i < hiddenWord.length; i++) {
   
    wordArray = hiddenWord.split('');

    console.log(wordArray);
    displayValues = displayValues + '_ ';
    console.log(displayValues);

    document.onkeyup = function(event) {

    for (var j = 0; j < wordArray.length; j++) {
        if (event.key === wordArray[j]) {
            console.log("we are here");
        } else {
            console.log("not one of the letters");
        }

    }
}
}

//document.onkeyup = function(event) {
//    for (var i = 0, i < wordArray)
//}