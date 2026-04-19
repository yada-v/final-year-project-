let t;
function setup() {
  let rightDiv = document.getElementById("canvas-wrapper");
  let canvas = createCanvas(rightDiv.clientWidth, rightDiv.clientHeight);
  canvas.parent('canvas-wrapper');
}

function draw() {
  background(50);
}

function windowResized() {
  let rightDiv = document.getElementById("canvas-wrapper");
  resizeCanvas(rightDiv.clientWidth, rightDiv.clientHeight);
}
