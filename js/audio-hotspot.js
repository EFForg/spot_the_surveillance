var ding = document.getElementById("ding");
var hotspots = document.getElementById("surveillance-objects");

if ( AFRAME.utils.device.checkHeadsetConnected() ) { // vr
  hotspots.addEventListener("mouseenter", function( event ) {
    ding.load();
    ding.play();
  });
} else { // desktop
  hotspots.addEventListener("click", function( event ) {
    ding.load();
    ding.play();
  });
}
