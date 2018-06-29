window.onload = function () {
  document.getElementById("button").onclick = function() {
  var game = new Game("canvas");
  game.start();
  document.getElementById("button").disabled = "true";
  document.getElementsByClassName("portada")[0].style.display = "none";
  document.getElementById("canvas").style.display = "block";
  }
};