AFRAME.registerComponent('reopen-cards', {
  init: function () {
    var el = this.el;
    // all popups
		var alpr = document.querySelector('#alpr-popup');
		var alprMobile = document.querySelector('#alpr-mobile-popup');
		var biometric = document.querySelector('#biometric-popup');
		var bodyCam = document.querySelector('#bodycam-popup');
		var camera1 = document.querySelector('#camera1-popup');
		var camera2 = document.querySelector('#camera2-popup');
		var drone = document.querySelector('#drone-popup');;
    el.addEventListener('mouseenter', function () {
          console.log('reopen cards');
        alpr.setAttribute('visible', true);
        alprMobile.setAttribute('visible', true);
        biometric.setAttribute('visible', true);
        bodyCam.setAttribute('visible', true);
        camera1.setAttribute('visible', true);
        camera2.setAttribute('visible', true);
        drone.setAttribute('visible', true);
    });
  }
});
