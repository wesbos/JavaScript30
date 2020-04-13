const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active')
	}
}

// listen for click on each panel and when a click is recorded run toggleOpen
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// once the transition has ended toggle 'open-active' class toggleActive
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
