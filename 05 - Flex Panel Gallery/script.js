const panels = document.getElementsByClassName('panels')[0];
const panel = panels.querySelectorAll('.panel');

function imin(){
    this.classList.toggle('open');
}

console.log(panel);
panel.forEach((item) => { 
    item.addEventListener('click', imin);
});
