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

const people = [
'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = inventors.filter(inventor => 
  (inventor.year >= 1500 && inventor.year < 1600));
console.table(bornIn1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => 
  (`${inventor.first} ${inventor.last}`));
console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedByAge = inventors.sort((a, b) => a.year > b.year? 1: -1);
console.table(sortedByAge);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const sumLiveYears = inventors.reduce((sumYear, inventor) => {
  return sumYear + (inventor.passed - inventor.year);
},0);
console.log(`All inventors live ${sumLiveYears} all together`);

// 5. Sort the inventors by years lived
const sortedByLivedYear = inventors.sort((a, b) => {
  return (a.passed - a.year) < (b.passed - b.year)? 1: -1;
});
console.table(sortedByLivedYear);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll('a'));
// // querySelectorAll 抓下來的會是 NodeList，不是 array，所以沒有這些好用的 function，
// // 因此用 Array.from()把 NodeList 轉成 function，在 ES6 也可以寫成：
// // const links = [...category.querySelectorAll('a')];
// const names = links.map(link => link.textContent);
// // 抓出 links 裡面的名字
// const deInNames = names.filter(name => name.includes("de"));
// // 抓出有 de 的名字


// 7. sort Exercise
// Sort the people alphabetically by last name
function getLastName(name){
  return name.split(', ')[1];
}
const sortByLastName = people.sort((p1, p2) => {
  return getLastName(p1) > getLastName(p2)? 1: -1;
  // 1 跟 -1 可以想像是把他的 rank 分數加減分，rank 分數越高排越後面
});

console.log(sortByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const transportation = data.reduce((obj, item) => {
  item in obj? obj[item]++: obj[item] = 1;
  return obj;
},{});
console.log(transportation);