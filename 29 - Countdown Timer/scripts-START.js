let countdown;
const timeShower = document.querySelector(".display__time-left");
const backTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll(".timer__button");
const customForm = document.querySelector("form");

function timer(time) {
  clearInterval(countdown);

  const now = Date.now();
  const endTime = now + time * 1000;
  displayTimeLeft(time);
  displayEndTime(endTime);
  countdown = setInterval(() => {
    const timeLeft = Math.round((endTime - Date.now()) / 1000);
    if (timeLeft < 0) {
      clearInterval(countdown);
      return;
    } else {
      displayTimeLeft(timeLeft);
    }
  }, 1000);
}

function displayTimeLeft(timeLeft) {
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60 >= 10 ? timeLeft % 60 : "0" + (timeLeft % 60);
  timeShower.textContent = `${mins}:${secs}`;
}

function displayEndTime(endTime) {
  const time = new Date(endTime);
  const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  const mins =
    time.getMinutes() >= 10
      ? time.getMinutes() % 60
      : "0" + (time.getMinutes() % 60);
  backTime.textContent = `Be back at ${hours}:${mins}`;
}

function setTimer(e) {
  const isClick = e.type === "click";
  let time;
  if (isClick) {
    time = parseInt(this.dataset.time);
  } else {
    e.preventDefault();
    time = this.minutes.value * 60;
    this.reset();
  }
  timer(time);
}

buttons.forEach((button) => button.addEventListener("click", setTimer));
customForm.addEventListener("submit", setTimer);
