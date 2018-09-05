var ding = document.getElementById("ding");

var el = document.getElementsByClassName('hotspot');
for (var i=0; i < el.length; i++) {
    // Here we have the same onclick
    el.item(i).onclick = function() {
       console.log('Click just happened');
          ding.play();
    };
}
