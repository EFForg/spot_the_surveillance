AFRAME.registerComponent("exitlink", {
  init: function() {
    this.el.addEventListener("click", (e)=> {
       window.location = this.data.href;
    })
  }
})
