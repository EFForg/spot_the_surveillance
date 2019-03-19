AFRAME.registerComponent('congratsclose', {
  init: function () {
    var scene = document.querySelector('a-scene');
    this.el.addEventListener('click', evt => {
      console.log('congrats close ****************');
      entity = this.el
      entity.parentNode.removeChild(entity);
    });
  }
});
