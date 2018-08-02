AFRAME.registerComponent('listener', {
	init: function () {
		var score = 0;
		var scene = document.querySelector('a-scene');
		var congrats = document.querySelector('#congrats-popup');
		var congrats2 = document.querySelector('#congrats-popup2');
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
			if (score > 2) {

				function tada() {
				console.log("Congrats!");
				//scene.exitVR();
				congrats.setAttribute('visible', true);
				congrats2.setAttribute('visible', true);
			}
			setTimeout(tada, 2000);

			}
		});
	}
});
