function Bubbles(x, y) {
 this.x = x;
 this.y = y;
 this.col = color(205, 10, 10);


 this.display = function() {
  stroke(255, 220, 0);
  fill(this.col);
  ellipse(this.x, this.y, random(1, 20), 15);
 }

 this.clicked = function() {
  for (var i = 0; i < 2; i++) {
   var d = dist(mouseX, mouseY, this.x, this.y);
   if (d < 4) {
    this.col = color(255, 220, 0);
   }
  }
 }
 this.move = function() {
  this.x = this.x + random(-1, 1);
  this.y = this.y + random(-1, 1);
 }
}