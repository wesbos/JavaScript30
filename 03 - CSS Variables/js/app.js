const inputs = document.querySelectorAll(".controls input");

inputs.forEach((input) => {
  input.addEventListener("change", controlUpdated);
  input.addEventListener("mousemove", controlUpdated);
});

function controlUpdated() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}
