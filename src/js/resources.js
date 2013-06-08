
/* 
 * Author: Beau Bouchard 
 * Title/Filename: resources.js 
 * Description: 
 */


  // Loading images from URL
	function load(incURL) {
		if(incURL instanceof Array)
		{
			incURL.forEach(function(url)
			
			) 
			_load()
		}
	}
	
	/***** Resource loader *****/

	 //Background Image
 var bkgrdReady = false;
 var bkgrdImage = new Image();
 bkgrdImage.onload = function () { bkgrdReady = true; };
 bkgrdImage.src = "img/background1.png";
 
 //maincharacter Image
 var littleheroReady = false; 
 var littleheroImage = new Image();
 littleheroImage.onload = function () { littleheroReady = true; };
 littleheroImage.src = "img/hero1.png";
