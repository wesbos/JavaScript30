
function playSound(event) {
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`)
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`)
    if(!audio) return // stop the function from running all together
    audio.currentTime = 0 //rewind to the start 
    audio.play()
    key.classList.add('playing')
    //console.log(key)
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') // skip if it is not a transform
    this.classList.remove('playing')
    //console.log(event.propertyName)
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)