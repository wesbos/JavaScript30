// access the dom elements from the HTML
const secondHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')
// get the current time information
const now = new Date()
let secHolder = now.getSeconds();
let minHolder = now.getMinutes() + (secHolder/60);
let hourHolder = now.getHours() + (minHolder/60) + (secHolder/3600);


function setDate() {
  //add one second for every time setInterval call this function
  secHolder +=1
  const secondsDegrees = ((secHolder / 60) * 360) + 90;
  //rotates the second hand of the clock
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  //add 1/60th of a minute for every time setInterval call this function
  minHolder +=(1/60)
  const minutesDegrees = ((minHolder/60) * 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
  //add one/3600th of an hour for every time setInterval call this function
  hourHolder +=(1/(3600))

  const hours = now.getHours()
  const hoursDegrees = ((hourHolder)/12 * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000);
