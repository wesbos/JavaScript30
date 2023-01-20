/*-------------- Renaud Vmb --------------*/
const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', ({keyCode}) => {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
});

keys.forEach(e => e.addEventListener('transitionend', () => {
    e.classList.remove('playing');
}));