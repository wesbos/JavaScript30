// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500 = inventors.filter(function(invt){
  if (invt.year >= 1500 && invt.year < 1600) {
    //return true if you want to keep it
    return true;
  }
});

// //es6
// const inventors1500 = inventors.filter(invt => invt.year >= 1500 && invt.year < 1600)
//displays a table instead
console.table(inventors1500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const invtNames = inventors.map(function(invt){
  return invt.first + " " + invt.last
})

// //es6
// const invtNames = inventors.map(invt => invt.first + " " + invt.last)
console.log(invtNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const invtBirth = inventors.sort(function(a,b){
  return a.year - b.year
})
// //es6
// const invtBirth = inventors.sort((a,b) => a.year - b.year)
console.table(invtBirth);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
//the ,0 is the intial value for the reduce to use
const yearsLived = inventors.reduce(function(total, invt){
  return total + (invt.passed - invt.year)
},0)

//es6
// const yearsLived = inventors.reduce((total, invt) => total + (invt.passed - invt.year),0)
console.log(yearsLived);

// 5. Sort the inventors by years lived
const sortLifeSpan = inventors.sort(function(a,b){
  return (a.passed - a.year) - (b.passed - b.year)
})

// //es6
// const sortLifeSpan = inventors.sort((a,b) => (a.passed - a.year) - (b.passed - b.year))

console.table(sortLifeSpan);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// //es6 [...] spreads out the nodelist into an array can also use Array.from();
// const links = [...category.querySelectorAll('a')]
//
// const de = links
//         .map(link => link.textContent)
//         .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name

const sortByLast = people.sort((a,b) => {
  const [alast, afirst] = a.split(", ")
  const [blast, bfirst] = b.split(", ")
  return alast > blast ? 1 : -1
})
console.log(sortByLast);
// console.log(sortByLast);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const instances = data.reduce(function(obj, item) {
  if(!obj[item]){
    obj[item] = 0
  }
  obj[item]++;
  return obj
},{})

console.log(instances);
