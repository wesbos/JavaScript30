console.log('drumKit.js init');

const onKeyPressed = (event) => {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.add('playing');

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    audio.play()
    audio.currentTime = 0;
    audio.addEventListener('ended', () => key.classList.remove('playing'))
}


window.addEventListener('keydown', (event) => onKeyPressed(event));