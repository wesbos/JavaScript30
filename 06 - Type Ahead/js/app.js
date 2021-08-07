const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((response) => cities.push(...response));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // figure out if city of state matches what was searched
    const regex = new RegExp(wordToMatch, "gi"); // g means globally, and i means that it's case insensitive
    return place.city.match(regex) || place.state.match(regex);
  });
}

const searchBar = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchBar.addEventListener("change", displayMatches);
searchBar.addEventListener("keyup", displayMatches);

function displayMatches() {
  const matchArray = findMatches(this.value, cities);

  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");

      // Creates class span to highlight the name of a matched city
      const cityName = place.city.replace(
        regex,
        `<span class=\"hl\">${this.value}</span>`
      );

      // Creates class span to highlight the name of a matched state
      const stateName = place.state.replace(
        regex,
        `<span class=\"hl\">${this.value}</span>`
      );

      // Adds a new li element when a matching city or state are found in the dataset
      return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${new Intl.NumberFormat().format(
              place.population
            )}</span>
        </li>
    `;
    })
    .join("");

  suggestions.innerHTML = html;
}
