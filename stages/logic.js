var $sound = document.getElementById('sound');

var $yellow = document.getElementById("yellow");
var $red = document.getElementById("red");
var $green = document.getElementById("green");
var $blue = document.getElementById("blue");

var $gameOnBtn = document.getElementById('gameOnBtn');
var $startBtn = document.getElementById('startBtn');
var $strictModeBtn = document.getElementById('strictModeBtn');

var powerSound = "http://soundbible.com/grab.php?id=19&type=mp3";
var redSound = " https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
var blueSound = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
var greenSound = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
var yellowSound = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
var wrongAnsSound = "http://soundbible.com/grab.php?id=1501&type=mp3";
var clickSound = "http://soundbible.com/grab.php?id=1705&type=mp3";


var powerOn = false;
var gameInPlay = false;
var strictMode = false;

var buttonTimeInterval = 1000;

var simonSays = [];
var currentValue = null;
var increment = 0;

// simonSays = [0,1,2,3];

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
function flash(color){
  color.style.opacity = 1;
}

function mute(color){
  color.style.opacity = 0.6;
}

function flashBoard(i, l){
  if (i == l) return;

  setTimeout("flash($yellow)", 500);
  setTimeout("flash($red)", 500);
  setTimeout("flash($green)", 500);
  setTimeout("flash($blue)", 500);

  setTimeout("mute($yellow)", 750);
  setTimeout("mute($red)", 750);
  setTimeout("mute($green)", 750);
  setTimeout("mute($blue)", 750);

  i += 1;
  setTimeout("flashBoard(" + i + "," + l + ")", 500);
 } 

function gameReset(){
  flashBoard(0, 3);

  $sound.src = powerSound;
  $sound.load();
  $sound.play();

  console.log("Game Reset");
}

function powerOnGame(){

  if (!powerOn){
    $gameOnBtn.style.fill = "rgb(250, 0, 20)"; 
    powerOn = true;
  } else {
    $gameOnBtn.style.fill = "rgb(0, 0, 0)"; 
    powerOn = false;
  }

  gameReset();
 
}

function startGame(){
  justSound(clickSound);

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
  justSound(clickSound);  

  if (!strictMode){
    $strictModeBtn.style.fill = "rgb(250, 250, 250)"; 
    strictMode = true;
  } else {
    $strictModeBtn.style.fill = "rgb(0, 0, 0)"; 
    strictMode = false;
  }
}

function colorPress(colorNum){
  if (!powerOn){
    return;
  }
  var colorNo = colorNum;
  if (currentValue !== colorNum){
    setTimeout(function(){fail()}, 1000);
  } else {
    console.log("correct choice ", colorNum);
    increment += 1;
    currentValue = simonSays[increment];
  }

  flash(colorOptions[colorNum]);

  setTimeout(function(colorNo){
    justSound(soundOptions[colorNum]);
    mute(colorOptions[colorNum]);
  }, 100);

  if (increment === simonSays.length){
    setTimeout(function(){playGame()}, 1000);
  }
}

function pressYellow(){
  colorPress(0);
}

function pressRed(){
  colorPress(1);
}

function pressGreen(){
  colorPress(2);
}

function pressBlue(){
  colorPress(3);
}


function justSound(soundValue){
  console.log('in sound with ', soundValue);
  $sound.src = soundValue;
  $sound.load();
  $sound.play();
}

function playSound(soundValue, i){
  justSound(soundValue);
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
  var simonMove = Math.floor(Math.random() * 4);
  simonSays.push(simonMove);
  startPlaying(0, simonSays.length);
  increment = 0;
  currentValue = simonSays[0];
  console.log(simonSays);
}

function fail(){
  console.log("in fail");
  justSound(wrongAnsSound);

  if (strictMode){
    console.log('fail in strict');
//    setTimeout(gameReset(), 750);
  } else {
    console.log('fail in  not  strict');
//    setTimeout(startPlaying(0, simonSays.length), 750);

  }
}

function gameOff(){
  powerOn = false;
}

window.onload = gameOff();







