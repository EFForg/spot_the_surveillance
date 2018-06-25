AFRAME.registerComponent('click-test', {
	    init: function () {
            const sphere = document.querySelector('.hotspot')
            //this.x = 0;
            var clickCounter = 0;
            sphere.addEventListener('click', () => {
                console.log('sphere click');
                //console.log(this.x++);
                clickCounter++;
                console.log(clickCounter);
				var countValue = document.getElementById("count-display");
				alert("count display= " countValue);
				document.getElementById("count-display").setAttribute("value","Counter: " + clickCounter);
            })
        }
    });
