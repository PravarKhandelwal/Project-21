var bullet,wall;
var speed,weight;
var deformation,thickness;

function setup() {
  createCanvas(1600,400);
  
  

  speed = random(223,321);
  weight = random(30,52);
  weight = random(400,1500);

  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  
}

function draw() {
  background(0,0,0); 
  drawSprites();

  bullet.velocityX = speed;

  thickness = random(22,83);
  
    
 
 if(collide(bullet,wall))
 {
  bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

   if(damage>10)
   {
     wall.shapeColor = "red";
   }

   if(damage<10)
   {
     wall.shapeColor  = "green";
   }
  }
}

