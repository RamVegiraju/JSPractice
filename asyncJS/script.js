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
/*
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
const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);

