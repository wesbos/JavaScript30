// store countdown variable as a variable
let countdown;

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

// takes a parameter of seconds based on what you choose
function timer(seconds){
	// Old way of doing it - refresh timeout every 1000ms or 1 second. setInterval sometimes stops running e.g. on new browser or on iOS on scroll!
	// setInterval(function(){
	// 	seconds --;
	// }, 1000);

	// when we start a new timer clear existing ones
	clearInterval(countdown);

	// New static function on Date
	const now = Date.now();
	const finish = now + (seconds * 1000);
	// console.log({now, finish});

	// so that it loads immediatly not after one second using setInterval. Note passing seconds here and seconds left below
	displayTimeLeft(seconds);
	displayEndTime(finish);

	// now if this skips it's okay as in the background the timer is running fine so the FE bug / pausing will update
	// countdown = the returned value
	countdown = setInterval(() => {
		// Update based on how long til finish
		const secondsLeft = Math.round((finish - Date.now()) / 1000);

		// Check to see if we need to stop it, is it negative?
		if (secondsLeft < 0) {
			// stops the interval timer
			clearInterval(countdown);
			return;
		}
		// console.log(secondsLeft);

		// function runs every second as well as on initialisation above
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds){
	// console.log(seconds);
	// only want WHOLE integer minutes
	const minutes = Math.floor(seconds / 60);
	// left overs from dividing by 60
	const remainderSeconds = seconds % 60;
	// console.log({minutes, remainderSeconds});

	const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  // Tab title & display
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timeStamp){
	// Date gives you a time in miliseconds from Jan 1st 1970. When you pass it back to Date() it returns a date to you
	const end = new Date(timeStamp);

	const hours = end.getHours();
	const minutes = end.getMinutes();

	// for USA... 
	// endTime. textContent = `Back at ${hours > 12 ? (hours - 12) : hours}:${minutes}`;

	// for Educated!
	endTime. textContent = `Back at ${hours}:${minutes}`;
}

function startTimer(){
	// get dataset from variable
	// console.log(this.dataset);
	const seconds = parseInt(this.dataset.time); // parseInt to turn it into a real number
	timer(seconds);
}

// Set Timer 
buttons.forEach(button => button.addEventListener('click', startTimer));

// Custom Timer can be called by using document.customForm as this is the name of the form!
document.customForm.addEventListener('submit', function(e) {
  // stop the get request and refreshing the page
  e.preventDefault();
  // using document.customForm.minutes (using the name of the form child)
  const mins = this.minutes.value;
  // console.log(mins);
  // turn minutes to seconds as timer is made using seconds and pass it to the timer
  timer(mins * 60);
  // clears the value after you submit!
  this.reset();
});



