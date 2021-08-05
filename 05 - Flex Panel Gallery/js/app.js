const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", toggleClass);
  panel.addEventListener("transitionend", toggleOpenActive);
});

function toggleClass() {
  this.classList.toggle("open");
}

function toggleOpenActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
