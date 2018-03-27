class Entity{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = "#FFFFFF"
    }

}

class Ball extends Entity{
    constructor(x, y, width, height){
        super(x, y, width, height);
    }

    render(ctx){
        ctx.beginPath();
        ctx.FillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill()
        ctx.closePath();
    }
}

class Platform extends Entity{
    constructor(x, y, width, height){
        super(x, y, width, height);
    }

    render(ctx){
        ctx.beginPath();
        ctx.FillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}
