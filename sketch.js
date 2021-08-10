var runner, runnerImg
var path, pathImg, invisibleBoundaryR, invisibleBoundaryL


function preload(){
  //pre-load images
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png")
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200, 315);
  runner.addAnimation("running", runnerImg);
  runner.scale = 0.075
  


  invisibleBoundaryL = createSprite(20, 200, 50, 400)
  invisibleBoundaryR = createSprite(380, 200, 50, 400)
  invisibleBoundaryL.visible = false
  invisibleBoundaryR.visible = false
}

function draw() {
  background(0);
  if (path.y > 350){
    path.y = height/2;
  }
  runner.collide(invisibleBoundaryL);
  runner.collide(invisibleBoundaryR);

  runner.x = World.mouseX;

  drawSprites();
}

