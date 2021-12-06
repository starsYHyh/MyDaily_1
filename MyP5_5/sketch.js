var allHeight;
var allWidth;
var num;
var X;
var Y;
var a = 255;
var dt = 0.03;
var x = 10;
var y = 10;

function setup() {
  num = 1000;
  X = new Array();
  Y = new Array();
  allHeight = 1600;
  allWidth = 1600;
  createCanvas(allWidth, allHeight);
  background(40);

  for (let i = 0; i < num; i++) {
    X[i] = random(-10, 40);
    Y[i] = random(-10, 40);
  }
}

function draw() {
  // clear();
  // background(40);
  translate(600, 600);
  scale(10);

  for (let i = 0; i < num; i++) {
    dx = 0.2 * cos(0.1 * Y[i]);
    dy = 0.2 * sin(0.1 * X[i]);
    X[i] += dx;
    Y[i] += dy;

    fill(dx * dy * 2500, dx * dy * 10000, 200 - 25000 * dx * dy);
    stroke(100, dx * 1000, 200 - dy * 1000);
    strokeWeight(dx * dy * 5);
    // noStroke();
    point(X[i], Y[i]);
    // ellipse(X[i], Y[i], 1 + dx * dy * 100);
  }
}
