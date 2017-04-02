Going to make things slide in as we scroll.

Going to deal with window events and DEBOUNCING - so that things aren't constantly happening.

First select all the images that we're listening for.

By default, all of our images are hidden right now (they are currently translated off screen via css and scaled down a bit for a fade in effect).
When they scroll into view, we're going to bring the opacity to 1 and translate the X coord to 0 to bring it back to where it was and set opacity to 1.

Initially, we add an event listener on the window to call the function checkSlide when we scroll, but it is called everytime we scroll so we need to debounce it to make it so that it only runs at set intervals.

For the debounce function, you pass it a function, and it'll run debounce all the time when we scroll, but only runs the function every X seconds (whatever wait is set to)
-pay attention to when you want to debounce functions

We need to loop over every single image and figure out where it needs to be shown.

"we need to think about when we want to show the image.. 'when at least 50% of the image is visible we should consider showing it'"

we need to figure out how far has the page been scrolled down?
window.scrollY tells us where we are from the top of the browser, 
-so we use window.scrollY + window.innerHeight 
-also subtract half the image height because we want it to trigger when we've scrolled to about half the height

we also want to figure out where the bottom of the image is at 
-we find it by grabbing the offsetTop of the image and add the height in px to know where the bottom is

we're also setting a boolean to determine if the isHalfShown
we set some other booleans to determine whether or not we show the image and if we've past it or not

note: this exercise constantly toggles visibility and doesn't keep things visible if theyve scrolled into vision already

