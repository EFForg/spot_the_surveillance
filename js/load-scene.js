AFRAME.registerComponent('loadscene', {
  init: function () {
    document.querySelector('a-scene').addEventListener('loaded', function () {
      // console.log("OK LOADED");
      document.getElementById('intro-audio').play();
      document.getElementById('ambience').play();
      document.getElementById('camera-audio').addEventListener('loaded', function() { alert('ok') })
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
  }
});
