/* 
 * Author: Beau Bouchard 
 * Title/Filename: app.js 
 * Description: Core Mechanics of game
 */
 
 var canvas = document.createElement("canvas");
 var context= canvas.getContext("2d");
 canvas.width = 1024;
 canvas.height = 768;

 document.getElementById("game").appendChild(canvas);
 
 
  // Player object
 var player = {
	speed: 256 //pixels per second
	
 };
 
 //tomato object
 var plant = {
	
 };
 


var start = function () { 
	player.x = canvas.width / 2;
	player.y = canvas.height / 2;
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



 
 
 
