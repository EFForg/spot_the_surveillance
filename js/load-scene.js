AFRAME.registerComponent('loadscene', {
  init: function () {
    this.el.addEventListener("click", (e)=> {
      document.getElementById('sts-live').setAttribute('visible', true);
    });
  }
});
