let t, img, font;

function preload() {
  img = loadImage('rain.webp');
  font = loadFont('Inconsolata.otf');
}

function setup() {
  let rightDiv = document.getElementById("canvas-wrapper");
  let size = Math.min(rightDiv.clientWidth, rightDiv.clientHeight);
  size = Math.max(size, 300);
  let canvas = createCanvas(size, size, WEBGL);
  canvas.parent('canvas-wrapper');
  textFont(font);
  textSize(16);
  textAlign(CENTER, CENTER);
}

function drawArrow2D(x1, y1, x2, y2, headSize = 10) {
  push();
  let dx = x2 - x1;
  let dy = y2 - y1;
  let angle = atan2(dy, dx);
  let len = sqrt(dx * dx + dy * dy);

  translate(x1, y1);
  rotateZ(angle);

  strokeWeight(2);
  line(0, 0, len - headSize, 0);

  noStroke();
  translate(len - headSize, 0);
  triangle(0, 0, -headSize, headSize / 2, -headSize, -headSize / 2);
  pop();
}

function draw() {
  background(50);

  t = document.getElementById("slider");
  let s = parseFloat(t.value);
  let a = 0, b = 0;

  // Sphere fade
  if (s <= 0.4) a = s / 0.4;
  else a = 1;

  // Arrow/drag fade
  if (s > 0.4 && s <= 0.9) b = (s - 0.4) / 0.5;
  else if (s > 0.9) b = 1;

  let h = height / 3;
  let w = width / 4;

  // Draw arrows
  stroke(255, 255 * b);
  fill(255, 255 * b);

  drawArrow2D(0, 0, 0, -h * b);                     // drag (up)
  drawArrow2D(0, 0, 0, h);                          // gravity (down)
  drawArrow2D(w, -h * b * 0.4, w, h * b * 0.4);     // right side arrows
  drawArrow2D(-w, -h * (1 - b) * 0.35, -w, h * (1 - b) * 0.35);

  // Labels
  textAlign(CENTER, BOTTOM);
  text('Gravity', 0, h);

  if (b > 0.01) {
    textAlign(CENTER, TOP);
    text('Drag', 0, -h * b);
  }

  if (b == 1) {
    textAlign(CENTER, TOP);
    text('Drag = \nGravity', 0, -h * b);
    textAlign(CENTER, RIGHT);
    text('Terminal\nVelocity', w, 0);
    textAlign(CENTER, LEFT);
    text('Net\nForce = 0', -w, 0);
  }

  if (b < 1) {
    textAlign(CENTER, RIGHT);
    text('Velocity', w, 0);
    textAlign(CENTER, LEFT);
    text('Net Force', -w, 0);
  }

  // Rain image (fades out as sphere appears)
  tint(255, 255 * (1 - a));
  imageMode(CENTER);
  image(img, 0, 0, width, height);

  // Sphere (fades in)
  rotateY(frameCount * 0.01);
  fill(255, 255 * a);
  stroke(0, 255 * a);
  sphere(width / 7);
}

function windowResized() {
  let rightDiv = document.getElementById("canvas-wrapper");
  let size = Math.min(rightDiv.clientWidth, rightDiv.clientHeight);
  size = Math.max(size, 300);
  resizeCanvas(size, size);
}