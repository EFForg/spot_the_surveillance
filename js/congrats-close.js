AFRAME.registerComponent('congrats-close', {
  init: function () {
    var el = this.el;
    var congratsLeft = document.querySelector('#congrats-left-arrow');
    var congratsRight1 = document.querySelector('#congrats-right-arrow1');
    var congratsRight2 = document.querySelector('#congrats-right-arrow2');
    var confetti = document.querySelector('#confetti');
    el.addEventListener('mouseenter', function () {
      var parent = el.closest('[visible]');
      parent.setAttribute('visible', false);
      congratsLeft.setAttribute('visible', false);
      congratsRight1.setAttribute('visible', false);
      congratsRight2.setAttribute('visible', false);
      confetti.setAttribute('visible', false);
    });
  }
});
