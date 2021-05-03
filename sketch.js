const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;



function setup() {
  createCanvas(800,800);
engine=Engine.create();
world=engine.world;
var options={
  isStatic:true
}
ground=Bodies.rectangle(200,400,500,40,options);
World.add(world,ground);
var ball_options={
  restitution:3.0
}
ball=Bodies.circle(100,200,20,ball_options);
World.add(world,ball);
}
function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,500,40);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}