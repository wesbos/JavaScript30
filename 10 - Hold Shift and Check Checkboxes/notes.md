Exercise: click one checkbox, hold shift, and selecting a second checkbox checks all of the ones inbetween as well

we need to select all of the checkboxes because we need to listen to them and add eventhandlers

make a variable to assign the last checked checkbox

rather than try to figure out where in the dom the checkboxes are (fragile because it depends on the structure of the html), we're going to loop every single checkbox, create a variable for inbetween areas that is a boolean and toggled on the first/last

we set a flag variable inbetween that is set to false, when we check a checkbox we flip it and then we we loop over the checkboxes up til the other selected checkbox , set their checkboxed value to true if inbetween is true, and then flip off the flag to not uncheck the last one.