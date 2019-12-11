// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isBiggerThan19 = function (element) {
    const currentYear = (new Date().getFullYear());
    return currentYear - element.year >= 19 ;
};
console.log('Is at least 1 person older than 19?', people.some(isBiggerThan19));
// Array.prototype.every() // is everyone 19 or older?
console.log('Is everyone 19 or older?', people.every(isBiggerThan19));

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(element => element.id === 823423);
console.log('The element that had the ID of 823423 is: ', comment.text)

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex((element) => element.id === 823423 );
// delete the comment with the ID of 823423
comments.splice(index,1);
console.table(comments);
