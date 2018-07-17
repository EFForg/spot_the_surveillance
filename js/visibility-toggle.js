AFRAME.registerComponent("narration", {
  init: function() {
    let toggle = false
    this.el.addEventListener("click", (e) => {
      let vistoggle = document.querySelector("#popup-controls")
      vistoggle.forEach(function(el) {
          el.setAttribute("visible", toggle)
      })
      toggle = !toggle
    })
  }
})
