var JAXON, JAXONImage;
var path, pathImg;
var wall, wall2;

function preload(){
  //pre-load images
  JAXONImage = loadImage("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,20,20);
  path.addImage("path", pathImg);

  JAXON = createSprite(200,300,20,20);
  JAXON.addImage(JAXONImage);
  JAXON.scale = 0.1;

  wall1 = createSprite(370,200,20,400);
  wall1.visible = false;

  wall2 = createSprite(30,200,20,400);
  wall2.visible = false;
}

function draw() {
  background(0);
  JAXON.collide(wall1);
  JAXON.collide(wall2);
  path.velocityY = 4;
  if(path.y > 400){
    path.y = height/2;
  }
  if(keyDown("left")){
    JAXON.x = JAXON.x - 3;
  }
  if(keyDown("right")){
    JAXON.x = JAXON.x + 3;
  }
  drawSprites();
}
