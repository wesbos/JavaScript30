const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	// appends the px suffix to spacing & blur input vals and ignores rest
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// iterate through the 'inputs' NodeList and call the handleUpdate upon the 'change' and 'mousemove' events
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
