class Drops{
    constructor(x,y){
    
        var options ={
            restitution:0.4,
            friction:0.1
        }
        
        this.rain = Bodies.circle(x, y, 5,options);       
        this.color=color("Blue");
        World.add(world, this.rain);
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
        }
    }
    display(){
        var pos = this.rain.position;
        var angle = this.rain.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(1, 1, 5);
        pop();
    }
}
