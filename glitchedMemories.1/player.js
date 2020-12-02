class Player {
  constructor() {
    this.r = 75;
    this.x = 50;
    this.y = height - this.r;
    this.j = 0;
    this.gravity = 2;
  }

  jump() {
    this.j = -25;
  }

  move() {
    this.y += this.j;
    this.j += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  
  show() {
    image(playerImg, this.x, this.y, this.r, this.r);
  }



}
