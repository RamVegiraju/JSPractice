'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

///slice method
//start extracting at 2/c
//does not mutate the array returns a new array
console.log(arr.slice(2));
//end param
console.log(arr.slice(2,4));
//end of array
console.log(arr.slice(-2));
//creating a shallow copy
console.log(arr.slice());


///SPLICE METHOD
//actually mutates the array, does not create a new array
//console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr); //original array except last element


// REVERSE METHOD
//does mutate original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);


// CONCAT Method
// concatenate two arrays
// does not mutate the original arrays
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr,...arr2]);


// JOIN Method
//can join elements of an array
//will not mutate the originl array
console.log(letters.join('-'));

*/


///Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
//iterating with a for-of loop for comparision
for (const movement of movements) {
  if(movement > 0) {
    console.log(`You deposited ${movement}`);
  }else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}


console.log('---------FOROF with COUNTER----------------');




//what if we wanted a counter?
//first element i is the index and second is the current element
for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  }else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}



console.log('---------FOREACH----------------');

//https://www.w3schools.com/js/js_callback.asp
//for each requires a callback function

movements.forEach(function(movement) {
  if(movement > 0) {
    console.log(`You deposited ${movement}`);
  }else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});


console.log('---------FOREACH WITH COUNTER----------------');

//FOREACH with a counter
//the order of params: current element, current index, and entire array we are looping over
movements.forEach(function(movement, i, array) {
  if(movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  }else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
});


//When to use both
//Cannot break out of a ForEach Loop, will go over the entire array
//Use For-Of if you need to break out of a loop

*/




///ForEach with Maps and Sets

///ForEach with Map

//first item is the key, second item is the value
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//first param is value
//second param is key
//third param is entire map
currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
})



///ForEach with Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
//same params as map
//set does not have keys or indexes however
//key does not really make sense as a param
//use underscore for a variable which is unncecessary
currenciesUnique.forEach(function(value, _, map){
  console.log(`${value}: ${value}`);
})