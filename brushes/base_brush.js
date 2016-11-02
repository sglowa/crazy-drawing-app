function Brush(x,y){
	this.x = x || 0;
	this.y = y || 0;
	this.size = 0;
}

Brush.prototype.update = function(x,y){
	this.x = x;
	this.y = y;
}

Brush.prototype.draw = function(x,y){

}