# Simple Stopwatch Web Application

This is a basic web application that displays a stopwatch implemented using vanilla JavaScript. The page includes a timer with seconds and tenths of a second, as well as buttons to start, stop, and reset the stopwatch.

## How to Use

1. Open the `index.html` file in a web browser.

2. The stopwatch will start at 00:00.

3. Click the "Start" button to begin the stopwatch.

4. Click the "Stop" button to pause the stopwatch.

5. Click the "Reset" button to reset the stopwatch to 00:00.

## Project Structure

- `index.html`: The HTML file containing the structure of the webpage.
- `stopwatch.css`: The CSS file for styling the webpage.
- `stopwatch.js`: The JavaScript file responsible for stopwatch functionality.
<!--
## HTML Structure
The `index.html` file has the following structure:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="stopwatch.css">
    <script src="stopwatch.js"></script>
</head>
<div class="wrapper">
    <h1>Stopwatch</h1>
    <h2>Vanilla JavaScript Stopwatch</h2>
    <p><span id="seconds">00</span>:<span id="tens">00</span></p>
    <button id="button-start">Start</button>
    <button id="button-stop">Stop</button>
    <button id="button-reset">Reset</button>
</div>
</html>
-->
## CSS Styles for Simple Stopwatch Web Application
This CSS file contains the styles used in the Simple Stopwatch web application. It's responsible for the visual appearance of the elements on the page.

## Styles Overview

### Global Styles

- `body`: Sets the background color to `#ffa600`, which is a shade of orange.
- Sets the font family for the entire page to a list of fallback fonts to ensure readability.

### Wrapper Styles

- `.wrapper`: Defines the styles for the main content wrapper.
  - Sets a fixed width of `800px`.
  - Centers the wrapper horizontally on the page using `margin`.
  - Sets the text color to white (`#fff`) for better visibility on the orange background.

### Heading Styles

- `h1`, `h2`, `h3`: Defines the styles for headings.
  - Sets the font family to "Roboto" and specifies font-weight, size, and text transformation.
  - These styles give the headings a modern, uppercase appearance.

### Stopwatch Digits

- `#seconds`, `#tens`: Styles for the stopwatch digits.
  - Increases the font size for better visibility.

### Button Styles

- `button`: Defines the styles for buttons.
  - Sets rounded corners using various vendor-specific properties for maximum browser compatibility.
  - Sets the background color to the same orange as the body.
  - Text color is white (`#fff`).
  - Adds a white border.
  - Adjusts padding, width, and margins.
  - Removes the default button outline.

- `button:hover`: Defines styles for button hover states.
  - Transitions the background color, border, and text color to create a hover effect.
  - When hovered over, the button's background becomes white, and the text color changes to the orange color used in the body.

## Usage

These styles are designed to be used in conjunction with the HTML structure of the Simple Stopwatch web application. You can customize the CSS as needed to modify the appearance of the elements.

Feel free to adjust colors, fonts, and other properties to match your desired design.

To apply these styles, link this CSS file in your HTML document, like so:

<!--```html
<link rel="stylesheet" href="stopwatch.css">-->

## JavaScript Timer

This code creates a simple timer that counts seconds and tenths of a second when you click buttons. It uses JavaScript to update the timer display.

```javascript
window.onload = function () {
  
    var seconds = 0; 
    var tens = 0; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick = function() {
      clearInterval(Interval);
    }
  
    buttonReset.onclick = function() {
      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
    }
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    }
}

