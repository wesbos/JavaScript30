const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.controls input');

inputs.forEach((input) => input.addEventListener('input', handler))

function handler(this: HTMLInputElement) {
  const suffics: string = this.dataset.sizing || '';

  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffics}`);  
}
