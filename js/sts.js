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
	init: function () {
		var score = 0;
		this.el.addEventListener('mouseenter', evt => {
			//alert(evt.target.id);
			// evt.target tells you which was clicked.
			evt.target.dataset.wasClicked = true;
			var entity = document.querySelector('#stop');
			entity.components.sound.stopSound();
		});
	}
});
