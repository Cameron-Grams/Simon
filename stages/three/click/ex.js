var $sound = document.getElementById('click');
$sound.src = "http://soundbible.com/grab.php?id=1705&type=mp3";
//$sound.src ="http://soundbible.com/grab.php?id=1806&type=mp3"
$sound.load();



function boom(){
  $sound.play();
}
