
function playSound (e) {
  const $audio = $(document).find(`audio[data-key="${e.keyCode}"]`)[0];
  if (!$audio) return;
  $audio.currentTime=0;
  $audio.play();
}

function transition(e) {
  const $key = $(document).find(`.key[data-key="${e.keyCode}"]`)[0];
  if (!$key) return;
  $key.classList.add('playing'); // .addClass doesn't work ???
  setTimeout(function() {
       $key.classList.remove('playing');
   }, 100);

}

$(window).keydown(function (e){
  playSound(e);
  transition(e);
})
