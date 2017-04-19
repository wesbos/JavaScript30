//separate divs for different clock hands, clock face, etc.

we will write some of the css 

initially, the divs are stacked upon each other, we're going to apply a rotate to each of the hands depending on what time it currently is

by default, the hands will rotate based off the exact middle of the element, but we want to rotate them off the very right hand side

by default, transform-origin is set to 50%, setting it to 100% (this is for the x-axis)

use transform: rotate(90deg) to make them all face vertically

apply a bit of a transition

//start javascript with the second hand since it ticks the most

//have the second hand tick every second aka 1000ms

we need to make the second hand correspond to 360 degrees, 0s = 0 deg and so forth

so the formula is seconds / 60 (because 60 seconds = 1 rotation) x 360 to represent degrees

because we offset by 90degree to begin with, we change add 90 to the offset to seconds degrees to be
const secondDegrees = ((second / 60 ) * 360) + 90;

there is a strange skip when it gets near 360 degrees because it goes from 360 -> 0 with the 90deg offset (it goes to the final amount and then to 0 or 90 degrees and goes backwards rather then forward)

could either tally the degrees and keep on counting or take off the transition when it hits the last degree and reapply the transition after