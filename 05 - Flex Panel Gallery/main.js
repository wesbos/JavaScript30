/*----------------- Renaud Vmb -----------------*/
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('open');
}));

panels.forEach(panel => panel.addEventListener('mousemove', (e) => {
    e.currentTarget.classList.remove('open');
}));

panels.forEach(panel => panel.addEventListener('transitionend', (e) => {
    if (e.propertyName.includes('flex')) {
        e.currentTarget.classList.toggle('open-active');
    }
}));