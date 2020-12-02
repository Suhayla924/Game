'use strict';
let player;
let playerImg;
let bgImg;
let banImg;
let bans = [];


function preload() {
  playerImg = loadImage('assets/blue.png');
  bgImg = loadImage('assets/sky.JPG');
  banImg = loadImage('assets/banana.png');
}

function setup() {
  createCanvas(800, 450);
  player = new Player();

}

function keyPressed() {
  if (key == ' ') {
    player.jump();
  }
}

function draw() {
  if (random(1) < 0.01) {
    bans.push(new Ban());
  }

  background(bgImg);
  player.show();
  player.move();

   for (let b of bans){
     b.move();
     b.show();
   }


}
