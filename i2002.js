/// <reference types="p5/global" />
document.addEventListener("DOMContentLoaded", function () {
  let slider = document.getElementById("slider");

  function update() {
    let t = parseFloat(slider.value);
    document.getElementById("real").style.opacity = 1 - t;
    document.getElementById("ideal").style.opacity = t;
  }

  update();
  slider.addEventListener("input", update);
});

