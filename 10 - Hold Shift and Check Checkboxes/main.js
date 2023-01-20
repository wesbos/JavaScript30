/*------------- Renaud Vmb -------------*/
/*
The following is a common layout you would see in an email client.
When a user clicks a checkbox, holds Shift, and then clicks another
checkbox a few rows down, all the checkboxes in between those two
checkboxes should be checked.
*/

const inputs = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastCheck;
let notCheck = false;

inputs.forEach(checkbox => checkbox.addEventListener('click', (e) => {
    if (e.shiftKey && e.currentTarget.checked) {
        inputs.forEach(checkbox => {
            if (checkbox === e.currentTarget || checkbox === lastCheck) {
                notCheck = !notCheck;
            }
            if (notCheck) {
                checkbox.checked = true;
            }
        });
    }
    lastCheck = e.currentTarget;
}));