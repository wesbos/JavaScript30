const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo(){
	navigator.mediaDevices.getUserMedia({video: true, audio: false}) 		//returns a Promise
	.then(localMediaStream => {
		//localMediaStream is an Object, its needs to be converted into URL
		video.src = window.URL.createObjectURL(localMediaStream);
		video.play();
		//converts mediaStream into something this video player can understand
	
	})
	.catch(err => {
		console.log('OH NO!', err);
	});
}

function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;

	canvas.width = width;
	canvas.height = height;

	setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		let pixels = ctx.getImageData(0, 0, width, height); 
		//gives us array of 640x480x4 (rgba) ~ 1,2 mln

		//change pixels:
		pixels = redEffect(pixels);
	  //pixels = rgbSplit(pixels);
		//ctx.globalAlpha = 0.3; //some original are seen through
		//pixels = greenScreen(pixels);
		//put pixels back:
		ctx.putImageData(pixels, 0, 0);
		}, 16);
}

function takePhoto() {
	//play the sound
	snap.currentTime = 0;
	snap.play();

	//take the data out of the canvas
	const data = canvas.toDataURL('image/jpeg');
	//console.log(data);
	const link = document.createElement('a');
	link.href = data;
	link.setAttribute('download', 'handsome');
	link.innerHTML = `<img src="${data}" alt="Picture" />`;
	strip.insertBefore(link, strip.firstChild);

}

function redEffect(pixels) {
	//why not map? its special kind of array with JS, doesnt have this method
	for(let i=0; i<pixels.data.length; i+=4) {
		pixels.data[i + 0] = pixels.data[i + 0] + 50; //r
		pixels.data[i + 1] = pixels.data[i + 1] - 100; //g
		pixels.data[i + 2] = pixels.data[i + 2] * 0,5; //b
		
		
	}
	return pixels;
}

function rgbSplit(pixels) {
	for(let i=0; i<pixels.data.length; i+=4) {
		pixels.data[i - 150] = pixels.data[i + 0]; //r
		pixels.data[i + 100] = pixels.data[i + 1]; //g
		pixels.data[i - 150] = pixels.data[i + 2]; //b
			
	}
	return pixels;
}

function greenScreen(pixels) {
	 const levels = {};
	
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

 // console.log(levels);

  for (i = 0; i < pixels.data.length; i = i + 4) {
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
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
