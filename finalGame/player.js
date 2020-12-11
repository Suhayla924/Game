class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.j = 0;
    this.speed = 9;
    this.direction = 'still';
    this.gravity =2;
    frameRate(60);
  }

  display() {
    // rect(this.x, this.y, this.r, this.r);
    image(playerImg, this.x, this.y, this.r, this.r);
  }

  jump() {
    this.j = -25
  }
  move() {
    this.y += this.j;
      this.j += this.gravity;
      this.y = constrain(this.y, 0, height - this.r);

    switch (this.direction) {
      case 'still':
        //dont move anything
        break;
      case 'right':
        //decrease x position
        if (this.x < w - this.r / 2) {
          this.x += this.speed;
        }
        break;
      case 'left':
        //increase x pos
        if (this.x - this.r / 2 > 0) {
          this.x -= this.speed;
        }
        break;
    }

  }

}
