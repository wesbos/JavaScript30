JavaScript Reference vs Copy
-fundamental to understand how JavaScript works
-important for when you get into nested data

team is a reference to the original array, players
so when you update any of the arrays or references, it references back and updates both
-so what we then need to do is make a copy rather than make a reference

array.slice()
- if you pass in nothing, it makes a copy of the array
-alternatively you can make a new array and concat the contents of another array
-can also use es6 spread

similar concept with objects but think about how far you want to deep clone
