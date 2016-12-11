/* global Audio, requestAnimationFrame */

const initialTime = (new Date()).getTime()
let lastTime
let timeDiff = 0
const fps = 60

let seqIndex = 0
let currentStatePlaying = false

const HIHAT = new Audio('sounds/hihat.wav')
const KICK = new Audio('sounds/kick.wav')

function startOrStop (e) {
  if (e.keyCode === 13) {
    currentStatePlaying = !currentStatePlaying
  }
  draw()
}

function draw () {
  const sequence = [
    [KICK, HIHAT],
    [HIHAT],
    [HIHAT],
    [KICK, HIHAT]
  ]

  setTimeout(function () {
    if (currentStatePlaying) {
      requestAnimationFrame(draw)
    }

    const now = (new Date()).getTime()

    if (lastTime) {
      timeDiff = (now - initialTime) % 300
      if (timeDiff < 20) {
        sequence[seqIndex % sequence.length].forEach((audio) => {
          audio.play()
        })
        seqIndex++
      }
    }
    lastTime = now
  }, 1000 / fps)
}

window.addEventListener('keydown', startOrStop)
