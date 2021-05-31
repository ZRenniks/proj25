
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperBall;	
var world;
var paperImg,canImg



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;
	
	
	groundObject=new ground(width/2,670,width,20);
	paperBall=new Paper(300,200,100)
	dustbinObj=new dustbin(1200,650);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

  groundObject.display();
  paperBall.display();
  dustbinObj.display();
  
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:500,y:1900});
	}
}
