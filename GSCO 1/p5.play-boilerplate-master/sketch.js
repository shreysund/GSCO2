var car,wall;
var speed, weight,thickness;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  car=createSprite(50,200,50,5);
  wall=createSprite(1200,200,thickness, height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
  thickness=random(22,83);

  
 
  car.velocityX = speed; 


  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}
