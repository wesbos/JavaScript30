const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const rangeControlls = player.querySelectorAll('input[type="range"]');
const progressBar = player.querySelector(".progress__filled");
const progress = player.querySelector(".progress");
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

const skip = (e) => {
  video.currentTime = parseInt(e.target.dataset.skip);
  // if (e.target.dataset.skip) {
  //   const timeSkip = parseInt(e.target.dataset.skip);
  //   console.log(timeSkip);
  //   video.currentTime += timeSkip;
  // }
  console.dir(video);
};

const rangeChange = (e) => {
  console.log(e.target.value);
  video[e.target.name] = e.target.value;
  console.log(video[e.target.name]);
};

const handleProgress = () => {
  const timeMove = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${timeMove}%`;
};

document.addEventListener("DOMContentLoaded", handleProgress);

const moveVideo = (e) => {
  const moveTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = moveTime;
};

toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
skipBtns.forEach((btn) => {
  btn.addEventListener("click", skip);
});
rangeControlls.forEach((range) => {
  range.addEventListener("change", rangeChange);
  range.addEventListener("mousedown", rangeChange);
});
let mouseDown = false;

progress.addEventListener("click", moveVideo);
progress.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    moveVideo(e);
  }
});
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
