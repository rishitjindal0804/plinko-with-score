
class Plinko {
    constructor(x, y,r) {
      var options = {
  
  isStatic:true,
     
       
         }
      this.body = Bodies.circle(x, y,r, options);

   this.r=r
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     ellipseMode(CENTER);
      fill("red");
      stroke("yellow");
      strokeWeight(2);
     ellipse( 0,0,this.r,this.r)
  
      pop();
      
     
    }
  }