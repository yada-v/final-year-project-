/// <reference types="p5/global" />


function setup(){
let rightDiv = document.getElementById("igraph");
let canvas = createCanvas(rightDiv.clientWidth*0.97, rightDiv.clientHeight);
canvas.parent("igraph");
}

function arrow(x1,y1,x2,y2 , arrowSize = 10){
line(x1,y1,x2,y2);

push();
let angle = atan2( y2 - y1, x2 - x1 );
translate(x2,y2);
rotate(angle);


noFill();
triangle(0, 0, -arrowSize, -arrowSize / 2, -arrowSize, arrowSize / 2);


pop();

}


let h;

function draw(){
background(255);
translate(width/2, height/2);

let t = parseFloat(document.getElementById("slider").value);

//mg
strokeWeight(3);
let qw = color(230,57,70);
stroke(qw);
arrow(0, 0,0,height/3 );

textSize(20);
strokeWeight(1);
textAlign(CENTER,BOTTOM);
noStroke();
fill(qw);
text("Gravity",0,height/3 + 30);


//drag
let length = t*height/3;
strokeWeight(3);
let we = color(42, 157, 143);
stroke(we);
arrow(0, 0,0,-1*length );

textSize(20);
strokeWeight(1);
textAlign(CENTER,TOP);
noStroke();
fill(we);
if (t==1) {
        text("Drag = Gravity",0,-1*length - height/10);
} if(t==0) {
        text("Drag = 0",0, -1*length - height/10);
} if(t>0 && t<1){
	text("Drag", 0, -1*length - height/10);
}

//obj
fill(60,70,90);
stroke(100,150,255,180);
strokeWeight(1);
circle(0,0,height/10);

//Net force

if (t==1) {
	h=0;
} else {
	h=220;
}
let up = (1-t)*height/3;
strokeWeight(3);
let col = color(69, 123, 157,h);
stroke(col);
arrow(width/4, -1*up, width/4, up);

textSize(20);
strokeWeight(1);
textAlign(LEFT,BOTTOM);
noStroke();
let col1 = color(69, 123, 157);
fill(col1);
if (t==1) {
	text("Net Force\n    = 0",width/4 + 20,0 + up);
} else {
	text("Net Force",width/4 + 20,0 + up);
}

//velocity
let d = t*height/3;
let e;
if (t==0) {
	e=0;
} else {
	e=255;
}
strokeWeight(3);

let er = color(76, 175, 80,e);
let er1 = color(76, 175, 80);
stroke(er);
arrow(-1*width/5, -0.7*d, -1*width/5, 0.7*d);

textSize(20);
strokeWeight(1);
textAlign(RIGHT,BOTTOM);
noStroke();
fill(er1);
if (t>0 && t<1) {
	text("Velocity", -1*width/5 - 20, 0.7*d);
}
if(t==0){
	text("Velocity = 0", -1*width/5 - 20, 0.7*d);
	}

if(t==1){
        text(" Terminal\nVelocity", -1*width/5 - 20, 0.7*d);
        }
//back to normal
translate(-width/2,-height/2);

textAlign(LEFT,TOP);
let time = (5*t).toFixed(2);
stroke(0,0,0);
textSize(25);
fill(0,0,0)
text("t = " + time,10,10);


}
