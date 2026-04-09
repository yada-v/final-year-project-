/// <reference types="p5/global" />
let rightDiv = document.getElementById("graph");
function setup(){
let canvas = createCanvas(rightDiv.clientWidth,rightDiv.clientHeight);
canvas.parent("graph");
}

function arrow(x1,y1,x2,y2) {
        line(x1,y1,x2,y2);

        push();
        let angle = atan2(y2 - y1,x2 - x1);

	let arrowSize = height/100;
	let offset = arrowSize * 0.5;
translate(
  x2 - offset * cos(angle),
  y2 - offset * sin(angle)
);
        rotate(angle);
	fill(0);
        noStroke();



	triangle(height/80,0, -arrowSize, -arrowSize / 2, -arrowSize, arrowSize / 2);

        pop();

}


function dottedLine(x1, y1, x2, y2, ) {


	
 let spacing = 6;
	push();
	
let d = dist(x1, y1, x2, y2);

  let steps = d / spacing;

  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);


    point(x, y);


stroke(0,150,0,120);


  }  pop();

} 





let slider = document.getElementById("slider");


function draw(){
background(255);

let t = parseFloat(slider.value);


noFill();

let h = 1 - t + 0.01;
strokeWeight(3);
	beginShape();

stroke(255,0,0);
	for (let x = 0; x <= 10; x = x + 10*h/3) {
		let y = 0.7*(1 - exp(-x/1));

		let px = map(x, 0, 10, 50, width - 50);
		let py = map(y, 0, 1, height - 50, 50);

		vertex(px, py);



push();
stroke(0,150,255,60);
line(px,height-50,px,py);
	pop();
		
	}
let yLine = 0.3 * (height - 100) + 50 ;
dottedLine(50, yLine, width - 50, yLine);

	endShape();


//x-axis
stroke(0);
strokeWeight(2);
arrow(50, height - 50, width - 40, height - 50);
//y-axis
stroke(0);
arrow(50,height - 50, 50, 50);
textAlign(CENTER,BOTTOM);
	strokeWeight(1);
	text("Time", width/2, height - 20);
textAlign(CENTER,TOP);
	text("Terminal Velocity", width/3, 3*height/10 - 20);

push();
translate(30, height/2);
rotate(-PI/2);
textAlign(CENTER, CENTER);
text("Velocity", 0, 0);
pop();



}
