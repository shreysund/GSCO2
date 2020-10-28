var bullet,wall1;
var speed, weight;
var thickness, height;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  height=400;
  bullet=createSprite(50,200,50,20);
    
}

function draw() {
  background("black");  


  wall1=createSprite(1200,200,60, thickness,height/2);
  wall1.shapeColor=color(80,80,80)
  
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX = speed; 
  bullet.shapeColor=color("white")

  if(wall1.x-bullet.x < (bullet.width+wall1.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0)
    }
  }
  if(hasCollided(bullet,wall1))
  {
  bullet.velocityX=0;
  var damage=.5*weight*speed*speed/(thickness*thickness*thickness)
  
  if (damage>10){
    wall1.shapeColor("red");
  } else{ (damage<10)
    wall1.shapeColor(0,255,0);
  }
    
  drawSprites();
}

function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>wallLeftEdge)
  {
    return true
  }
  return false 
}
  
  
}