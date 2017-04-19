Notes:
Goal: Use JS to add a class to toggles a CSS class (playing) for the clock and trigger sounds

-Use of data-key to assign the keycode to the respective buttons

-Corresponding audio elements will be played/triggered

-Data attributes, if you're making a new attribute name it using data-

-Focus on listening on a keydown event

-Javascript event (e) is object describing what happened

-use attribute selector to determine what is played

-ES6 template strings: ${}

-calling audio.play on an element that is already playing won't work, so we have to rewind it using audio.currentTime = 0;

-select audio element to play based on the key that is pressed down
-select the div element with class key in order to trigger css class and animation

-timeouts are tricky because when css transitions are involved, timings may need to be matched

-there are transition events - that basically are events that let us know they 
transitioned/changed/scaled/etc.
-we can't do keys.addEventListener.. because we have to loop over each element in an array, hence forEach()

-use of transitionend event
-typically want to focus on the longest duration transition event