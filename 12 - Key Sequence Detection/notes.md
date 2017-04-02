learn about key sequencing detection - when users put a certain sequence of keys

buzzfeed has a konami code

when checking for the code, we want to start from the end of the array (using a negative index) and trim from there via splice
code: pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
basically, it starts at the end of the array and checks up X number of characters (the secret code length) to see if the word was typed