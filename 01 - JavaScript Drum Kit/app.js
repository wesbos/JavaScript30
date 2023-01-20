const removeTransition = (e) => {
  if (e.propertyName == "transform") {
    e.target.classList.remove("playing");
  }
};

const playSound = (e) => {
  const audioSoundBtn = document.querySelector(
    `audio[data-key="${e.key.toUpperCase()}"]`
  );
  const key = document.querySelector(`div[data-key="${e.key.toUpperCase()}"]`);
  if (audioSoundBtn) {
    key.classList.add("playing");
    audioSoundBtn.currentTime = 0;
    audioSoundBtn.play();
  }
};
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playSound);
