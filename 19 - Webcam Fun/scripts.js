const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
let startX = 20;
let startY = 20;


function takePhoto() {
    ctx.fillRect(startX,startY, 1500, 800);
    canvas.style.opacity = 0;
    snap.play()
    let src = canvas.toDataURL("image/png");
    let a = document.createElement('a');
    a.setAttribute('download', '');
    a.setAttribute('href', src);
    strip.appendChild(a);
    let img = document.createElement('img')
    img.setAttribute('src',src);
    a.appendChild(img);
}



