var sand1,sand2,sand3,sand4,sand5,sand6,hammer,stone,plane,rubber,iron;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	sand1=new Sand(200,700,10);
	sand2=new Sand(220,700,10);
	sand3=new Sand(240,700,10);
	sand4=new Sand(260,700,10);
	sand5=new Sand(220,680,10);
	sand6=new Sand(240,680,10);

	hammer=new Hammer(300,500,100,30);

	stone=new Stone(500,500,40,40);

	plane=new Plane(400,790,800,20);

	rubber=new Rubber(200,600,50);

	iron=new Iron(600,650,60,60);


	Engine.run(engine);
  
}


function draw() {
 
  background("cyan");

  Engine.update(engine);

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();

  stone.display();
  plane.display();
  rubber.display();
  iron.display();
  
  hammer.display();


  
 
}



