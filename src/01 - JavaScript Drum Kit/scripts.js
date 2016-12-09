function removeTransition (e) {
  if (e.propertyName !== 'transform') return
  e.target.classList.remove('playing')
}

function playSound (e) {
  console.log(`--e.keyCode--`); console.log(e.keyCode) // DEBUG
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  console.log(`--audio--`); console.log(audio) // DEBUG
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  console.log(`--key--`); console.log(key) // DEBUG
  if (!audio) return

  key.classList.add('playing')
  audio.currentTime = 0
  audio.play()
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
