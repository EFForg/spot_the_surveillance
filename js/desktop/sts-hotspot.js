AFRAME.registerComponent('sts-hotspot', {
  schema: {
    show: { type: 'selector' },
    sound: { type: 'selector' },
    playing: { default: false },
    restart: { default: false },
    audioOnHotspot: { default: false }
  },

  init: function () {
    var el = this.el;
    var popupEl = this.popupEl = this.data.show;

    popupEl.dataset.hotspot = this.el.id;

    el.addEventListener('click', this.hotspotMouseEnter.bind(this));

    if (!this.data.audioOnHotspot) {
      popupEl.addEventListener('mouseenter', this.popupMouseEnter.bind(this));
      popupEl.addEventListener('mouseleave', this.popupMouseLeave.bind(this));
    }

    if (window.requestIdleCallback) {
      window.requestIdleCallback(this.preloadAsset.bind(this));
    } else {
      this.preloadAsset();
    }
  },

  hotspotMouseEnter: function () {
    var hotspotEl = this.el;
    var popupEl = this.data.show;

    popupEl.setAttribute('visible', true);
    hotspotEl.setAttribute('geometry', { primitive: 'plane', width: 5, height: 5 });
    hotspotEl.setAttribute('material', { opacity: 1 });
    hotspotEl.setAttribute('mixin', 'spotted' );
    if (this.data.audioOnHotspot) {
      hotspotEl.setAttribute('sts-hotspot', { playing: true, restart: true });
    }
  },

  popupMouseEnter: function () {
    var el = this.el;
    var popupEl = this.data.show;
    var isVisible = popupEl.getAttribute('visible');
    if (isVisible) {
      el.setAttribute('sts-hotspot', { playing: true });
    }
  },

  popupMouseLeave: function () {
    var el = this.el;
    var popupEl = this.data.show;
    var isVisible = popupEl.getAttribute('visible');
    if (isVisible) {
      el.setAttribute('sts-hotspot', { playing: false });
    }
  },

  preloadAsset: function () {
    var sound = this.data.sound;
    sound.load();
  },

  startSound: function () {
    var sound = this.data.sound;
    if (this.data.restart) {
      sound.load();
    }
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
