interface ICity {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
  population: string;
  rank: string;
  state: string;
}

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const input: HTMLInputElement | null = document.querySelector("input.search");
const listWrapper: HTMLUListElement | null =
  document.querySelector("ul.suggestions");
const cities: ICity[] = [];
const listItemsDefault = "<li>Filter for a city</li><li>or a state</li>";

fetch(endpoint)
  .then((data) => data.json())
  .then((data: ICity[]) => {
    cities.push(...data);
  });

if (input) {
  input.addEventListener("input", handlerInput);
}

function localizeNumber(x: string | number = '') {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function isMatch(item: ICity, regExp: RegExp) {
  return !!item.city.match(regExp) || !!item.state.match(regExp);
}

function renderListItem(item: ICity, regExp: RegExp) {
  const { city, state, population } = item;
  const title = `${city}, ${state}`.replace(
    regExp,
    `<span class="hl">$1</span>`
  );
  const count = localizeNumber(population)

  return `<li><span>${title}</span><span class="population">${count}</span></li>`;
}

function handlerInput(this: HTMLInputElement) {
  if (listWrapper === null) return;

  const regExp = new RegExp(`(${this.value})`, "gi");

  listWrapper.innerHTML = this.value
    ? cities
        .filter((item) => isMatch(item, regExp))
        .map((item) => renderListItem(item, regExp))
        .join("")
    : listItemsDefault;
}
