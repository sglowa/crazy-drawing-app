
var steCount=0;

function stormyNight_preload(){

}

function stormyNight_setup(){

}

function stormyNight(x,y,myText){
		textSize(20);
		textFont("Times New Roman");
		fill(0);

			// console.log(myText[steCount]);
		text(myText.charAt(steCount),x,y);
			// console.log(myText.charAt(i))
		steCount++;
		if(steCount>=myText.length)steCount=0
}

// 	canvas.onmousemove=function(){
// 		text(myText.charAt(steCount),x,y);
// 		steCount++;
// 		console.log(myText.charAt(steCount))
// 		if(steCount>=myText.length)steCount=0		
// 		}
// }


