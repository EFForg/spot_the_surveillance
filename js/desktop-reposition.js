function desktopReposition() {
  // these hotspot appear incorrectly positioned in desktop/mobile views
  var alpr = document.querySelector('#alpr-hotspot');
  var alprMobile = document.querySelector('#alpr-mobile-hotspot');
  var bodycam = document.querySelector('#bodycam-hotspot');
  var camera1 = document.querySelector('#camera1-hotspot');
  var drone = document.querySelector('#drone-hotspot');

  if ( !AFRAME.utils.device.checkHeadsetConnected() ){
    alpr.setAttribute('position', { x: 10.379, y: 26.918, z: -7.485 });
    alprMobile.setAttribute('position', { x: 3.622, y: 2.229, z: 12.881 });
    bodycam.setAttribute('position', { x: -4.564, y: 0.577, z: -6.036 });
    camera1.setAttribute('position', { x: 23.244, y: 58.391, z: -35.322 });
    drone.setAttribute('position', { x: -3.999, y: 30.295, z: 28.948 });
  }
}
desktopReposition();
