

### INTRODUCTION

Well setting up the drum kit was quite easy. I had created a set of buttons that consisted the specific sound effect names so that users can guide through and work on it easily. 

### THE MAIN IMPLEMENTATION

When it came to implementing and getting the desired sound, i tackled the approach in a different way. Frankly, I did not refer to the video since I wanted to give it my own shot and if I get stuck of course there is the video solution to help me figure out.

Coming to the point, the first thing to tackle was to generate the music. The sound effect. To do that, I used the normal Audio constructor that is a pretty handy tool by JavaScript that lets you play music.

Well, that's how I began. The next task was on how to generate these sound effects. For that, I have used buttons that have the text based on the sound effect they produce so that it would be easy for the users to navigate and also get an idea on what is the sound effect. So for each button I inserted the text value as the name of the sound effect and I applied a "for each loop". Also I used a `document.querySelectorAll('button')` functionality giving it a variable `notes` so that I can access my for each loop. Pretty conveniently I used the for each loop that iterates over each of the buttons and if the `button.taextContent == "sound-effect"` Then that particular sound effect would be played. Now similarly this must happen When I press keys on my keyboard. I used a `keypress` event listener and if `val.key == 'sound-effect-key'` then it would play that particular sound effect. Well this was my approach and I got pretty much things done in an easier way, rather than beauti-fying all the stuff.