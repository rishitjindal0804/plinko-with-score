
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var divisionheight = 300;

var plinkos = []
var particles = []
var divisions = []

var particle;


var score = 0;

function setup() {
  createCanvas(480,800);
  stroke(225)
  
  engine = Engine.create();
  world = engine.world;


  ground=new Ground (width/2,800,480,20)
  

  for (var k = 0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionheight/2,10,divisionheight))
    
    
}
  
   for (var j = 75; j <=width; j=j+50)
    {
   
       plinkos.push(new Plinko(j,75,10))
    }

    for (var j = 50; j <=width-10; j=j+50)
    {
   
       plinkos.push(new Plinko(j,150,10))
    }
  
 for (var j = 75; j <=width; j=j+50)
    {
   
       plinkos.push(new Plinko(j,225,10))
    }

    for (var j = 50; j <=width-10; j=j+50)
    {
   
       plinkos.push(new Plinko(j,300,10))
    }



  
  
}

function draw() {
  background("black");  
   Engine.update(engine);
ground.display()

  
  text("score :" + score,10,10)
  

  
 for  (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
 for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display()
  }

 
  for (var l = 0; l < particles.length; l++) {
        particles[l].display();
   }
  
}

function mousePressed(){
  
 
   
   particles.push(new Particles(mouseX,10,10,10))
   
 
  
}