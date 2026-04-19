let t;
function setup() {
        let rightDiv = document.getElementById("canvas-wrapper");
//check the clientwidtb/height.need to be changed to sqhare with hwight or width whichever is smaller
        let canvas = createCanvas(rightDiv.clientWidth, rightDiv.clientWidth , WEBGL);
          canvas.parent('canvas-wrapper');
}




function draw() {
          background(50);

        t = document.getElementById("slider");
        let  s = parseFloat(t.value);
        let a = 0;

push();
rotateX(PI/2);
rotateY(0);
rotateZ(0);
fill(255,255);
plane(500,500);
pop();




rotateX(-b*PI/2);
rotateY(frameCount * 0.11);
rotateZ((a-1)*PI/30);

push();
fill(255, 255);
stroke(0,255);
translate(0,-height/10,0);
cylinder(width/5, height/40);
noStroke();
cylinder(width/160, height/5);

pop();


}
