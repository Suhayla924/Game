'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 800;
let h = 550;
let player;
let coins = [];
let flopydisks = [];
let playerImg;
let coinImg;
let flopyImg;
let numberKeysPressed = 0;

function preload() {
  playerImg = loadImage("assets/player.png");
  coinImg = loadImage("assets/hourglass.png");
  flopyImg = loadImage("assets/flopydisk.png");
}

function setup() {
  cnv = createCanvas(w, h);
  frameRate(40);

  imageMode(CENTER);
rectMode(CENTER);

textFont('Arial Black');

  player = new Player();
  //  coins[0] = new coins();
  coins.push(new Coin());
  flopydisks.push(new Flopydisk());

}


function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'intro':
      intro();
      cnv.mouseClicked(introMouseClicked);
      break;
    case 'story':
      story();
      cnv.mouseClicked(storyMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }
}


function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  }
  if (key == ' ') {
    player.jump();
  }
}

function keyReleased() {
  if (keyIsDown(LEFT_ARROW)) {
    numberKeysPressed++;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    numberKeysPressed++;
  }
  if (keyIsDown(DOWN_ARROW)) {
    numberKeysPressed++;
  }
  if (keyIsDown(UP_ARROW)) {
    numberKeysPressed++;
  }
  console.log(numberKeysPressed);

  player.direction = 'still';
}


function title() {
  background(137, 252, 182);
  textSize(60);
  textAlign(CENTER);
  fill(14, 17, 44);
  text('CLICKING GAME', w / 2, h / 5);
  textSize(25);
  text('click anywhere to begin', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'intro'
}



function intro() {
  background(137, 252, 182);
  textSize(60);
  textAlign(CENTER);
  fill(14, 17, 44);
  text('Intro', w / 2, h / 5);
  textSize(25);
  text('click anywhere to begin', w / 2, h / 2);
}

function introMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'story'
}


function story() {
  background(137, 252, 182);
  textSize(60);
  textAlign(CENTER);
  fill(14, 17, 44);
  text('STORY', w / 2, h / 5);
  textSize(25);
  text('click anywhere to begin', w / 2, h / 2);
}

function storyMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}



function level1() {
  background(87, 251, 234);
  if (random(1) <= 0.06) {
    coins.push(new Coin());
  }

  if (random(1) <= 0.02) {
    flopydisks.push(new Flopydisk());
  }

  player.display();
  player.move();

  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  for (let i = 0; i < flopydisks.length; i++) {
    flopydisks[i].display();
    flopydisks[i].move();
  }


  for (let i = coins.length - 1; i >= 0; i--)
    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
    coins.splice(i, 1);
    //console.log('coin is out of town');
  }

  for (let i = flopydisks.length - 1; i >= 0; i--)
    if (dist(player.x, player.y, flopydisks[i].x, flopydisks[i].y) <= (player.r + flopydisks[i].r) / 2) {
      points--;
      flopydisks.splice(i, 1);
    } else if (flopydisks[i].y > h) {
    flopydisks.splice(i, 1);
  }

  text(`points: ${points}`, w / 6, h - 30);

  if (points >= 5) {
    state = 'you win';
  }
}

function level1MouseClicked() {
  //points++;
  //  console.log('points = ' + points);
  //  if (points >= 10) {
  //  state = 'you win'
  //}
  //n:points = points += 1; short hand is --> points++;
}


function youWin() {
  background(251, 87, 186);
  textSize(80);
  stroke(255);
  text('YOU WIN', w / 2, h / 4);
  textSize(30);
  text('click anywhere to restart', w / 2, h / 2);

}

function youWinMouseClicked() {
  state = 'title';
  points = 0;
}
