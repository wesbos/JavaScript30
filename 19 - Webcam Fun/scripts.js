const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((vidstream) => {
      video.srcObject = vidstream;
      video.play();
    })
    .catch((err) => {
      console.error(err);
    });
}

function paintToCanvas() {
  const { videoWidth: width, videoHeight: height } = video;
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    //take the pixel out of frame
    let pixels = ctx.getImageData(0, 0, width, height);
    //add Red Effect to pixels
    redEffect(pixels);
    //put the pixel in the frame
    ctx.putImageData(pixels, 0, 0);
  }, 40);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue
  }
  return pixels;
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  const img = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = img;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${img}"/>`;
  strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
