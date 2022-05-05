function playSound(audio: HTMLAudioElement | null) {
  if (audio) {
    audio.currentTime = 0;
    return audio.play()
  } else {
    return Promise.reject('Нет аудио дорожки');    
  }
}

function addClass(el: HTMLElement | null, className: string = 'playing') {
  if (el) el.classList.add(className);
}

function onTransitionEndHandler(this: HTMLElement, e: TransitionEvent) {
  if (e.propertyName !== 'transform') return;

  this.classList.remove('playing');
}

function onKeydownHandler(e: KeyboardEvent) {
  const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${e.code}"]`);
  const key: HTMLElement | null = document.querySelector(`.key[data-key="${e.code}"]`);

  playSound(audio).then(() => {
    addClass(key);
  });
}

function onClickHandler(this: HTMLElement) {
  const code = this.dataset.key;
  const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${code}"]`);

  playSound(audio).then(() => {
    addClass(this);
  });
}

const keys: NodeListOf<HTMLElement> = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', onClickHandler)
  key.addEventListener('transitionend', onTransitionEndHandler);
})

window.addEventListener('keydown', onKeydownHandler);
