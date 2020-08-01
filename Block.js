class Block{ constructor(x, y, width, height) 
  { 
  var options = { 
    restitution :0.4, 
    friction :0.01,
    density: 0.001
  }
  this.Visibility = 255;
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height; 
  World.add(world, this.body); 
} 
  display(){ 
    if(this.body.speed < 3){
      var angle = this.body.angle; 
      var pos= this.body.position; 
      strokeWeight(0.8);
      push();
      fill("blue");
      translate(pos.x, pos.y); 
      rotate(angle); 
      rectMode(CENTER);
      rect(0,0,this.width, this.height); 
      pop();
    } else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(100,this.Visibility);
      pop();
    }
     
    }
    score(){
      if(this.Visibility < 0 && this.Visibility > -105){
        score++;
     }
    } 
  }
