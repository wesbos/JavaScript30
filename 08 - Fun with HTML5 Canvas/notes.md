click and drag canvas drawing

need to set a canvas and establish a context that is either 2d or 3d (for video games and 3d rendering)
- draw on the context
need to set the canvas to be the size of the window
-by default its 800x800 but we use js to change the dimensions
-we'll use js to set the canvas width and height to the windows inner height and width

also need to set some of the base settings
lineJoin = when a line joins another should it be squared off or rounded off ? - we use round

let isDrawing = false;
- makes it so that when we actually have the cursor down, it'll draw, otherwise it wont
- basically determines whether or not a user can draw based on mouse movement alone or actually have to click and drag

when we draw a line, we need a start x,y and and ending x,y

we don't want to console.log mouse movement all the time if the user isn't drawing, so we use a conditional with the isDrawing 
-need to consider moving off the window too
-- moving off the window and back in doesn't register a mouse up event

-initially, all the lines start from the origin 0,0  because our functions have yet to change the starting points

HSL - the rainbow
0-360 spectrum
hue = 0 and hue++ --> color change

we increment linewidth from 0 to 100, once its > 100, flip the direction, same for if its less than 1
based on the value, we either increment the linewidth by 1 or decrement it

there's also global composite operator
ctx.globalCompositeOperation = 