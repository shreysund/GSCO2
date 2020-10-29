var bullet,wall1;
var speed, weight;
var thickness, height;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  height=400;
  bullet=createSprite(50,200,50,5); 
  bullet.shapeColor=color("white")
  wall1=createSprite(1200,200, thickness,height/2);
  wall1.shapeColor=color(80,80,80)
  background("black"); 
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  bullet.velocityX = speed
}

function hasCollided(Lbullet, Lwall)
{
  console.log(Lbullet.x,Lwall.x)
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    
    return true
  }
  return false 
}
function draw() {

console.log("I am here")
if(hasCollided(bullet,wall1))
  {
  bullet.velocityX=0;
  var damage= 0.5 * weight * speed * speed/(thickness *thickness *thickness);
  if (damage>10){
    wall1.shapeColor=color(255,0,0);
  }
  if (damage<10){
    wall1.shapeColor=color(0,255,0);
  }
}
drawSprites();
}