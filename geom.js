let t;
let font;

function preload(){

font = loadFont('Inconsolata.otf');
}


function setup() {
  let rightDiv = document.getElementById("canvas-wrapper");
  let canvas = createCanvas(rightDiv.clientWidth, rightDiv.clientWidth, WEBGL);
  canvas.parent('canvas-wrapper');

	textFont(font);
  textSize(16);
  textAlign(CENTER, CENTER);
}

/* -------------------------
   2D Arrow (in WEBGL XY plane)
--------------------------*/
function drawArrow2D(x1, y1, x2, y2, headSize = 10) {
  push();

  let dx = x2 - x1;
  let dy = y2 - y1;
  let angle = atan2(dy, dx);
  let len = sqrt(dx * dx + dy * dy);

  translate(x1, y1);
  rotateZ(angle);

  stroke(255);
  strokeWeight(2);
  line(0, 0, len - headSize, 0);

  noStroke();
  translate(len - headSize, 0);
  fill(255);
  triangle(
    0, 0,
    -headSize, headSize / 2,
    -headSize, -headSize / 2
  );

  pop();
}



function drawBarCaps(x1, y1, x2, y2, capSize = 2) {
  push();
  stroke(255,255,0);
  strokeWeight(2);

  line(x1, y1, x2, y2);

  // left cap
  line(x1, y1 - capSize, x1, y1 + capSize);

  // right cap
  line(x2, y2 - capSize, x2, y2 + capSize);

  pop();
}





function draw() {
  background(50);

  t = document.getElementById("slider");
  let s = parseFloat(t.value);

  let cx = 0;
  let cy = -height / 10;


  let Lscale = 120;
  let Gscale = 120;
  let Tscale = 100;

push();
text('mg', - sin(PI/15)*Lscale, cy + Lscale);
text('Angular momentum',cx,cy - Gscale);
text('Torque',cx + Tscale*2,cy);
let j = -sin(PI/15)*height/20;
textAlign(CENTER, TOP);
textSize(12);
text('d',j,6);

pop();

  // ground plane
  push();
  rotateX(PI / 2);
  fill(220);
  plane(500, 500);
  pop();

  rotateZ(-PI / 15);

  // cylinder (top)
  push();
  fill(255);
  stroke(0);
  translate(0, -height / 10, 0);
  cylinder(width / 5, height / 40);
  noStroke();
  cylinder(width / 160, height / 5);
  pop();


  /* -------------------------
     Gravity Mg (down)
  --------------------------*/
drawArrow2D(
    cx, cy,
    cx - sin(PI/15)*Lscale,
    cy + Lscale
  );


  /* -------------------------
     Angular momentum
  --------------------------*/

  drawArrow2D(
    cx, cy,
    cx,
    cy - Gscale
  );

  /* -------------------------
     Torque τ (horizontal)
  --------------------------*/
  drawArrow2D(
    cx, cy,
    cx + Tscale*2,
    cy
  );

push();
rotateZ(PI / 15);
drawBarCaps(cx - sin(PI/15)*height/10,6,0,6);
pop();


}
