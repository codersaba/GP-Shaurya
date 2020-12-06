var car, carImage, mum, tok, lon;
var bg;
var PLAY = 1;
var END = 0;
var CHOOSE = 3;
var CITY2 = 2;
var gameState = CHOOSE;
var CITY3 = 4;




function preload(){
  carImage = loadImage("car.png");
  mum = loadImage("mumbai.jpg");
  lon = loadImage("london.jpg");
  tok = loadImage("tokyo.jpg");
  car1 = loadImage("car.png");
  car2 = loadImage("car2.png");
  car3 = loadImage("car3.png");
  car4 = loadImage("car4.png");
  prop1 = loadImage("prop1.png");
  prop2 = loadImage("prop2.png");
  prop3 = loadImage("prop3.png");
  prop4 = loadImage("prop4.png");
  prop5 = loadImage("prop5.png");
  prop6 = loadImage("prop6.png");
  plane1 = loadImage("plane1.png")
  plane2 = loadImage("plane2.png")
  plane3 = loadImage("plane3.png")




}

function setup() {
 createCanvas(1400,400);
 bg = createSprite(700,200,20,20);
bg.shapeColor="yellow";
 car = createSprite(60,300,60,30);
 car1 = createSprite(60,300,60,30);

 car.addImage(carImage);
 car1.addImage(carImage);
 car.scale = 0.4;
 car1.scale = 0.4;
 car1. visible=false;
 //bg.velocityX = -2;
 //bg.x=bg.width/2;

}

function draw() {
 
background("grey");

if(gameState===PLAY){
  bg.addImage(mum,0,0,10,10);
  if(keyDown(RIGHT_ARROW)){
    car.x = car.x+2; 
  }
 spawnProp();
 planes();
 //if(bg.x<0){
   //bg.x=bg.width/2;
 if(car.x>=1400){
   gameState = CITY2;
 }
}

if(gameState===CHOOSE){
  background("yellow");
  fill("red");
  textSize(24);
  text("Level Up to unlock Map 2 and 3",50,100);
  text("Choose Car : Press H for Hyundai i20, Press T for Tesla Model 3, Press U for Lamborghini Urus, Press N for Nissan GT-R",20,150);
 
 if(keyDown("h")){
   car.addImage(car1);
   gameState=PLAY;
 }
 if(keyDown("t")){
  car.addImage(car2);
  gameState=PLAY;
 }
 if(keyDown("u")){
  car.addImage(car3);
  gameState=PLAY;
 }
 if(keyDown("n")){
  car.addImage(car4);
  gameState=PLAY;
 }

}
if(gameState==CITY2){
  bg.addImage(tok);
car1.visible=true;
car.visible=false;
  if(keyDown(RIGHT_ARROW)){
    car1.x = car1.x+2; 
  }
 spawnProp();
 planes();
 if(car1.x>=1400){
   gameState = CITY3;
 }
}

    drawSprites();
}
function spawnProp(){
  if(frameCount%230===0){
    var prop = createSprite(000,360,30,20);
    prop.velocityX = 3;


    var rand = Math.round(random(1,6));
    switch(rand){
      case 1 : prop.addImage(prop1);
      break;
      case 2 : prop.addImage(prop2);
      prop.scale=0.75;
      break;
      case 3 : prop.addImage(prop3);
      break;
      case 4 : prop.addImage(prop4);
      prop.scale=0.75;
      break;
      case 5 : prop.addImage(prop5);
      prop.scale=0.8;
      break;
      case 6 : prop.addImage(prop6);
      prop.scale=0.8;
      break;
  
    }

  }
}
function planes(){
  if(frameCount%300===0){
    var plane = createSprite(1400,30,30,10);
    plane.velocityX=-7;
    plane.addImage(plane3);
    plane.scale=0.1;
  }
}
