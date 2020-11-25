var fixedRect, movingRect;
var jet1,jet2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  jet1 = createSprite(100,100,50,50);
  jet1.shapeColor = "blue";

  jet2 = createSprite(700,100,50,50);
  jet2.shapeColor = "red";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  jet1.velocityX = +5;
  jet2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
bounceOff(fixedRect,movingRect);
bounceOff(jet1,jet2);

  drawSprites();
}
