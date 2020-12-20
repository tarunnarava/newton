class Bob {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:1,
          friction:8,                          
          density:7.8
      }
      this.radius=radius;
      this.body=Bodies.circle(x,y,radius,options);
      World.add(world,this.body);
    }
    display(){
push();
fill("yellow");
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,this.radius);
pop();

    }
    }