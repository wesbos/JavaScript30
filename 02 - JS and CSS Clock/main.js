
function monHorloge() {
    const secondes = document.querySelector('.second-hand');
    const minutes = document.querySelector('.min-hand');
    const hours = document.querySelector('.hour-hand');

    const horloge = new Date();

    const s = horloge.getSeconds();
    const sValue = ((s / 60) * 360) + 90;
    secondes.style.transform = `rotate(${sValue}deg)`;

    const m = horloge.getMinutes();
    const mValue = ((m / 60) * 360) + ((s/60)*6) + 90;
    minutes.style.transform = `rotate(${mValue}deg)`;

    const h = horloge.getHours();
    const hValue = ((h / 12) * 360) + ((m/60)*30) + 90;
    hours.style.transform = `rotate(${hValue}deg)`;
}

setInterval(monHorloge, 1000);

monHorloge();
