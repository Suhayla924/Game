class Coin{
  constructor() {
    this.r = 50;
    this.x = 0 - this.r;
    this.y = random(h);
    this.speed = 4;
    frameRate(60);
  }


  display() {
    //rect(this.x, this.y, this.r, this.r);
    image(coinImg, this.x, this.y, this.r, this.r);
  }

  move() {
    this.x += this.speed;
  }
}
