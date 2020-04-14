const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
	// promise to convert blob from raw data into JSON
	.then(blob => blob.json())
	// promise that pushes every item into the array using spread operator
	.then(data => cities.push(...data))

// determine if entered text matches any existing cities/states
function findMatches(wordToMatch, cities) {
	return cities.filter(place => {
		// create regular expression passing in entered text globally, insensitive
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex)
	});
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// function to run the findMatches function after change/keyup events
function displayMatches() {
	const matchArray = findMatches(this.value, cities);
		const html = matchArray.map(place => {
			const regex = new RegExp(this.value, 'gi');
			const cityName = place.city.replace(regex, `<span  class="highlight">${this.value}</span>`);
			const stateName = place.state.replace(regex, `<span  class="highlight">${this.value}</span>`);
			return `
				<li>
					<span class="name">${cityName}, ${stateName}</span>
					<span class="population">${numberWithCommas(place.population)}</span>
				</li>
			`;
		}).join('');
		suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
