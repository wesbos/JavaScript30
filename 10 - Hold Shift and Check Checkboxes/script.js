// const inbox = document.querySelector('');
const checkboxes = document.querySelectorAll('.inbox input');
let lastChecked = checkboxes[0];

function handleCheck(event) {
    if (lastChecked === this) return;

    if (event.shiftKey) {
        let start = Array.prototype.indexOf.call(checkboxes, this);
        let end = Array.prototype.indexOf.call(checkboxes, lastChecked);

        for (i= Math.min(start,end); i< Math.max(start,end)+ 1; i++) {
            checkboxes.item(i).checked = true;
        }
    }

    lastChecked = this;
}

checkboxes.forEach((checkbox) => { 
    checkbox.addEventListener('click', handleCheck)
});