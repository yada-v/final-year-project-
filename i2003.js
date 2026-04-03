let idealSketch = function(p){                                                                                        let lines = [];
p.setup = function(){
let rightDiv= document.getElementById("ideal");            
let canvas=p.createCanvas(rightDiv.clientWidth,rightDiv.clientHeight);
canvas.parent("ideal");                       
p.textAlign(p.CENTER,p.CENTER)            
for(let i = 0;i<100;i++){
lines.push({
x: p.random(p.width),
y: p.random(p.height),
len: p.random(20,50),                                              
speed: p.random(10,20)                                                      
});
}
}


let dropx;
let dropy;

p.draw =function(){
p.background(80,160,200);
p.circle(p.width/2,p.height/2,37.5);

for(let l of lines){
p.stroke(255);
p.strokeWeight(2);
p.line(l.x,l.y,l.x,l.y+l.len);
l.y -= l.speed;

        if(l.y<0){l.y=p.height;}
}}};
new p5(idealSketch);
