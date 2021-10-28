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
	ball = Bodies.circle(width/2 + 60, 50, 30, ball_options);
	World.add(myworld, ball);

	Engine.run(myengine);

	groundObj = new Ground(width/2, height-50, width, 10);

	rightSide = new Ground(width-120, 746-20, 12, 80);
	leftside = new Ground(width-280, 746-20, 12, 80);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(myengine);

  ellipse(ball.position.x, ball.position.y, 30, 30);
  
  groundObj.display();

  rightSide.display();
  leftside.display();

  //keyPressed();

  drawSprites();
}

function keyPressed()
{
	if(keyCode == 32)
	{
		Body.applyForce(ball, {x:0,y:0}, {x:120,y:-100});
	}
}