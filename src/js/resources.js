
/* 
 * Author: Beau Bouchard 
 * Title/Filename: resources.js 
 * Description: 
 */
	
	/***** Resource loader *****/
	var cdetect = true;

	//Background Image
	var bkgrdReady = false;
	var bkgrdImage = new Image();
	bkgrdImage.onload = function () { bkgrdReady = true; };
	bkgrdImage.src = "img/background2.png";
 
	//side menu to turn music off
	var menuRdy = false;
	var menuImage = new Image();
	menuImage.onload = function () { menuRdy = true; };
	menuImage.src = "img/sidemenu0.png";
	
	var volumebuttonRdy = false;
	var volumebuttonImage = new Image();
	volumebuttonImage.onload = function () { volumebuttonRdy = true; };
	volumebuttonImage.src = "img/musicbuttonon.png";
	
	var volumebuttonoffRdy = false;
	var volumebuttonoffImage = new Image();
	volumebuttonoffImage.onload = function () { volumebuttonoffRdy = true; };
	volumebuttonoffImage.src = "img/musicbuttonoff.png";
	
	//volumebuttonImage.onClick(function (event) {  document.body.getElementsByTagName('audio').stop(); });
 
	//maincharacter Image
	var littleheroReady = false; 
	var littleheroImage = new Image();
	littleheroImage.onload = function () { littleheroReady = true; };
	littleheroImage.src = "img/playerd00.png";
	
	var currentPlayerSprite = 0;
	var playerAnimate = function (){
		currentPlayerSprite++;
		if(currentPlayerSprite>5){currentPlayerSprite=0;}
		littleheroImage.src = playerSprite[currentPlayerSprite].src ;
	}
	
	
	//player
	var playerReady = false;
	var playerRdy = new Array(5);
	var playerSprite = new Array(5);
	for(var i = 0; i<5; i++){
		playerSprite[i] = false;
		playerSprite[i] = new Image();
		playerSprite[i].src = "img/playerd0"+i+".png";
		playerSprite[i].onload = function () { playerRdy[i] = true};
	}
	
	
	//plant
	var tomatoPlantReady = false;
	var tomatoPlantRdy = new Array(6);
	var tomatoPlant = new Array(6);
	for(var i = 0; i<6; i++){
		tomatoPlantRdy[i] = false;
		tomatoPlant[i] = new Image();
		tomatoPlant[i].src = "img/tomato"+i+".png";//tomato0.png
		tomatoPlant[i].onload = function () { tomatoPlantRdy[i] = true};
	}
	
 
	// perim fence
	var fenceisReady = false;
	var fenceReady =  [new Array(3), new Array(3), new Array(3)];
	var fence = [new Array(3), new Array(3), new Array(3)];

for(var x =0; x<3; x++)
{
	for(var y =0; y<3; y++)
	{
		fenceReady[x][y] = false;
		var imagepath = "fence" + x + y + ".png";
		fence[x][y] = new Image();
		fence[x][y].src = "img/"+imagepath;
		fence[x][y].onload = function () { fenceReady[x][y] = true; }; // causes error, runs as asycronis function
	}
}


//Checking to see if fence is loaded
var fencecheck = function () {
	var count = 0; 
	for(var x =0; x<3; x++){for(var y =0; y<3; y++){ if (fenceReady[x][y] ){count++;}}}
	if(count= fenceReady.length){		fenceisReady = true;}
}

//checking Tomatoplant
var tomatocheck = function () {
	var count = 0; 
	for(var i = 0; i<6; i++){if (tomatoPlantRdy[i] ){count++;}}
	if(count= tomatoPlantRdy.length){		tomatoPlantReady = true;}
}

var renderFence = function () {
	for(var x =0; x<32; x++){for(var y =0; y<24; y++){
		if((y==0)&&(x!=31)&&(x!=0)) {	context.drawImage(fence[1][0],x*32,y*32);	} //
		if((y==23)&&(x!=31)&&(x!=0)) {	context.drawImage(fence[1][0],x*32,y*32);	} //
		if((x==0)&&(y==0)) {	context.drawImage(fence[0][0],0,0);	} //
		if((x==1)&&(y!=23)&&(y!=0)) {	context.drawImage(fence[0][1],0,y*32);	} //
		if((x==0)&&(y==23)){	context.drawImage(fence[0][2],x*32,y*32);}
		if((x==31)&&(y!=23)&&(y!=0)) {	context.drawImage(fence[0][1],x*32,y*32);	} //
		if((x==31)&&(y==0)) {	context.drawImage(fence[2][0],x*32,y*32);	} //
		if((x==31)&&(y==23)){	context.drawImage(fence[2][2],x*32,y*32);}
	}}
}

var collisiondetection = function () {
	if(cdetect)
	{
		if((player.x <32)||(player.x>(canvas.width-52))||(player.y<42)||(player.y>(canvas.height-90))){cdetect = false;}
	}
	else{
		//checking to see if player is still bumping
		if((player.x <32)||(player.x>(canvas.width-52))||(player.y<42)||(player.y>(canvas.height-90))){ cdetect = false; }
		else { cdetect = true;}
		//if player travels off screen, teleport to center
		if((player.x<0)||(player.x>canvas.width)||(player.y<0)||(player.y>(canvas.height-64) )){player.x = canvas.width / 2;player.y = canvas.height / 2;}
	}
}




 var render = function () {
	collisiondetection();
	if (bkgrdReady) {
		context.drawImage(bkgrdImage, 0, 0);
	}
	if (littleheroReady) {
		context.drawImage(littleheroImage, player.x, player.y);
	}
	if (fenceisReady) {
		//context.drawImage()
		renderFence();
	}
	if (menuRdy) {
		context.drawImage(menuImage,0,canvas.height/2 );
	}
	if (volumebuttonRdy) {
		context.drawImage(volumebuttonImage,2,(canvas.height/2 + 74));
	}
	else {
		//fence ready check
		fencecheck();
	}
	
};
