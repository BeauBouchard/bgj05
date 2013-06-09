/* 
 * Author: Beau Bouchard 
 * Title/Filename: input.js 
 * Description: Core Mechanics of game
 */
 
 // Event listener for keystroke codes
var keyStroke = {};
addEventListener("keydown", function (e) {
	keyStroke[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
		delete keyStroke[e.keyCode];
}, false);
 

 var tick = 0;
 // event action for each keystroke
function handleInput(inc_mod) {
	
	if ((38 in keyStroke )|| (87 in keyStroke)) {// up key stroke or 'w' key stroke
		if(cdetect){player.y -= player.speed * inc_mod;}
		else{player.y += player.speed * inc_mod*4;}
		tick += inc_mod*5;
	}
	if ((40 in keyStroke) || (83 in keyStroke)) { // down key stroke or 's' key stroke
		if(cdetect){player.y += player.speed * inc_mod;}
		else{player.y -= player.speed * inc_mod*4;}
		tick += inc_mod*5;
	}
	if ((37 in keyStroke) || (65 in keyStroke)){ // left key stroke or 'a' key stroke
		if(cdetect){player.x -= player.speed * inc_mod;}
		else{player.x += player.speed * inc_mod*4;}
		tick += inc_mod*5;
		
	}
	if ((39 in keyStroke) || (68 in keyStroke)) { // right key stroke or 'd' key stroke
		if(cdetect){player.x += player.speed * inc_mod;}
		else{player.x -= player.speed * inc_mod*4;}
		tick += inc_mod*5;
	}
	
	if(tick >1){playerAnimate();tick=0;}
	
	//action, or fire? button 
	if ((32 in keyStroke) || (17 in keyStroke)) { // SPACE key stroke or CTRL key stroke
		//Fire
	}
	


// PLAYER VARIABLES


}

var update = function (inc_mod) { handleInput(inc_mod); }
