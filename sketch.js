const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var chaozito;
var umFundo;
var laTorre, unaImage;

function preload() {
 umFundo = loadImage("./assets/background.gif");
 unaImage = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  chaozito = Bodies.rectangle(0, height-1, width*2, 1, options);
  World.add(world, chaozito);

  laTorre = Bodies.rectangle(160,350,160,310, options);
  World.add(world, laTorre);
 
}

function draw() {
  background(189);
  image(umFundo, 0, 0, 1200, 600);
 
  Engine.update(engine);
  
  rect(chaozito.position.x, chaozito.position.y, width*2, 1);

  push();
  imageMode(CENTER);
  image(unaImage, laTorre.position.x, laTorre.position.y, 160, 310);
  pop();
   
}
