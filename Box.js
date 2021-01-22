class  Box{
     
    constructor(width, height){

    var options= {
        
        'isStatic':false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
        
    };
    
    this.body = Bodies.rectangle(1200, 200, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/dustbingreen.png");

     World.add(world, this.body);   

    }

    display(){
    
    var pos = this.body.position;    

        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);

     imageMode (CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);

    }

}