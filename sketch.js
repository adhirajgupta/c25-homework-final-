var rain
var rand , ran
function setup() {
  createCanvas(800,800);
}
  function draw() {
    //loop();
    for(var i=0;i<1500;i=1+rand){
      ran = random(1,800)
  rand = random(1,10)
  rain = createSprite(10,10,5,10);
  rain.position.x = ran;
  rain.position.y = ran;
  rain.height = rand;
  rain.shapeColor="green"
  rain.velocityY = 10
    }


  background(0);  
  drawSprites();
}