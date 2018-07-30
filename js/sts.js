AFRAME.registerComponent('listener', {
	init: function () {
		var score = 0;
		this.el.addEventListener('mouseenter', evt => {
			if (evt.target.dataset.wasClicked) {
				return;
			}
			// evt.target tells you which was clicked.
			evt.target.dataset.wasClicked = true;
			//alert('evt.target.id);
			// Score up.
			var scoreBoard = document.querySelector('#count-display');
			score++;
			var newScore = score + ' / 7'
			scoreBoard.setAttribute('text', 'value',  newScore);
			if (score == 7) {
				//alert("Congrats!");
			}
		});
	}
});
