/*
This function needs the Sharp package
To install type: 
	npm install sharp
	OR
	yarn add sharp
For more information look at: http://sharp.pixelplumbing.com/en/stable/install/
*/
/**
* The parameter file takes in the file name of the image
* It then converts image to greyscale and saves image to a file called OutputShark.jpg
* To call this function type: ImageModification(<filename>);
*/
function ImageModification(file){
console.log("IMAGE MODIFICATION");
const sharp=require('sharp');
sharp(file)
	.greyscale()
	.toFile('OutputShark.jpg',function(err){
		
		});
}

ImageModification("Shark.jpg");