'use strict';

//class message
//for id use #
//for class use .
//query selector selects element, textContent reads property
//multiple dot operators are done left to right

/*
console.log(document.querySelector('.message').textContent);


//Selecting and Manipulating Events
document.querySelectorAll('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/


//need to define the secret number to compare to
const testNumber = Math.trunc(Math.random()*20) + 1;
console.log(testNumber);
document.querySelector('.number').textContent = testNumber;




//click events
//log the click event
//event is something that happens on the page
//using event listener
//first need to select where the event should happen
//first argument is the type of event
//second argument is a function value to what happens

document.querySelector('.check').addEventListener('click', function() {
    //need to cast the string to Number to be able to compare
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    }
});

