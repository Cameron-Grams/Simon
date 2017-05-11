var $sound = document.getElementById('sound');

function chimeOff(){
  console.log("in button");
  $sound.src = "http://www.javascriptkit.com/script/script2/whistle.mp3";
  $sound.load();
  $sound.play();
}

function rumble(){
  $sound.src = "http://www.javascriptkit.com/script/script2/click.mp3";
  $sound.load();
  $sound.play();
}

window.onload = console.log("in JS");
