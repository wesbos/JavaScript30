let countdownTimer;
const timerDisplay = document.querySelector('.display__time-left');
const endDisplay = document.querySelector('.display__end-time');
const timerButtons = document.querySelectorAll('[data-time]');
clearInterval(countdownTimer);
function timer(seconds) {
    clearInterval(countdownTimer);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdownTimer = setInterval(function () {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // prefer doing this over seconds-- because if we tab away the timer gives issues.
        // Also, in iOS timers are paused when scrolling
        if (secondsLeft < 0) {
            clearInterval(countdownTimer);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    console.log(secs);
    const finalVal = `${mins}: ${secs < 10 ? '0' : ''}${secs}`;
    timerDisplay.textContent = finalVal;
}

function displayEndTime(timestamp) {
    const endTime = new Date(timestamp);
    const hour = endTime.getHours();
    const mins = endTime.getMinutes();
    endDisplay.textContent = `BRB @ ${hour > 12 ? hour - 12 : hour}: ${mins < 10 ? '0' : ''}${mins}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

timerButtons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})