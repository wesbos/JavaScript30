const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// Video comes from camera, and every xx ms we drop it into the canvas so we can manipulate

function getVideo() {
	navigator.mediaDevices.getUserMedia( {video: true, audio: false} )
	// returns a promise
		.then(localMediaStream => {
      //console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    // if user doesn't allow webcam use
    .catch(err => {
      console.error('oh no', err);
    })
}

function paintToCanvas() {
  // set height of canvas to video input size
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    // create image from top left to bottom right ever 16ms
    ctx.drawImage(video, 0, 0, width, height);

    // remove pixels
    let pixels = ctx.getImageData(0, 0, width, height) // console.log pixels and you'll see millions of items in an array, this specifies RGBA values for each1
    
    //mess with them
    // pixels = redEffect(pixels);
    
    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1;

    pixels = greenScreen(pixels);
    
    // put them back in
    ctx.putImageData(pixels, 0, 0)
  }, 16)
}

function takePhoto() {
  // play the sount
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  //console.log(data);
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) { // every 4th loop so we do R, then G, then B, then A, then loop
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  // levels are the 'green' bits that we can ignore for greenscreen (play with levels to perfect)
  const levels = {};

  // sliders input
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i+=4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // if red, green, blue etc are between the min and max levels then take it out (turn the 4th value to transparent!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);

