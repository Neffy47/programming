function setup() {
    createCanvas(500,500);
    
     
}
 
function draw() {
    background(100,0,125);
    noStroke();
    smooth();
    ellipse(125, 125, 130, 130);
    noSmooth();
    ellipse(375, 125, 130, 130);
}

function mousePressed(){
    background(100,0,125);
    fill(0,0,255);
    ellipse(125, 125, 100, 100);
    fill(random(0),random(255),random(255));
    ellipse(375, 125, 100, 100);
}
