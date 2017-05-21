function playSound(e) {
  /* keycode is a property of the keydown event
  //selects the audio element that corresponds the keybinding we pressed
  //uses es6 template strings ${...}
  what is `` for instead of ''*/
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //getting information from the class .key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  //you can not use .play() while it is currently playing. this stops it from playing
  audio.currentTime = 0;
  // .play() is a method that starts playing audio or video
  audio.play()
  //sets the css for the class selected by cost key
  key.classList.add('playing');
}
function removeTransition(e) {
  //need to know when the element has transformed. Skip when it is not
  if (e.propertyName !== 'transform') {
    return;
  }
  //if you want to know what this is refering to you can always console.log(this);
  this.classList.remove('playing');
}
//keys is an array of all the dom elements with the class .key
const keys = document.querySelectorAll('.key');
/*can not listen to an entire array at once.
Need to go through each element of the array and listen for when the transition ends*/
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//keydown is an event that fires when a key is pressed down
window.addEventListener('keydown', playSound);
