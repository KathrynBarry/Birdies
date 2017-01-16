function Circle() { //characteristics of circle
 this.x = height / 5;
 this.y = height / 5;
 this.speed = random(5);
 this.colour = (0, 133, 223);

 this.display = function() { //put function into function
  noStroke();
  fill(this.colour);
  ellipse(random(this.x, mouseX), random(this.y, mouseY), circleSize, circleSize);
 }

 this.move = function() {
  this.x = this.x + this.speed;

  if (this.x > (width - 25)) {
   this.speed = -this.speed;

  }
  if (this.x < 25) {
   this.speed = -this.speed;
  }
 }
}