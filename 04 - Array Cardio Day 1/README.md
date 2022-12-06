# 04- Array Cardio Day 4
Perform basic operations 
```(console.table(), filter(), map(), sort(), reduce()``` 
on JS Arrays.

![App Screenshot](https://github.com/Huiclaire/JavaScript30/blob/master/04%20-%20Array%20Cardio%20Day%201/image/js30-day4.png)


## Lesson learned

### filter
- here I learned a compact way to return a value instead of an if-statement returning true. <br>
```javascript
const fifteens = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
```
- use ```console.table()``` instead of ```console.log()``` can display result in a more clean way.

### map

- use '${}' instead of '+' for concatenation
```javascript
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
```

### reduce
```obj``` is an element passed in to the ```reduce()``` function which will gather data over each iteration. and the result is just reduced the "numbers" collection into the "total" variables. which means every time you find yourself going from a list of values to one value (reducing), then you can use this method.
