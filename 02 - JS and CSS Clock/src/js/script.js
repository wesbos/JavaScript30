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
