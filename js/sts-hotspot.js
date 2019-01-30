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
      popupEl.setAttribute('visible', true);
    });

    popupEl.addEventListener('mouseenter', function () {
      var isVisible = popupEl.getAttribute('visible');
      if (isVisible) {
        self.el.setAttribute('sts-hotspot', { playing: true });
      }
    });

    popupEl.addEventListener('mouseleave', function () {
      var isVisible = popupEl.getAttribute('visible');
      if (isVisible) {
        self.el.setAttribute('sts-hotspot', { playing: false });
      }
    });

    if (window.requestIdleCallback) {
      window.requestIdleCallback(this.preloadAsset.bind(this));
    } else {
      this.preloadAsset();
    }
  },

  preloadAsset: function () {
    var sound = this.data.sound;
    sound.load();
  },

  startSound: function () {
    var sound = this.data.sound;
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
      if (sound.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
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
