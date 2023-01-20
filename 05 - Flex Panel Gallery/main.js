/*----------------- Renaud Vmb -----------------*/
const panels = document.getElementsByClassName("panel");
for (const panel of panels) {
    panel.addEventListener("click", (e) => {
        if (e.currentTarget.classList.contains('open') || e.currentTarget.classList.contains('open-active')){
            e.currentTarget.classList.remove("open" , "open-active");
        } else {
            for (const panel1 of panels) {
                panel1.classList.remove("open" , "open-active");
            }
            e.currentTarget.classList.add('open');
        }
    });
    panel.addEventListener('transitionend', (e) => {
        if (!e.currentTarget.classList.contains('open')){
            e.currentTarget.classList.remove('open-active');
        } else {
            e.currentTarget.classList.add('open-active');
        }
    });
}