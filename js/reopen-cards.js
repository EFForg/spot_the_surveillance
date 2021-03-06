AFRAME.registerComponent('reopen-cards', {
  init: function () {
    var el = this.el;
    // all popups
    var alpr = document.querySelector('#alpr-popup');
    var alprMobile = document.querySelector('#alpr-mobile-popup');
    var biometric = document.querySelector('#biometric-popup');
    var bodyCam = document.querySelector('#bodycam-popup');
    var camera = document.querySelector('#camera-popup');
    var shotSpotter = document.querySelector('#shot-spotter-popup');
    var drone = document.querySelector('#drone-popup');
    if ( AFRAME.utils.device.checkHeadsetConnected() ) { // vr
      el.addEventListener('mouseenter', function () {
        alpr.setAttribute('visible', true);
        alprMobile.setAttribute('visible', true);
        biometric.setAttribute('visible', true);
        bodyCam.setAttribute('visible', true);
        camera.setAttribute('visible', true);
        shotSpotter.setAttribute('visible', true);
        drone.setAttribute('visible', true);
      });
    }
    else { //desktop
      el.addEventListener('click', function () {
        alpr.setAttribute('visible', true);
        alprMobile.setAttribute('visible', true);
        biometric.setAttribute('visible', true);
        bodyCam.setAttribute('visible', true);
        camera.setAttribute('visible', true);
        shotSpotter.setAttribute('visible', true);
        drone.setAttribute('visible', true);
      });
    }
  }
});
