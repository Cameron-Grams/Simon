var $yellow = document.getElementById("yellow");
var $red = document.getElementById("red");
var $green = document.getElementById("green");
var $blue = document.getElementById("blue");

function powerOnGame(){
  console.log("Game On");
}

function buttonPress(e){
  var value = e.target.value;

  console.log("button pressed",value );
}





























window.onload = powerOnGame();
