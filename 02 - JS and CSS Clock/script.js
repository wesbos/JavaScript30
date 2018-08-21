const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.second-hand');

function AnalogClock() {
    const date = new Date();
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    this.getSecondsAngle = () => seconds * 6 + 90;
    this.getMinutesAngle = () => (minutes * 60 + seconds) / 10 + 90;
    this.getHoursAngle = () => (hours * 60 + minutes) / 2 + 90;
}

function init() {
    const hands = Array.from(document.querySelectorAll('.hand'));
    hands.forEach(h => {
        h.style.transformOrigin = 'center right';
    });
};

function displayClock() {
    const clock = new AnalogClock();
    secondsHand.style.transform = `rotate(${clock.getSecondsAngle()}deg)`;
    minutesHand.style.transform = `rotate(${clock.getMinutesAngle()}deg)`;
    hoursHand.style.transform = `rotate(${clock.getHoursAngle()}deg)`;
}

function tickTock() {
    displayClock();
    setTimeout(
        tickTock,
        1000
    );
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    tickTock();
});