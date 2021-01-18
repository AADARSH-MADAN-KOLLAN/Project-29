const {Engine, World, Bodies, Body, Constraint} = Matter;

var pentagon;
var ground1,ground2,ground3;
var b1,b2,b3,b4,b5, b6,b7,b8,b9,b10, b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;
var bgColor = "black";
var score = 0;

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(390+60,310,270,12);
  ground2 = new Ground(800,225,210,12);
  ground3 = new Ground(500,390,1000,20);

  b1 = new Box(300+60,275,30,40);
  b2 = new Box(330+60,275,30,40);
  b3 = new Box(360+60,275,30,40);
  b4 = new Box(390+60,275,30,40);
  b5 = new Box(420+60,275,30,40);
  b6 = new Box(450+60,275,30,40);
  b7 = new Box(480+60,275,30,40);
  b8 = new Box1(330+60,235,30,40);
  b9 = new Box1(360+60,235,30,40);
  b10 = new Box1(390+60,235,30,40);
  b11 = new Box1(420+60,235,30,40);
  b12 = new Box1(450+60,235,30,40);
  b13 = new Box2(360+60,195,30,40);
  b14 = new Box2(390+60,195,30,40);
  b15 = new Box2(420+60,195,30,40);
  b16 = new Box3(390+60,155,30,40);
  b17 = new Box(800-60,205,30,40);
  b18 = new Box(800-30,205,30,40);
  b19 = new Box(800,205,30,40);
  b20 = new Box(800+30,205,30,40);
  b21 = new Box(800+60,205,30,40);
  b22 = new Box2(800-30,205-40,30,40);
  b23 = new Box2(800,205-40,30,40);
  b24 = new Box2(800+30,205-40,30,40);
  b25 = new Box1(800,205-80,30,40);

  pentagon = new Pentagon(200,200,20);

  sling = new SlingShot(pentagon.body,{x:180,y:190})
}

function draw() {

  getBackgroundColor();

  background(bgColor); 

  Engine.update(engine);
  
  ground1.display();
  ground2.display();
  ground3.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  b18.score();
  b19.score();
  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score();

  sling.display();

  pentagon.display();

  textFont("timesnewroman");
  strokeWeight(0);
  fill("white");
  textSize(22);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the boxes",150,30);

  textFont("timesnewroman");
  textSize(25);
  noStroke();
  fill("white");
  text("Score: " + score, width-150, height-350);
}

function mouseDragged(){
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   sling.fly();
}

function keyPressed(){
  if(keyCode===32)  {
    Matter.Body.setPosition(pentagon.body,{x:100,y:200});
    sling.attach(pentagon.body);
  }
}

async function getBackgroundColor() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=19){
      bgColor = "blue";
  } else {
      bgColor = "balck"
  }
}