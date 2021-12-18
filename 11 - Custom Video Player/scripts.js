const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");

const togglePlay = () => {
  video.paused ? video.play() : video.pause();
  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
};

const updateButton = () => {
  const icon = video.paused ? "♥" : "5";
  toggle.innerText = icon;
};

toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
