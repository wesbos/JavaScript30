function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

  if (!audio) return // stop function from running altogether

  audio.currentTime = 0 // rewind to start of sound
  audio.play()
  key.classList.add('playing')
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return // skip if not a "transform"
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
