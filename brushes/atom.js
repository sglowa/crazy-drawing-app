function Atom(x,y){
	this.dx = Math.random()*4-2;
	this.dy = Math.random()*4-2;
	this.x = x || 0;
	this.y = y || 0;
	this.size = 0;
	this.color = '#'+Math.floor(Math.random()*16777215).toString(16);

	var modes = [LIGHTEST,MULTIPLY];
	var m = modes[ Math.floor(Math.random()*modes.length) ];
	this.mode = m;
}

Atom.prototype.update = function(){
	
	this.x += this.dx;
	this.y += this.dy;


	if( this.x>innerWidth || this.x<0){		
		this.dx = -this.dx;
	}

	if( this.y>innerHeight || this.y<0){		
		this.dy = -this.dy;
	}
	
	stroke( this.color );
	fill( this.color );
	blendMode(this.mode);
	rect( this.x, this.y, 10, 10 );
}

// Atom.prototype.draw = function(){
// 	rect( this.x, this.y, 10, 10 );
// }
