AFRAME.registerComponent('listener', {
	init: function () {
		var score = 0;
		var scene = document.querySelector('a-scene');
		var congrats = document.querySelector('#congrats-popup');
		var congratsLeft1 = document.querySelector('#congrats-left-arrow1');
		var congratsLeft2 = document.querySelector('#congrats-left-arrow2');
		var congratsRight1 = document.querySelector('#congrats-right-arrow1');
		var congratsRight2 = document.querySelector('#congrats-right-arrow2');
		//var confetti = document.querySelector('#confetti');
		// all other popups
		var alpr = document.querySelector('#alpr-popup');
		var alprMobile = document.querySelector('#alpr-mobile-popup');
		var biometric = document.querySelector('#biometric-popup');
		var bodyCam = document.querySelector('#bodycam-popup');
		var camera1 = document.querySelector('#camera1-popup');
		var camera2 = document.querySelector('#camera2-popup');
		var drone = document.querySelector('#drone-popup');
		var bird = document.querySelector('#bird-popup');
		var light = document.querySelector('#light-popup');
		var intro = document.querySelector('#intro-popup');


		this.el.addEventListener('mouseenter', (e) => {
			e.target.setAttribute("visible", "true")
			if (e.target.dataset.wasClicked) {
				return;
			}
			// evt.target tells you which was clicked.
			e.target.dataset.wasClicked = true;

			// Score up.
			var scoreBoard = document.querySelector('#count-display');
			score++;
			var newScore = score + ' / 7'
			scoreBoard.setAttribute('text', 'value',  newScore);
			if (score == 7) {
				function tada() {
					congrats.setAttribute('visible', true);
					congrats.setAttribute('material', { visible: true});
					congratsLeft1.setAttribute('visible', true);
					congratsLeft2.setAttribute('visible', true);
					congratsRight1.setAttribute('visible', true);
					congratsRight2.setAttribute('visible', true);
					congratsAudio = congrats.components.sound;
					let playing = false;
					congrats.addEventListener('mouseenter', () => {
						  if (!playing) {
								congratsAudio.playSound();
								playing = true;
							}
					});
					congrats.addEventListener('mouseleave', () => {
						    congratsAudio.stopSound();
							  playing = false;

					});
					function confetti() {
					  var sceneEl = document.querySelector('a-scene');
					  var entityEl = document.createElement('a-entity');

					  // initialize the entity.
					  sceneEl.appendChild(entityEl);
					  entityEl.setAttribute('particle-system', {
					    accelerationSpread: '20 0 20',
					    color: '#FFFFFF',
					    enabled: true,
							maxParticleCount: 80,
					    particleCount: 40,
					    opacity: 0.2,
					    size: 0.5,
					    velocityValue: '0 15 0'
					  });
						entityEl.setAttribute('position', { x: 5.914, y: 1.9, z: -0.927 });
					  entityEl.setAttribute('material', {
					    transparent: true,
					    visible: false
					  });
					}
					confetti();
				}
				// remove all other popups
				function hidePopups() {
					alpr.setAttribute('visible', false);
					alprMobile.setAttribute('visible', false);
					biometric.setAttribute('visible', false);
					bodyCam.setAttribute('visible', false);
					camera1.setAttribute('visible', false);
					camera2.setAttribute('visible', false);
					drone.setAttribute('visible', false);
					bird.setAttribute('visible', false);
					light.setAttribute('visible', false);
					intro.setAttribute('visible', false);
				}
				setTimeout(tada, 5000);
				setTimeout(hidePopups, 10000);
			}
		});
	}
});
