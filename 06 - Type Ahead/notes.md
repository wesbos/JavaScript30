The data is being served from a gist file.

Going to make it so that the search bar returns everything that matches what we type into the search.

First, need to fetch the data, and whenever someone searches, we filter the data to return a subset.

First make an empty array to put the data into and use a new API in the browser called Fetch to make the HTTP request. Fetch is built into the browser now.

-fetch itself returns a promise
const prom = fetch(endpoint);
console.log(prom) --> retursns a promise

we work with a promise by calling .then() on it, where we work with the data --> .then(data);

the data that comes back from our fetch doesn't know what kind of data it is
we need to convert the data from the raw data to json
-there is a method called json on it
-- returns another promise
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities = data);

have to be careful about trying to overwrite consts

we can spread data -- spread into the push method in this case

Question: how do we put a variable into a regexpression?
A: we need to create a regularexpression out of it
const regex= newRegExp(wordToMatch, 'g')
-g global
-i insensitive - not case sensitive

need to show  result based on whether or not the city or state value has a match
also need to create a display function

when we first add 'searchInput.addEventListener('change', displayMatches);' we have to click outside the searchbox after changing the input because change event only goes off when you go off that input
- so we can add a keyup listener as well

solution grabs the results, and we map each result into a list item
-we grab the set of list items and replace the suggestions html with them

now we want to update it so that we highlight
-used additional regex

also use a function to replace numbers with commas
