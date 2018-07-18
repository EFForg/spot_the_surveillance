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
			this.el.addEventListener("mouseenter", (e) => {
			//	console.log('entered');
				let close = document.querySelector("#close");
			  close.setAttribute('visible', 'true');
				let stop = document.querySelector("#stop");
				stop.setAttribute('visible', 'true');

			})
			this.el.addEventListener("mouseleave", (e) => {
			//	console.log('entered');
let close = document.querySelector("#close");
			close.setAttribute('visible', 'false');
	let stop = document.querySelector("#stop");
			stop.setAttribute('visible', 'false');
			})
			let audio = document.querySelector('#alpr-sound[sound]').components.sound;

			this.el.addEventListener('click', () => {
					audio.playSound();
			});
			this.el.addEventListener('mouseleave', () => {
				audio.stopSound();
			})
			var stopaudio = document.querySelector('#stop');
			stopaudio.addEventListener('mouseenter', () => {
				//console.log('stop sound');
				audio.stopSound();
				stopaudio.setAttribute('text', 'value', 'audio off')
			})

	}
	})
