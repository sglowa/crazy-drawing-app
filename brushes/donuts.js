var abcd

function donuts_preload(){
    abcd = loadImage("files/2222.png")

           createCanvas(innerWidth, innerHeight)
           colorMode(HSB);
           background(random(0,200),80,100);
}

function donuts_setup(){};
function donuts(){
    
         
         fill(random(0,255),100,100)
         noStroke();

         
         blendMode(BLEND);
         ellipse(mouseX,mouseY,20,20);
         image(abcd,mouseX,mouseY,70,50)
       

}

