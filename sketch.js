var movingRect,fixedRect;
var gameObject1

function setup() {
  createCanvas(windowWidth,windowHeight);
  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = +5;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;
  gameObject1 = createSprite(100,250,50,50);
  gameObject1.shapeColor = "green";
  gameObject1.velocityY = +5;

  }

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(gameObject1,movingRect)){
    gameObject1.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  }

  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  bounceOff(gameObject1,movingRect);
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x < object1.width/2 + object2.width/2 &&
    object2.x-object1.x < object1.width/2 + object2.width/2 &&
    object1.y-object2.y < object1.height/2 + object2.height/2 &&
    object2.y-object1.y < object1.height/2 + object2.height/2){
   return true;
  }

  else{
    return false;
  }
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}