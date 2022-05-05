"use strict";
function playSound(audio) {
    if (audio) {
        audio.currentTime = 0;
        return audio.play();
    }
    else {
        return Promise.reject('Нет аудио дорожки');
    }
}
function addClass(el, className = 'playing') {
    if (el)
        el.classList.add(className);
}
function onTransitionEndHandler(e) {
    if (e.propertyName !== 'transform')
        return;
    this.classList.remove('playing');
}
function onKeydownHandler(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    playSound(audio).then(() => {
        addClass(key);
    });
}
function onClickHandler() {
    const code = this.dataset.key;
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    playSound(audio).then(() => {
        addClass(this);
    });
}
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('click', onClickHandler);
    key.addEventListener('transitionend', onTransitionEndHandler);
});
window.addEventListener('keydown', onKeydownHandler);
