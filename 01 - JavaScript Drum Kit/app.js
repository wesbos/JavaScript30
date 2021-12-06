const keys = document.querySelector(".keys");
keys.addEventListener("click", (e) => {
  const keybtn = e.target.dataset.key;
  console.log(keybtn);
  if (keybtn) {
    const audioSoundBtn = document.querySelectorAll("audio");
    const keycontainer = document.querySelectorAll(".key");
    keycontainer.forEach((key1) => {
      key1.classList.remove("playing");
      if (key1.dataset.key == keybtn) {
        key1.classList.add("playing");
      }
    });
    audioSoundBtn.forEach((audioMy) => {
      const btnSource = audioMy.dataset.key;
      if (btnSource == keybtn) {
        audioMy.play();
      }
    });
  }
});
