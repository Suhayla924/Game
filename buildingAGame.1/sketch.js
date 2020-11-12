<<<<<<< HEAD
'use strict';

let state ='title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
function setup(){
  cnv = createCanvas(w, h);

  textFont('Arial Black');

}

function draw(){
  switch (state){
    case 'title':
    title();
    cnv.mouseClicked(titleMouseClicked);
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

function title(){
  background(137,252,182);
  textSize(60);
  textAlign(CENTER);
  fill(14,17,44);
  text('CLICKING GAME', w/2, h/5);
  textSize(25);
  text('click anywhere to begin', w/2, h/2);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1(){
  background(87,251,234);
  text('tap-tap-tap!', w/2, h/2);
  text('click for points', w/2, h - 30);
}

function level1MouseClicked(){
  points ++;
  console.log('points = ' + points);
  if(points >= 10){
    state = 'you win'
  }
  //points = points += 1; short hand is --> points++;
}

function youWin(){
  background(251,87,186);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/4);
  textSize(30);
  text('click anywhere to restart', w/2, h/2);

}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
=======
'use strict';

let state ='title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
function setup(){
  cnv = createCanvas(w, h);

  textFont('Arial Black');

}

function draw(){
  switch (state){
    case 'title':
    title();
    cnv.mouseClicked(titleMouseClicked);
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

//if(state === 'title'){
//  title();
//  cnv.mouseClicked(titleMouseClicked);
//  } else if (state === 'level 1' && points > 50){
//    level1();
//    cnv.mouseClicked(level1MouseClicked)
//  }
//}

function title(){
  background(137,252,182);
  textSize(60);
  textAlign(CENTER);
  fill(14,17,44);
  text('CLICKING GAME', w/2, h/5);
  textSize(25);
  text('click anywhere to begin', w/2, h/2);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1(){
  background(87,251,234);
  text('tap-tap-tap!', w/2, h/2);
  text('click for points', w/2, h - 30);
}

function level1MouseClicked(){
  points ++;
  console.log('points = ' + points);
  if(points >= 10){
    state = 'you win'
  }
  //points = points += 1; short hand is --> points++;
}

function youWin(){
  background(251,87,186);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/4);
  textSize(30);
  text('click anywhere to restart', w/2, h/2);

}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
>>>>>>> 5e3e76c1751415e3778e911be784acb0bf41cf88
