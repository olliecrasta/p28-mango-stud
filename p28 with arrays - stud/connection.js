class Connection{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness:0.009,
            length : 1 
        }
        this.connection = Matter.Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world,this.connection)

    }

    launch(){
        this.connection.bodyA= null;
    }
    attach(body){
        this.connection.bodyA =body;
    }


}
