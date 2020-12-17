'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
const getCountryData = function (country) {
    //function to take in country name and output information

    //XML HTTP Request way of doing calls AJAX way, old-school way
    const request = new XMLHttpRequest();

    //ensure CORS is yes or unknown to be able to access third party API
    //REST Countries does not need authorization
    //API Endpoint, want to search API by country name

    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    //register a callback on the request object
    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    });
  };
  getCountryData('portugal');
  getCountryData('usa');
  getCountryData('germany');

  */






  //Callback
  //MUltiple AJAX calls

  const renderCountry = function(data, className = '') {

    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
  };

  /*
  const getCountryAndNeighbor = function (country) {
    //function to take in country name and output information

   //AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    //register a callback on the request object
    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);

      //Render country 1
      renderCountry(data);


      //Get neighbor country
      const [neighbour] = data.borders;

      if(!neighbour) return;

      //AJAX Call country 2
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
      request2.send();

      request2.addEventListener('load', function() {
        const data2 = JSON.parse(this.responseText);
        console.log(data2);

        renderCountry(data2, 'neighbour');
      })
    });
  };
  //getCountryAndNeighbor('portugal');
  getCountryAndNeighbor('usa');
*/

  //callback hell: nested callbacks to execute asychrnonous tasks in a sequence
  //problem, makes code hard to maintain and understand
  //promises help rectify this issue

  /*
  setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
      console.log('2 seconds passed');
      setTimeout(() => {
        console.log('3 second passed');
        setTimeout(() => {
          console.log('4 second passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000); */





//const request = new XMLHttpRequest();
//request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//request.send();

//fetch returns a PROMISE
//const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
//console.log(request);

//once we make the fetch call and get a promise, we use a then method for a callback function
//then methods are associated with promises

/*
const getCountryData = function(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response) {
    console.log(response);
    //json method is available on all responses/results from a fetch call
    //the json function is also asychronous so it returns a promise
    return response.json();
    //need to handle this promise as well with another then
  }).then(function(data){
    console.log(data);
    renderCountry(data[0]);
  })
}; */

//simplifying with arrow functions
//still using callbacks but get rid of callback hell
//chaining promises to get the neighboring country
//then method always returns a promise
//the value we return becomes the fulfilled value of the promise
//never want both nested in the same then method, this returns to callback hell


///Handling Rejected Promises

//function to render the error on screen
const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

/*

const getCountryData = function(country) {
  //Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if(!neighbour) return;

      //Country neighbour call for country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    //response is what we are returning from the previous then, using response to categorize a promise because a promise is returned from the fetch call
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    //catching the error, errors propagate down the chain
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}. Try again!`);
  })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })
};

btn.addEventListener('click', function() {
  getCountryData('india');
}); */


//cannot read a countyr like this that does not exist
//getCountryData('asjkdnslajk')



//Event Loop in Practice

//sychnronous events run first as expected
/*
console.log('Test start'); //first output
setTimeout(() => console.log('O sec timer'), 0); //last output takes second priority to microtasks queue
Promise.resolve('Resolved promise 1').then(res => console.log(res)); //third output promise takes first priority (microtasks queue)

Promise.resolve('Resolved promise 2').then(res => {
  //microtask takes a long time looping through a larger number
  //the function in the callback queue will be delayed now till this is done
  for (let i = 0; i < 10000000; i++) {
  }
  console.log(res);
});

console.log('Test end'); //second output */



//Building a Simple Promise

//promise constructor (just a special object in JS)
//takes in one arg: executor function which takes in resolve reject functions to mark the promise
/*
const lotteryPromise = new Promise(function(resolve, reject) {
  //fulfilled promise, set as fulfilled with a resolve function
  
  console.log('Lottery draw is happening ');
  setTimeout(function() {
    if(Math.random() >= 0.5) {
      resolve('You WIN');
    }else {
      reject(new Error('You lost your money'));
    }
  },2000)
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));


//promisfy setTimeout function
const wait = function(seconds) {
  return new Promise(function(resolve){
    setTimeout(resolve, )
  })
}*/




//Consuming Promises with Async & AWAIT
//Inside an async function can have one or more await function

/*
const whereAmI = async function(country) {

  //await keyword stops code execution at this point till the promise is fulfilled
  //stopping execution in async function is not a problem, it is already running asynchronously
  //before we had to use callback functions/ use the then method
  //looks a lot more like synchronous code
  //async await is just syntactic sugar of the then method
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  console.log(res);
  const data = await res.json(); //returns a new promise normally we would chain another then 
  console.log(data);
  renderCountry(data[0]);
};

whereAmI('portugal');
console.log('FIRST'); */

/*
Simple try catch example
try {
  let y = 1;
  const x = 2;
  x = 3; //cannot reassign a constant
  //if no error we get no error
} catch(err) {
  alert(err.message); //error of assignment to constant variable, script does not die
} 
*/



///try catch w async functions
/*
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country');
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};

whereAmI();
whereAmI();
whereAmI();
console.log('FIRST');
*/


//Returning values from async functions