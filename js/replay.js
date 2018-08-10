AFRAME.registerComponent('replay', {
	init: function () {
	  var scene = document.querySelector('a-scene');
		this.el.addEventListener('click', evt => {
        console.log('clicked');
				function gameover() {
					scene.exitVR();
          scene.enterVR();
				}
        	setTimeout(gameover, 10000)

		});
	}
});
