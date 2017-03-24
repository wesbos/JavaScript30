This exercise relies more on CSS for flexbox for transitions and so forth.

We have divs with class panels, inside are paragraphs that when clicked will grow in size and have transitions.

Going to change css to make panels go side by side.
-- Add display: flex for .panels

Go to each individual panel, and tell them to split the panel width amongst themselves. They will evenly distribute.
-- Go to .panel and apply flex: 1 for even distribution

we want the content to go up and down on the panels by applying 
-- justify-content: center to align them left to right
-- align-items: center

in our example: flex container is panels, flex item is panel
however;
an element in css can both be a flex item and a flex container
flex-direction: column; 

setting display flex stacks them left to right again; so we use flex-direction column to stack them vertically

for our flex items, we want to set flex: 1 0 auto to space them out evenly vertically.
set display flex, justify content center to have them all perfectly centered (this involves nested flexing);

giving a flex of 5 means that an item will take 5x the amount of room as another one

going to add transition so that the top and bottom text come in after the first transition (panel expansion) happens

in safari, the event name is flex whereas others its flex-grow
