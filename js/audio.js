AFRAME.registerComponent('congrats-audio', {
  init:function() {
    let playing = false;
    var entity = document.querySelector('a-sound');
    let audio = this.el.components.sound;
    this.el.setAttribute("src", "assets/congrats.mp3");
  //let canuseeit = this.el.getAttribute("visible", "data.visible");

    this.el.addEventListener('click', () => {
      var iseeyou = this.el.getAttribute('material').visible;
      console.log("iseeyou= " +iseeyou);
      if (iseeyou){
        console.log(iseeyou);
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
