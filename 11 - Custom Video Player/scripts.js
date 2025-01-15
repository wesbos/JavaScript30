const player = document.querySelector(".player");
const video = player.querySelector("video");
const playPauseBTN = player.querySelector(".player__button.toggle");
const skipBTNs = player.querySelectorAll(".player__button[data-skip]");
const sliderBtns = player.querySelectorAll(`.player__slider`);
const progressBar = player.querySelector(".progress");
const progress = player.querySelector(".progress__filled");
const fullScreenBtn = player.querySelector(".full_screen");

function playPauseVideo() {
  video[video.paused ? "play" : "pause"]();
}

function playPauseIcons() {
  playPauseBTN.innerHTML = video.paused ? "►" : "❚ ❚";
}

function skipVideo(e) {
  video.currentTime += Number(this.dataset.skip);
}

function manageVolandSpeed(e) {
  video[e.target.name] = e.target.value;
}

function changeProgress(e) {
  progress.style.flexBasis = (video.currentTime / video.duration) * 100 + "%";
}

function skipVideoTo(e) {
  const skipVideoTo = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = skipVideoTo;
}

function toggleFullScreen(e) {
  if (!document.fullscreenElement) {
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
      // Firefox
      player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) {
      // IE/Edge
      player.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
  }
}

video.addEventListener("click", playPauseVideo);
video.addEventListener("play", playPauseIcons);
video.addEventListener("pause", playPauseIcons);
video.addEventListener("timeupdate", changeProgress);

playPauseBTN.addEventListener("click", playPauseVideo);
skipBTNs.forEach((skip) => {
  skip.addEventListener("click", skipVideo);
});
sliderBtns.forEach((sliderBtn) => {
  let mouseDownSlider = false;
  sliderBtn.addEventListener("change", manageVolandSpeed);
  sliderBtn.addEventListener("mousedown", (e) => (mouseDownSlider = true));
  sliderBtn.addEventListener("mouseup", (e) => (mouseDownSlider = false));
  sliderBtn.addEventListener(
    "mousemove",
    (e) => mouseDownSlider && manageVolandSpeed(e)
  );
});
let mouseDown = false;
progressBar.addEventListener("click", skipVideoTo);
progressBar.addEventListener("mousedown", (e) => (mouseDown = true));
progressBar.addEventListener("mouseup", (e) => (mouseDown = false));
progressBar.addEventListener("mousemove", (e) => mouseDown && skipVideoTo(e));

fullScreenBtn.addEventListener("click", toggleFullScreen);
