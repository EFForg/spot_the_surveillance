AFRAME.registerComponent('play-audio', {
  init:function() {
    var self = this;
    let playing = false;
    var entity = document.querySelector('a-sound');
    let audio = self.el.components.sound;

    self.el.addEventListener('mouseenter', () => {
      var viz = self.el.getAttribute('material').visible;
      // console.log('viz=' + viz);
      if (viz){
        if(!playing) {
           // console.log('playing');
           self.el.setAttribute('sound', 'volume', '5');
          audio.playSound();
        //  self.el.removeAttribute('data-clickable');
        } else {
        //  console.log('stopping')
          audio.stopSound();
        //  self.el.setAttribute('data-clickable');
        }
        playing = !playing;
      }

    });
    self.el.addEventListener('mouseleave', () => {
      var viz2 = self.el.getAttribute('material').visible;
      // console.log('viz2=' + viz2);
      if (viz2){
      console.log('pausing');
      audio.pauseSound();
      playing = false;
    }
    })
  }
})
