
var f;


function square_preload(){
	f = loadFont('files/Arial Rounded Bold.ttf');
}

function square_setup(){

}

function square(x,y){

	textFont( f );
	text('hello',x,y);

}