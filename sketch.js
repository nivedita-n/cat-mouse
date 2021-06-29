var garden
var cat
var mouse


function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    
    catImage4 = loadAnimation("images/cat4.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage3 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,600,20,20);
    cat.addAnimation("catImage1", catImage1);
    cat.scale = 0.15;
    mouse = createSprite(100,600,10,10);
    mouse.addAnimation("mouseImage1", mouseImage1);
    mouse.scale = 0.15;

}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x < mouse.x){
      //cat.isTouching(mouse)
      // cat.x-mouse.x < cat.width+mouse.width
     cat.velocityX=0;
     cat.addAnimation("catstanding", catImage4);
     cat.changeAnimation("catstanding");

     mouse.addAnimation("mouseStanding",mouseImage4);
     mouse.changeAnimation("mouseStanding");
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -3;
      cat.addAnimation("catrunning",catImage2);
      cat.changeAnimation("catrunning");


      mouse.addAnimation("mouseteasing",mouseImage3 );
      mouse.frameDelay = 200;
      mouse.changeAnimation("mouseteasing");
  }

}
