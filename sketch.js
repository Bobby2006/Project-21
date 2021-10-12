const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var myengine, myworld;

var groundObj;

var leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	var ball_options =
	{
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(50, 50, 5, ball_options);
	World.add(myworld, ball);

	Engine.run(myengine);

	groundObj = new Ground(width/2, height-50, width, 10);

	rightSide = new Ground(width-120, groundObj-20, 5, 120);
	leftside = new Ground(rightSide-80, groundObj-20, 5, 120);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(myengine);
  
  groundObj.display();

  rightSide.display();
  leftside.display();

  drawSprites();

  //keyPressed();
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		Body.applyForce(ball, {x:-6,y:0}, {x:0,y:0});
	}
}