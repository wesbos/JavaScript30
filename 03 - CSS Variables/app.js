function handleUpdate(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // console.log(this.style);
};

$(".controls input").change(handleUpdate);
$(".controls input").on("mousemove", handleUpdate);
