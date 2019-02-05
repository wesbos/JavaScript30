let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
	//clear any existing timers
	clearInterval(countdown);
		const now = Date.now();
		const then = now + seconds *1000;
		displayTimeLeft(seconds);
		displayEndTime(then);
		
		countdown = setInterval(() => {

			const secondsLeft = Math.round((then - Date.now()) / 1000);
			if (secondsLeft < 0) {
				clearInterval(countdown);
				return;
			}
			displayTimeLeft(secondsLeft);

		}, 1000);

}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	let remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	timerDisplay.textContent = display;
	console.log([minutes, remainderSeconds]);
	document.title = display; //tile of the tab
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hour = end.getHours();
	const minutes = end.getMinutes();
	endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;

}
function startTimer() {
	
	const seconds = parseInt(this.dataset.time);
	console.log(seconds);
	timer(seconds);

}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
	e.preventDefault(); //stops from reloading the page
	const mins = this.minutes.value;
	console.log(mins);
	this.reset(); //clears input
	timer(mins*60);
});