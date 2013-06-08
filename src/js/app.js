/* 
 * Author: Beau Bouchard 
 * Title/Filename: app.js 
 * Description: Core Mechanics of game
 */
 
 var canvas = document.createElement("canvas");
 var context= canvas.getContext("2d");
 canvas.width = 512;
 canvas.height = 480;
 document.body.appendChild(canvas);
 
 
 //Resource Loader


 
  // Player object
 var player = {
  speed: 256 //pixels per second
 };
 
 var keyStroke = {};
 
addEventListener("keydown", function (e) {
		keyStroke[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
		delete keyStroke[e.keyCode];
}, false);

var start = function () { 
	player.x = canvas.width / 2;
	player.y = canvas.height / 2;
};



		
 
 var render = function () {
	if (bkgrdReady) {
		context.drawImage(bkgrdImage, 0, 0);
		
	}
	if (littleheroReady) {
		context.drawImage(littleheroImage, player.x, player.y);
		
	}
};


//Game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;
	
	update(delta / 1000);
	render();
	
	then = now;
};

start();
var then = Date.now();
setInterval(main,1);



 
 
 
