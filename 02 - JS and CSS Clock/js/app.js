function turnTransitionOff(hand) {
  hand.style.setProperty("transition", "none");
}

function turnTransitionOn(hand) {
  hand.style.setProperty("transition", "transform 0.05s ease-in-out");
}

function moveHourHand(hours) {
  const hourHand = document.querySelector(".hour-hand");
  const hoursAsDegrees = Math.floor((hours / 12) * 360) + 90;

  if (hoursAsDegrees === 90) {
    turnTransitionOff(hourHand);
  } else {
    turnTransitionOn(hourHand);
  }

  hourHand.style.setProperty("transform", `rotate(${hoursAsDegrees}deg)`);
}

function moveMinuteHand(minutes) {
  const minutesHand = document.querySelector(".min-hand");
  const minutesAsDegrees = Math.floor((minutes / 60) * 360) + 90;

  if (minutesAsDegrees === 90) {
    turnTransitionOff(minutesHand);
  } else {
    turnTransitionOn(minutesHand);
  }

  minutesHand.style.setProperty("transform", `rotate(${minutesAsDegrees}deg)`);
}

function moveSecondHand(seconds) {
  const secondHand = document.querySelector(".second-hand");
  let secondsAsDegrees = Math.floor((seconds / 60) * 360) + 90;

  if (secondsAsDegrees === 90) {
    turnTransitionOff(secondHand);
  } else {
    turnTransitionOn(secondHand);
  }

  secondHand.style.setProperty("transform", `rotate(${secondsAsDegrees}deg)`);
}

function updateTime() {
  const now = new Date();
  moveHourHand(now.getHours());
  moveMinuteHand(now.getMinutes());
  moveSecondHand(now.getSeconds());
}

setInterval(updateTime, 1000);
