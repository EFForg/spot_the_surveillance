AFRAME.registerComponent('sts-popup-close', {
  init: function () {
    var el = this.el;
    el.addEventListener('mouseenter', function () {
      var parent = el.closest('[visible]');
      var visible = parent.getAttribute('visible');
      if (!visible) {
        return;
      }
      parent.setAttribute('visible', false);

      var hotspot = document.getElementById(parent.dataset.hotspot);
      hotspot.setAttribute('sts-hotspot', { playing: false  });
    });
  }
});
