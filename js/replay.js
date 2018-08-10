AFRAME.registerComponent('replay', {
	init: function () {
	  var scene = document.querySelector('a-scene');
		this.el.addEventListener('click', evt => {
        console.log('clicked');
				function gameover() {
					location.reload(true);
				}
        	setTimeout(gameover, 2000);
          scene.enterVR();

		});
	}
});
