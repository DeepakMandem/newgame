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
  background("black")
  
  player.x = World.mouseX;

  
  
  
  
  drawSprites();

  textSize(20);
  fill("white")
  text("GOAL OF THE GAME: defeat the aliens to get a high score",355,290);
  text("Game Rules: 1.move your mouse to move  2.press space to shoot  3.if the aliens cross the border, then you lose!",355,320);
  
 
 
}



