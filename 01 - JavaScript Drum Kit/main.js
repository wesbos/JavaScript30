

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if(!audio) return; // stop the function from running all togather
    //console.log(audio)
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing')
    
}




function removeTransition(e){
    if (e.propertyName !== 'transform') return; // skip it if is's not a transform
    this.classList.remove('playing');
}


// Why the Clap is not going away
const keys = document.querySelectorAll(".key");
keys.forEach( keys => keys.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)