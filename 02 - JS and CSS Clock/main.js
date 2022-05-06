"use strict";
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const startDay = (new Date()).setHours(0, 0, 0, 0);
function setTime() {
    const nowTime = (new Date()).valueOf() - startDay;
    const nowSeconds = Math.floor(nowTime / 1000);
    const secondDeg = (nowSeconds * 360) / 60;
    const nowMinutes = nowSeconds / 60;
    const minuteDeg = (nowMinutes * 360) / 60;
    const nowHours = nowMinutes / 60;
    const hourDeg = (nowHours * 360) / 12;
    if (secondHand)
        secondHand.style.transform = `rotate(${secondDeg}deg)`;
    if (minuteHand)
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    if (hourHand)
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setTime, 1000);
setTime();
