AFRAME.registerComponent('listener', {
	init: function () {
		var score = 0;
		this.el.addEventListener('click', evt => {
			if (evt.target.dataset.wasClicked) {
				return;
			}
			// evt.target tells you which was clicked.
			evt.target.dataset.wasClicked = true;
			//alert('evt.target.id);
			// Score up.
			var scoreBoard = document.querySelector('#count-display');
			score++;
			var newScore = score + ' / 2'
			scoreBoard.setAttribute('text', 'value',  newScore);
		});
	}
});
AFRAME.registerComponent('narration',{
 dependencies: ['sound'],
		init:function() {
			//let audio = this.el.components.sound;
			let audio = document.querySelector('#alpr-sound[sound]').components.sound;

			this.el.addEventListener('click', () => {
					audio.playSound();
			});
			this.el.addEventListener('mouseleave', () => {
				audio.stopSound();
			})
			//var stopaudio = document.querySelector('#stop');
			//stopaudio.addEventListener('click', () => {
			//	console.log('stop sound');
			//	audio.stopSound();
			//})
	}
	})
