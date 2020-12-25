class Stone {
    constructor(x, y, width,height) {
      var options = {
          'isStatic': false,
          'restitution':0,
          'friction':1,
          'density':1.2,
      }

      this.body = Bodies.circle(x, y, width, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("stone.png")
      
      World.add(world, this.body);
    }
    
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;

      this.debug = true;

      push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0, this.width*3, this.height*3);
      pop();
    }
  };