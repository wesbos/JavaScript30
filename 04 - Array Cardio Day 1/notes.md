Array methods
Each inventor is an object, and we have a people array that just has strings 'Last, First'.

For the filter method, you pass in a function with an argument representing a single object from the array

console.table will output a table for you .. mindblown

instead of function(inventor){}, we can use an arrow function
-- guess is that an arrow function is similar to a ternary operator but simply returns true or false based on the conditional
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))

array.prototype.map takes an array and returns a new one after doing something with it of the same length
-always returns same amount of items

sort works by having two items, comparing the two and returning 1 and -1 which bubbles them up in the array

reduce allows you to build something on every single element within the array, think of a for loop without having to use [i]
- we need to give a second argument where we start off our summed/totaled value

Remember the querySelector returns a nodelist, so for the de links exercise, we need to convert it into an array or create an array using es6 spread
-spread takes every item out of an iterable and spit it into an array
1 way is to use Array.from() or to use es6 spread [...] to take every item out of an iterable and put it into a containing array
- array.from is more readable for our purpose

for exercise 7, we can DESTRUCTURE what's returned into two separate variables [last, first]

reduce is one of the most flexible methods
-we start with a blank object, everytime we loop over one we first see if there's a 0 there to work with otherwise we make an entry for it and then increment it
-the parameters object and item: object is data in this case and item would be each item in the object (car, car, truck, etc.);


