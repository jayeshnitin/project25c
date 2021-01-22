
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var box, box1, box2;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new Box(150, 150);

	ball = new Ball(100, 400);

	//ball = new Ball(100, 400, 50);

	ground = new Ground (600, 550, 2000, 20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //ball.bounceOff(box1);

  
  
  box.display();
  ball.display();
  ground.display();

  

  drawSprites();
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:125, y:-125});
	}
	if(keyCode === 	DOWN_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:1, y:4});
	}

}






