AFRAME.registerComponent("closeIt", {
  init: function() {
    this.el.addEventListener("mouseenter", (e)=> {
       el.parentNode.removeChild(el);
    })
  }
})
