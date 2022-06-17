//event listerner to play a sound when 
window.addEventListener('keydown', playSound);

  //create a function that that plays the sound
  //parameter could be anyting, including unicord, when you console log it, you get the same thing: function playSound(unicorn) console.log(unicorn)

  function playSound(e) {
    console.log(e)
    
    // create a variable key// why? 
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    //each key has a specific keyCode
    //create an event listener that listens to 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    
    //to avoid getting messages for keys not listed, we create a falsy following by a return
    if (!audio) return;

    //here, we add the class playing from the CSS
    key.classList.add('playing');

    //if you press a key once, you'd have to wait until the sound ends. 
    //however, we .currentTime = 0 we could repeat the sound instantatiously 

    audio.currentTime = 0;
    audio.play();
  }


  const keys = document.querySelectorAll('.key');

  //for each key remove the boarder
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//how can we remove the yellow border after the key/sound has concluded? 
//Check if the  
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  //test