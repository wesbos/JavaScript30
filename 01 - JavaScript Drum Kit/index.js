window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // does not play on key w/out sound 
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}))