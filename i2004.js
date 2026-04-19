document.addEventListener("DOMContentLoaded", function () {
  let realSketch = function (p) {
    let img;

    p.preload = function () {
      img = p.loadImage('sky.jpg');
    };

    p.setup = function () {
      let rightDiv = document.getElementById("real");
      let w = rightDiv.offsetWidth || 600;
      let h = rightDiv.offsetHeight || 400;
      let canvas = p.createCanvas(w, h);
      canvas.parent("real");
    };

    p.draw = function () {
      p.background(80, 160, 200);
      if (img) p.image(img, 0, 0, p.width, p.height);
    };
  };

  new p5(realSketch);
});
