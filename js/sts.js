		AFRAME.registerComponent('click-test', {
		  schema: {
		    el: {
		      type: 'selector'
		    },
		    score:{
		      type: 'int',
		      default: 0
		    },
		  },

		  init: function () {
		    var sceneEl = document.querySelector('a-scene');
		    var scoreBoard = document.querySelector('#count-display');
				var alpr = sceneEl.querySelector('#alpr-hotspot');
				var elem = document.getElementById("alpr-hotspot");


		    sceneEl.querySelector('#alpr-hotspot').addEventListener('click', () => {

		     this.data.score++;
				 currentScore = this.data.score;
					if (currentScore == 1) {
						var newScore = 'You have found 1 device.'
					} else {
		      	var newScore = 'You have found: ' + this.data.score + ' devices.'
					}
		      scoreBoard.setAttribute('text', 'value',  newScore);
					elem.parentNode.removeChild(elem);
		    })
		  }
		});
