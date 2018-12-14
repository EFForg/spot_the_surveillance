AFRAME.registerComponent('loadscene', {
  init: function () {
    // load all popups cards dynamically with js rather than html,
    // so they are not triggered before the scene is loaded
    function loadPopups(){
      var sceneEl = document.querySelector('#sts-live');
      var biometricEl = document.createElement('a-sound');
      // Do `.setAttribute()`s to initialize the entity.
      biometricEl.setAttribute('geometry', {primitive: 'plane', width: 5, height: 5});
      biometricEl.setAttribute('material', {shader: 'flat', side: 'front', opacity: 1, transparent: 'true', visible: 'false', src: '#biometric-card'});
      biometricEl.setAttribute('visible', 'false');
      biometricEl.setAttribute('position', {x:-7.264, y: 1.235, z:-0.369 });
      biometricEl.setAttribute('rotation', {x: 0, y: 90, z: 0});
      biometricEl.setAttribute('data-clickable','');
      biometricEl.setAttribute('play-audio','');
      biometricEl.setAttribute('autoplay', 'false');
      biometricEl.setAttribute('loop', 'false');
      biometricEl.setAttribute('volume', 5);
      biometricEl.setAttribute('src','#biometric-audio');
      biometricEl.id = "biometric-popup";
      sceneEl.appendChild(biometricEl);
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
    } else {
      this.el.addEventListener("click", (e)=> {
        document.getElementById('sts-live').setAttribute('visible', true);
        document.getElementById('ambience').play();
      });
    }
      loadPopups();

  }
});
