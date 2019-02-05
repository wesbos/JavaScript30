    const slider = document.querySelector('.items');
    let isDown = false;
    let startX; //starting point
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        //console.log(e.pageX); //coordinates of the click
         isDown = true;
         slider.classList.add('active');
         startX = e.pageX - slider.offsetLeft;
         //console.log(startX);
         scrollLeft = slider.scrollLeft; //to register how scrolled the picture is

    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');

    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');

    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault(); //it will pevent fro selecting text or any other items inside
        const x = e.pageX - slider.offsetLeft;
        //console.log({x, startX});
        const walk = (x - startX) * 1.5; //how far we're scrolled
        //console.log(walk)
        slider.scrollLeft =  scrollLeft - walk;
    });