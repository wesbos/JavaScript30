function pressed(sound, button) {
    sound.currentTime = 0;
    sound.play();
    button.classList.add('playing');
    sound.addEventListener('ended', () => {
        button.classList.remove('playing');
    });
}

document.addEventListener('keydown', function(event) {
    const button = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    pressed(sound, button);
  });

document.querySelectorAll('.key').forEach( (button) => {
    button.addEventListener('click',function() {
        const keycode = button.getAttribute('data-key');
        const sound = document.querySelector(`audio[data-key="${keycode}"]`);
        pressed(sound, button);
      });
});