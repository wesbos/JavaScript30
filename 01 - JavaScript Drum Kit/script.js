function playSound (event) {
  const eventKey = event.key.toUpperCase()
  const audio = document.querySelector(`audio[data-key=${eventKey}]`)
  const key = document.querySelector(`.key[data-key=${eventKey}]`)

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

function removeTransition (event) {
  return event.propertyName === 'transform'
    ? this.classList.remove('playing')
    : null;
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)