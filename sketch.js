
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,ground,tree,boy;
var stone,sling;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1000,300,20);
	mango2 = new Mango(1090,310,20);
	mango3 = new Mango(1100,290,20);
	mango4 = new Mango(970,290,20);
	mango5 = new Mango(1130,320,20);
	mango6 = new Mango(910,310,20);
	mango7 = new Mango(900,330,20);
	mango8 = new Mango(1050,340,20);
	mango9 = new Mango(1070,260,20);
	mango10 = new Mango(1030,310,20);
	
    stone = new Stone(230,475,20,20);
    
    stone.debug = true;
	
	boy = new Boy();

	sling = new Sling(stone.body,{x:230, y:475});

	tree = new Tree();

	ground=new Ground(600,600,1200,20)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  tree.display();

  boy.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);


  ground.display();

  stone.display();

  sling.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(stone.body);
        Matter.Body.setPosition(stone.body,{x:200, y:400});
        Matter.Body.setPosition(sling.body,{x:200, y:400});
    }
}

function detectCollision(lstone,lmango){

    var distance = int(dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y));
    if(distance<=40){
        console.log(lmango.width);
    }
    
	if(distance<=lmango.width+lstone.width){
		Matter.Body.setStatic(lmango.body,false);
    }


}