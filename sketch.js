let boxes = [];

let z, cam;
const boxsize = 20;

function setup() {
  cam = new Cam(0, 0, 0, 5);
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
  let accs = [
    createVector(random(-.25, .25), 0, 0),
    createVector(0, random(-.25, .25), 0),
    createVector(0, 0, random(-.25, .25)),
    createVector(0, 0, 0)
  ];
  cam.update();
  cam.show();
  randomBox = random(boxes);
  randomBox.acc = accs[floor(random(3))];
  for (let box of boxes) {
    box.update();
    box.draw();
  }


}
