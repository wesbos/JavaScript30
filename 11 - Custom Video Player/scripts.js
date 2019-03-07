// gets elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// BUILD functions
/* function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
} not as clean as down below
*/
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  // console.log(this.value);
  // console.log(this.name);

}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`

}

function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//event listeners
video.addEventListener("click", togglePlay);

//udates the icon
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

//updates volume & speed
video.addEventListener("timeupdate", handleProgress);
//'progress' works too

toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

// fastforward//backwards
let mousedown = false;
progress.addEventListener('click', scrub);
/* progress.addEventListener('mousemove', scrub); not ideal
changes upon hover, very buggy
progress.addEventListener('mousemove, () => {
  if (mousedown) {
  scrub(;)
}
}) this functino is not clear
*/
progress.addEventListener('mousemove', () => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mousedup', () => mousedown = false);

/* fullscreen
css
.player:fullscreen {
  max-width: none;
  width: 100%
}
.player:-webkit-full-screen {
  max-width: none;
  width: 100%
}
function
player.webkitRequestFullScreen()
*/