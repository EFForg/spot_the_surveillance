AFRAME.registerComponent('play-audio', {
  init:function() {
    let playing = false;
    var entity = document.querySelector('a-sound');
    let audio = this.el.components.sound;

    this.el.addEventListener('mouseenter', () => {
      var viz = this.el.getAttribute('material').visible;
      console.log('vis=' + viz);
      if (viz){
        if(!playing) {
          audio.playSound();
        } else {
          audio.stopSound();
        }
        playing = !playing;
      }

    });
    this.el.addEventListener('mouseleave', () => {
      audio.pauseSound();
      playing = !playing;
    })
  }
})
