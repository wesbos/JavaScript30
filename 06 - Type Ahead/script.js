const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let listOfCities = [];

fetch(endpoint)
  .then(
    function(response) {
      response.json().then(function(data) {
        listOfCities = data;
      });
    }
  )

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function printPlaces(array, input) {
    const ul = document.querySelector('.suggestions');
    
    html = array.map(place => {
        const regex = new RegExp(input, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${input}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${input}</span>`);
        return `
        <li>
        <span class="name"> ${cityName}, ${stateName}</span>
        <span class="population"> ${numberWithCommas(place.population)} </span>
        </li>`;
    }).join('');
    ul.innerHTML = html;
}

function getResults() {
    const results = listOfCities.filter(cities => {
        return cities.city.toLowerCase().indexOf(this.value)!== -1 || cities.state.toLowerCase().indexOf(this.value)!== -1 
    });
    printPlaces(results, this.value);
}

const input = document.querySelector('.search');

input.addEventListener('input', getResults);