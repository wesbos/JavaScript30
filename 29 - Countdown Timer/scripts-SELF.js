const buttons = document.querySelectorAll('button');
const endTime = document.querySelector('.display__end-time');
const displayTimeLeft = document.querySelector('.display__time-left');
const input = document.querySelector('input[name=minutes]');
let timer;

buttons.forEach(button => button.addEventListener('click', setTime));
input.addEventListener('keydown', keydown);
function setTime() {
  clearInterval(timer);
  let time = this.dataset.time;
  displayEndTime(time);
  timeLeft(time);
  timer = setInterval(()=> {
    if (time === 0) {
      clearInterval(timer);
      timer = null;
      return;
    }
    time--;
    timeLeft(time);

  }, 1000);
}

function timeLeft(time) {
  const minutes = Math.floor(time / 60);
  const seconds = (time % 60).toString().length < 2 ? `0${time % 60}` : time % 60;
  displayTimeLeft.innerHTML = `${minutes}:${seconds}`;
}

function displayEndTime(time) {
  const end = new Date(Date.now() + time * 1000);
  endTime.innerHTML = `这个时候将结束 ${end.getHours()}:${end.getMinutes().toString().length < 2 ? '0' : ''}${ end.getMinutes()}`;
}


function keydown(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    const time = this.value * 60;
    this.dataset.time = time;
    setTime.call(this);
  }
}
