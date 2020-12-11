class Flopydisk{
  constructor() {
    this.r = 50;
    this.x = 0 - this.r;
    this.y = random(h);
    this.speed = 10;
  }

  display() {
    //rect(this.x, this.y, this.r, this.r);
    image(flopyImg, this.x, this.y, this.r, this.r);
  }
  move() {
    this.x += this.speed;
  }
}
