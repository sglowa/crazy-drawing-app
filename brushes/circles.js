


function circles_preload(){

}




function circles_setup(){

}




function circles( x, y, s ){

	
	fill(80, 5, 30, 10);
	stroke(010101);

	ellipse( x-20, y, s, s );
	ellipse( x+20, y , s, s );
	ellipse( x+80, y-80 , s, s );
	ellipse( x-80, y+80 , s, s );
	ellipse( x+80, y+80 , s, s );
	ellipse( x-80, y-80 , s, s );


	
	ellipse([Math.random(1, 100)], mouseX, mouseY, 100, 100, s, s);
}


// function lines( x1, y1, x2, y2){

// 	stroke(010001);


// 	line(x1 + 10, y1, x2, y2);
// 	line(x1 + 20, y1, x2, y2);
// 	line(x1, + 30 y1, x2, y2);
// 	line(x1, y1, x2, y2);


// }
