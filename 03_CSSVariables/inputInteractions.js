function onChange () {
    const { value, name, dataset: { sizing } } = this;
    document.documentElement.style.setProperty(`--${name}`, `${value}${sizing || ''}`);
}

const addInputInteractions = () => {
    const inputs = document.querySelectorAll('.controls input');
    inputs.forEach(input => {
        input.addEventListener('change', onChange);
        input.addEventListener('mousemove', onChange);
    });
}

addInputInteractions();
