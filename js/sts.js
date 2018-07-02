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
			var newScore = 'You have found: ' + score + ' devices.'
			scoreBoard.setAttribute('text', 'value',  newScore);
		});
	}
});
