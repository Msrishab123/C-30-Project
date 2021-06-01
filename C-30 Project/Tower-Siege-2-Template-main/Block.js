class Block{
  constructor(x, y, width, height) {
    var options = {
      friction : 0.04,
      restitution : 0.04
    }
      
      this.image = loadImage("block.png");

      this.Visibility = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        this.body.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility -=5;
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
  
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
}