const controls = document.querySelectorAll('input');

function handleChanges() {
    const suffix = this.dataset.sizing || '';
    const image=document.getElementById('image');
    image.style.setProperty(`--${this.name}`,(this.value + suffix));
}

controls.forEach( (element) => { 
    element.addEventListener("input", handleChanges);
});

