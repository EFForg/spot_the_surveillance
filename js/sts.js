AFRAME.registerComponent('listener', {
	init: function () {
		var score = 0;
		var scene = document.querySelector('a-scene');
		var congrats1 = document.querySelector('#congrats-popup1');
		var congrats2 = document.querySelector('#congrats-popup2');
		var congrats3 = document.querySelector('#congrats-popup3');

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
			if (score = 7) {

				function tada() {
				console.log("Congrats!");
				congrats1.setAttribute('visible', true);
				congrats2.setAttribute('visible', true);
				congrats3.setAttribute('visible', true);

			//	function gameover() {
			//		scene.reload();
			//	}
			}

			setTimeout(tada, 10000);
			//setTimeout(gameover, 10000)

			}
		});
	}
});
