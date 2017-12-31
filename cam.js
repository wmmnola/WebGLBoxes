let Cam = function(x, y, z, radius) {
  this.pos = createVector(x, y, z);
  this.acc = createVector(0, 0, 0);
  this.vel = createVector(50 * sin(3 * this.ang), 0, 50 * sin(4 *
    this.ang));
  this.ang = 0;
  this.r = radius;
  this.show = function() {
    camera(this.pos.x, this.pos.y, this.pos.z, 5, 5, 5, 1, 0, 0);
    rotateY(this.ang);
  }
  this.update = function() {
    //  this.pos.x = sin(this.ang) * this.r
    //  this.pos.z = cos(this.ang) * this.r
    console.log(this.pos);
    this.pos.x = 100 * sin(3 * this.ang);
    this.pos.z = 100 * sin(4 * this.ang);

    this.ang += .01;
    this.ang %= 2 * PI;
  }

}
