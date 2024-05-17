const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const cities = [];
fetch(endpoint)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => cities.push(...data));

const selected = (value, cities) => {
  return cities.filter((item) => {
    const regex = new RegExp(value, "gi");
    return item.city.match(regex) || item.state.match(regex);
  });
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
const display = () => {
  const match = selected(search.value, cities);
  const city = match.map((item) => {
    const regex = new RegExp(search.value, "gi");
    const cityName = item.city.replace(regex, `<span class="hl">${search.value}</span>`);
    const stateName = item.state.replace(regex, `<span class="hl">${search.value}</span>`);
    return `<li><span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommas(item.population)}</span></li>`;
  });
  suggestions.innerHTML = city.join("");
};
search.addEventListener("keyup", display);
