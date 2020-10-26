const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  connection;
var mango

function preload()
{
	boyImage = loadImage("images/boy.png")
	treeImage = loadImage("images/tree.png")
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,690,1200,20);
	stone = new Stone(150,570,20)

//********************** make this an array instead */
		mango = new Mango(random(400,800),random(230,400),random(10,30));

	
	connection = new Connection(stone.body,{x:150,y:570});

	Engine.run(engine);
  
}


function draw() {
  
  background(200,200,255);
  fill("white");
  textSize(30);
  text("press space to try again",50,50);
 //display tree,boy 
 push();
 imageMode(CENTER);
 image(boyImage,200,630,150,250);
 image(treeImage,600,400,500,600);
 pop();

 //display all mangoes ************* of the array
 mango.display();

  ground.display();
  stone.display();
  
 knockMango();
  drawSprites();
 
}


function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	//connection.launch();
	setTimeout(()=>{connection.launch();},100);
}

function keyPressed(){
	if(keyCode==32){
		Body.setPosition(stone.body,{x:150,y:570})
		connection.attach(stone.body);

	}

}

function knockMango(){


		if(collides(stone,mango)){
			// make the mango fall by making it non static
		}
	
}

function collides(objA,objB){

	if( Math.abs(objA.body.position.x-objB.body.position.x)<=objA.radius+objB.radius &&  Math.abs(objA.body.position.y-objB.body.position.y)<=objA.radius+objB.radius){
		return true;
	}
	else{
		return false;
	}
}