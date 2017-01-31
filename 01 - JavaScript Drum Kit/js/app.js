document.addEventListener("DOMContentLoaded", function() {

	document.addEventListener("keydown", function(event) {
		const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
		if(!audio) return; //stop the function
		audio.currentTime = 0; //rewind to the start
		audio.play();
		key.classList.add("playing");
	}, false);

	function removeTransition(event) {
		
		if(event.propertyName !== "transform") return; //skip it of it's not a transform
		this.classList.remove("playing");
	}

	const keys = document.querySelectorAll(".key");
	keys.forEach(key => key.addEventListener("transitionend", removeTransition));

});