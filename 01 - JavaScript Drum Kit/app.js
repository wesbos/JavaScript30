'use strict';


window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing')
  console.log(key);
})

function removeTransition() {
  if(e.propertyName !== 'transform') return;

  console.log(e.propertyName)
}

const keys = document.querySelector('.keys');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
