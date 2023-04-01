const checkBoxArray = document.querySelectorAll("input");
const labelArray = document.querySelectorAll("label");

const checkedPos = [];

let isShiftKeyPressed = false;
let lastKeyPressed = -1;
window.addEventListener("keydown", () => (isShiftKeyPressed = true));
window.addEventListener("keyup", () => (isShiftKeyPressed = false));

for (let i = 0; i < checkBoxArray.length; i++) {
	checkBoxArray[i].addEventListener("input", (event) => {
		if (isShiftKeyPressed) {
			console.log("presed");
			if (lastKeyPressed === -1) {
				labelArray[i].classList.toggle("strikeThrough");
			} else {
				let flag = labelArray[i].classList.contains("strikeThrough");

				labelArray[i].classList.toggle("strikeThrough");
				for (
					let j = Math.min(lastKeyPressed, i) + 1;
					j <= Math.max(lastKeyPressed, i);
					j++
				) {
					console.log("j: ", j);
					console.log(checkBoxArray[i].checked);
					if (flag) {
						if (labelArray[j].classList.contains("strikeThrough")) {
							labelArray[j].classList.remove("strikeThrough");
							checkBoxArray[j].checked = false;
						}
					} else {
						console.log("hell");

						if (labelArray[j].classList.contains("strikeThrough") === false) {
							labelArray[j].classList.add("strikeThrough");
							checkBoxArray[j].checked = true;
							console.log("hi");
						}
					}
				}
			}
			isShiftKeyPressed = false;
		} else {
			labelArray[i].classList.toggle("strikeThrough");
			console.log("not ptessed");
		}
		lastKeyPressed = i;
	});
}
