'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //passes in an object, destructure to 4 variables
  //can set default values as well when passing in an object
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }
};

restaurant.orderDelivery({
  time: '22: 30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
});


///Destructuring Objects
//Use {} for destructuring
//remeber order of elements does not matter in objects, so do not need to skip like we do with arrays

//creates three brand new variables 
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//outputs exact same as before
//if you want to change the variable names from the name in object properties
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//no property called menu, but can set a default value
//default values
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;

//want a to become 23 and b to become 7
const obj = {a: 23, b: 7, c:14};

({a,b} = obj);
console.log(a,b);

// nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);

///Destructuring Arrays
//destructuring is unpacking a data structure into small pieces
//if you wanted to without 

/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring way
const [x, y, z] = arr;
//console.log(x,y,z);


//with our restaurant example
let [first, second] = restaurant.categories;
//console.log(first, second);

//say we wanted just the first and third elements
//just leave an empty whole for element we don't want
let [main, ,secondary] = restaurant.categories;
//console.log(main, secondary);

//if we want to reassign values
//switching variables
[main, secondary] = [secondary, main];
//console.log(main, secondary); //now returns vegetarian italian instead of italian vegetarian

//want element 2 and 0 from starter and main menu
//console.log(restaurant.order(2,0));
const [starter, mainCourse] = restaurant.order(2,0);
//console.log(starter, mainCourse);


//what about nested arrays
const nested = [2, 4, [5,6]];
//const [i, ,j] = nested;
//console.log(i,j);
const [i, ,[j, k]] = nested;
//console.log(i, j, k);

*/



