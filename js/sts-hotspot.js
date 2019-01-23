AFRAME.registerComponent('sts-hotspot', {
  schema: {
    show: { type: 'selector' },
    sound: { type: 'selector' },
    playing: { default: false }
  },

  init: function () {
    var self = this;
    var popupEl = this.data.show;

    popupEl.dataset.hotspot = self.el.id;

    self.el.addEventListener('mouseenter', function () {
      self.el.setAttribute('sts-hotspot', { playing: true });
      self.el.dataset.playing = true;

      popupEl.setAttribute('material', { visible: true });
      popupEl.setAttribute('visible', true);
    });
  },

  stopAllHotspotSound: function () {
    var AllHotspotSound = document.querySelectorAll('[data-playing]');
    AllHotspotSound.forEach(function (hotspotEl) {
      hotspotEl.setAttribute('sts-hotspot', { playing: false });
    })
  },

  startSound: function () {
    var sound = this.data.sound;
    sound.load();
    sound.play();
  },

  stopSound: function () {
    var sound = this.data.sound;
    var el = this.el;
    sound.pause();
    el.setAttribute('sts-hotspot', { playing: false });
    el.removeAttribute('data-playing');
  },

  update: function () {
    var playing = this.data.playing;
    var sound = this.data.sound;

    if (!sound) {
      return;
    }

    if (playing) {
      this.stopAllHotspotSound();
      if (sound.readyState >= 2) {
        this.startSound();
      } else {
        sound.addEventListener('canplaythrough', this.startSound.bind(this));
      }
    }

    if (!playing) {
      this.stopSound();
    }
  }
});
