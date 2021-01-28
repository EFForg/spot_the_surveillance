/* global AFRAME */
(function () {
  if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
  }

  var toggleInRoomscale = visible => {
    return {
      init: function () {
        this.visibleOriginal = this.el.getAttribute('visible');
        this.setVisible();
      },

      update: function () {
        if (!this.isPlaying) {
          return;
        }
        this.setVisible();
      },

      remove: function () {
        if (this.visibleOriginal === null) {
          this.el.removeAttribute('visible');
          return;
        }
        this.el.setAttribute('visible', this.visibleOriginal);
      },

      setVisible: function () {
        var newVisible;
        if (this.inRoomscale()) {
          newVisible = visible === true;
        } else {
          newVisible = visible === false;
        }
        this.el.setAttribute('visible', newVisible);
      },

      inRoomscale: function () {
        const display = AFRAME.utils.device.getVRDisplay();
        return !!(display && display.stageParameters);
      }
    }
  };

  AFRAME.registerComponent('hide-in-roomscale', toggleInRoomscale(false));

  AFRAME.registerComponent('show-in-roomscale', toggleInRoomscale(true));
})();
