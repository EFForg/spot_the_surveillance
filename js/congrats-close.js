AFRAME.registerComponent('congrats-close', {
  init: function () {
    var el = this.el;
    el.addEventListener('mouseenter', function () {
      var parent = el.closest('[visible]');
      parent.setAttribute('visible', false);
    });
  }
});
