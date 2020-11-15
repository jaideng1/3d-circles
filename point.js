



class Point {
  constructor(r, theta, phi, size) {
    this.r = r;
    this.theta = theta;
    this.phi = phi;
    this.y = this.r * Math.sin(this.phi);
    this._r = this.r * Math.cos(this.phi);
    this.z = this._r * Math.sin(this.theta);
    this.x = this._r * Math.cos(this.theta);
    this.size = size;
    this.hue = (100 * this.theta) / (Math.PI * 10)
  }
  updateXYZ() {
  
    this.y = this.r * Math.sin(this.phi);
    this._r = this.r * Math.cos(this.phi);
    this.z = this._r * Math.sin(this.theta); //this._r
    this.x = this._r * Math.cos(this.theta); //this._r
    
  }
  draw() {
    noStroke();
    push();
      translate(this.x,this.y,this.z);
      fill(this.hue,100,100);
      box(this.size);
    pop();
  }
  updateColor() {
    this.hue = (100 * this.theta) / (Math.PI * 2)
  }
  move() {
    this.phi += 0.01;
  }
  update() {
    this.move();
    this.updateXYZ();
    this.updateColor();
    this.draw();
  }
  static Init(rs,n) {
    for (let i = 0; i < n; i++) {
      let newPoint = new Point(rs,Math.random(0,2) * Math.PI, Math.random(0,2) * Math.PI * 2, 10);
      points.push(newPoint);
    }
  }
  static _Update() {
    for (let i = 0; i < points.length; i++) {
      points[i].update();
    }
  }
}

var points = [];
