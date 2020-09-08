var ding = document.getElementById("ding");
var hotspots = document.getElementById("surveillance-objects");

hotspots.addEventListener("mouseenter", function( event ) {
  ding.load();
  ding.play();
});
