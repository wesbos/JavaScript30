"use strict";
const inputs = document.querySelectorAll('.controls input');
inputs.forEach((input) => input.addEventListener('input', handler));
function handler() {
    const suffics = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffics}`);
}
