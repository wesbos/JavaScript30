const inputs = document.querySelectorAll(".controls input");

console.log(inputs);
const updateValues = (e) => {
  console.log(e.target);
  const suffix = e.target.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value + suffix
  );
};

inputs.forEach((input) => input.addEventListener("change", updateValues));
inputs.forEach((input) => input.addEventListener("mousemove", updateValues));
