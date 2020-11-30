
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,150,30)
	mango3=new mango(1200,130,20)
	mango4=new mango(900,200,30)
	mango5=new mango(1250,200,30)
	mango6=new mango(1100,225,30)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone1=new Stone(230,410,30)
	slingshot=new SlingShot(stone1.body, {x:230,y:410})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  stone1.display()
  slingshot.display()
	
  groundObject.display();

  collsion(stone1,mango1)
  collsion(stone1,mango2)
  collsion(stone1,mango3)
  collsion(stone1,mango4)
  collsion(stone1,mango5)
  collsion(stone1,mango6)
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
	slingshot.fly(stone1.body)
}
function collsion(Lstone, Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false)
	}
}
function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stone1.body, {x:230, y:410})
		slingshot.attach(stone1.body)
	}
}