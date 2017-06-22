var app = function() {

  var canvas = document.getElementById('main-canvas');
  console.log("canvas", canvas);
  var context = canvas.getContext('2d');
  console.log("context",context);
//draw a purple square
  context.fillStyle = 'purple'
  context.fillRect(10, 10, 50, 50);
//draw a vertical line
  context.beginPath();
  context.moveTo(100,100);
  context.lineTo(100,200);
  context.stroke();
//draw a triangle
  context.beginPath();
  context.moveTo(200,200);
  context.lineTo(200,300);
  context.lineTo(100,300);
  context.closePath();
  context.stroke();

var drawCircle = function(x,y) {
  context.beginPath();
  context.arc(x, y, 50, 0, 2*Math.PI);
  context.stroke();
}

//get a click event and show it knows the location of the click -- try mousemove
  canvas.addEventListener('click', function(event) {
  console.log("clicked", event);
  console.log("location", event.x,event.y)
  drawCircle(event.x,event.y);
  })
var img = document.createElement('img');
img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png"

var drawDog = function() {
  context.drawImage(img, 200, 200, 90, 90);
}
img.addEventListener('load', drawDog);

var changeColour = function() {
  context.strokeStyle = this.value;
}

var colourPicker = document.getElementById('input-colour');
colourPicker.addEventListener('change',changeColour);




}
window.addEventListener('load', app);