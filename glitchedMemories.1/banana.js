class Ban {

  constructor() {
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 3;
  }

show(){
  image(banImg, this.x, thi.y, this.r, this.r);
}

}
