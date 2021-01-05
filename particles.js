
class Particles {
    constructor(x, y,r) {
      var options = {
  
  isStatic:false,
     
       
         }
   this.body = Bodies.circle(x, y,r, options);
       this.color=color(random(0,255),random(0,255),random(0,255));
   this.r=r;
      
      World.add(world, this.body);
      
      
      score++
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
    
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     ellipseMode(RADIUS);
      fill(this.color);
     noStroke()
     ellipse( 0,0,this.r, this.r)
  
      pop();
     

     
    }
  }