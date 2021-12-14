const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    cities.push(...data);
  });

console.log(cities);
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    const regx = new RegExp(wordToMatch, "gi");
    return place.city.match(regx) || place.state.match(regx);
  });
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const displayMatches = (e) => {
  const matchArray = findMatches(e.target.value, cities);
  console.log(matchArray);
  const html = matchArray
    .map((place) => {
      const regx = new RegExp(e.target.value, "gi");
      const cityName = place.city.replace(
        regx,
        `<span class="hl">${e.target.value}</span>
      `
      );
      const stateName = place.state.replace(
        regx,
        `<span class="hl">${e.target.value}</span>
      `
      );
      return `<li><span class="name">${cityName}, ${stateName}</span><span class="population">${numberWithCommas(
        place.population
      )}</span></li>`;
    })
    .join("");
  suggestions.innerHTML = html;
};

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
