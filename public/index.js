var app = function() {

  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');

  var x = 400;
  var y = 325;
  var size = 5;

  context.beginPath();
  context.moveTo(x,y);

  var drawLine = function(x,y) {

      if (x < 0) {x = 2};
      if (y < 0) {y = 2};
      if (y >= 650) {y = 648};
      if (x >= 800) {x = 798};

      context.lineTo(x,y);
      context.stroke();

    }
    document.addEventListener('keydown',function(event) {

      if (event.keyCode == '38') {drawLine(x,y-=size)}
        else if (event.keyCode == '40') {drawLine(x,y+=size)}
          else if (event.keyCode == '37') {drawLine(x-=size,y)}
            else if (event.keyCode == '39') {drawLine(x+=size,y)}
          })
  }
  window.addEventListener('load', app);