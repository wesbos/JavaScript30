/*---------- Renaud Vmb ----------*/

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filters = inventors.filter(e => e.year < 1600 && e.year >= 1500);
console.table(filters);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const array = inventors.map(e => e.last && e.first);
console.table(array);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sort = inventors.sort((a, b) => a.year - b.year);
console.table(sort);

// Array.prototype.reduce()
// 4. How many years did all the inventors live, all together ?
const reduce = inventors.reduce((a, b) => a + (b.passed - b.year), 0);
console.table(reduce);

// 5. Sort the inventors by years lived
const yearLived = inventors.sort(function (a, b) {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return  nextInventor - lastInventor;
});
console.table(yearLived);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*Can't do it without API*/

// 7. sort Exercise
// Sort the people alphabetically by last name

/*
    const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'
    const comma = ','
    splitString(monthString, comma);

    The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
    The separator is: ","
    The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
*/

const sortAlphabet = people.sort((a, b) => {
    const [aLast] = a.split(', ');
    const [bLast] = b.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.table(sortAlphabet);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const uniqueData = data.filter((e, index) => {
    return data.indexOf(e) === index;
});

console.table(uniqueData);
