/// <reference types="p5/global" />

let slider;
let canvas;

function setup() {
  const container = document.getElementById("igraph");
  canvas = createCanvas(container.clientWidth * 0.97, container.clientHeight);
  canvas.parent("igraph");
  slider = document.getElementById("slider");
}

function windowResized() {
  const container = document.getElementById("igraph");
  resizeCanvas(container.clientWidth * 0.97, container.clientHeight);
}

function arrow(x1, y1, x2, y2, arrowSize = 10) {
  line(x1, y1, x2, y2);
  push();
  const angle = atan2(y2 - y1, x2 - x1);
  translate(x2, y2);
  rotate(angle);
  noFill();
  triangle(0, 0, -arrowSize, -arrowSize / 2, -arrowSize, arrowSize / 2);
  pop();
}

function draw() {
  background(255);
  
  // Center coordinate system
  translate(width / 2, height / 2);

  const t = parseFloat(slider.value);  // 0 → 1

  // ---- Diagram Scaling and Positioning ----
  // Adjust these constants to fit your visual layout
  const plateWidth = width * 0.4;
  const plateHeight = height * 0.04;
  const fluidGap = height * 0.25;
  const plateYOffset = fluidGap / 2 + plateHeight / 2;

  // ---- 1. Draw the Metal Plates (Sandwiching the Fluid) ----
  push();
  // Top Plate
  fill(180); // Light gray metallic
  stroke(100);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -plateYOffset, plateWidth, plateHeight);
  // Label
  fill(0);
  noStroke();
  textAlign(CENTER, BOTTOM);
  textSize(16);
  text("Top Metal Plate", 0, -plateYOffset - plateHeight/2 - 5);

  // Bottom Plate
  fill(180);
  stroke(100);
  strokeWeight(2);
  rect(0, plateYOffset, plateWidth, plateHeight);
  // Label
  fill(0);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);
  text("Bottom Metal Plate", 0, plateYOffset + plateHeight/2 + 5);
  pop();

  // ---- 2. Indicate the Fluid (Oil) Layer ----
  push();
  // Dashed lines to indicate fluid boundaries (optional)
  drawingContext.setLineDash([5, 5]);
  stroke(150);
  strokeWeight(1);
  line(-plateWidth/2, -fluidGap/2, plateWidth/2, -fluidGap/2);
  line(-plateWidth/2, fluidGap/2, plateWidth/2, fluidGap/2);
  drawingContext.setLineDash([]);
  
  // Fluid label
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Oil (Viscous Fluid)", 0, 0);
  
  // Light blue tint for fluid area (optional)
  fill(173, 216, 230, 50);
  noStroke();
  rectMode(CENTER);
  rect(0, 0, plateWidth, fluidGap);
  pop();

  // ---- 3. Object Inside Fluid (The Falling Sphere) ----
  // The sphere is the object experiencing drag.
  // Its position can be animated, but for simplicity, we keep it centered.
  const sphereRadius = fluidGap * 0.3;
  push();
  fill(60, 70, 90);
  stroke(100, 150, 255, 180);
  strokeWeight(1);
  circle(0, 0, sphereRadius * 2);
  
  // Label for the object
  fill(0);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(14);
  text("Sphere (object)", 0, sphereRadius + 5);
  pop();

  // ---- 4. Forces (Vectors) ----
  // Gravity (downward)
  const gravityLength = fluidGap * 0.6;
  strokeWeight(3);
  const gravityColor = color(230, 57, 70);
  stroke(gravityColor);
  arrow(0, 0, 0, gravityLength);
  textSize(18);
  strokeWeight(1);
  textAlign(CENTER, TOP);
  noStroke();
  fill(gravityColor);
  text("Gravity", 0, gravityLength + 20);

  // Drag (upward, depends on t)
  const dragLength = t * fluidGap * 0.6;
  strokeWeight(3);
  const dragColor = color(42, 157, 143);
  stroke(dragColor);
  arrow(0, 0, 0, -dragLength);
  textSize(18);
  strokeWeight(1);
  textAlign(CENTER, BOTTOM);
  noStroke();
  fill(dragColor);
  if (t === 1) {
    text("Drag = Gravity", 0, -dragLength - 20);
  } else if (t === 0) {
    text("Drag = 0", 0, -dragLength - 20);
  } else {
    text("Drag", 0, -dragLength - 20);
  }

  // Net force (upward, difference)
  const netUp = (1 - t) * fluidGap * 0.6;
  strokeWeight(3);
  const netAlpha = t === 1 ? 0 : 220;
  const netColor = color(69, 123, 157, netAlpha);
  stroke(netColor);
  arrow(width / 4, -netUp, width / 4, netUp);
  textSize(18);
  strokeWeight(1);
  textAlign(LEFT, BOTTOM);
  noStroke();
  fill(69, 123, 157);
  if (t === 1) {
    text("Net Force\n    = 0", width / 4 + 20, netUp);
  } else {
    text("Net Force", width / 4 + 20, netUp);
  }

  // Velocity (upward, depends on t)
  const velLength = t * fluidGap * 0.6;
  const velAlpha = t === 0 ? 0 : 255;
  strokeWeight(3);
  const velColor = color(76, 175, 80, velAlpha);
  stroke(velColor);
  arrow(-width / 5, -0.7 * velLength, -width / 5, 0.7 * velLength);
  textSize(18);
  strokeWeight(1);
  textAlign(RIGHT, BOTTOM);
  noStroke();
  fill(76, 175, 80);
  if (t > 0 && t < 1) {
    text("Velocity", -width / 5 - 20, 0.7 * velLength);
  } else if (t === 0) {
    text("Velocity = 0", -width / 5 - 20, 0.7 * velLength);
  } else if (t === 1) {
    text("Terminal\nVelocity", -width / 5 - 20, 0.7 * velLength);
  }

  // ---- 5. Time Display ----
  translate(-width / 2, -height / 2);
  textAlign(LEFT, TOP);
  const timeValue = (5 * t).toFixed(2);
  fill(0);
  noStroke();
  textSize(22);
  text("t = " + timeValue, 10, 10);
  
  // Title for the simulation
  textAlign(RIGHT, TOP);
  textSize(18);
  text("Drag in a Viscous Fluid", width - 10, 10);
}
