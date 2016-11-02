// fangzhi's brush


var imgBrush;
function pepeBrush_preload() {
	imgBrush = loadImage("files/pepe.png");
}

function pepeBrush_setup(){

}

function pepeBrush(x,y){
		tint(random(100,255), random(100,255), random(100,255));
		image(imgBrush, x, y,random(100,250),random(100,250));//draw pepe
		textSize(random(10,50));
		text("sad pepe", x+random(50,200), y+random(0,50));//text
		fill(random(0,255), random(0,255), random(0,255));
		textSize(random(50,200));
		text("PEPE SAD", x+random(50,200), y+random(200,300));//text
		fill(random(0,255), random(0,255), random(0,255));
}