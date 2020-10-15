
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var tree;
var boy, boyImg;
var ground;

function preload()
{
	boyImg = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(windowWidth, 695);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200, 600, 20, 20);
	boy.addImage(boyImg);
    boy.scale = 0.1;

	ground = new Ground(width/2, 700, width, 60);
	World.add(world, ground);

	tree = new Tree(890, 250, 450, 450);
	World.add(world, tree);

	stone = new Stone(125, 525, 40);
	World.add(world, stone);

	mango1 = new Mango(1100, 365, 40);
	mango2 = new Mango(970, 400, 40);
	mango3 = new Mango(1240, 390, 40);
	mango4 = new Mango(1170, 330, 40);
	mango5 = new Mango(1050, 340, 40);
	mango6 = new Mango(1100, 300, 40);
	mango7 = new Mango(1040, 400, 40);
	mango8 = new Mango(1160, 390, 40);

	constraint = new Sling(stone.body, {x: 125, y: 525});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  ground.display();

  tree.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  constraint.display();
}


function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}


function mouseReleased() {
    constraint.fly();
}

function keyPressed() {
	if (keyCode === 32) 
	{
		Matter.Body.setPosition(stone.body, {x: 125, y: 525});
		constraint.attach(stone.body);
	}
}