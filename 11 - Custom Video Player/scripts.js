const BtnGroup = document.querySelectorAll(".player__button");
const video = document.querySelector('.viewer');
const volume = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]')
// const progress = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const player = document.querySelector('.player');
let isPlay = false;
let isProgress = false;
let totalTime;
let time;
// let progressWidth = progressCtn.offsetWidth;
[playBtn, backBtn, fowwardBtn] = BtnGroup;


//播放方法
playBtn.addEventListener('click', () => {
    totalTime = video.duration;
    window.clearInterval(time)
    initProgress()
    if (!isPlay) {
        isPlay = true
        video.play();
        playBtn.innerHTML = '❚ ❚';
    } else {
        isPlay = false
        playBtn.innerHTML = '►';
        video.pause();
    }
})

//控制音量方法
volume.addEventListener('input', () => {
    video.volume = volume.value;
})
//控制视频几倍速
playbackRate.addEventListener('input', () => {
    video.playbackRate = playbackRate.value
})

//控制视频快进
fowwardBtn.addEventListener('click', () => {
    video.currentTime += 25;
})
backBtn.addEventListener('click', () => {
    video.currentTime -= 10;

})

//控制进度条
progress.addEventListener('mousedown', (e) => {
    isProgress = true;
    // console.log(progress.style.flexBasis)
})

progress.addEventListener('mousemove', (e) => {
    if (isProgress) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }

})
progress.addEventListener('mouseup', (e) => {
    isProgress = false;


})

//初始化进度条
const initProgress = () => {
    time = setInterval(() => {
        progress.style.flexBasis = `${(video.currentTime / totalTime) * 100}%`
    }, 100)
}