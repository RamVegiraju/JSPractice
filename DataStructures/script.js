'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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
};


//destructuring is unpacking a data structure into small pieces
//if you wanted to without destructuring
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring way
const [x, y, z] = arr;
console.log(x,y,z);


//with our restaurant example
let [first, second] = restaurant.categories;
console.log(first, second);

//say we wanted just the first and third elements
//just leave an empty whole for element we don't want
let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

//if we want to reassign values
//switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary); //now returns vegetarian italian instead of italian vegetarian

//want element 2 and 0 from starter and main menu
console.log(restaurant.order(2,0));
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);


//what about nested arrays
const nested = [2, 4, [5,6]];
//const [i, ,j] = nested;
//console.log(i,j);
const [i, ,[j, k]] = nested;
console.log(i, j, k);