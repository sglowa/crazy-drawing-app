
function whee_preload(){

}

function whee_setup(){

}

function whee (x,y){


		if(mouseIsPressed) {
			
			stroke(random(255), random(255), random(255));
			strokeWeight(random(20, 50));
			line(mouseX+random(50), mouseY+random(50), mouseX, mouseY);
			line(mouseX-random(50), mouseY-random(50), mouseX, mouseY);
			line(mouseX-random(50), mouseY+random(50), mouseX, mouseY);
			line(mouseX+random(50), mouseY-random(50), mouseX, mouseY);

			
			//colorCylce++;
			blendMode(SCREEN);
			}

}