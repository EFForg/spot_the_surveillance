AFRAME.registerComponent("exitlink", {
  schema: {
    href: { type: 'string' }
  },
  init: function() {
    this.el.addEventListener("click", function () {
       window.location = this.data.href;
    }.bind(this));
  }
})
