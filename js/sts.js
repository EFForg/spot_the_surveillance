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
AFRAME.registerComponent('narration', {
	init:function() {
		let playing = false;
		let audio = this.el.components.sound;

		this.el.addEventListener('click', () => {
			if(!playing) {
				audio.playSound();
			} else {
				audio.stopSound();
			}
			playing = !playing;
		});
		this.el.addEventListener('mouseleave', () => {
			audio.stopSound();
		})
		var stopaudio = document.querySelector('#stop');
		stopaudio.addEventListener('click', () => {
			alert(stopaudio);
			audio.stopSound();
		})
}
})
