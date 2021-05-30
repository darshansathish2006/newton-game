const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rope,ball1,ball2,ball3,ball4,ball5;
var ground;
var rope2,rope3,rope4,rope5;


function setup(){
  var canvas= createCanvas(1100,1000);
  engine = Engine.create();
  world = engine.world;

  ground=createSprite(2500,100,5000,100);

  ball1 = new ball(200,700,200,200);
  rope = new Rope(ball1.body, { x: 100, y: 50 });

  ball2 = new ball(400,700,200,200);
  rope2 = new Rope(ball2.body, { x: 300, y: 50 });
  
  ball3 = new ball(600,700,200,200);
  rope3 = new Rope(ball3.body, { x: 500, y: 50 });
  
  ball4 = new ball(800,700,200,200);
  rope4 = new Rope(ball4.body, { x: 700, y: 50 });
  
  ball5 = new ball(1000,700,200,200);
  rope5 = new Rope(ball5.body, { x: 900, y: 50 });
  
}

function draw(){
background("lightblue");
Engine.update(engine);

ground.display();
rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();

}