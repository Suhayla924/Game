'use strict';
let player;
let playerImg;
let bgImg;


function preload() {
  playerImg = loadImage('assets/blue.png');
  bgImg = loadImage('assets/sky.JPG');
}

function setup() {
  createCanvas(800, 800);
  player = new Player();

}

function keyPressed() {
  if (key == ' ') {
    player.jump();
  }
}

function draw() {
  background(bgImg);

  player.display();
  player.move();



}
