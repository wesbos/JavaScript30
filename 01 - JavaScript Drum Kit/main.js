window.addEventListener('keydown', (event)=> {
    //select with querySelector - select the data key
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    //select it by key
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    //if there is no audio
    if(!audio) {
      //return by itself stops the function from running
      return;
    } else {
      //add this so you can continuously play the sound - otherwise wait for sound to complete before playing again
      audio.currentTime = 0;
      audio.play();
      //add css class to key
      key.classList.add('playing');
  
      let removeTransition = () => {
        key.classList.remove('playing');
      }
  
      const keys = document.querySelectorAll(`.key`);
      keys.forEach((pressedKey) => {
        pressedKey.addEventListener('transitionend', removeTransition)
      });
      
    }
    
  });