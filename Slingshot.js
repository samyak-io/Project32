class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 3
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
  
                strokeWeight(7);
                line(pointA.x + 27, pointA.y + 27, pointB.x , pointB.y );
                line(pointA.x + 27, pointA.y + 27, pointB.x , pointB.y ); 
            pop();
        }
    }

    attach(body){
        this.sling.bodyA = body;
    }
   
    fly(){
        this.sling.bodyA = null;
    }
    
}