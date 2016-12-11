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

  let hithatBuffer
  let kickBuffer
  let snareBuffer

  loadAudio('sounds/hihat.wav').then((buffer) => {
    hithatBuffer = buffer
  })
    .then(() => {
      return loadAudio('sounds/kick.wav').then((buffer) => {
        kickBuffer = buffer
      })
    })
    .then(() => {
      return loadAudio('sounds/snare.wav').then((buffer) => {
        snareBuffer = buffer
      })
    })
    .then(() => {
      const RhythmSample = {}
      RhythmSample.play = function () {
        function playSound (buffer, time) {
          const source = context.createBufferSource()
          source.buffer = buffer
          source.connect(context.destination)
          if (!source.start) {
            source.start = source.noteOn
          }
          source.start(time)
        }

        const kick = kickBuffer
        const snare = snareBuffer
        const hihat = hithatBuffer

        // We'll start playing the rhythm 100 milliseconds from "now"
        const startTime = context.currentTime + 0.100
        const tempo = 80 // BPM (beats per minute)
        const eighthNoteTime = (60 / tempo) / 2

        // Play 2 bars of the following:
        for (let bar = 0; bar < 2; bar++) {
          const time = startTime + bar * 8 * eighthNoteTime
          // Play the bass (kick) drum on beats 1, 5
          playSound(kick, time)
          playSound(kick, time + 4 * eighthNoteTime)

          // Play the snare drum on beats 3, 7
          playSound(snare, time + 2 * eighthNoteTime)
          playSound(snare, time + 6 * eighthNoteTime)

          // Play the hi-hat every eighthh note.
          for (let i = 0; i < 8; ++i) {
            playSound(hihat, time + i * eighthNoteTime)
          }
        }
      }

      RhythmSample.play()
    })
}

window.onload = start
