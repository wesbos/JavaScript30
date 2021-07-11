# JS and CSS Clock :alarm_clock:

The challenge is to create a JavaScript and CSS Clock, updating time by using the `setInterval()` method and the CSS `rotate()` function.

## Lessons Learned

I created the structure and functionalities of the challenge following Wes video, but I created the HTML elements using JavaScript.

I added some features in order to make the clock look more realistic, such as roman numerals as hour indicators, and notches as seconds indicators.

I searched in Stack Overflow for a solution to convert numbers to roman numerals and I found this blog post about it: [JavaScript Roman Numeral Converter].

The CSS is almost the same as the one provided by Wes.

I wanted the Clock indicators to vary in width, so I added a span child to each element, centering it using [CSS Flexbox].

I used [CSS Variables] to set the font style, colors and backgrounds.

[javascript roman numeral converter]: https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
[css flexbox]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
[css variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
