const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const playBtn = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function changeBtn() {
  const icon = this.paused ? "►" : "❚ ❚";
  playBtn.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function rangeChangeHandler() {
  video[this.name] = this.value;
}

function progressHandler() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function moveToTime(e) {
  const actionTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = actionTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", changeBtn);
video.addEventListener("pause", changeBtn);
video.addEventListener("timeupdate", progressHandler);

playBtn.addEventListener("click", togglePlay);

skipBtns.forEach((skipBtn) => skipBtn.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", rangeChangeHandler));
ranges.forEach((range) =>
  range.addEventListener("mouseover", rangeChangeHandler)
);

let progressIsClick = false;
progress.addEventListener("click", moveToTime);
progress.addEventListener("mousemove", (e) => progressIsClick && moveToTime(e));
progress.addEventListener("mousedown", () => (progressIsClick = true));
progress.addEventListener("mouseup", () => (progressIsClick = false));
progress.addEventListener("mouseleave", () => (progressIsClick = false));
