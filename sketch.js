
function preload(){
  //pre-load images
  path_image=loadImage("path.png");
  man_running=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup()
{
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(path_image)
  path.velocityY=4;
  path.scale=1.2;
  
  
  //this creates runner sprite and adds the animation that was preloaded and shrinks the scale of the animation
  runner=createSprite(300,200);
  runner.addAnimation("running",man_running);
  runner.scale=0.1;


  boundary_left=createSprite(35,300,30,600);
  boundary_left.visible=false;
  boundary_right=createSprite(365,300,30,600);
  boundary_right.visible=false;
}

function draw() {
  background(0);
  
  
  if(path.y>400)
  {
   path.y=height/2;
  }
  
  
  runner.x=mouseX;
  //makes the runner collide with the invisible boundary
  runner.collide(boundary_left);
  runner.collide(boundary_right);


  drawSprites();
}
