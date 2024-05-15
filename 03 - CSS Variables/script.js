// const img = document.querySelector("img");
// Select all input elements on the page

const inputs = document.querySelectorAll("input");

// const spacing = document.getElementById("spacing");
// const blur = document.getElementById("blur");
// const base = document.getElementById("base");
// spacing.addEventListener("mousemove", () => {
//   img.style.padding = `${spacing.value}px`;
// });

// blur.addEventListener("mousemove", () => {
//   img.style.filter = `blur(${blur.value}px)`;
// });

// base.addEventListener("change", () => {
//   img.style.backgroundColor = `${base.value}`;
// });
// Add event listeners to each input element to handle changes and mouse movements

inputs.forEach((input) => input.addEventListener("change", handleUpdate));

inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

// Define a function to handle updates to input elements

const handleUpdate = () => {
  // Get the 'suffix' value from the 'data-sizing' attribute of the input element, if exists, or set it to an empty string
  /**
   * The suffix in this context refers to the unit of measurement associated with the CSS property being updated.
   *  It is extracted from the data-sizing attribute of the input element.
   *  If there's no data-sizing attribute specified, the suffix defaults to an empty string.
   */
  const suffix = this.dataset.sizing || "";
  // Set CSS custom property (variable) to the value of the input plus the suffix
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};
