AFRAME.registerComponent('play-audio', {
  init:function() {
    var self = this;
    let playing = false;
    var entity = document.querySelector('a-sound');
    let audio = self.el.components.sound;

    self.el.addEventListener('mouseenter', () => {
      var viz = self.el.getAttribute('material').visible;
      if (viz){
        if(!playing) {
           self.el.setAttribute('sound', 'volume', '5');
          audio.playSound();
        } else {
          audio.stopSound();
        }
        playing = !playing;
      }

    });
    self.el.addEventListener('mouseleave', () => {
      var viz2 = self.el.getAttribute('material').visible;
      if (viz2){
      audio.pauseSound();
      playing = false;
    }
    })
  }
})
