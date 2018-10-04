function desktopReposition() {
  // these hotspots/popup close buttons appear incorrectly positioned in desktop/mobile views
  // hotspots
  var alpr = document.querySelector('#alpr-hotspot');
  var alprMobile = document.querySelector('#alpr-mobile-hotspot');
  var bodycam = document.querySelector('#bodycam-hotspot');
  var camera1 = document.querySelector('#camera1-hotspot');
  var drone = document.querySelector('#drone-hotspot');
  // close buttons
  var alprX = document.querySelector('#alpr-close');
  var alprMobileX = document.querySelector('#alpr-mobile-close');
  var biometricX = document.querySelector('#biometric-close');
  var camera1X = document.querySelector('#camera1-close');
  var camera2X = document.querySelector('#camera2-close');
  var droneX = document.querySelector('#drone-close');

  if ( !AFRAME.utils.device.checkHeadsetConnected() ||
   !AFRAME.utils.device.isGearVR()){
    // hotspots
    alpr.setAttribute('position', { x: 10.379, y: 26.918, z: -7.485 });
    alprMobile.setAttribute('position', { x: 3.622, y: 2.229, z: 12.881 });
    bodycam.setAttribute('position', { x: -4.564, y: 0.577, z: -6.036 });
    camera1.setAttribute('position', { x: 23.244, y: 58.391, z: -35.322 });
    drone.setAttribute('position', { x: -3.999, y: 30.295, z: 28.948 });

    //close buttons
    alprX.setAttribute('position', { x: 1.979, y: 2.142, z: 1.108 });
    alprMobileX.setAttribute('position', { x: 1.988, y: 1.389, z: 0.929 });
    biometricX.setAttribute('position', { x: 1.114, y: 1.867, z: 1.035 });
    camera1X.setAttribute('position', { x: 1.464, y: 1.5, z: 1.120 });
    camera2X.setAttribute('position', { x: 2.194, y: 1.757, z: 0.845 });
    droneX.setAttribute('position', { x: 1.977, y: 1.831, z: 1.412 });
  }
}
desktopReposition();
