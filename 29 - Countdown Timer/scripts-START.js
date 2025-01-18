const timerBtns = document.querySelectorAll(".timer__button");
const showEndTim = document.querySelector(".display__end-time");
const showTimeLeft = document.querySelector(".display__time-left");
let countdown;

function prependZero(number) {
  return number < 10 ? "0" + number : number;
}

function displayTimeLeft(seconds) {
  const mins = Math.floor(seconds / 60);
  seconds %= 60;
  const display = `${prependZero(mins)}:${prependZero(seconds)}`;
  showTimeLeft.textContent = display;
  document.title = display;
}

function displayTimeEnd(miliSeconds) {
  let timerEndAt = new Date(miliSeconds);
  let hours = timerEndAt.getHours();
  const mins = timerEndAt.getMinutes();
  hours %= 12;
  hours = hours ? hours : 12;
  showEndTim.textContent = `Be Back At ${prependZero(hours)}:${prependZero(
    mins
  )}`;
}

function startTimer(seconds) {
  clearInterval(countdown);

  const now = Date.now(); //miliseconds
  const then = now + seconds * 1000;

  displayTimeEnd(then);
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - new Date()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function timerBtnClicked(e) {
  startTimer(Number(this.dataset.time));
}

function formSubmited(e) {
  e.preventDefault();
  startTimer(Number(this.minutes.value) * 60);
}

timerBtns.forEach((btn) => btn.addEventListener("click", timerBtnClicked));
document.customForm.addEventListener("submit", formSubmited);
