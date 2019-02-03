const triggers = document.querySelectorAll('.cool > li');
  const background = document.querySelector('.dropdownBackground');
  const nav = document.querySelector('.top');

  function handleEnter() {
    console.log('Enter!');
    this.classList.add('trigger-enter');
    //when using arrow function, 'this' is inherited but with normal function it changes
    setTimeout(() => {
      if(this.classList.contains('trigger-enter')) {
        this.classList.add('trigger-enter-active')
      }
  }, 150);
    //add white div following 
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    
    const dropdownCoords = dropdown.getBoundingClientRect();
    console.log(dropdownCoords);
    // we also need to know where exactly nav is located
    //it can not be achored to the top
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);


  } 

  function handleLeave() {
    console.log('Leave!');
     this.classList.remove('trigger-enter', 'trigger-enter-active');
      background.classList.remove('open');


  }

  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));