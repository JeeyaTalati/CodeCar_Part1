var backgroundImage,background1;
var startButton,startButtonImage;
var car,carImage;
var road,roadImage;
var reachHereSign,reachHereSignImage;
var playButton,playButtonImage;
var gameState = 0;
var route = [];
var position = [];
var positionX = 0;
var positionY = 0;
var barricade,barricadeImage;
function preload (){
  backgroundImage = loadImage ("background-1800x900.jpg");
startButtonImage = loadImage ("startButton.png") ;
roadImage = loadImage("Road-200x200.png");
carImage = loadImage("car-150x100.png");
reachHereSignImage = loadImage("ReachHereSign.png");
barricadeImage = loadImage("barricade1-120x120.png");
playButtonImage = loadImage("playButton (2)-150x150.png");
}
function setup() {
 createCanvas(1000,1000);
   background1 = createSprite(400,200,1000, 900);
   background1.addImage("backgroundImages",backgroundImage); 
   startButton = createSprite (400,300,100,100);
   startButton.addImage("startButton",startButtonImage);
   
road1 = createSprite(400,200,10,10);
road1.addImage("road",roadImage);
road2 = createSprite(400,200,10,10);
road2.addImage("road",roadImage);
road3 = createSprite(400,200,10,10);
road3.addImage("road",roadImage);
road4 = createSprite(400,200,10,10);
road4.addImage("road",roadImage);
road5 = createSprite(400,200,10,10);
road5.addImage("road",roadImage);
road6 = createSprite(400,200,10,10);
road6.addImage("road",roadImage);
road7 = createSprite(400,200,10,10);
road7.addImage("road",roadImage);
road8 = createSprite(400,200,10,10);
road8.addImage("road",roadImage);
road9 = createSprite(400,200,10,10);
road9.addImage("road",roadImage);
road10 = createSprite(400,200,10,10);
road10.addImage("road",roadImage);
road11 = createSprite(400,200,10,10);
road11.addImage("road",roadImage);
barricade = createSprite(1000,100,10,10);
barricade.addImage("barricade",barricadeImage);
barricade2 = createSprite(1000,100,10,10);
barricade2.addImage("barricade",barricadeImage);
reachHereSign=createSprite(100,200,10,10);
reachHereSign.addImage("sign",reachHereSignImage);
car = createSprite(400,200,10,10);
   car.addImage("car",carImage);
   playButton=createSprite(100,100,10,10);
   playButton.addImage("play",playButtonImage);
}

function draw() {

  background("white"); 
  
    
      
 if (gameState === 0) {
   startButtonImage.visible = true ;
   startButton.visible = true;
  car.visible = false;
  road1.visible = false;
  road2.visible = false;
  road3.visible = false;
  road4.visible = false;
  road5.visible = false;
  road6.visible = false;
  road7.visible = false;
  road8.visible = false;
  road9.visible=false;
  road10.visible=false;
  road11.visible=false;
  barricade.visible=false;
  barricade2.visible=false;
  reachHereSign.visible=false;
  playButton.visible=false;
if(mousePressedOver(startButton)){
  gameState=1;
}

} 

    if (gameState===1){
      if (keyDown(RIGHT_ARROW)){
        positionX = positionX + 200;
        positionY = positionY+0;
        position = [positionX,positionY];
        route.push(position);
        console.log(route) ;
        }
        if (keyDown(LEFT_ARROW)){
          positionX = positionX - 200;
          positionY = positionY+0;
          position = [positionX,positionY];
          route.push(position);
          console.log(route) ;
          } 
      
      startButton.visible = false;
      road1.visible=true;
      road2.visible=true;
      road3.visible=true;
      road4.visible=true;
      road5.visible = true;
      road6.visible = true;
      road7.visible = true;
      road8.visible = true;
      road9.visible=false;
      road9.visible=false;
  road10.visible=false;
  road11.visible=false;
      barricade.visible=false;
      playButton.visible=true;
      car.visible=true;
      car.x=100;
      car.y = 550;
      road1.x=100;
      road1.y=550;
      road2.x=300;
      road2.y=550;
      road3.x=500;
      road3.y=550;
      road4.x=500;
      road4.y=350;
      road5.x=500;
      road5.y=150;
      road6.x = 700;
      road6.y=150;
      road7.x=900;
      road7.y=150;
road8.x=900;
road8.y=350;
playButton.x=200;
playButton.y=200;
//if (car.x===900 && car.y===350){
 // gameState=2;
//}
if (mousePressedOver(playButton)){
  gameState="move"
}
if (gameState==="move"){
 for  (i=0; i<route.length; i++) {
    car.x = car.x + route[i][0];
  car.y = car.y + route[i ][1];
  
 }   

}
      
      
    }
    
    if (gameState === 2){
      startButton.visible = false;
      road1.visible=true;
      road2.visible=true;
      road3.visible=true;
      road4.visible=true;
      road5.visible = true;
      road6.visible = true;
      road7.visible = true;
      road8.visible = true;
      road9.visible=true;
      road10.visible=false;
      road11.visible=false;
      car.visible = true;
      road1.x=100;
      road1.y=110;
      road2.x=300;
      road2.y=110;
road3.x=300;
road3.y=310;
road4.x=300;
road4.y=510;
road5.x=500;
road5.y=510;
road6.x=700;
road6.y=510;
road7.x=700;
road7.y=310;
road8.x=700;
road8.y=110;
road9.x=900;
road9.y=110;
barricade.visible=false;
playButton.visible=true;
      car.x=100;
      car.y=110;
playButton.x=100;
playButton.y=300;
    } 
    if(gameState===3) {
      startButton.visible = false;
      road1.visible=true;
      road2.visible=true;
     road3.visible=true;
      road4.visible=true;
     road5.visible = true;
      road6.visible = true;
      road7.visible = true;
      road8.visible = true;
      road9.visible=true;
      road10.visible=false;
      road11.visible=false;
     barricade.visible=true;
     barricade2.visible=false;
     playButton.visible=true;
      car.visible = true; 
      road1.x=110;
      road1.y=120;
      road2.x=310;
      road2.y=120;
      road3.x=510;
      road3.y=120;
      road4.x=710;
      road4.y=120;
      road5.x=310;
      road5.y=320;
      road6.x=310;
      road6.y=520;
      road7.x=510;
      road7.y=520;
      road8.x=710;
      road8.y=520;
      road9.x=710;
      road9.y=320;
      car.x=110;
      car.y=120;
barricade.x=510;
barricade.y=120;
playButton.x=100;
playButton.y=300;
    }
    if(gameState===4){
      startButton.visible = false;
      road1.visible=true;
      road2.visible=true;
     road3.visible=true;
      road4.visible=true;
     road5.visible = true;
      road6.visible = true;
      road7.visible = true;
      road8.visible = true;
      road9.visible=true;
      road10.visible=true;
      road11.visible=true;
     barricade.visible=true;
     barricade2.visible=true;
     playButton.visible=true;
      car.visible = true;
      road1.x=110;
      road1.y=120;
      road2.x=110;
      road2.y=320;
      road3.x=110;
      road3.y=520;
      road4.x=310;
      road4.y=520;
      road5.x=510;
      road5.y=520;
      road6.x=710;
      road6.y=520;
      road7.x=710;
      road7.y=320;
      road8.x=710;
      road8.y=120;
      road9.x=510;
      road9.y=120;
      road10.x=310;
      road10.y=120;
      road11.x=310;
      road11.y=320;
      barricade.x=110;
      barricade.y=120;
      barricade2.x=310;
      barricade2.y=320;
      car.x=110;
      car.y=320;
      playButton.x=900;
    }
    if (gameState===5){
      startButton.visible = false;
      road1.visible=true;
      //road2.visible=true;
     //road3.visible=true;
      //road4.visible=true;
    // road5.visible = true;
      //road6.visible = true;
     // road7.visible = true;
      //road8.visible = true;
     // road9.visible=true;
     // road10.visible=true;
     // road11.visible=true;
     //barricade.visible=true;
     //barricade2.visible=true;
      car.visible = true; 
    }
  drawSprites();
}