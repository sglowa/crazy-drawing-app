

var myText = ["q", "Q", "e", "E", "h", "H", "w", "x", "X", "≈", "‰", "Œ"];
var i = 0;
var myFont;

function jenBrush_preload(){
	myFont = loadFont("files/Helsinki.otf")

}

function jenBrush_setup(){

}

function jenBrush(x, y, s) {
	textSize(s);
	textFont(myFont);
	i = Math.floor(Math.random() * myText.length);
	text(myText[i], x, y);
	
}