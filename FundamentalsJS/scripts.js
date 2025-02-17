//strict mode helps catch errors
'use strict';


let hasDriversLicense = false;
const passTest = true;


if (passTest) hasDriversLicense = true;
//if(hasDriversLicense) console.log('I can drive :D');

//reserving words for future JS features
/*
None of these below work
const interface = 'Audio'; 
const private = 534;
const if = 23;
*/


//FUNCTIONS Practice

//sample function
function logger() {
    console.log('My name is Ram');
}

//invocation
//logger();
//logger();

/*
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}  */

//only returns console.log
//fruitProcessor(4,5);

//store in variable
//const appleJuice = fruitProcessor(5,0);

//returns juice variable
//console.log(appleJuice);


//function declaration

//can call a function declaration before declaring the function itself, cannot do this with an expression
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//console.log(age1);

//function expression
//also known as an anonymous function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
//console.log(age1,age2);


//Arrow Functions

//One param/one-liner function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
//console.log(age3);


//for a multiple liner need curly brackets and a return
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
//console.log(yearsUntilRetirement(1991));

//multiple params
const yearsUntilRetirement2 = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

//console.log(yearsUntilRetirement2(1991,'Ram'))


//functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    //console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
} 

//console.log(fruitProcessor(5,4))


/**
 * Arrays
 */

 const friend1 = 'Michael';
 const friend2 = 'Steven';
 const friend3 = 'Peter';

 const friends = ['Michael', 'Steven', 'Peter'];
 console.log(friends);

 //Another way of making an array
 const yearss = new Array(1991, 1984, 2008);

//indexing an array
 console.log(friends[0]);
 console.log(friends[2]);

 //length of an array
 console.log(friends.length);

 //getting the last element
 console.log(friends[friends.length-1]);

//mutating array
 friends[2] = 'Jay';
 console.log(friends);


//Array can hold values of different types
const firstName = 'Ram'
const ram = [firstName, 'Vegiraju', 2037-1999, friends];
console.log(ram);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age11 = calcAge(years[0]);
const age22 = calcAge(years[1]);
const age33 = calcAge(years[years.length - 1]);
console.log(age11,age22,age33);

//console.log(resArray);

//use map to create a new array and apply a function to each item in an array
var resArray = years.map(calcAge);
console.log(resArray);



//Basic Array Operations/Methods

const friends2 = ['Michael', 'Steven', 'Peter'];

//push function to add to end of an array
//push returns length
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);


//unshift method adds to beginning of array
friends.unshift('John');
console.log(friends);




//removing first element
friends.shift();
console.log(friends)


//finding the index of a certain element
console.log(friends.indexOf('Steven'));

//if we look for indexOf an element that is not there it returns -1

//includes method looks for an element
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}



/**
 * Objects
 * Can give key value pairs
 * Define with curly brackets
 * Each key is called a property
 * Multiple ways of creating an object
 * Order does not really matter in objects
 */

 //Example object
const ramVeg = {
    firstName: 'Ram',
    lastName: 'Vegiraju',
    age: 2037 - 1999,
    job: 'student',
    friendsRam: ['Michael', 'Steven', 'Peter']
}

//dot vs bracket notation
console.log(ramVeg);

//retreiving props

//dot notation to acess property
console.log(ramVeg.lastName);

//bracket notation
console.log(ramVeg['lastName']);

//can put anyhting in the brackets, compute property name
const nameKey = 'Name';
console.log(ramVeg['first' + nameKey])
console.log(ramVeg['last' + nameKey]);

/*
const interestedIn = prompt('What do you want to know about Ram? Choose between firstName, lastName, age, job, and friends?');
console.log(ramVeg[interestedIn])

if(ramVeg[interestedIn]) {
    console.log(ramVeg[Int16Array]);
}else {
    console.log('Wrong request!');
} */

//adding new properties
ramVeg.location = 'USA';
ramVeg['twitter'] = '@ramv77';
console.log(ramVeg);



//can add functions to objects as well
const ramVeg2 = {
    firstName: 'Ram',
    lastName: 'Vegiraju',
    birthYear: 1999,
    job: 'student',
    friendsRam: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,

    //any function attached to an object is called a method
    //think of a function as a value
    //calcAge: function(birthYear) {
      //  return 2037 - birthYear;
    //}

    //the this keyword points to the object
    calcAge: function() {
        console.log(this);
        return 2037 - this.birthYear;
    },

    // can also create a new property using the this keyWord
    createAgeProp: function() {
        this.age = 2044 - this.birthYear;
        return this.age;
    }
};

//can also access methods
//console.log(ramVeg2.calcAge(1999));
//console.log(ramVeg2['calcAge'](1999));

//when using this we don't even have to input because it can access what's arleady in object throug this
//console.log(ramVeg2.calcAge());

//console.log(ramVeg2.calcAge());
//console.log(ramVeg2.calcAge());
//console.log(ramVeg2.calcAge());







//Iteration
//For loops

//violates don't repeat yourself principle
//Example lifting weight at the gym

/*
console.log('Lifting weights repeition 1');
console.log('Lifting weights repeition 2');
console.log('Lifting weights repeition 3');
console.log('Lifting weights repeition 4');
console.log('Lifting weights repeition 5');
console.log('Lifting weights repeition 6');
console.log('Lifting weights repeition 7');
console.log('Lifting weights repeition 8');
console.log('Lifting weights repeition 9');
console.log('Lifting weights repeition 10');
*/

//for loop keeps running while condition is true
/*
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetiton ${rep}`);
}*/



//Iterating arrays

const ramArr = [
    'Ram',
    'Vegiraju',
    2037-1991,
    'student',
    ['Michael', 'Peter', 'Steven']
];

//array to hold types
const types = [];

//without loop
//console.log(ram[0])
//console.log(ram[1])
//console.log(ram[2])
//console.log(ram[3])
//console.log(ram[4])

//counter variable should always stay below 5
//or the maximum array length
for(let i = 0; i < ramArr.length; i++) {
    //Reading array
    //console.log(ramArr[i], typeof ramArr[i]);

    //new array to hold types of variables
    //types[i] = typeof ramArr[i];

    //another method is push 
    types.push(typeof ramArr[i])
}

//console.log(types);


//calculate ages for each birth year
const yearsArr = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < yearsArr.length; i++) {
    ages.push(2037 - yearsArr[i]);
}
//console.log(ages);



// continue and break

//continue
//console.log('----------Only Strings');
for(let i = 0; i < ramArr.length; i++) {
    //if the item is not a string then continue, exit current iteration and start next iteration
    if(typeof ramArr[i] !== 'string') continue;

    //console.log(ramArr[i], typeof ramArr[i]);
}


//break terminates the entire loop
//console.log('----------BREAK WITH NUMBER------');
for(let i = 0; i < ramArr.length; i++) {
    //if the item is not a string then continue, exit current iteration and start next iteration
    if(typeof ramArr[i] === 'number') break;

    //console.log(ramArr[i], typeof ramArr[i]);
}


//Looping backwards
//Normally start at index 0, 1, ..., 4
//Now we want 4,3, .... , 0

for (let i = ramArr.length - 1; i >= 0; i--) {
    //console.log(i, ramArr[i]);
}


//loops within loops example
//should have 15 repetitions

for (let exercise = 1; exercise < 4; exercise++) {
    //console.log(`---------Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weights repetition ${rep}`);
    }
}



//While loop

//for loop for comparision
//console.log("----------For LOOP--------")
for(let rep = 1; rep <= 10; rep++) {
    //console.log(`Lifting weights repetiton ${rep}`);
}

//still need same components for a while loop
//all the while loop really needs is the condition

//console.log("----------WHILE LOOP--------")
let rep = 1;
while(rep <= 10) {
    //console.log(`Lifting weights repetiton ${rep}`);
    rep++;
}


//Example: Want to roll dice till it is 6

//random number between 1 to 6 for example
let dice = Math.trunc(Math.random() * 6) +1;
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    if (dice === 6) console.log('Loop is about to end ....');
}