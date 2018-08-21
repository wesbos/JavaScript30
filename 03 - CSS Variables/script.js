const root = document.documentElement;
const inputs = document.querySelectorAll('input');

const setValues = (element) => {
    const variableName = `--${element.name}`;
    const variableValue = element.value;
    const unit = element.getAttribute('data-sizing') || '';
    root.style.setProperty(variableName, variableValue + unit);
}
const init = () => inputs.forEach(input => setValues(input));

const handleValueUpdate = (event) => setValues(event.target);

document.addEventListener('DOMContentLoaded', init);
inputs.forEach(input => input.addEventListener('change', handleValueUpdate) );
