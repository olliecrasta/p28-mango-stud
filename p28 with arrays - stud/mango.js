class Mango{

    constructor(x,y,r){
        var options = {
            restitution : 0,
            isStatic : true,
            friction: 1

        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body)
        this.image = loadImage("images/mango.png");
        
        this.radius = r
 
    }

    display(){

        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);
        pop();
    }

}