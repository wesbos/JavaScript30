
const player = document.querySelector('.player__video.viewer');

// get all the player controls
const playBtn = document.querySelector('.toggle');
const skipBtns = document.querySelectorAll('.player__button:not(.toggle)');
const progBar = document.querySelector('.progress__filled');
const volume = document.querySelector('[name=volume]');
const playbackRate = document.querySelector('[name=playbackRate]');
const [pause, play] = [0,1];
const player_states = ['⏸', '▶'];
let player_state = pause;

function togglePlayPause()
{
	playBtn.innerHTML = player_states[player_state]
	player_state = player_state === play ? pause : play;
	player_state ? player.play() : player.pause();
}

function playHandler() {
	togglePlayPause();
}

function skipHandler() {
	player.currentTime += Number(this.dataset.skip); 
}

function progHandler() {
	progBar.style.width = `${(player.currentTime / player.duration)*100}%`;
}

function volumeHandler() {
	player.volume = volume.value;
}

function playbackHandler() {
	player.playbackRate = playbackRate.value;
}

function resetPlayer(video_player) {
	video_player.autoplay = false;
	player_state = pause;
	video_player.currentTime = 0;
	progHandler();
	volume.value = 0.2;
	video_player.volume = volume.value;
	playbackRate.value = 1.0;
	video_player.playbackRate = playbackRate.value; 
	video_player.loop = false;
}

playBtn.addEventListener('click', playHandler);
skipBtns.forEach(btn => { btn.addEventListener('click', skipHandler)});
volume.addEventListener('change', volumeHandler);
volume.addEventListener('mousemove', volumeHandler);
playbackRate.addEventListener('change', playbackHandler);
player.addEventListener('timeupdate', progHandler);

resetPlayer(player);


