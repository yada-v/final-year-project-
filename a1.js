document.getElementById("nextButton").onclick = function() {
  window.location.href = "index.html";
};

let step2 = document.getElementById("abz2");
let step3 = document.getElementById("abz3");
let step4 = document.getElementById("abz4");
let step5 = document.getElementById("abz1");

let slider = document.getElementById("slider");

// Start hidden
step2.style.opacity = 0;
step3.style.opacity = 0;
step4.style.opacity = 0;
step5.style.opacity = 1;
let next = document.getElementById("nextButton");
next.style.opacity = 0;


slider.addEventListener("input", function() {
  let t = parseFloat(slider.value);

  step2.style.opacity = t > 0.25  ? 1 : 0;
  step3.style.opacity = t > 0.5   ? 1 : 0;
  step4.style.opacity = t > 0.75  ? 1 : 0;
	next.style.opacity = t > 0.85 ? 1:0;
  
});
