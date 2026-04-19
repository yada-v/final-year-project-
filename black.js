/// <reference types="p5/global" />
/// <reference types="p5/global" />
window.addEventListener("load", () => {
let slider = document.getElementById("slider");
let box = document.getElementById("black");
function update(){
let t = parseFloat(slider.value);
if (t<0.85) {
	box.style.opacity = 0;
} else {
	box.style.opacity = 1;
}
}

update();
slider.addEventListener("input",update);
});

