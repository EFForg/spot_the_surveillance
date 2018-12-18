AFRAME.registerComponent('loadscene', {
  init: function () {
    // load all popups cards so they are under the exit/magic carpet,
    // so they can't be accidentally clicked on before the user loads
    // the scene
    function browserReposition() {
      var alpr = document.querySelector('#alpr-hotspot');
      var alprMobile = document.querySelector('#alpr-mobile-hotspot');
      var biometric = document.querySelector('#biometric-hotspot');
      console.log('biometric='+biometric);
      var bodycam = document.querySelector('#bodycam-hotspot');
      var camera1 = document.querySelector('#camera1-hotspot');
      var camera2 = document.querySelector('#camera2-hotspot');
      var drone = document.querySelector('#drone-hotspot');
      bird = document.querySelector('#bird-hotspot');
      light = document.querySelector('#light-hotspot');
      // move hotspots to their correct positions
      //
      // these hotspots need to be positioned differently
      // for desktop/mobile, or they appear incorrectly positioned
      if ( !AFRAME.utils.device.checkHeadsetConnected() ){
        alpr.setAttribute('position', { x: 10.379, y: 26.918, z: -7.485 });
        alprMobile.setAttribute('position', { x: 3.622, y: 2.229, z: 12.881 });
        bodycam.setAttribute('position', { x: -4.564, y: 0.577, z: -6.036 });
        camera1.setAttribute('position', { x: 23.244, y: 58.391, z: -35.322 });
        drone.setAttribute('position', { x: -3.999, y: 30.295, z: 28.948 });
        // hotspots positions for headsets
      } else {
        alpr.setAttribute('position', { x: 10.379, y: 26.918, z: -11.27 });
        alprMobile.setAttribute('position', { x: 3.622, y: 1.58, z: 8.019 });
        bodycam.setAttribute('position', { x: -2.85, y: 0.577, z: -6.036 });
        camera1.setAttribute('position', { x: 23.244, y: 58.391, z: -39.778 });
        drone.setAttribute('position', { x: -3.999, y: 33.763, z: 28.948 });
      }
      // these hotspots have the same position regardless of device
      biometric.setAttribute('position', { x: -14.982, y: -9.975, z: -25.215 });
      camera2.setAttribute('position', { x: 67.684, y: 28.461, z: 17.549 });
      bird.setAttribute('position', { x: 9.039, y: 40, z: 17.084 });
      light.setAttribute('position', { x: -19.031, y: 9.249, z: -8.468 });
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
