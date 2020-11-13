var fixedRect,movingRect;

var gameobject1,gameobject2,gameobject3,gameobject4;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "cyan";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "cyan";
  movingRect.debug = true;

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "lightblue";

  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor = "lime";

  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor = "yellow";

  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor = "red";

}

function draw() {
  background(0);

if(isTouching(movingRect,gameobject1)){

  fixedRect.shapeColor = "pink";
  movingRect.shapeColor = "pink";

}

else{

  movingRect.shapeColor = "cyan";
  fixedRect.shapeColor = "cyan";


}

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x-fixedRect.x);
 
  drawSprites();
}

