const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream =>{
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`NUP BRUH!!!`, err);
    });
}

function paintToCanvas() {
const width = video.videoWidth;
const height = video.videoHeight;
canvas.width = width;
canvas.height = height;

return setInterval(() => {
  ctx.drawImage(video, 0, 0, width, height);
  // take the pixels out
  let pixels = ctx.getImageData(0, 0, width, height);
  // mess with them
  // pixels = redEffect(pixels);
  pixels = rgbSplit(pixels);
  //ctx.globalAlpha = 0.8;

  // pixels = greenScreen(pixels);
  // put them back
  ctx.putImageData(pixels, 0,0);
 }, 16);
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
