function setDate() {
    // console.log('Hi');

    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds/60)*360+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds);

    const mins = now.getMinutes();
    const minsDegrees = (mins/60)*360+90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours/12)*360+90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);