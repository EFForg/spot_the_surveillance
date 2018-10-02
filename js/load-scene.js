AFRAME.registerComponent('loadscene', {
  init: function () {
    document.querySelector('a-scene').addEventListener('loaded', function () {
      // console.log("OK LOADED");
      document.getElementById('intro-audio').play();
      document.getElementById('ambience').play();
      document.getElementById('camera-audio').addEventListener('loaded', function() { alert('ok') })
    });
    //if (AFRAME.utils.device.isMobile()){
    //  alert("ok mobile");
    //  document.getElementById('sts-live').setAttribute('visible', true);
  //  } else {
  //    alert("ok headset browser");
      this.el.addEventListener("click", (e)=> {
        document.getElementById('sts-live').setAttribute('visible', true);
      });
    //}
  }
});
