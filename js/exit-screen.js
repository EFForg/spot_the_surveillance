AFRAME.registerComponent('move-rig', {
  init: function () {
    document.querySelector("#test").addEventListener('click', this.moveRig.bind(this));
  },
  moveRig: function () {
     var camPos = document.querySelector("#cameraWrappers1");
     var position = camPos.getAttribute("position");

		 if(position.z == -0.52){
				camPos.setAttribute("position",'0.001 1.85 -2.35');
			}
      else if(position.z == -2.35){
				camPos.setAttribute("position",'0.001 1.85 -0.52');
			}
  }
});
