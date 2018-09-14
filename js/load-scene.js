AFRAME.registerComponent('loadscene', {
  init: function () {
      document.querySelector('a-scene').addEventListener('loaded', function () {
        // console.log("OK LOADED");
        document.getElementById('intro-audio').play();
        document.getElementById('ambience').play();
        document.getElementById('camera-audio').addEventListener('loaded', function() { alert('ok') })
      });
      this.el.addEventListener("click", (e)=> {
        document.getElementById('sts-live').setAttribute('visible', true);
      });
  }
});
