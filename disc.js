/// <reference types="p5/global" />

function setup(){
let rightDiv = document.getElementById("disc");
let canvas = createCanvas(rightDiv.clientWidth,rightDiv.clientHeight);
canvas.parent("disc");

positionLabels();

}


function arrow(x1,y1,x2,y2) {
	line(x1,y1,x2,y2);

	push();
	let angle = atan2(y2 - y1,x2 - x1);

	translate(x2,y2);
	rotate(angle);
	noStroke();
	
	let arrowSize = height/240;
	triangle(0+height/360,0, -arrowSize, -arrowSize / 2, -arrowSize, arrowSize / 2);
	pop();
	
}


function draw(){
background(255);

let a,b,c,d,e = 0;
let slider = document.getElementById("slider");
let t = parseFloat(slider.value);

let labels = document.getElementById("label");
labels.style.opacity = t;

let nextButton = document.getElementById("nextButton");
if (t>0.8) {
	nextButton.style.opacity = 1;
}else{
	nextButton.style.opacity = 0;
}



let x = width/2; 
let y = height/8;
let r = height/15; 
let offSet = 1.1*r;


if ( t > 0 || t < 0.2) {
	a = 5*t;
} if(t>0.2){
	a = 1;
}


if ( t > 0.2 || t < 0.4) {
	b = 5*(t - 0.2);
} if(t > 0.4){
	b = 1;
}


if ( t > 0.4 || t < 0.6) {
	c = 5*(t - 0.4);
} if(t > 0.6){
	c = 1;
}


if ( t > 0.6 || t < 0.8) {
	d = 5*(t - 0.6);
} if(t > 0.8){
	d = 1;
}


if ( t > 0.8 || t < 1) {
	e = 5*(t - 0.8);
} if(t > 1){
	e = 1;
}



noStroke();

fill(0,51*a);
circle(x,2*y,r);



fill(0,102*b);
circle(x,3*y,r);



fill(0,153*c);
circle(x,4*y,r);



fill(0,204*d);
circle(x,5*y,r);



fill(0,255*e);
circle(x,6*y,r);

//arrows

stroke(0);
strokeWeight(1);

arrow(x ,3 * y - offSet ,x ,2 * y + offSet);	
arrow(x ,4 * y - offSet ,x ,3 * y + offSet);	
arrow(x ,5 * y - offSet ,x ,4 * y + offSet);	
arrow(x ,6 * y - offSet ,x ,5 * y + offSet);	



}

function positionLabels() {
	let wrapper = select('.canvas-wrapper');
	if(!wrapper || !wrapper.elt) return;

	let w = wrapper.width;
	let h = wrapper.height;


	select('#vn').position(w * 0.05, h * 0.25);
	select('#vn1').position(w * 0.05, h * 0.375);  
	select('#vn2').position(w * 0.05, h * 0.5);   
	select('#vn3').position(w * 0.05, h * 0.625);   
	select('#vn4').position(w * 0.05, h * 0.75);

}





