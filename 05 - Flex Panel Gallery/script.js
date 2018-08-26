document.addEventListener('DOMContentLoaded', main);

function main() {

    const toggleOpenClass = (event) => event.currentTarget.classList.toggle('panel--open');

    const panels = Array.from(document.querySelectorAll('.panel'));
    
    panels.forEach(panel => panel.addEventListener('click', toggleOpenClass));
}