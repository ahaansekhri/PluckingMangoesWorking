class Mango {
    constructor(x, y,width) {
      var options = {
          'isStatic':true,
          'restitution':0,
          'friction':1,
      }
      this.body = Bodies.circle(x, y, width, options);
      this.image = loadImage("mango.png");
      this.width = width;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width*2, this.width*2);
      pop();
    }
  };
  