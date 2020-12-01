
//count words in the text entered
function countWords() {
    var textAreaOne = document.getElementById("textInput");
    var textAreaTwo = document.getElementById("textOutput");
    textAreaTwo.value = textAreaOne.value.split(' ').length;
}