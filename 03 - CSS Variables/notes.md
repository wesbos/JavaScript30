CSS variables are new to CSS (not SASS)
They can be updated via JavaScript
With SASS they're updated at compile time and you can't change them
We're going to be changing the spacing, blur, and base color

We have an input for the spacing, a range for the blur, and an input type of color for the colorpicker

CSS variables work by declaring them on some sort of element
    In this case we're updating them on :root which is the highest level (essentially the HTML element)

when you want to use a variable in css you pass the var function with the variable as a parameter
i.e.
    img {
        padding: var(--spacing);
        background: var(--base);
    }

to update the variables with javascript, we need to select all of the inputs

the difference between a nodelist and an array are that an array has functions to deal with them, whereas nodelists only have a handful for its prototype
-sometimes people convert nodelists into an array
-we're going to use the forEach method which was recently added to the nodelist

first thing we need to know is what is the suffix of the value we're obtaining, the hexcode doesn't have one because of the # sound
for spacing and blur we'd get 10 but we need to get 10px, so for the example data-attributes have been added (data-sizing)

this.dataset will return all of the data attribtues organized for you

Now to update the variable:
we're going to select our entire document which is our :root and set a property of base, spacing, and blur

you can scope out variables, and cascading rules still apply
