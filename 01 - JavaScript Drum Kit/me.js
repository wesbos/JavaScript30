const btns = document.querySelectorAll(".key");
const elements = document.querySelectorAll("audio");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.key;
    btn.classList.add("playing");
    elements.forEach((audio) => {
      if (audio.dataset.key === target) {
        audio.currentTime = 0;
        audio.play();
      }
    });

    setTimeout(function () {
      btn.classList.remove("playing");
      // btn.classList.remove("sound");
    }, 50);
  });
});

window.addEventListener("keydown", (e) => {
  // console.log(e.keyCode);
  let Target = e.keyCode.toString();

  elements.forEach((audio) => {
    btns.forEach((btn) => {
      if (audio.dataset.key === Target && btn.dataset.key === Target) {
        btn.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
      }
      setTimeout(function () {
        btn.classList.remove("playing");
        // btn.classList.remove("sound");
      }, 50);
    });
  });
});
