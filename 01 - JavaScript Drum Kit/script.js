window.addEventListener("keydown", function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

  if (!audio) return // stop function from running altogether

  audio.currentTime = 0 // rewind to start of sound
  audio.play()
  console.log(key)
})
