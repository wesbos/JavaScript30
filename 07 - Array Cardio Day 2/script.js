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
// const is19 = people.some(function(person) {
//   const currentYear = (new Date()).getFullYear();
//   if(currentYear - person.year >= 19){
//     return true
//   }
// })

//es6
const is19 = people.some(people =>((new Date()).getFullYear()) - people.year >= 19)
console.log(is19);

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(people =>((new Date()).getFullYear()) - people.year >= 19)
console.log(allAdults);


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// const comment = comments.find(function(com) {
//   if (com.id === 823423) {
//     return true;
//   }
// })

//es6
const comment = comments.find(com => com.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(com => com.id === 823423);

// comments.splice(index,1)
// console.table(comments);

//can also create a new array to preserve the original data
const newComments =[
  ...comments.slice(0,index),
  ...comments.slice(index + 1)
]
console.table(newComments)
