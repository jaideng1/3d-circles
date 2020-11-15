


function setup() {
  createCanvas(500,500,WEBGL);
  colorMode(HSB, 100);
  Point.Init(150, 1500)
}

function draw() {
  orbitControl();
  background(0,0,0);
  Point._Update();
}

//to move
//push()
//translate(x,y,z)
//rotate(PI/4) optinal
//sphere(20) <- radius of sphere
//pop()

//y= r * sin(phi), R = r * cos(phi) z = R * sin(theta),x= R*cos(theta)
