let CirclesX1 = 210;
let CirclesX2 = 40;
let CirclesX3 = 200;
let CirclesX4 = 100;
let CirclesX5 = 0;
let CirclesX6 = 300;
let CirclesX7 = 250;
let CirclesX8 = 150;
let CirclesX9 = 80;
let CirclesY1 = 220;
let CirclesY2 = 260;
let CirclesY3 = 300;
let CirclesY4 = 340;
let CirclesY5 = 180;
let CirclesY6 = 140;
let CirclesY7 = 100;
let CirclesY8 = 60;
let CirclesY9 = 20;
let muteX = 0;
let muteY = 360;
let bcolor;
let bcolora;
let bcolorb;
let colorR;
let colorG;
let colorB;
let SquareY = 380;
let SquareX = 200;
let speed = 1;
let level = 1;
let levelclear = false;
let levelstart = false;
let gameover = false;
let audiomove;
let bgmusic;
let audiodeath;
let audiostage;
let audioff = false;
function preload() {
  audiomove = createAudio('cartoon-jump-6462.mp3');
  bgmusic = createAudio('background-music-for-mobile-casual-video-game-short-8-bit-music-164703.mp3');
  audiodeath =createAudio('negative_beeps-6008.mp3');
  audiostage = createAudio('success-48018.mp3');
}
function setup() {
  createCanvas(400, 400);
  background("black");
  print("instructions: press the up arrow to move up the screen, press the down arrow to move down the screen");
  print("If you want to disble the music press the m button on your keyboard to mute all sound");
  print("The goal of the game is to get from one end of the screen to the other, if you get hit by any of the oncoming circles you get a gameover, and have to try again");
  print("There is no end to the game, however, each time you reach the other end of the stage, the circles start moving faster, and faster after each subsequent stage");
  print("Keep in mind too, each time a stage ends, the color palette will swap into an entirely random color for both the background, and the shapes. potentially causing some stages to be harder than others in subsequent playthroughs");
  print("In order to start your first game, and also restart your game from your death, click on your mouse to start playing. Good luck!");
}

function draw() {
  if (levelstart === true); {
    if (levelclear === false) {
      background("black");
      fill("white");
      if (audioff === true)  {
        fill("red");
      }
      square(muteX,muteY,100);
      fill("white");
      square(300,360,100);
      fill("black");
      textSize(18);
      if (audioff === false) {
      fill("black"); 
      text('Mute: off', 10, 390);
      }
      else if (audioff === true) {
        fill("black");
        text('Mute: on', 10, 390);
      }
      fill ("white");
      square(300,360,100);
      fill("black");
      textSize(20);
      text('Stage ' + level, 320, 390);
      fill("red");
    } else {
      background(bcolorb, bcolor, bcolora);
      fill("white");
      if (audioff === true)  {
        fill("red");
      }
      square(muteX,muteY,100);
      fill("white");
      square(300,360,100);
      fill("black");
      textSize(18);
      if (audioff === false) {
      fill("black"); 
      text('Mute: off', 10, 390);
      }
      else if (audioff === true) {
        fill("black");
        text('Mute: on', 10, 390);
      }
      textSize(20);
      text('Stage ' + level, 320, 390);
      fill(colorR, colorG, colorB);
    }
    if (audioff === false) {
      bgmusic.play();
    }
    strokeWeight(2);
    circle(CirclesX1, CirclesY1, 20);
    circle(CirclesX2, CirclesY2, 20);
    circle(CirclesX3, CirclesY3, 20);
    circle(CirclesX4, CirclesY4, 20);
    circle(CirclesX5, CirclesY5, 20);
    circle(CirclesX6, CirclesY6, 20);
    circle(CirclesX7, CirclesY7, 20);
    circle(CirclesX8, CirclesY8, 20);
    circle(CirclesX9, CirclesY9, 20);
    CirclesX1 = CirclesX1 + 1 * speed;
    CirclesX2 = CirclesX2 + 1.8 * speed;
    CirclesX3 = CirclesX3 + 1.5 * speed;
    CirclesX4 = CirclesX4 + 2 * speed;
    CirclesX5 = CirclesX5 + 1 * speed;
    CirclesX6 = CirclesX6 + 1.3 * speed;
    CirclesX7 = CirclesX7 + 0.5 * speed;
    CirclesX8 = CirclesX8 + 1.5 * speed;
    CirclesX9 = CirclesX9 + 2.5 * speed;
    let d= dist(CirclesX1, CirclesY1, SquareX, SquareY);
    let d2= dist(CirclesX2, CirclesY2, SquareX, SquareY);
    let d3= dist(CirclesX3, CirclesY3, SquareX, SquareY);
    let d4= dist(CirclesX4, CirclesY4, SquareX, SquareY);
    let d5= dist(CirclesX5, CirclesY5, SquareX, SquareY);
    let d6= dist(CirclesX6, CirclesY6, SquareX, SquareY);
    let d7= dist(CirclesX7, CirclesY7, SquareX, SquareY);
    let d8= dist(CirclesX8, CirclesY8, SquareX, SquareY);
    let d9= dist(CirclesX9, CirclesY9, SquareX, SquareY);
    if (CirclesX1 > 400) {
      CirclesX1 = 0;
    } else if(CirclesX2 > 400) {
      CirclesX2 = 0;
    } else if(CirclesX3 > 400) {
      CirclesX3 = 0;
    } else if(CirclesX4 > 400) {
      CirclesX4 = 0;
    } else if (CirclesX5 > 400) {
      CirclesX5 = 0;
    } else if (CirclesX6 > 400) {
      CirclesX6 = 0;
    } else if (CirclesX7 > 400) {
      CirclesX7 = 0;
    } else if (CirclesX8 > 400) {
      CirclesX8 = 0;
    } else if (CirclesX9 > 400) {
      CirclesX9 = 0;
    }
    square(SquareX, SquareY, 20);
    if (d <= 20 || d2 <= 20 || d3 <= 20 || d4 <= 20 || d5 <= 20 || d6 <= 20 || d7 <= 20 || d8 <= 20 || d9 <= 20) {
      levelstart = false;
      levelclear = false;
      gameover = true;
      level = 1;
      speed = 1;
      SquareY = 380;
      if (audioff != true) {
      audiodeath.play();
      }
    }  else if(SquareY <= 0) {
      if (audioff != true) {
      audiostage.play();
      }
      SquareY = 380;
      speed = speed + 1;
      fill(colorR, colorG, colorB);
      levelclear = true;
      level = level + 1;
      colorR = random(140, 255);
      colorG = random(140, 255); 
      colorB = random(140, 255);
      bcolor = random(0,139);
      bcolora = random(0,139);
      bcolorb = random(0,139);
    } 
  } 
  if (levelstart != true){
     background("grey");
     fill("black");
     rect(50,150,400,150);
     fill("white");
     textSize(18);
     text('Click the mouse to start the game.', 80,190);
     text('Press the up arrow key to go up.', 80,220);
     text('Press the down arrow key to go down.', 80,250);
     text('Press the m key to change audio.', 80, 280);
     bgmusic.stop();
   }
  if (gameover === true && levelstart != true)  {
    background("red");
    fill("black");
    rect(50,150,400,150);
    fill("white");
    textSize(24);
    text('Game over!', 100,200);
    textSize(18);
    text('Click the mouse to try again!', 100, 240);
    bgmusic.stop();
  }
}
function keyPressed(){
  if (keyCode === UP_ARROW && levelstart === true){
    SquareY = SquareY - 40;
    if (audioff != true) {
    audiomove.play();
    }
  } else if (keyCode === DOWN_ARROW && levelstart === true) {
    SquareY = SquareY + 40;
    if (audioff != true) {
    audiomove.play();
    }
  }
  if (key === 'm' && audioff === false) {
    bgmusic.stop();
    audiodeath.stop();
    audiomove.stop();
    audiostage.stop();
    audioff = true;
  } else if (key === 'm' && audioff === true) {
    audioff = false;
  }
}
function mousePressed(){
  if (levelstart === false) {
    levelstart = true;
    CirclesX1 = 210;
    CirclesX2 = 40;
    CirclesX3 = 200;
    CirclesX4 = 100;
    CirclesX5 = 0;
    CirclesX6 = 300;
    CirclesX7 = 250;
    CirclesX8 = 150;
    CirclesX9 = 80;
  }
  if (levelstart != true && gameover === true){
    gameover = false;
    levelstart = true;
  }
}