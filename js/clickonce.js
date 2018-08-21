AFRAME.registerComponent('click-once', {
  init: function () {
    var self = this;
    var scene = self.el.sceneEl;
    var raycaster = scene.querySelector('[cursor]').components.raycaster;

    // Define function to be executed on click.
    var clickHandler = function (e) {

      // Log clicks.
      console.log('clicked');

      // Remove "clickable" class from entity.
      self.el.classList.remove('clickable');

      // Refresh raycaster object list to reflect changes.
      raycaster.refreshObjects();

      // Remove event listener since no longer needed.
      self.el.removeEventListener('click', clickHandler);

    };

    // Add event listener for click.
    self.el.addEventListener('click', clickHandler);
  }
}); 
