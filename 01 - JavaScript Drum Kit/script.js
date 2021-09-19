function playSound(e){
  const audio = this.document.querySelector(`audio[data-key=${e.key}]`);
  const key = this.document.querySelector(`.key[data-key=${e.key}]`);
  if(!audio) return;
  audio.currentTime = 0;    // 沒加這行的話無法快速重播聲音
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// 練習 addEventListener、add and remove class