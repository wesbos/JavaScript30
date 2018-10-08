console.log("grady")

const inputs = document.querySelectorAll('.controls input');

    function handleUpdate(){
      const suffix=(this.dataset.sizing || "");
      console.log("this.dataset: haha" , this.dataset);
      console.log("this.name", this.name);
      document.documentElement.style.setProperty(`--${this.name}`, this.value(suffix))
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
