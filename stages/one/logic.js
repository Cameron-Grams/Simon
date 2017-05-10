function chngT(){
  console.log("in button");
  var text = document.getElementById("text");
  text.setAttribute('x', '210');
  text.innerHTML = "1";

}


window.onload = console.log("in JS");
