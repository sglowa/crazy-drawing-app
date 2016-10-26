var bubbles = [];

function bubbleBrush_preload(){
	bubbles[0] = loadImage("brushes/bubbles.png");
	bubbles[1] = loadImage("brushes/bubbles2.png");
	bubbles[2] = loadImage("brushes/bubbles3.png");
	bubbles[3] = loadImage("brushes/bubbles4.png");
}

function bubbleBrush_setup(){
	createCanvas( innerWidth, innerHeight );
	colorMode (HSB);

}

function bubbleBrush( x, y, imgs ){
	noStroke();
	if(mouseIsPressed){


		
		var idx = Math.floor(Math.random() * imgs.length );

		image(imgs[idx], x, y, 100, 100);
		brushWidth++;
	}

	else{brushWidth = 0;

	}

}
