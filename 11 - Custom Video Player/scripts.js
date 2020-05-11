const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const togglePlay = () => {
  if (video.paused) {
    video.play()
  } else {
    video.pause();
  }

}


const updateButton = () => {
  const icon = this.paused ? '►' : '||'
  toggle.textContent = icon;

}

function skip() {


  video.currentTime += parseFloat(this.dataset.skip);

}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))
