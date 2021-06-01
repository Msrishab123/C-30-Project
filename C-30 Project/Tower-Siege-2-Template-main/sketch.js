const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,240,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(315,235,30,40);
  block9 = new Block(345,235,30,40);
  block10 = new Block(375,235,30,40);
  block11 = new Block(405,235,30,40);
  block12 = new Block(435,235,30,40);
  block13 = new Block(465,235,30,40)
  //level three
  block14 = new Block(330,195,30,40)
  block15 = new Block(360,195,30,40);
  block16 = new Block(390,195,30,40);
  block17 = new Block(420,195,30,40);
  block18 = new Block(450,195,30,40);
  //level four
  block19 = new Block(345,155,30,40)
  block20 = new Block(375,155,30,40);
  block21 = new Block(405,155,30,40);
  block22 = new Block(435,155,30,40);
  //level five
  block23 = new Block(360,115,30,40);
  block24 = new Block(390,115,30,40);
  block25 = new Block(420,115,30,40)
  //level six
  block26 = new Block(375,75,30,40);
  block27 = new Block(405,75,30,40);
  //top
  block28 = new Block(390,35,30,40);
  //secondlevel one
  block29 = new Block(630,225,30,40);
  block30 = new Block(660,225,30,40);
  block31 = new Block(690,225,30,40);
  block32 = new Block(720,225,30,40);
  block33 = new Block(750,225,30,40);
  //scondlevel two
  block34 = new Block(645,175,30,40);
  block35 = new Block(675,175,30,40);
  block36 = new Block(705,175,30,40);
  block37 = new Block(735,175,30,40);
  //secondlevel three
  block38 = new Block(660,125,30,40);
  block39 = new Block(690,125,30,40);
  block40 = new Block(720,125,30,40);
  //secondlevel four
  block41 = new Block(675,75,30,40);
  block42 = new Block(705,75,30,40);
  //secondlevel top
  block43 = new Block(690,25,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  SlingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("silver");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  fill("blue");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("green");
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill("brown");
  block23.display();
  block24.display();
  block25.display();
  fill("red");
  block26.display();
  block27.display();
  fill("yellow");
  block28.display();
  fill("blue");
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  fill("red");
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  fill("green");
  block38.display();
  block39.display();
  block40.display();
  fill("yellow");
  block41.display();
  block42.display();
  fill("pink")
  block43.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  SlingShot.display();
  
}
function keyPressed(){
if(keyCode === 32){
  SlingShot.attach(this.polygon);
}
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  SlingShot.fly();
}
function keyPressed(){
//write code for extra chance of the player
}
