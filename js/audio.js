AFRAME.registerComponent('play-audio', {
  init:function() {
    let playing = false;
    var entity = document.querySelector('a-sound');
    let audio = this.el.components.sound;

    this.el.addEventListener('click', () => {
      var viz = this.el.getAttribute('material').visible;
      if (viz){
        if(!playing) {
          audio.playSound();
        } else {
          audio.pauseSound();
        }
      }
      playing = !playing;
    });
    this.el.addEventListener('mouseleave', () => {
      audio.stopSound();
    })
  }
})
