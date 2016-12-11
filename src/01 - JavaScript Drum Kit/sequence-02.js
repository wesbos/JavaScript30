/* global AudioContext, XMLHttpRequest, requestAnimationFrame */

function start () {
  window.AudioContext = window.AudioContext || window.webkitAudioContext
  const context = new AudioContext()

  function loadAudio (url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.responseType = 'arraybuffer'

      // Decode asynchronously
      request.onload = function () {
        context.decodeAudioData(request.response, function (buffer) {
          resolve(buffer)
        }, reject)
      }
      request.send()
    })
  }

  function playSound (buffer) {
    const source = context.createBufferSource()  // creates a sound source
    source.buffer = buffer                       // tell the source which sound to play
    source.connect(context.destination)          // connect the source to the context's destination (the speakers)
    source.start(0)                              // play the source now
                                                 // note: on older systems, may have to use deprecated noteOn(time);
  }

  let hithatBuffer
  let kickBuffer
  let tinkBuffer

  loadAudio('sounds/hihat.wav').then((buffer) => {
    hithatBuffer = buffer
  })
    .then(() => {
      return loadAudio('sounds/kick.wav').then((buffer) => {
        kickBuffer = buffer
      })
    })
    .then(() => {
      return loadAudio('sounds/tink.wav').then((buffer) => {
        tinkBuffer = buffer
      })
    })
    .then(() => {
      const beatsPerSecond = 5
      let seqIndex = 0

      function draw () {
        setTimeout(() => {
          requestAnimationFrame(draw)

          if (seqIndex % 8 === 0) {
            playSound(hithatBuffer)
            playSound(kickBuffer)
          }
          if (seqIndex % 8 === 1) {
            playSound(hithatBuffer)
          }
          if (seqIndex % 8 === 2) {
            playSound(hithatBuffer)
            playSound(tinkBuffer)
          }
          if (seqIndex % 8 === 3) {
            playSound(hithatBuffer)
            playSound(kickBuffer)
          }
          if (seqIndex % 8 === 4) {
            playSound(hithatBuffer)
            playSound(kickBuffer)
          }
          if (seqIndex % 8 === 5) {
            playSound(hithatBuffer)
            playSound(tinkBuffer)
          }
          if (seqIndex % 8 === 6) {
            playSound(hithatBuffer)
          }
          if (seqIndex % 8 === 7) {
            playSound(hithatBuffer)
            playSound(kickBuffer)
          }
          seqIndex++
        }, 1000 / beatsPerSecond)
      }
      draw()
    })
}

window.onload = start
