// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullscreen__button');
// Build our functions
function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
};

function updateButton(){
  const icon = this.paused ? '►' : '❚❚';
  toggle.textContent = icon;
};

function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
};

function handleRangeUpdate(){
  video[this.name] = this.value;
  console.log(this.value);
}

function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

function handleFullScreen() {
  document.webkitFullscreenElement ? document.webkitCancelFullScreen() : player.webkitRequestFullscreen()
};
// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);

toggle.addEventListener('click', togglePlay);
fullScreen.addEventListener('click', handleFullScreen);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

