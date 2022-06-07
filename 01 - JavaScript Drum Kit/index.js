window.addEventListener('keydown', function (e) {
  const audio = this.document.querySelector(`audio[data-key = ${e.code}]`);
  const key = this.document.querySelector(`.key[data-key = ${e.code}]`);
  if (!audio) return; // stops function from running when unasigned key is pressed
  audio.currentTime = 0; // rewinds audio to start upon secondary key press
  audio.play();
  key.classList.toggle('playing');
});

function toggleTransition(e) {
  if (e.propertyName !== 'transform') return; // skips events that are not propertyName 'transform'
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', toggleTransition));