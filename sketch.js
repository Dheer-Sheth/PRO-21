var thickness, speed, weight, bullet, wall, damage;


function setup() {
  createCanvas(1600, 400);
  thickness = random(22, 83);
  bullet = createSprite(100, 200, 30, 15);
  bullet.shapeColor = color(255, 255, 255);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  speed= random(223,321);
  weight= random(30,52);

  bullet.velocityX= speed;
 
}




function draw() {
background(0); 

if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage= (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor="red";
  }
  if(damage<10){
    wall.shapeColor= "green"
  }
}


  drawSprites();
}

function hascollided(lbullet,lwall){
  bulletRightEdge= lbullet.x+lbullet.width;
  wallLeftEdge= lwall.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true
  }
  return false;


}