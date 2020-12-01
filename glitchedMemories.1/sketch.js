'use strict';
let player;
function setup() {
createCanvas(600, 450);
  player = new Player();

}

function keyPressed() {
  if (key == 'k') {
    player.jump();
  }
}

function draw() {
  background(250);

  player.show();
  player.move();

}
