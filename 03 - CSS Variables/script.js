const inputs = document.querySelectorAll(".controls input");
console.log(inputs);

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  // dataset 可以抓到 html attribute 有 data- prefix 的東西，上述程式碼代表的是：
  // 如果有 data-sizing 就抓，沒有的話就 "";
  // 這裡的 this 就是 input 物件
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// 練習抓 css variable、setProperty