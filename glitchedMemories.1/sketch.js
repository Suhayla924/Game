'use strict';
let player;
let playerImg;
let bgImg;
let cactusImg;

function preload() {
  playerImg = loadImage('assets/blue.png');
  bgImg = loadImage('assets/sky.png');
  cactusImg = loadImage('assets/blue.png');
}
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
