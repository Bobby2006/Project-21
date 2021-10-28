class Ground
{
    constructor(posX, posY, width, height)
    {
        this.x = posX;
        this.y = posY;
        this.w = width;
        this.h = height;

        var options =
        {
            isStatic: true
        }

        this.ground = Bodies.rectangle(posX, posY, width, height, options);
        World.add(myworld, this.ground);
    }

    display()
    {
        fill("Yellow");
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.w, this.h);
    }
}