AFRAME.registerComponent('congrats-audio', {
  init:function() {
    let playing = false;
    var entity = document.querySelector('a-sound');
    let audio = this.el.components.sound;
    this.el.setAttribute("src", "assets/congrats.mp3");

    this.el.addEventListener('click', () => {
      var viz = this.el.getAttribute('material').visible;
      if (viz){
        if(!playing) {
          audio.playSound();
        } else {
          audio.stopSound();
        }
      }
      playing = !playing;
    });
  }
})
