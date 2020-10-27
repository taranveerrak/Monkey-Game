//Hungry monkey

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, survialTime;
var ground;


//GameStates
var PLAY = 1;
var END = 0;
var gameState = PLAY;

//Preload
function preload(){
  
  
  //Monkey
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  //Banana
  bananaImage = loadImage("banana.png");
  //Obstacle
  obstacleImage = loadImage("obstacle.png");
 
}


//Setup
function setup() {
  //Canvas
  createCanvas(400,400);
  
  //Groups
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  TimeGroup = createGroup();
  
  //Monkey
  monkey = createSprite(50, 250, 10, 10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
 //Ground
  ground = createSprite(70, 350, 800, 10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  
  //score
  score = 0;
  survialTime = 0;
  
}

//Draw
function draw() {
  
  //Background
  background (180);
  
   //displaying survialtime
  stroke("black");
    fill("black");
      textSize(20);
  
  text("Survial Time:"+  survialTime, 100, 50);
  
  //displaying score
  stroke("black");
    fill("red");
      textSize(20);
  text("Score:"+  score, 300, 100);
  
  monkey.collide(ground);
  
  if(gameState === PLAY){
      
    
        survialTime = Math.round(frameCount/frameRate());
     
    
  if (ground.x < 0){
        ground.x = ground.width/2;
    }
    
  if(keyDown("space")) {
        monkey.velocityY = -12;
    }    
    
    
   
      //Gravity
      monkey.velocityY = monkey.velocityY + 0.8;
  
  }
  
 
  
 obstacles(); 
 food();

  drawSprites();
}

//Banana
function food() {
  if (frameCount % 80 === 0) {
      banana = createSprite(400,350,40,10);
      banana.addImage(bananaImage);
      banana.y = Math.round(random(120,200));
      banana.scale = 0.1;

      banana.velocityX = -3;
      banana.lifetime = 200;
    
   
  }
}

//Obstacles
function obstacles() {
  if (frameCount % 200 === 0){
      obstacle = createSprite(250,325,10,10);
      obstacle.addImage(obstacleImage);
      obstacle.velocityX = -3;
      obstacle.lifetime = 200;
      obstacle.scale = 0.1 ;
  }

}


 
 


