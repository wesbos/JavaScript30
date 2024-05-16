const panel = document.querySelectorAll(".panel");
panel.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("open");
    item.classList.toggle("active");
    console.log(panel);
  });
});
