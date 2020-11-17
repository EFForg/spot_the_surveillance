AFRAME.registerComponent('sts-popup-close', {
  init: function () {
    var el = this.el;
    if ( AFRAME.utils.device.checkHeadsetConnected() ) { // vr
      el.addEventListener('mouseenter', function () {
        var parent = el.closest('[visible]');
        if (!parent) {
          return;
        }
        var visible = parent.getAttribute('visible');
        if (!visible) {
          return;
        }
        parent.setAttribute('visible', false);

        var hotspot = document.getElementById(parent.dataset.hotspot);
        hotspot.setAttribute('sts-hotspot', { playing: false });
      });
    } else {
      el.addEventListener('click', function () {
        var parent = el.closest('[visible]');
        if (!parent) {
          return;
        }
        var visible = parent.getAttribute('visible');
        if (!visible) {
          return;
        }
        parent.setAttribute('visible', false);

        var hotspot = document.getElementById(parent.dataset.hotspot);
        hotspot.setAttribute('sts-hotspot', { playing: false });
      });
    }
  }
});
