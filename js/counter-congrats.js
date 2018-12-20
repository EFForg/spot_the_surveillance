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
					var congratsEl = document.createElement('a-sound');
					// create congrats card
					function loadCongrats(){
						var congratsAll = document.querySelector('#congrats-all');
						var congratsEl = document.createElement('a-sound');
						congratsEl.setAttribute('geometry', {primitive: 'plane', width: 4, height: 4});
						congratsEl.setAttribute('material', {shader: 'flat', side: 'front', opacity: 1, transparent: 'true', visible: 'true', src: '#congrats-card'});
						congratsEl.setAttribute('visible', 'true');
						congratsEl.setAttribute('position', {x:5.584, y: 1.25, z:-1.325 });
						congratsEl.setAttribute('rotation', {x: 0, y: -80, z: 0});
						congratsEl.setAttribute('data-clickable','');
						congratsEl.setAttribute('play-audio','');
						congratsEl.setAttribute('autoplay', 'false');
						congratsEl.setAttribute('loop', 'false');
						congratsEl.setAttribute('volume', 5);
						congratsEl.setAttribute('src','#congrats-audio');
						congratsEl.id = "congrats-popup";
						congratsAll.appendChild(congratsEl);``

						// create sls button
						var slsEl = document.createElement('a-entity');
						slsEl.setAttribute('geometry', {primitive: 'plane', height:0.5, width: 2.1, });
						slsEl.setAttribute('material', {shader: 'flat', side: 'front', opacity: 0, transparent: 'true', visible: 'false'});
						slsEl.setAttribute('visible', 'false');
						slsEl.setAttribute('position', {x:0, y: -0.658, z: 0.399 });
						slsEl.setAttribute('data-clickable','');
						slsEl.setAttribute('exitlink',"href:https://www.eff.org/issues/street-level-surveillance")
						slsEl.id = "sls1";
						congratsEl.appendChild(slsEl);

						// create replay button
						var replayEl = document.createElement('a-entity');
						replayEl.setAttribute('geometry', {primitive: 'plane', height:0.35, width: 1.2, });
						replayEl.setAttribute('material', {shader: 'flat', side: 'front', opacity: 0, transparent: 'true', visible: 'false'});
						replayEl.setAttribute('visible', 'false');
						replayEl.setAttribute('position', {x:-0.010, y: -1.525, z: 0.074 });
						replayEl.setAttribute('data-clickable','');
						replayEl.setAttribute('replay','');
						replayEl.id = "replay1";
						congratsEl.appendChild(replayEl);
					}

					loadCongrats();

					congratsLeft1.setAttribute('visible', true);
					congratsLeft2.setAttribute('visible', true);
					congratsRight1.setAttribute('visible', true);
					congratsRight2.setAttribute('visible', true);
					congratsAudio = congratsEl.components.sound;
					let playing = false;
					congratsEl.addEventListener('mouseenter', () => {
						if (!playing) {
							congratsAudio.playSound();
							playing = true;
						}
					});
					congratsEl.addEventListener('mouseleave', () => {
						congratsAudio.stopSound();
						playing = false;

					});
					function confetti() {
						var sceneEl = document.querySelector('#sts-live');
						var confettiEl = document.createElement('a-entity');

						confettiEl.setAttribute('particle-system', {
							accelerationSpread: '20 0 20',
							color: '#FFFFFF',
							enabled: true,
							maxParticleCount: 80,
							particleCount: 40,
							opacity: 0.2,
							size: 0.5,
							velocityValue: '0 15 0'
						});
						confettiEl.setAttribute('position', { x: 5.914, y: 1.9, z: -0.927 });
						confettiEl.setAttribute('material', {
							transparent: true,
							visible: false
						});
						confettiEl.id = "confetti";
						sceneEl.appendChild(confettiEl);
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
				setTimeout(hidePopups, 20000);
			}
		});
	}
});
