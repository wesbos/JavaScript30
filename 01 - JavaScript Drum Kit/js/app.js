window.addEventListener("keydown", keyDownEventListener);

function keyDownEventListener(e) {
  playSound(e);
  togglePlayingClass(e);
}

function playSound({ keyCode }) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
}

function togglePlayingClass({ keyCode }) {
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!key) {
    return;
  }

  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) =>
  key.addEventListener("transitionend", removePlayingClass)
);

function removePlayingClass(e) {
  if (e.propertyName !== "transform") {
    return;
  }

  this.classList.remove("playing");
}
