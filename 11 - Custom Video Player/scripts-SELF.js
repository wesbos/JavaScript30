/* what to bring : viewer, toggle, 
skipButtons, ranges, progressBar, progress */

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')


/* functions : togglePlay(화면클릭으로 재생/정지), 
updateButton(버튼클릭으로 재생/정지), 
skip(앞으로 이동, 뒤로 이동),
handleRangeUpdate(볼륨, 재생속도 조절), 
handleProgress(재생위치 표시하기), 
scrub(재생구간 드래그로 이동) */

function togglePlay() {

  const method = video.paused ? 'play' : 'pause'
  video[method]();
}

function updateButton() {
  // console.log('update the button')
  const icon = video.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}


function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = [this.value]
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = e.offsetX / progress.offsetWidth * video.duration
  video.currentTime = scrubTime;

}

video.addEventListener('click', togglePlay)


video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)


skipButtons.forEach(button => button.addEventListener('click', skip))
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

let mousedown = false;
progress.addEventListener('mousedown', ()=> mousedown = true)
progress.addEventListener('mouseup', ()=> mousedown = false)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
