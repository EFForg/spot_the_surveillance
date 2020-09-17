AFRAME.registerComponent('listener', {
	init: function () {
		var score = 0;
		var scene = document.querySelector('a-scene');
		var congrats = document.querySelector('#congrats-popup');
		var congratsLeft = document.querySelector('#congrats-left-arrow');
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


		this.el.addEventListener('click', (e) => {
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
					let playing = false;

					// Create Congrats card
					function loadCongrats(){
						var congratsAll = document.querySelector('#congrats-all');
						var congratsAudio = document.querySelector('#congrats-audio');
						var congratsEl = document.createElement('a-entity');
						congratsEl.setAttribute('geometry', {primitive: 'plane', width: 6, height: 6});
						congratsEl.setAttribute('material', {shader: 'flat', side: 'front', opacity: 1, transparent: 'true', visible: 'true', src: '#congrats-card'});
						congratsEl.setAttribute('visible', 'true');
						if ( /* desktop */ !AFRAME.utils.device.checkHeadsetConnected() ) {
							congratsEl.setAttribute('position', {x: -1.807, y: 1.187, z: 4.678 });
							congratsEl.setAttribute('rotation', {x: 0, y: 150, z: 0});
						}
						else {
							congratsEl.setAttribute('position', {x: -5.98, y: 2.020, z: 4.307 });
							congratsEl.setAttribute('rotation', {x: 0, y: 110, z: 0});
						}
						congratsEl.setAttribute('data-clickable','');
						congratsEl.setAttribute('sound','src: #congrats-audio; volume: 5; loop: false; autoplay: false');
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

						// create close button
						var closeEl = document.createElement('a-entity');
						closeEl.setAttribute('position', {x:1.378, y: 1.496, z: 0.209 });
						closeEl.setAttribute('data-clickable','');
						closeEl.setAttribute('mixin','close');
						closeEl.setAttribute('congrats-close','');
						closeEl.id = "close-congrats";
						congratsEl.appendChild(closeEl);

						// create reopen button
						var reopenEl = document.createElement('a-entity');
						reopenEl.setAttribute('geometry', {primitive: 'plane', height:0.75, width: 2.1, });
						reopenEl.setAttribute('material', {shader: 'flat', side: 'front', opacity: 1, transparent: 'true', visible: 'true', src: '#reopen'});
						// for desktop/mobile
						if ( !AFRAME.utils.device.checkHeadsetConnected() ){
							reopenEl.setAttribute('position', {x: -4.436, y: 4.251, z: 4.1 })
						}
						else {
							reopenEl.setAttribute('position', {x: -5.166, y: 4.251, z: 3.559 })
						}

						reopenEl.setAttribute('rotation', {x: 0, y: 110, z: 0});
						reopenEl.setAttribute('visible', false);
						reopenEl.setAttribute('data-clickable','');
						reopenEl.setAttribute('reopen-cards','');
						reopenEl.id = "reopen-cards";
						congratsAll.appendChild(reopenEl);

						congratsLeft.setAttribute('visible', true);
						congratsRight1.setAttribute('visible', true);
						congratsRight2.setAttribute('visible', true);
						congratsAudio.load();
						congratsEl.addEventListener('mouseenter', () => {
							if (!playing) {
								congratsAudio.play();
								playing = true;
							}
						});
						congratsEl.addEventListener('mouseleave', () => {
							congratsAudio.pause();
							playing = false;

						});
					}

					loadCongrats();


					function confetti() {
						var congratsEl = document.querySelector('#congrats-all')
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
						confettiEl.setAttribute('position', {x: -5.573, y: 1, z: 5.5 });
						confettiEl.setAttribute('material', {
							transparent: true,
							visible: false
						});
						confettiEl.id = "confetti";
						congratsEl.appendChild(confettiEl);
					}
					confetti();
				}
				setTimeout(tada, 5000);
			}
		});
	}
});
