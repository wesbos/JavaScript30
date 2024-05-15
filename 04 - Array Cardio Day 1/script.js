// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = ["Bernhard, Sandra", "Bethea, Erin", "Becker, Carl", "Bentsen, Lloyd", "Beckett, Samuel", "Blake, William", "Berger, Ric", "Beddoes, Mick", "Beethoven, Ludwig", "Belloc, Hilaire", "Begin, Menachem", "Bellow, Saul", "Benchley, Robert", "Blair, Robert", "Benenson, Peter", "Benjamin, Walter", "Berlin, Irving", "Benn, Tony", "Benson, Leana", "Bent, Silas", "Berle, Milton", "Berry, Halle", "Biko, Steve", "Beck, Glenn", "Bergman, Ingmar", "Black, Elk", "Berio, Luciano", "Berne, Eric", "Berra, Yogi", "Berry, Wendell", "Bevan, Aneurin", "Ben-Gurion, David", "Bevel, Ken", "Biden, Joseph", "Bennington, Chester", "Bierce, Ambrose", "Billings, Josh", "Birrell, Augustine", "Blair, Tony", "Beecher, Henry", "Biondo, Frank"];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const test = inventors.filter((age) => age.year < 1800);
console.table(test);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const mapping = inventors.map((inventor) => inventor.first + " " + inventor.last);
console.table(mapping);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorts = inventors.sort((a, b) => a.year - b.year);
console.table(sorts);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const years = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(years);
// 5. Sort the inventors by years lived
const yearsLived = inventors.sort((a, b) => {
  const first = a.passed - a.year;
  const second = b.passed - b.year;
  return first - second;
});
console.table(yearsLived);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const de = inventors.filter((inventor) => inventor.first.includes("da"));
console.log(de);

// [...variable] this to create and array and then put that variable into it
const array = [...document.querySelectorAll("a")];
console.log(array.map((inv) => inv.textContent));
// 7. sort Exercise
// Sort the people alphabetically by last name
const peoples = people.sort((a, b) => {
  const [afirst, asecond] = a.split(", ");
  const [bfirst, bsecond] = b.split(", ");
  return asecond - bsecond;
});
console.log(peoples);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];
const sumup = data.reduce((obj, item) => {
  if (obj[item]) {
    obj[item]++; // If the property already exists, increment its value
  } else {
    obj[item] = 1; // If the property doesn't exist, set it to 1
  }
  return obj; // Return the updated accumulator
}, {});
console.log(sumup);
