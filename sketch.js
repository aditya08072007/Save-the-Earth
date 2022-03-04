var bg,bgImg;
var earth,earthImg;
var rocket,rocketImg;


function preload(){
  bgImg = loadImage("bgimage.png");
  earthImg = loadImage("sprite_0.png");
  rocketImg = loadImage("rocket.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
 bg = createSprite(2500,1200,20,20);
 bg.addImage(bgImg);
 bg.scale = 6.3;
 earth = createSprite(2400,1200,20,20);
 earth.addImage(earthImg);
 earth.scale = 1.2;
 rocket = createSprite(500,200,20,20);
  rocket.addImage(rocketImg);
  rocket.scale = 1.1;
  


}

function draw(){
  background("lightblue");
  drawSprites();
  createEdgeSprites();
  
  

  rocket.x=mouseX;
  rocket.y=mouseY;


}
    
 

