we want to make it so that even after we refresh the page or check and item, our state is persisted through local storage.

use event delegation so that we're able to manipulate newly added items right away

by clicking on preserve log, we can see whats happening on our page

by wrapping our querySelector in parentheses it is executed first

need to create a 2nd function to populate list after adding items 
going to loop over every single item in our array and map it to make them strings

for our populateList function, initially we set it so that everytime we run it, it recreates the whole list
-should consider how to just add/edit/update one item (react/angular are good for this cause its able to determine whats the minimum amount of html we need to change to update things)

--Persisting with LocalStorage--
its computer by computer/browser by browser
we can save text to the browser

for our purposes, when we populate the list, we then need to update the localStorage
-localStorage.setItem('items', items);
-when you try to put something other than a string into localstorage, it tries to convert it into a string or otherwise returns [object Object]
--so we need to Stringify our items before we add them via JSON.stringify
--can use localStorage.getItem('items');

review so far:
when we add an item you put it into local storage and update localstorage every single time
on page load, we check if somethings in local storage and we fall back to an empty array

now we need to pursue the checked state by having a toggleDone function
-listen for a click or change event on the checkboxes

the whole idea behind event delegation is that rather than wait for a click or change on items directly, we look for someobdy that's going to be on the page at the time of listening (existing dom elements)
-so in our case, we listen for a click on the plates
-"when inputs of plates are clicked, tell them to do something"
-we can use the new api in the browser to run "!e.target.matches('input')

we make use of the data-index to know which checkbox to toggle

-supplemental challenge to revisit later-
add button to clear all, uncheck all, delete all etc.