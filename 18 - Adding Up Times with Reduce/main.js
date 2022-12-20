/*-------------- Renaud Vmb --------------*/
const time = Array.from(document.querySelectorAll('[data-time]'));

let seconds;     // 60s
let minutes;    // 60min -> seconds * 60
let hours;     // 24h -> seconds * 3600

seconds = time
            .map(node => node.dataset.time)
            .map(timeCode => {
                const [mins, secs] = timeCode.split(':').map(parseFloat);
                return (mins * 60) + secs;
                })
            .reduce((total, vidSeconds) => total + vidSeconds);

hours = Math.floor(seconds / 3600);
seconds %=  3600;

minutes = Math.floor(seconds / 60);
seconds %=  60;

console.log(hours, minutes, seconds);