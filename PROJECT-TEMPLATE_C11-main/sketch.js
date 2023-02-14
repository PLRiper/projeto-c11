var sea, ship;
var seaImg, shipImg;


function preload(){
    seaImg = loadImage("sea.png");
    shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

   
}

function setup(){
  createCanvas(400,400);
  background("blue");

  //criando o mar
  sea.createSprite(400,200);
  sea.addImage(seaImg1);
  sea.velocityX=-5;
  sea.scale=0.3;


  //criando e animando o barco
  ship.createSprite(130,200,30,30);
  ship.addAnimation("movingShip", ship1Img);
  ship.scale=0.25;

}

function draw() {
  background(0);
  sea.velocityX=-3;

    drawSprites();

 
}
