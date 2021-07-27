var sea1;
var ship;
function preload(){
seaImg =loadImage("sea.png");
shipImg1=loadImage("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  sea1=createSprite(200,200,20,20)
  sea1.addImage(seaImg)
  ship=createSprite(200,300,20,20);
  ship.addImage(shipImg1);
  ship.scale=0.25;
}

function draw() {
  background("blue");
  sea1.velocityX=-3
  if(sea1.x<0){
    sea1.x=sea1.width/2;
  }
  drawSprites();
}