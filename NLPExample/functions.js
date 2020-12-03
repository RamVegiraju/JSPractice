
//count words in the text entered
function countWords() {
    var textAreaOne = document.getElementById("textInput");
    console.log(textAreaOne)
    var textAreaTwo = document.getElementById("textOutput");
    textAreaTwo.value = textAreaOne.value.split(' ').length;
}

//lowercases all words
function lowerCase() {
    var textAreaOne = document.getElementById("textInput");
    var textAreaThree = document.getElementById("textLowerCase");
    var res = textAreaOne.value;
    res = res.toLowerCase();
    textAreaThree.value = res;
}

//tokenizes the text into an array of words
function tokenizeText() {
    var textAreaOne = document.getElementById("textInput");
    var textAreaFour = document.getElementById("tokenizer");
    var res = textAreaOne.value;
    res = res.split(" ");
    console.log(res);
    textAreaFour.value = res;
}

//make a map of the number of occurrences of each word
//can have javascript nested functions
//A nested (inner) function can access the arguments and variables of the (outer) function it is nested within.
function countUniqueWords() {
    var textAreaOne = document.getElementById("textInput");
    var textAreaFive = document.getElementById("counter");
    var res = textAreaOne.value;

    //array of all words
    arr = res.split(" ");

    //initializes a map
    var wordsMap = {}
    
    //create a JS object as a map
    //forEach() executes a function on an array element
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    arr.forEach(function(key){
        if(wordsMap.hasOwnProperty(key)){
            wordsMap[key]++
        }else {
            wordsMap[key] = 1;
        }
    });
    console.log(wordsMap);

    //need to properly display a Javascript object
    var output = '';
    for (var prop in wordsMap) {
        output += prop + ': ' + wordsMap[prop] + ', ';
    }
    console.log(output);

    //set text area value to string with object results
    textAreaFive.value = output;

}


function countWordsFunctional() {
    
}