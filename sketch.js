
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


 var stand;
 var block1,block2,block3,block4,block5,block6,block7,block8;
 var stone;
 var chain;
 var score = 0;

  

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	ground = new Ground(600,height,1200,20);
	stand = new Ground(700,300,200,10);

	block1 = new Block(750,200,30,30);
	block2 = new Block(660,200,30,30);
	block3 = new Block(670,200,30,30);
	block4 = new Block(700,200,30,30);
	block5 = new Block(730,150,30,30);
	block6 = new Block(680,150,30,30);
	block7 = new Block(690,150,30,30);
	block8 = new Block(690,100,30,30);

	stone = new Stone(100,200,20);

   chain = new Chain(stone.body,{x:300,y:250});





   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  text("score"+score,200,100)
  
  ground.display();
	
  stand.display();
  
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();

   stone.display();

   chain.display();
   
   block1.score();
   block2.score();
   block3.score();
   block4.score();
   block5.score();
   block6.score();
   block7.score();
   block8.score();



}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
   
   
   
	 }
   
	 function mouseReleased(){
	
		chain.fly()
	 
   
   
   
	 }
   
	 function keyPressed(){

		if(keyCode===32)
	   
		 chain.attached(stone.body)
	 } 
	   
	   