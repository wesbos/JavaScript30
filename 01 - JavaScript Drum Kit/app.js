
 function playSound (e) {
   const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
   const key = document.querySelector(`.keys [data-key='${e.keyCode}']`);
   if(!audio)
   return;  //stops the function
   audio.currentTime = 0; //rewinds to the start
   audio.play();
   key.classList.add('playing');


}
function removeTransition (e) {
  if (e.propertyName !== 'transform') return;
  console.log(e.propertyName);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
