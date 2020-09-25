AFRAME.registerComponent('loadscene', {
  init: function () {
    // load all hotspots and popups so they are under the exit/magic carpet,
    // so they can't be accidentally clicked on before the user loads
    // the scene
    function browserReposition() {
      // hotspots
      var alprHot = document.querySelector('#alpr-hotspot');
      var alprMobileHot = document.querySelector('#alpr-mobile-hotspot');
      var biometricHot = document.querySelector('#biometric-hotspot');
      var bodycamHot = document.querySelector('#bodycam-hotspot');
      var cameraHot = document.querySelector('#camera-hotspot');
      var shotspotterHot = document.querySelector('#shot-spotter-hotspot');
      var droneHot = document.querySelector('#drone-hotspot');
      var birdHot = document.querySelector('#bird-hotspot');
      var lightHot = document.querySelector('#light-hotspot');
      var attribHot = document.querySelector('#attribution-hotspot');
      var exitHot = document.querySelector('#exit-sts');

      // popups
      var alprPop = document.querySelector('#alpr-popup');
      var alprMobilePop = document.querySelector('#alpr-mobile-popup');
      var biometricPop = document.querySelector('#biometric-popup');
      var bodycamPop = document.querySelector('#bodycam-popup');
      var cameraPop = document.querySelector('#camera-popup');
      var shotspotterPop = document.querySelector('#shot-spotter-popup');
      var dronePop = document.querySelector('#drone-popup');
      var birdPop = document.querySelector('#bird-popup');
      var lightPop = document.querySelector('#light-popup');

      var introCard = document.querySelector('#intro-popup');
      var easyButton = document.querySelector('#easy-button');
      // move hotspots to their correct positions
      //
      // these hotspots need to be positioned differently
      // for desktop/mobile, or they appear incorrectly positioned
      // for desktop/mobile
      if ( !AFRAME.utils.device.checkHeadsetConnected() ){
        alprHot.setAttribute('position', { x: 10.379, y: 26.918, z: -10.9 });
        alprMobileHot.setAttribute('position', { x: 5.1, y: 1.5, z: 12.6 });
        bodycamHot.setAttribute('position', { x: -7.927, y: -1.304, z: -16.629 });
        cameraHot.setAttribute('position', { x: 23.244, y: 58.391, z: -38.207 });
        shotspotterHot.setAttribute('position', { x: 67.146, y: 33.105, z: 18.38 });
        droneHot.setAttribute('position', { x: -4.764, y: 33.204, z: 28.948 });
        // hotspots positions for headset/cardboard
      }
      // these hotspots have the same position regardless of device
      biometricHot.setAttribute('position', { x: -14.129, y: -9.634, z: -25.215 });
      birdHot.setAttribute('position', { x: 9.039, y: 42.5, z: 17.084 });
      lightHot.setAttribute('position', { x: -19.031, y: 9.249, z: -9.666 });
      attribHot.setAttribute('position', { x: 1.821, y: -12.750, z: -4.727 });
      exitHot.setAttribute('position', { x: 8.0, y: -40.524, z: 2.747 });

      // move popups to their correct positions from beneath the "magic carpet (exit)"
      alprPop.setAttribute('position', { x: 6.098, y: 3.491, z: -1.681 });
      alprMobilePop.setAttribute('position', { x: 5.197, y: 9.945, z: 7.8 });
      biometricPop.setAttribute('position', { x: -8.806, y: 0.993, z: -0.661 });
      bodycamPop.setAttribute('position', { x: -7.445, y: 0.737, z: -5.574 });
      cameraPop.setAttribute('position', { x: 3.300, y: 2.988, z: -8.154 });
      shotspotterPop.setAttribute('position', { x: 3.719, y: 0.729, z: 3.119 });
      dronePop.setAttribute('position', { x: -4.668, y: 3.694, z: 6 });
      birdPop.setAttribute('position', { x: 2, y: 12, z: 13 });
      lightPop.setAttribute('position', { x: -7.945, y: 5.156, z: 0.389 });

      // reposition intro card & easy button below exit
      introCard.setAttribute('position', { x: 48, y: -341, z: 11 });
      easyButton.setAttribute('position', { x: 48, y: -341, z: 11 });

      // show score div
      var score = document.getElementById("score");
      score.setAttribute("style", "display: block");
    }

    var containerEl = document.getElementById('sts-live');
    var sceneEl = document.querySelector('a-scene');
    var introAudioEl = document.getElementById('intro-audio');
    var ambienceAudio = document.getElementById('ambience');
    var getReady = document.getElementById('get-ready');
    var getStartedButton = document.getElementById('get-started');
    var easyButton = document.getElementById('easy-button');

    var enterVREl;
    var audioStarted = false;
    var userPressEvent = 'ontouchstart' in window ? 'touchend' : 'mousedown';

    function playAudio() {
      if (audioStarted) {
        return;
      }

      var playIntro = introAudioEl.play();
      var playAmbience = ambienceAudio.play();

      Promise.all([playIntro, playAmbience])
      .then(function () {
        audioStarted = true;
      })
      .catch(function (error) {
        console.error('Audio not playing', error);
      });
    }

    function onUserPressDown() {
      playAudio();

      if (enterVREl) {
        enterVREl.removeEventListener(userPressEvent, onUserPressDown);
      }
      sceneEl.removeEventListener(userPressEvent, onUserPressDown);
    }

    function onSceneLoaded() {
      enterVREl = sceneEl.components['vr-mode-ui'].enterVREl;
      getReady.style.display = 'none';
      introAudioEl.load();
      ambienceAudio.volume = ambienceAudio.getAttribute('volume');
      ambienceAudio.load();
      playAudio();
      // start audio after gesture on enter VR button.
      enterVREl.addEventListener(userPressEvent, onUserPressDown);
      sceneEl.removeEventListener('loaded', onSceneLoaded);
    }

    function onStartClick() {
      introAudioEl.pause();
      // container is only visible once get-started button is clicked.
      containerEl.setAttribute('visible', true);
      // remove button from targettable raycaster objects.
      getStartedButton.removeAttribute('data-clickable');
      getStartedButton.removeEventListener('click', onStartClick);
      browserReposition();
      easyButton.removeAttribute('data-clickable');
    }

    // start audio after user gesture on scene.
    sceneEl.addEventListener(userPressEvent, onUserPressDown);
    sceneEl.addEventListener('loaded', onSceneLoaded);
    getStartedButton.addEventListener('click', onStartClick);

    // NOTE: This works around an A-Frame bug (in 0.8.2/0.9.0) that incorrectly identifies Firefox Reality as a mobile
    // browser (since its `User-Agent` string contains 'Android' and 'Mobile VR'). Issue
    // https://github.com/aframevr/aframe/issues/4032 has since been fixed in `master`. Once a new A-Frame version is
    // released, this can be replaced with `AFRAME.utils.device.isMobile()`.
    var isMobileWithoutVR = (function () {
      // Detect browsers in standalone VR headsets.
      if (/(OculusBrowser)|(SamsungBrowser)|(Mobile VR)/i.test(navigator.userAgent)) {
        return false;
      }
      return AFRAME.utils.device.isMobile();
    })();

    if (isMobileWithoutVR) {
      containerEl.setAttribute('visible', true);
    }
  }
});
