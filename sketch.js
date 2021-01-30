var player
var shipimg;

function preload()
{
	
}

function setup() {
	createCanvas(1420, 680);
	player = createSprite(710,580,50,50);

	
	


	

	
  
}


function draw() {
  background("blue")
  player.x = World.mouseX;
  
  drawSprites();
 
}



