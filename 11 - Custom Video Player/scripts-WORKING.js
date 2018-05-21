/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');


/* Build out functions */
function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  // because the method is in a string we need to do below
  video[method]();
  console.log('togglePlay');
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip(){
  const dataskip = this.dataset.skip;
  // parseFloat
  video.currentTime += parseFloat(dataskip);
}

function handleRangeUpdate(){
  // the name in the HTML is set to the HTML 5 method. Using [] we can pass the variable to the video
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  // get a percentage of where the click is on the scrub bar and multiple by duration
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function fullScreen() {
  // https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/fullscreenElement
  const fullscreen = !document.webkitIsFullScreen ? 'webkitRequestFullscreen' : 'webkitExitFullScreen';
  video[fullscreen]();
}
/* Hook up event listeners */

video.addEventListener('click', togglePlay);
// add event listener to play because other programs can trigger the change of state
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

// for each skip button add event listener and run skip function
skipButtons.forEach(button => button.addEventListener('click', skip));

// for each range slider add event listener and run handle Range Update function
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let scrubMouseDown = false;
progress.addEventListener('click', scrub);
// set mousedown true or false below and only run if mousedown is true. If scrubMouseDown is true then run onto scrub function
progress.addEventListener('mousedown', (e) => scrubMouseDown && scrub(e));

progress.addEventListener('mousedown', () => scrubMouseDown = true);
progress.addEventListener('mouseup', () => scrubMouseDown = false);

fullscreen.addEventListener('click', fullScreen);

