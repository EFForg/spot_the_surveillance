var hint = document.getElementById("easy-button");

var alpr = document.querySelector('#alpr-hotspot');
var alprMobile = document.querySelector('#alpr-mobile-hotspot');
var biometric = document.querySelector('#biometric-hotspot');
var bodyCam = document.querySelector('#bodycam-hotspot');
var camera = document.querySelector('#camera-hotspot');
var drone = document.querySelector('#drone-hotspot');
var shotSpotter = document.querySelector('#shot-spotter-hotspot');

function showHotspots(el) {
  // TODO: DRY this
  el.setAttribute('visible', true);
  el.setAttribute('geometry', { primitive: 'plane', width: 5, height: 5 });
  el.setAttribute('material', { opacity: 1 });
  el.setAttribute('mixin', 'spotted' );
}

hint.addEventListener("click", function(e) {
  showHotspots(alpr);
  showHotspots(alprMobile);
  showHotspots(biometric);
  showHotspots(bodyCam);
  showHotspots(camera);
  showHotspots(drone);
  showHotspots(shotSpotter);
});
