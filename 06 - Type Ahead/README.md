# 06- Ajax Type Ahead
Filter through a JSON based on what is being typed

![App Screenshot](https://github.com/Huiclaire/JavaScript30/blob/master/06%20-%20Type%20Ahead/images/ja30-day6.png)


## Lesson learned

### 1. `change` & `keyup` events <br>
`change` only fires when we leave the input;`keyup` fires up within the input.
### 2. Promise: `fetch()`, `then()`, `json()`
### 3. Array: `filter()`, `map()`, `push()`, `join()`
### 4. RegExp: `match()`, `replace()`<br>
Use regex to replace the word with highlighted value
```javascript
const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
```
