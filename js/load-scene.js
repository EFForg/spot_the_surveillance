AFRAME.registerComponent('loadscene', {
  init: function () {
    // load all hotspots and popups so they are under the exit/magic carpet,
    // so they can't be accidentally clicked on before the user loads
    // the scene
    function browserReposition() {
      // hotspot
      var alprHot = document.querySelector('#alpr-hotspot');
      var alprMobileHot = document.querySelector('#alpr-mobile-hotspot');
      var biometricHot = document.querySelector('#biometric-hotspot');
      var bodycamHot = document.querySelector('#bodycam-hotspot');
      var camera1Hot = document.querySelector('#camera1-hotspot');
      var camera2Hot = document.querySelector('#camera2-hotspot');
      var droneHot = document.querySelector('#drone-hotspot');
      birdHot = document.querySelector('#bird-hotspot');
      lightHot = document.querySelector('#light-hotspot');
      // popups
      var alprPop = document.querySelector('#alpr-popup');
      var alprMobilePop = document.querySelector('#alpr-mobile-popup');
      var biometricPop = document.querySelector('#biometric-popup');
      var bodycamPop = document.querySelector('#bodycam-popup');
      var camera1Pop = document.querySelector('#camera1-popup');
      var camera2Pop = document.querySelector('#camera2-popup');
      var dronePop = document.querySelector('#drone-popup');
      birdPop = document.querySelector('#bird-popup');
      lightPop = document.querySelector('#light-popup');
      // move hotspots to their correct positions
      //
      // these hotspots need to be positioned differently
      // for desktop/mobile, or they appear incorrectly positioned
      if ( !AFRAME.utils.device.checkHeadsetConnected() ){
        alprHot.setAttribute('position', { x: 10.379, y: 26.918, z: -7.485 });
        alprMobileHot.setAttribute('position', { x: 3.622, y: 2.229, z: 12.881 });
        bodycamHot.setAttribute('position', { x: -4.564, y: 0.577, z: -6.036 });
        camera1Hot.setAttribute('position', { x: 23.244, y: 58.391, z: -35.322 });
        droneHot.setAttribute('position', { x: -3.999, y: 30.295, z: 28.948 });
        // hotspots positions for headsets
      } else {
        alprHot.setAttribute('position', { x: 10.379, y: 26.918, z: -11.27 });
        alprMobileHot.setAttribute('position', { x: 3.622, y: 1.58, z: 8.019 });
        bodycamHot.setAttribute('position', { x: -2.85, y: 0.577, z: -6.036 });
        camera1Hot.setAttribute('position', { x: 23.244, y: 58.391, z: -39.778 });
        droneHot.setAttribute('position', { x: -3.999, y: 33.763, z: 28.948 });
      }
      // these hotspots have the same position regardless of device
      biometricHot.setAttribute('position', { x: -14.982, y: -9.975, z: -25.215 });
      camera2Hot.setAttribute('position', { x: 67.684, y: 28.461, z: 17.549 });
      birdHot.setAttribute('position', { x: 9.039, y: 40, z: 17.084 });
      lightHot.setAttribute('position', { x: -19.031, y: 9.249, z: -8.468 });

      // move popups to their correct positions
      alprPop.setAttribute('position', { x: 7.482, y: 1.642, z: 0.368 });
      alprMobilePop.setAttribute('position', { x: 4.076, y: 5.453, z: 6.580 });
      biometricPop.setAttribute('position', { x: -7.264, y: 1.235, z: -0.369 });
      bodycamPop.setAttribute('position', { x: -6.684, y: 1.118, z: -4.531 });
      camera1Pop.setAttribute('position', { x: 3.300, y: 2.988, z: -8.154 });
      camera2Pop.setAttribute('position', { x: 7.0, y: 1.4, z: 3.612 });
      dronePop.setAttribute('position', { x: -4.509, y: 3.731, z: 8.831 });
      birdPop.setAttribute('position', { x: 0.112, y: 4.358, z: 6.778 });
      lightPop.setAttribute('position', { x: -3.026, y: 4.122, z: -0.366 });
    }


    document.querySelector('a-scene').addEventListener('loaded', function () {
      // console.log("OK LOADED");
      document.getElementById('intro-audio').play();
      document.getElementById('ambience').play();
      document.getElementById('camera-audio').addEventListener('loaded', function() { console.log('ok') })
    });
    if (AFRAME.utils.device.isMobile() && !AFRAME.utils.device.isGearVR()){
      document.getElementById('sts-live').setAttribute('visible', true);
      document.getElementById('ambience').play();
      browserReposition();
    } else {
      this.el.addEventListener("click", (e)=> {
        document.getElementById('sts-live').setAttribute('visible', true);
        document.getElementById('ambience').play();
        browserReposition();
      });
    }


  }
});
