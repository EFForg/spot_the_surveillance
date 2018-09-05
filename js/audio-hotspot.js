var ding = document.getElementById("ding");
var hotspots = document.getElementById("surveillance-objects");

hotspots.addEventListener("mouseenter", function( event ) {
  // console.log('Click just happened');
  ding.load();
  ding.play();
});
