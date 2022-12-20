/*-------------- Renaud Vmb --------------*/
const woah = document.querySelector('.hero');
const title = woah.querySelector('h1');

woah.addEventListener('mousemove', (e) => {
    const walk = 1000; // 1000px

    const { offsetWidth: width, offsetHeight: height } = woah;
    let { offsetX: x, offsetY: y } = e;

    if (e.currentTarget !== e.target) {
        x+= e.target.offsetLeft;
        y+= e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    title.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
});