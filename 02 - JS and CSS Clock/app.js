const secondHand = document.querySelector('.second-hand')

function setTime() {
  const now = new Date;
  console.log(secondHand)
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds)
}

setInterval(setTime, 1000);
