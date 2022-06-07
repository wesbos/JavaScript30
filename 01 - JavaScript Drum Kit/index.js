window.addEventListener('keydown', function (e) {
  const audio = this.document.querySelector(`audio[data-key = ${e.code}]`);
  const key = this.document.querySelector(`.key[data-key = ${e.code}]`);
  if (!audio) return; // stops function from running when unasigned key is pressed
  audio.currentTime = 0; // rewinds audio to start upon secondary key press
  audio.play();
  key.classList.toggle('playing');
});
