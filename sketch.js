const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var stand;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("bj.jpg");
}

function setup(){
    var canvas = createCanvas(1365,621);
    engine = Engine.create();
    world = engine.world;
    stand1 = new Stand(width/2,60,70,20);
    stand2 = new Stand(width/2-70,60,70,20);
    stand3 = new Stand(width/2-140,60,70,20);
    stand4 = new Stand(width/2+70,60,70,20);
    stand5 = new Stand(width/2+140,60,70,20);
    stand6 = new Stand(width/2-210,60,70,20);
    stand7 = new Stand(width/2+210,60,70,20);
    ball1 = new Ball(width/2,450);
    ball2 = new Ball(width/2-70,450);
    ball3 = new Ball(width/2-140,450);
    ball4 = new Ball(width/2+70,450);
    ball5 = new Ball(width/2+140,450);
    slingShot1 = new SlingShot(ball1.body,stand1.body);
    slingShot2 = new SlingShot(ball2.body,stand2.body);
    slingShot3 = new SlingShot(ball3.body,stand3.body);
    slingShot4 = new SlingShot(ball4.body,stand4.body);
    slingShot5 = new SlingShot(ball5.body,stand5.body);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    stand1.display();
    stand2.display();
    stand3.display();
    stand4.display();
    stand5.display();
    stand6.display();
    stand7.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    slingShot1.display();
    slingShot2.display();
    slingShot3.display();
    slingShot4.display();
    slingShot5.display();
}