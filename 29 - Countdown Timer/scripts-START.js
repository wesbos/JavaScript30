let intervalId;

const displayTimer = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll(".timer__button");

function timer(seconds) {
  clearInterval(intervalId);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  intervalId = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(intervalId);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const mins = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const paddedRemainingSeconds = remainingSeconds.toString().padStart(2, "0");
  const time = `${mins}:${paddedRemainingSeconds}`;
  displayTimer.textContent = time;
  document.title = time;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const mins = end.getMinutes().toString().padStart(2, "0");
  const hours = end.getHours();
  const adjustedHours = hours > 12 ? hours - 12 : hours;
  const time = `${adjustedHours}: ${mins}`;
  endTime.textContent = `Be right back at ${time} ${hours > 12 ? "pm" : "am"}`;
}

function startTimer() {
  const seconds = this.dataset.time;
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = parseInt(this.minutes.value) * 60;
  timer(mins);
});
