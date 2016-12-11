/* global Audio */
function removeTransition (e) {
  if (e.propertyName !== 'transform') return
  e.target.classList.remove('playing')
}

function handlekey (e) {
  playSoundByKey(e.keyCode)
}

function playSoundByKey (keyCode) {
  const keyElement = document.querySelector(`div[data-key="${keyCode}"]`)
  if (!keyElement) {
    return
  }
  keyElement.classList.add('playing')
  const audioPath = keyElement.getAttribute('data-audioPath')
  const audio = new Audio(audioPath)
  audio.play()
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', handlekey)
