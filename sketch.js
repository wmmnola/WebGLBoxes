let boxes = [];
let z;
const boxsize = 20;

function setup() {
  z = (500 / 2.0) / tan(PI / 6);
  createCanvas(windowWidth, windowHeight, WEBGL)
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      for (let z = 0; z < 10; z++) {
        let b = new Box(x * boxsize, y * boxsize, z * boxsize);
        boxes.push(b);
      }
    }
  }

}

function draw() {
  if (mouseIsPressed) {
    if (mouseButton == LEFT) rotateY(map(mouseX, 0, width, 0, 2 * PI));
    if (mouseButton == RIGHT) rotateX(map(mouseY, 0, height, 0, 2 * PI));
    if (mouseButton == CENTER) rotateZ(map(mouseY, 0, height, 0, 2 * PI))
  } else rotateY(frameCount * .02);
  randomBox = random(boxes);
  randomAccel = createVector(0, 0, random(-.5, .5));
  randomBox.acc = randomAccel;
  for (let box of boxes) {
    box.update();
    box.draw();
  }


}
