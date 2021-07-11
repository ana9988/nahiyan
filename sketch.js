var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,15,15);
}

function draw() 
{
  background("red");
drawSprites();

if(keyIsDown(LEFT_ARROw)){
  box.x = box.x - 4;
}

}




