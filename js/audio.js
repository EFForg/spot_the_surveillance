AFRAME.registerComponent('congrats-audio', {
  init:function() {
    let playing = false;

    var entity = document.querySelector('a-sound');
    console.log("the entity is " + entity);
    let audio = this.el.components.sound;
    console.log("the audio " + audio);
    this.el.setAttribute("src", "assets/congrats.mp3");

    this.el.addEventListener('click', () => {

      if(!playing) {
        audio.playSound();
      } else {
        audio.stopSound();

      }
      playing = !playing;
    });
  }
})
