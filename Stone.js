class Stone
{  
    constructor(x, y, radius)
    {
        var options = {
            'restitution': 0,
            'friction': 1,
            'density': 1.2,
            'isStatic' : false
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("Images/stone.png");
	    World.add(world, this.body);  
   }

   display()
   {
        fill("red");
        ellipseMode(RADIUS);
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}