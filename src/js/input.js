/* 
 * Author: Beau Bouchard 
 * Title/Filename: input.js 
 * Description: Core Mechanics of game
 */
 
function handleInput(inc_mod) {
	if ((38 in keyStroke )|| (87 in keyStroke)) {// up key stroke or 'w' key stroke
		player.y -= player.speed * inc_mod;
	}
	if ((40 in keyStroke) || (83 in keyStroke)) { // down key stroke or 's' key stroke
		player.y += player.speed * inc_mod;
	}
	if ((37 in keyStroke) || (65 in keyStroke)){ // left key stroke or 'a' key stroke
		player.x -= player.speed * inc_mod;
	}
	if ((39 in keyStroke) || (68 in keyStroke)) { // right key stroke or 'd' key stroke
		player.x += player.speed * inc_mod;
	}
	
	//action, or fire? button 
	if ((32 in keyStroke) || (17 in keyStroke)) { // SPACE key stroke or CTRL key stroke
		//Fire
	}
}

var update = function (inc_mod) { handleInput(inc_mod); }
