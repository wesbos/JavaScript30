const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  //gets the suffix from the datasets that have it or returns nothing
  const suffix = this.dataset.sizing || '';
  console.log(this);
  //uses the document values when an value changes. pass the information through template literals
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

//listens to when the value changes
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
