const Engine = Matter.Engine
const World  = Matter.World
const Bodies = Matter.Bodies
var engine;
var world;

var PLAY = 1;
var END = 0;

var player;
var background,backgroundImg,background2,backgroundImg2;
var block,blockImage;

var gameState = PLAY;

function preload(){
    backgroundImg = loadImage("images/startingPoint.png");
    backgroundImg2 = loadImage("images/beach.png");
    blockImage = loadImage("images/block.png")
}

function setup(){
 createCanvas(1370,700);
engine = Engine.create()
world  = engine.world

 player = createSprite(600,350,20,20);
 //background = createSprite(1000,375);
}

function draw(){
    background(backgroundImg)
    Engine.update(engine);
   // ellipseMode(CENTER);

   // ellipse(player.position.x,player.position.y,20,20)

   if(gameState === 1){
       background(backgroundImg2);
    if(keyDown(LEFT_ARROW)){
        player.position.x = player.position.x - 10;
    }
    if(keyDown(RIGHT_ARROW)){
      player.position.x = player.position.x + 10;
  }
    if(keyDown("space")){
        player.velocityY =-10
    }
    player.velocityY = player.velocityY + 0.5
    spawnObstacle();
   }
  
  
  drawSprites();
}

function spawnObstacle(){
    if(frameCount%130 === 0 ){
        block = createSprite(700,800,20,20)
        block.addImage(blockImage)
    }
}