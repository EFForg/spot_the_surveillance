AFRAME.registerComponent('loadscene', {
  init: function () {
    this.el.addEventListener("click", (e)=> {
      document.querySelector('a-assets').addEventListener('loaded', function () {
        console.log("OK LOADED");
      });
      document.getElementById('sts-live').setAttribute('visible', true);
    });

  }
});
