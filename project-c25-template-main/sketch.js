
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paper1=new Paper(600,660,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 

  groundObject.display();
  dustbinObj.display();
  paper1.Display();

}

function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:500,y:-2000})
}

}

