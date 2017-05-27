const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//place to hold the city information
const cities = [];

//fetch returns a promise
fetch(endpoint)
    //use the return promise as the information for the .json() promise
    .then(data => data.json())
    ///spread the data that comes back into the cities array with an es6 spread
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function numbersWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
}

function displayMatches(){
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
    //return html elements
    return`
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">pop ${numbersWithCommas(place.population)}</span>
    </li>
    `;
    //this will turn the array into a string and will be connected on the screen
  }).join('');
  suggestions.innerHTML = html;
}

//select elements in the DOM
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
//add event listeners to DOM elements
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
