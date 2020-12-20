
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var slab;
var chain, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(300,300,20);
bob2=new Bob(350,300,20);
bob3=new Bob(400,300,20);
bob4=new Bob(450,300,20);
bob5=new Bob(500,300,20);

slab=new Ground(400,100,500,20);

chain=new Chain(bob1.body,slab.body,100*2,10);
World.add(world,chain);
chain2=new Chain(bob2.body,slab.body,50,10);
World.add(world,chain2);
chain3=new Chain(bob3.body,slab.body,0,0);
World.add(world,chain3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

slab.display();
chain.display();
chain2.display();
chain3.display();
  drawSprites();
 
}



//function keyPressed(){

//	if (keyCode===32){
//	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0});


//	}
//}



