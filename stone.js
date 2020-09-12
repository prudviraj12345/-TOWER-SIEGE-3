class Stone {
    constructor(x,y,radius) {
      var options = {
           'restitution':0.8,
            'friction':1.0,
            'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius;
      World.add(world, this.body);
    }
    display(){
      //  this.body.position.x = mouseX;
     //   this.body.position.y = mouseY;
      var pos =this.body.position;
       push();
       rectMode(CENTER);
       translate(pos.x,pos.y);
       fill("black");
       ellipseMode(RADIUS);
       ellipse(0, 0, this.radius, this.radius);  
        pop();
    }
  };

