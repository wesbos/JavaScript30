left button will handle volume, right will handle speed
yellow bar will handle time

css was done ahead of time, html just consists of divs with the bottom div being transitioned via css

input for slider with steps to represent notches

3 pieces:
get elements
build functions
hook up event listeners

paused is a property that exists on the video, there is no playing property

hook the togglePlay to video for when you click on it or press play/pause

we want to listen to the video for whenever it is paused - so that whenever it is paused we can update the play button

for our updateButton function, we use this.paused because this is bound to the video itself in this case

skip function:
need to understand how much the video is going to be skipped
-we're usin data-skip values to go back 10seconds and forward 25 seconds
-we can put data-skips on anything

elements are also named in order to be able to handle range updates
* although not done in this exercise, we can add more event handlers so that the ranges update whenever the mouse is down and dragged across, similar to the canvas exercise *

progress bar:
0% = not started, 100% finished
need to calculate progress and use % value
we need to make sure the video starts and whenever the time updates, we run the function

also going to scrub the video..
offsetWidth gives entire width of the bar
because of the mousedown && scrub(e) conditions, we need both to pass in order for the scrub function to fire because if mousedown returns false, it returns before executing scrub