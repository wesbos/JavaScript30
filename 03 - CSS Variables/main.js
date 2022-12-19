
const spacing = document.getElementById('spacing');
const blur = document.getElementById('blur');
const base = document.getElementById('base');

function changeValue() {
    const spacingBlur = this.dataset.sizing;
    const color = "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + (spacingBlur || color));
}

spacing.addEventListener('change', changeValue);
blur.addEventListener('change', changeValue);
base.addEventListener('change', changeValue);

spacing.addEventListener('mousemove', changeValue);
blur.addEventListener('mousemove', changeValue);
base.addEventListener('mousemove', changeValue);

// Ou alors boucle forEach :
/*const inputs = document.querySelectorAll('.controls input');*/
/*inputs.forEach(input => input.addEventListener('change', changeValue));
inputs.forEach(input => input.addEventListener('mousemove', changeValue));*/
