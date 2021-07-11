# JS and CSS Clock

The challenge is to create a JavaScript and CSS Clock, updating time by using the `setInterval()` method and the CSS `rotate()` function.

## Lessons Learned

I created the structure and functionalities of the challenge following Wes video, but creating HTML elements with JavaScript.

I added some features in order to make the clock look more realistic and classy :wink:, such as roman numerals as hour indicators, and notches as seconds indicators.

I searched in Stack Overflow for a solution to convert numbers to roman numerals and I found this blog post about it: [JavaScript Roman Numeral Converter].

The CSS is almost the same as the one provided by Wes.

I wanted the Clock indicators to vary in width, so I added a span child to each element, centering it using [CSS Flexbox].

I used [CSS Variables] to set the font style, colors and backgrounds.

### JavaScript

```JavaScript
/**
 * Convert number to roman numerals.
 * @function romanize
 * @param {number} number
 * @see {@link https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter}
 * @returns {string} roman
 */
function romanize(number) {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  let num = number;
  Object.entries(lookup).forEach((i) => {
    while (num >= i[1]) {
      roman += i[0];
      num -= i[1];
    }
  });
  return roman;
}
/**
 * Create HTML elements.
 * @function createClock
 */
function createClock() {
  const elements = [
    "clock",
    "clockFace",
    "notches",
    "notch",
    "hours",
    "hour",
    "dot",
    "hands",
    "hrsHand",
    "minHand",
    "secHand",
  ];
  const nodes = {};
  const notches = 60;
  const hours = 12;
  let div;
  let span;
  elements.forEach((element) => {
    switch (element) {
      case "clock":
      case "clockFace":
      case "notches":
      case "hours":
      case "hands":
        div = document.createElement("div");
        div.classList.add(element);
        nodes[element] = div;
        break;
      case "notch":
        for (let index = 0; index < notches; index += 1) {
          const notchesDeg = index * 6 + 90;
          div = document.createElement("div");
          span = document.createElement("span");
          div.classList.add(element);
          div.appendChild(span);
          div.style.transform = `rotate(${notchesDeg}deg)`;
          nodes.notches.appendChild(div);
        }
        break;
      case "hour":
        for (let index = 1; index <= hours; index += 1) {
          const hrsDeg = index * 30 + 90;
          div = document.createElement("div");
          span = document.createElement("span");
          span.innerHTML = romanize(index);
          div.classList.add(element);
          div.appendChild(span);
          div.style.transform = `rotate(${hrsDeg}deg)`;
          span.style.transform = `rotate(-${hrsDeg}deg)`;
          nodes.hours.appendChild(div);
        }
        nodes.hours.insertBefore(nodes.hours.lastChild, nodes.hours.firstChild);
        break;
      case "dot":
        div = document.createElement("div");
        span = document.createElement("span");
        div.classList.add(element);
        div.appendChild(span);
        nodes[element] = div;
        break;
      case "hrsHand":
      case "minHand":
      case "secHand":
        div = document.createElement("div");
        span = document.createElement("span");
        div.classList.add("hand", element);
        div.appendChild(span);
        nodes.hands.appendChild(div);
        break;
      default:
        break;
    }
  });
  nodes.clockFace.appendChild(nodes.notches);
  nodes.clockFace.appendChild(nodes.hours);
  nodes.clockFace.appendChild(nodes.dot);
  nodes.clockFace.appendChild(nodes.hands);
  nodes.clock.appendChild(nodes.clockFace);
  document.body.appendChild(nodes.clock);
}
/**
 * Update Date.
 * @function updateDate
 */
function updateDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hrs = now.getHours();
  const secHand = document.querySelector(".secHand");
  const minHand = document.querySelector(".minHand");
  const hrsHand = document.querySelector(".hrsHand");
  const timeToDegree = (time, multiplier = 1) => time * (multiplier * 6) + 90;
  const secDegree = timeToDegree(sec);
  const minDegree = Math.floor(timeToDegree(min) + (sec * 6) / 60);
  const hrsDegree = Math.floor(timeToDegree(hrs, 5) + (min * 30) / 60);
  secHand.style.transition =
    sec === 0 ? "none" : "transform 75ms cubic-bezier(0, -1, 0, 2)";
  minHand.style.transition =
    sec === 0 ? "none" : "transform 75ms cubic-bezier(0, -1, 0, 2)";
  hrsHand.style.transition =
    sec === 0 ? "none" : "transform 75ms cubic-bezier(0, -1, 0, 2)";
  secHand.style.transform = `rotate(${secDegree}deg)`;
  minHand.style.transform = `rotate(${minDegree}deg)`;
  hrsHand.style.transform = `rotate(${hrsDegree}deg)`;
}
createClock();
setInterval(updateDate, 50);
updateDate();
```

### CSS

```CSS
/* Variables */
:root {
  --sans-serif:
    -apple-system,
    blinkmacsystemfont,
    avenir next,
    avenir,
    segoe ui,
    helvetica neue,
    helvetica,
    ubuntu,
    roboto,
    noto,
    arial,
    sans-serif;
  --dark: #121212;
}

/* Reset */
* {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  margin: 0;
}

body {
  font-family: var(--sans-serif);
}

/* Main */
.clock {
  border-radius: 100%;
  box-shadow: 0 0 0 0.5rem var(--dark);
  height: 16rem;
  margin: 2rem auto;
  position: relative;
  width: 16rem;
}

.clockFace,
.notches {
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: 100%;
}

.hours,
.dot,
.hands {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.dot {
  align-items: center;
  display: flex;
  justify-content: center;
}

.dot > span {
  background-color: var(--dark);
  border-radius: 100%;
  height: 1rem;
  width: 1rem;
}

.hours {
  transform: translateY(-1rem);
}

.hours > .hour {
  align-items: center;
  display: flex;
  height: 2rem;
  left: 0;
  position: absolute;
  top: 50%;
  transform: rotate(90deg);
  transform-origin: right;
  width: 50%;
}

.hour span {
  margin-left: 1.5rem;
}

.notches {
  transform: translateY(-0.125rem);
}

.notches > .notch {
  align-items: center;
  display: flex;
  height: 0.25rem;
  left: 0;
  position: absolute;
  top: 50%;
  transform: rotate(90deg);
  transform-origin: right;
  width: 50%;
}

.notch span {
  background-color: var(--dark);
  height: 0.0625rem;
  margin-left: 0.125rem;
  width: 5%;
}

.notch:nth-child(1) span {
  width: 10%;
}

.notch:nth-child(5n+1) span {
  height: 0.125rem;
  width: 10%;
}

.hands {
  transform: translateY(-0.125rem);
}

.hands > .hand {
  align-items: center;
  display: flex;
  height: 0.25rem;
  justify-content: flex-end;
  left: 0;
  position: absolute;
  top: 50%;
  transform-origin: right;
  width: 50%;
}

.hand span {
  background-color: var(--dark);
  height: 0.25rem;
  width: 80%;
}

.hand.hrsHand span {
  height: 0.25rem;
  width: 50%;
}

.hand.secHand  span{
  height: 0.125rem;
  width: 90%;
}
```

[javascript roman numeral converter]: https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
[css flexbox]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
[css variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
