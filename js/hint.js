var hint = document.getElementById("easy-button");

var alpr = document.querySelector('#alpr-hotspot');
var alprMobile = document.querySelector('#alpr-mobile-hotspot');
var biometric = document.querySelector('#biometric-hotspot');
var bodyCam = document.querySelector('#bodycam-hotspot');
var camera1 = document.querySelector('#camera1-hotspot');
var camera2 = document.querySelector('#camera2-hotspot');
var drone = document.querySelector('#drone-hotspot');

function showHotspots() {
  alpr.setAttribute('visible', true);
  alprMobile.setAttribute('visible', true);
  biometric.setAttribute('visible', true);
  bodyCam.setAttribute('visible', true);
  camera1.setAttribute('visible', true);
  camera2.setAttribute('visible', true);
  drone.setAttribute('visible', true);
}

hint.addEventListener("mouseenter", function(e) {
  showHotspots();
});
