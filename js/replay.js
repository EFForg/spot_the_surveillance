AFRAME.registerComponent('replay', {
  init: function () {
    var scene = document.querySelector('a-scene');
    this.el.addEventListener('click', evt => {
      location.reload(true);
      scene.enterVR();
    });
  }
});
