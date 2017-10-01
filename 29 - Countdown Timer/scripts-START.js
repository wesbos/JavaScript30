const timers = document.querySelectorAll('[data-time]');
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
let intervalId;

function timer(seconds) {
    //Clear any existing timer
    clearInterval(intervalId);

    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds);
    displayEndTime(then)

    //Run every second
    intervalId = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if (secondsLeft < 0) {
            clearInterval(intervalId);
            return;
        }
        //Display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const display = `${minutes}:${(secondsLeft < 10 ? '0' : '') + secondsLeft}`
    //console.log(minutes, secondsLeft);
    document.title = display;
    timeLeft.textContent = display;
}

function displayEndTime(timestamp) {
    const time = new Date(timestamp);
    const hours = time.getHours();
    const minutes = time.getMinutes();

    // console.log(time);
    endTime.textContent = `${hours}:${(minutes < 10 ? '0' : '') + minutes}`;
}

function handleTimers() {
    const timerInSeconds = parseInt(this.dataset.time);

    timer(timerInSeconds);
}

timers.forEach(timer => timer.addEventListener('click', handleTimers));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault(); // stop the form from reloading the page
    
    const mins = this.minutes.value;
    timer(mins * 60);

    this.reset();
});