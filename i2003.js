let img;

function preload() {
  img = loadImage('sky.webp');
}

let t;

function setup() {
  let rightDiv = document.getElementById("canvas-wrapper");
  // Use the smaller dimension for a square canvas
  let size = Math.min(rightDiv.clientWidth, rightDiv.clientHeight);
  size = Math.max(size, 300);
  let canvas = createCanvas(size, size, WEBGL);
  canvas.parent('canvas-wrapper');
}


let circles = [];

    textAlign(CENTER, CENTER);

    for(let i = 0; i < 30; i++){
      circles.push({
        x: random(width),
        y: random(-height, 0),   // start above screen
        speed: random(3, 8)
      });
    }

  draw = function(){
    background(80,160,200);

    // optional central object

    for(let c of circles){
      circle(c.x, c.y, 37.5);

      c.y += c.speed;   // move DOWN

      if(c.y > height){
        c.y = random(-50, 0);   // reset to top
        c.x = random(width);  // new random x
      }
    }
  }

function windowResized() {
  let rightDiv = document.getElementById("canvas-wrapper");
  let size = Math.min(rightDiv.clientWidth, rightDiv.clientHeight);
  size = Math.max(size, 300);
  resizeCanvas(size, size);
}

