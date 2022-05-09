const panels: NodeListOf<HTMLDivElement> = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', function() {
    toggleClass.call(this, 'open');
  });
  panel.addEventListener('transitionend', function(event) {
    if (event.propertyName.includes('flex')) {
      toggleClass.call(this, 'open-active');
    }
  });
})

function toggleClass(this: HTMLDivElement, className: string) {
  this.classList.toggle(className);
}
