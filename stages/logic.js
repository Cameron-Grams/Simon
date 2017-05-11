var $sound = document.getElementById('sound');

var $yellow = document.getElementById("yellow");
var $red = document.getElementById("red");
var $green = document.getElementById("green");
var $blue = document.getElementById("blue");

var $gameOnBtn = document.getElementById('gameOnBtn');
var $startBtn = document.getElementById('startBtn');
var $strictModeBtn = document.getElementById('strictModeBtn');

var powerOn = false;
var gameInPlay = false;
var strictMode = false;

var buttonTimeInterval = 1000;

function gameReset(){
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
}


function useStrictMode(){
  $sound.src = "http://soundbible.com/grab.php?id=1705&type=mp3";
  $sound.load();
  $sound.play();
 
  yellowPress();

  if (!strictMode){
    $strictModeBtn.style.fill = "rgb(250, 0, 20)"; 
    strictMode = true;
  } else {
    $strictModeBtn.style.fill = "rgb(0, 0, 0)"; 
    strictMode = false;
  }
}


function yellowPress(){
  $sound.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
  $sound.load();
  $sound.play();
  $yellow.style.opacity = 1;

  setTimeout(function(){
    $yellow.style.opacity = 0.5;
    console.log("in change");
    }, buttonTimeInterval);


  
}
function redPress(){
  $sound.src = " https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
  $sound.load();
  $sound.play();
}
function greenPress(){
  $sound.src = " https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
  $sound.load();
  $sound.play();
}
function bluePress(){
  $sound.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
  $sound.load();
  $sound.play();
}











 

























window.onload = gameReset();
