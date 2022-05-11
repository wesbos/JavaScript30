"use strict";
const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const input = document.querySelector("input.search");
const listWrapper = document.querySelector("ul.suggestions");
const cities = [];
const listItemsDefault = "<li>Filter for a city</li><li>or a state</li>";
fetch(endpoint)
    .then((data) => data.json())
    .then((data) => {
    cities.push(...data);
});
if (input) {
    input.addEventListener("input", handlerInput);
}
function localizeNumber(x = '') {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function isMatch(item, regExp) {
    return !!item.city.match(regExp) || !!item.state.match(regExp);
}
function renderListItem(item, regExp) {
    const { city, state, population } = item;
    const title = `${city}, ${state}`.replace(regExp, `<span class="hl">$1</span>`);
    const count = localizeNumber(population);
    return `<li><span>${title}</span><span class="population">${count}</span></li>`;
}
function handlerInput() {
    if (listWrapper === null)
        return;
    const regExp = new RegExp(`(${this.value})`, "gi");
    listWrapper.innerHTML = this.value
        ? cities
            .filter((item) => isMatch(item, regExp))
            .map((item) => renderListItem(item, regExp))
            .join("")
        : listItemsDefault;
}
