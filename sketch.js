
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

  bob1=new Bob(300,350,50);
  bob2=new Bob(350,350,50);
  bob3=new Bob(400,350,50);
  bob4=new Bob(450,350,50);
  bob5=new Bob(500,350,50);
  ground1 = new Ground(400,100,300,40);
  rope1= new rope(bob1.body,ground1.body,-50*2,0);
  rope2= new rope(bob2.body,ground1.body,-25*2,0);
  rope3= new rope(bob3.body,ground1.body,-0*2,0);
  rope4= new rope(bob4.body,ground1.body,25*2,0);
  rope5= new rope(bob5.body,ground1.body,50*2,0);
	Engine.run(engine);
  
}


function draw() {
  background("yellow");
  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  if (keyDown("space")){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:+100});
  }
  drawSprites ();
}
