class Rubber{
    constructor(x,y,r){
        var options={
            density:1,
            friction:5,
            restitution:0.5
        }
        this.body=Bodies.circle(x,y,r/2,options);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    
}