const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,ground;
var pig1, log1;
var box3, box4, pig2, log2;
var box5, log3, log4, bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,50,50);
    box2 = new Box(930,300,50,50);
    ground = new Ground(600,380,1200,20);
    pig1= new Pig(800,350);
    log1 = new Log(800,250,300,PI/2);

    box3 = new Box(700,200,50,50);
    box4 = new Box(930,200,50,50);
    pig2 = new Pig(800,250);
    log2 = new Log(800,190,300,PI/2);

    box5 = new Box(810,150,60,50);
    log3 = new Log(760,100,140,PI/7);
    log4 = new Log(860,100,140, -PI/7);

    bird = new Bird(200,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display();
   log3.display();
   log4.display();
   bird.display();
}