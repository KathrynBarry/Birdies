var bubbles = [];
var gentle;
var tweeting;
var w;
var vol;
//constructor:
var circles = [];
var numCircles = 15;
var circleSize = 5;
var speed;
//panning:
var lr;


function setup() {
 createCanvas(600, 400);
 gentle = loadSound("gentlebird.mp3");
 tweeting = loadSound("tweeting.mp3", loaded);

 function loaded() {
  tweeting.loop();
 }

 //constructor info:
 for (var j = 0; j < numCircles; j++) {
  circles[j] = new Circle();

 }
 frameRate(8);

 amp = new p5.Amplitude(); // amp


 for (var i = 0; i < 50; i++) {
  var x = random(width);
  var y = random(height);
  bubbles.push(new Bubbles(x, y));
 }


}

function mousePressed() { //change colour of birdies into yellow
 for (var i = 0; i < bubbles.length; i++)
  bubbles[i].clicked();

}

function draw() {
 cursor(HAND); ///hand cursor
 var gradual = map(mouseX, mouseY, 15, 90, 85);
 background(gradual, 100, 230);

 var vol = 1;


 w = amp.getLevel() * 2500; //dot syntax = call functionality on it
 console.log(w);
 for (var i = 0; i < bubbles.length; i++) {
  bubbles[i].move();
  bubbles[i].display();
 }

 //constructor:
 for (var j = 0; j < circles.length; j++) { //length to call the length of array//
  circles[j].display();
  circles[j].move();
 }
 //panning:
 lr = map(mouseX, 0, width, -1, 1);
 tweeting.pan(lr, 0.01);


 //birdy 
 fill(255, 220, 0);
 stroke(0, 230, 240);
 ellipse(240, 340, 25, 25); //bird's head
 fill(0, 25, 255);
 stroke(0, 230, 240);
 ellipse(235, 338, 3, 5);
 ellipse(245, 338, 3, 5); //eyes
 fill(255, 50, 10);
 noStroke();
 ellipse(240, 345, w / 15, w / 15); //mouth

 fill(255, 220, 0);
 ellipse(240, 365, 25, 28); //tummy
 fill(25, 320, 25);
 noStroke();
 rect(235, 380, 3, 5); //feet
 rect(240, 380, 3, 5); //feet
 stroke(255, 8, 8);
 line(220, 355, 230, 365);
 line(250, 355, 260, 345); //arms
}

function keyPressed() { //start hoot of birdy
 if (keyCode === RIGHT_ARROW) {
  (gentle.loop());
 } else if (keyCode === LEFT_ARROW) {
  (gentle.stop());
 }
}