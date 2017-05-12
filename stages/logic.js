var $sound = document.getElementById('sound');

var $yellow = document.getElementById("yellow");
var $red = document.getElementById("red");
var $green = document.getElementById("green");
var $blue = document.getElementById("blue");

var $gameOnBtn = document.getElementById('gameOnBtn');
var $startBtn = document.getElementById('startBtn');
var $strictModeBtn = document.getElementById('strictModeBtn');

var redSound = " https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
var blueSound = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
var greenSound = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
var yellowSound = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";

var powerOn = false;
var gameInPlay = false;
var strictMode = false;

var buttonTimeInterval = 1000;

var simonSays = [];
var currentValue = null;
var iteration = 0;

simonSays = [0,1,2,3];

var soundOptions = {
  0: yellowSound,
  1: redSound,
  2: greenSound,
  3: blueSound 
};

var colorOptions = {
  0: $yellow,
  1: $red,
  2: $green,
  3: $blue
};

function flashBoard(i, l){
  if (i == l) return;

  setTimeout("changeColorOn(0)", 500);
  setTimeout("changeColorOn(1)", 500);
  setTimeout("changeColorOn(2)", 500);
  setTimeout("changeColorOn(3)", 500);

  setTimeout("changeColorOff(0)", 750);
  setTimeout("changeColorOff(1)", 750);
  setTimeout("changeColorOff(2)", 750);
  setTimeout("changeColorOff(3)", 750);

  i += 1;
  setTimeout("flashBoard(" + i + "," + l + ")", 500);
 } 

function gameReset(){
  flashBoard(0, 3);
  console.log("Game Reset");
}

function powerOnGame(){
  $sound.src = "http://soundbible.com/grab.php?id=1705&type=mp3";
  $sound.load();
  $sound.play();

  if (!powerOn){
    $gameOnBtn.style.fill = "rgb(250, 0, 20)"; 
    powerOn = true;
  } else {
    $gameOnBtn.style.fill = "rgb(0, 0, 0)"; 
    powerOn = false;
  }
}

function startGame(){
  $sound.src = "http://soundbible.com/grab.php?id=1705&type=mp3";
  $sound.load();
  $sound.play();

  if (!gameInPlay){
    $startBtn.style.fill = "rgb(20, 200, 50)"; 
    gameInPlay = true;
  } else {
    $startBtn.style.fill = "rgb(0, 0, 0)"; 
    gameInPlay = false;
  }
  playGame();
}

function useStrictMode(){
  $sound.src = "http://soundbible.com/grab.php?id=1705&type=mp3";
  $sound.load();
  $sound.play();

  if (!strictMode){
    $strictModeBtn.style.fill = "rgb(250, 250, 250)"; 
    strictMode = true;
  } else {
    $strictModeBtn.style.fill = "rgb(0, 0, 0)"; 
    strictMode = false;
  }
}
function pressYellow(){
  changeColorOn(0);
  console.log('pressed yellow');
  playSound(yellowSound, 0);
  if (currentValue !== 0){
    console.log('fail number');
    fail();
    console.log(currentValue);
  } else {
    console.log('correct choice');
    iteration += 1;
    currentValue = simonSays[iteration];
    console.log(currentValue);
  }
}

function pressRed(){
  changeColorOn(1);
  console.log('Pressed Red');
  playSound(redSound, 1);
  if (currentValue !== 1){
    console.log('fail number');
    fail();
  } else {
    console.log('correct choice');
    iteration += 1;
    currentValue = simonSays[iteration];
    console.log(currentValue);
  }
}

function pressGreen(){
  console.log('Pressed Green');
  changeColorOn(2);
  playSound(greenSound, 2);
  if (currentValue !== 2){
    console.log('fail number');
    fail();
  } else {
    console.log('correct choice');
    iteration += 1;
    currentValue = simonSays[iteration];
    console.log(currentValue);
  }
}

function pressBlue(){
  console.log('pressed Blue');
  changeColorOn(3);
  playSound(blueSound, 3);
  if (currentValue !== 3){
    console.log('fail number');
    fail();
  } else {
    console.log('correct choice');
    iteration += 1;
    currentValue = simonSays[iteration];
    console.log(currentValue);
  }
}

function simonNext(){
  return Math.floor(Math.random() * 4);
}
function playSound(soundValue, i){
  $sound.src = soundValue;
  $sound.load();
  $sound.play();
  setTimeout('changeColorOff('+ i + ')', buttonTimeInterval - 300);
}

function changeColorOff(i){
  colorOptions[simonSays[i]].style.opacity = 0.6;
}

function changeColorOn(i){
  colorOptions[simonSays[i]].style.opacity = 1;
}

function startPlaying(i, l){
  if (i == l) return;
  var callSound = soundOptions[simonSays[i]];
  var callColor = colorOptions[simonSays[i]];
  playSound(callSound, i);
  changeColorOn(i)
  i += 1;
  setTimeout("startPlaying("+ i + ", " + l + ")", buttonTimeInterval);
};

function playGame(){
  startPlaying(0, simonSays.length);
  currentValue = simonSays[iteration];
}

function fail(){
//use strict...

}


window.onload = gameReset();
