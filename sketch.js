const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constrain = Matter.Constraint;

var engine,world;
var ball,log;
var ch;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options = {
    
    restitution : 1.0,
    
   }
 
  ball  = Bodies.circle(200,220,40,ball_options);
  World.add(world,ball);

  log = new Stand(200,70,200,20);

  ch = new Chain(ball,log.body);

}

function draw(){
    background(0);
    Engine.update(engine);
   
    ch.display();
    
    log.display();

   text('press SPACE BAR and move your mouse and see what happens!',40,20);
   text('place the ball in any position you like and press ENTER',40,40);

    fill("pink");
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,80);

    if(keyCode == 32){
      ball.position.x = mouseX;
      ball.position.y = mouseY;
    }
  
}
