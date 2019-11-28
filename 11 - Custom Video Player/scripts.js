const player = document.querySelector(".player");

const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = progress.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");

const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  video[video.paused ? "play" : "pause"]();
}

function updateButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function updateVideoTime(e) {
  const updatedTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = updatedTime;
}

function handleProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", handleProgressBar);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mouseIsDown = false;

progress.addEventListener("click", updateVideoTime);

progress.addEventListener("mousemove", e => mouseIsDown && updateVideoTime(e));

progress.addEventListener("mousedown", () => (mouseIsDown = true));
progress.addEventListener("mouseup", () => (mouseIsDown = false));
