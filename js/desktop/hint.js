var hint = document.getElementById("easy-button");

var alpr = document.querySelector('#alpr-hotspot');
var alprMobile = document.querySelector('#alpr-mobile-hotspot');
var biometric = document.querySelector('#biometric-hotspot');
var bodyCam = document.querySelector('#bodycam-hotspot');
var camera = document.querySelector('#camera-hotspot');
var shotSpotter = document.querySelector('#shot-spotter-hotspot');
var drone = document.querySelector('#drone-hotspot');

function showHotspots() {
  // TODO: DRY this
  alpr.setAttribute('visible', true);
  alpr.setAttribute('geometry', { primitive: 'plane', width: 5, height: 5 });
  alpr.setAttribute('material', { opacity: 1 });
  alpr.setAttribute('mixin', 'spotted' );
  alprMobile.setAttribute('visible', true);
  alprMobile.setAttribute('geometry', { primitive: 'plane', width: 5, height: 5 });
  alprMobile.setAttribute('material', { opacity: 1 });
  alprMobile.setAttribute('mixin', 'spotted' );
  biometric.setAttribute('visible', true);
  biometric.setAttribute('geometry', { primitive: 'plane', width: 5, height: 5 });
  biometric.setAttribute('material', { opacity: 1 });
  biometric.setAttribute('mixin', 'spotted' );
  bodyCam.setAttribute('visible', true);
  bodyCam.setAttribute('geometry', { primitive: 'plane', width: 5, height: 5 });
  bodyCam.setAttribute('material', { opacity: 1 });
  bodyCam.setAttribute('mixin', 'spotted' );
  camera.setAttribute('visible', true);
  camera.setAttribute('geometry', { primitive: 'plane', width: 5, height: 5 });
  camera.setAttribute('material', { opacity: 1 });
  camera.setAttribute('mixin', 'spotted' );
  shotSpotter.setAttribute('visible', true);
  shotSpotter.setAttribute('geometry', { primitive: 'plane', width: 5, height: 5 });
  shotSpotter.setAttribute('material', { opacity: 1 });
  shotSpotter.setAttribute('mixin', 'spotted' );
  drone.setAttribute('visible', true);
  drone.setAttribute('geometry', { primitive: 'plane', width: 5, height: 5 });
  drone.setAttribute('material', { opacity: 1 });
  drone.setAttribute('mixin', 'spotted' );
}

hint.addEventListener("click", function(e) {
  showHotspots();
});
