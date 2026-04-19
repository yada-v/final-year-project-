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
        let b = 0;
        let c = 1;
        let d = 0;


        if (s<0.3) {
        a=s/0.3;
        }
        if (s>=0.3) {
                a=1;
        }

if (s<0.3) {
b = 0;
}
if (s>0.5) {
        b = 1;
}

if (s>=0.3 && s<= 0.5) {
        b = (s - 0.3)/0.2;
}

if (s>0.7) {
        c = 0;
}

if (s<0.5) {
        c = 1;
}

if (s>=0.5 && s<= 0.7) {
        c = ( s - 0.5 ) / 0.2 ;
}

if (s>0.7) {
        d = ( s - 0.7 )/0.3;
}

push();
rotateX(PI/2 - b*PI/2);
rotateY(0);
rotateZ(0);
fill(255,255*(1-d));
plane(500,500);
pop();




rotateX(-b*PI/2);
rotateY(frameCount * 0.11 * c);
rotateZ((a-1)*PI/30);

push();
fill(255, 255*(1-d));
stroke(0,255*(1-d));
translate(0,-height/10,0);
cylinder(width/5, height/40);
noStroke();
cylinder(width/160, height/5);

let n = 10;
let R = width/5;


translate(0,-height/10,0);

rotateX(-PI/2);
for (let i = n -1; i >= 1; i--) {
        let r = i*R/n;

fill(255,255*d);
stroke(0,255*d);
 circle(0, 0, 2*r);

}



pop();


}
