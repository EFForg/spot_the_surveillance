var hint = document.getElementById("easy-button");

var alpr = document.querySelector('#alpr-hotspot');
var alprMobile = document.querySelector('#alpr-mobile-hotspot');
var biometric = document.querySelector('#biometric-hotspot');
var bodyCam = document.querySelector('#bodycam-hotspot');
var camera = document.querySelector('#camera-hotspot');
var shotSpotter = document.querySelector('#shot-spotter-hotspot');
var drone = document.querySelector('#drone-hotspot');

function showHotspots() {
  alpr.setAttribute('visible', true);
  alprMobile.setAttribute('visible', true);
  biometric.setAttribute('visible', true);
  bodyCam.setAttribute('visible', true);
  camera.setAttribute('visible', true);
  shotSpotter.setAttribute('visible', true);
  drone.setAttribute('visible', true);
}

function showHotspotsDesktop(el) {
  el.setAttribute('visible', true);
  el.setAttribute('geometry', { primitive: 'plane', width: 5, height: 5 });
  el.setAttribute('material', { opacity: 1 });
  el.setAttribute('mixin', 'spotted' );
}

if ( AFRAME.utils.device.checkHeadsetConnected() ) { // vr
  hint.addEventListener("mouseenter", function(e) {
    showHotspots();
  });
}
else { // desktop
  hint.addEventListener("click", function(e) {
    showHotspotsDesktop(alpr);
    showHotspotsDesktop(alprMobile);
    showHotspotsDesktop(biometric);
    showHotspotsDesktop(bodyCam);
    showHotspotsDesktop(camera);
    showHotspotsDesktop(drone);
    showHotspotsDesktop(shotSpotter);
  });
}
