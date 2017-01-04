const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  })
  .then(localmediastream => {
    console.log(localmediastream);
    video.src = window.URL.createObjectURL(localmediastream);
    video.play();
  })
  .catch(err => console.error(err));
}


function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    console.log(pixels);
    debugger;
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  const data = canvas.toDataURL('image/jpeg');

  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="person"/>`;
  strip.insertBefore(link, strip.firstChild);

}

getVideo();
video.addEventListener('canplay', paintToCanvas);
