class Stone{

    constructor(x,y,r){
        var options = {
            restitution : 0,
            isStatic : false,
            friction: 1.0,
            density: 1.2

        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body)
        this.image = loadImage("images/stone.png");
        
        this.radius = r
 
    }

    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }

}