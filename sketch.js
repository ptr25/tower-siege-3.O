const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1000,450);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(690,185,100,10);
    ground2 = new Ground(505,280,100,10);
    ground3 = new Ground(890,100,100,10);
    bubble1 = new Bubble(695,180,25,25);
    bubble2 = new Bubble(690,180,25,25);
    bubble3 = new Bubble(685,180,25,25);
    bubble4 = new Bubble(693,175,25,25);
    bubble5 = new Bubble(687,175,25,25);
    bubble6 = new Bubble(690,170,25,25);
    bubble7 = new Bubble(510,275,25,25);
    bubble8 = new Bubble(505,275,25,25);
    bubble9 = new Bubble(500,275,25,25);
    bubble10 = new Bubble(507,270,25,25);
    bubble11 = new Bubble(503,270,25,25);
    bubble12 = new Bubble(505,265,25,25);
    bubble13 = new Bubble(890,95,25,25);
    bubble14 = new Bubble(895,95,25,25);
    bubble15 = new Bubble(885,95,25,25);
    bubble16 = new Bubble(893,90,25,25);
    bubble17 = new Bubble(888,90,25,25);
    bubble18 = new Bubble(890,85,25,25);
    polygon = new Polygon(180,170,320,200);
    sling = new Sling(polygon.body,{x:180,y:170});
}
function draw(){
  background(backgroundImg);
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
  bubble1.display();
  bubble2.display();
  bubble3.display();
  bubble4.display();
  bubble5.display();
  bubble6.display();
  bubble7.display();
  bubble8.display();
  bubble9.display();
  bubble10.display();
  bubble11.display();
  bubble12.display();
  bubble13.display();
  bubble14.display();
  bubble15.display();
  bubble16.display();
  bubble17.display();
  bubble18.display();
  polygon.display();
  sling.display();
  textSize(40);
  textFont("phosphate");
  fill(0);
  text("DRAG THE MOUSE TO PUSH OFF THE BALLS",175,65);
}
function mouseDragged(){
  if(gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}
function mouseReleased(){
  sling.fly();
  gameState = "launched";
}