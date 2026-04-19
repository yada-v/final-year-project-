/// <reference types="p5/global" />
/// <reference types="p5/global" />
document.addEventListener("DOMContentLoaded", function () {
let slider = document.getElementById("slider");
let qwert = document.getElementById("qwert");
let qwer = document.getElementById("qwer");
function update(){
let t = parseFloat(slider.value);
if (t<0.33) {
	qwert.style.opacity=0;
} else {
	qwert.style.opacity=1;
} 
if (t<0.66) {
        qwer.style.opacity=0;
} else {
        qwer.style.opacity=1;
}

}


update();
slider.addEventListener("input", update);
});

