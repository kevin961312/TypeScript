class Shape
{
    constructor(public ctx:CanvasRenderingContext2D,
        public originX:number,
        public originY:number){}
}


class Line extends Shape
{
    constructor( ctx:CanvasRenderingContext2D,
                 originX:number,
                 originY:number,
                public x:number,
                public y:number)
    {
        super(ctx,originX,originY);
    }

    draw():void
    {
        this.ctx.moveTo(this.originX,this.originY);
        this.ctx.lineTo(this.x,this.y);
        this.ctx.stroke();
    }
}

class Circle extends Shape
{
    constructor( ctx:CanvasRenderingContext2D,
        originX:number,
        originY:number,
       public radius:number)
    {
        super(ctx, originX, originY);
    }

    draw():void
    {
        this.ctx.beginPath()
        this.ctx.arc(this.originX, this.originY, this.radius,0 , 2 * Math.PI);
        this.ctx.stroke();
    }
}

class Textshape extends Shape
{
    constructor(ctx:CanvasRenderingContext2D,
                originX:number,
                originY:number,
                public text:string)
    {
        super(ctx, originX, originY);
    }

    draw():void
    {
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.text,this.originX, this.originY);
        this.ctx.stroke();
    }
}


class MathHelper
{
    static generateRandom():number
    {
        return Math.random() * 500;
    }
}


const c = <HTMLCanvasElement>document.getElementById("myCanvas");
var ctx = <CanvasRenderingContext2D> c?.getContext("2d");

const btnLine = document.getElementById("drawLine");
btnLine?.addEventListener("click", () => 
{
    const line:Line = new Line(ctx,MathHelper.generateRandom(),MathHelper.generateRandom(),MathHelper.generateRandom(),MathHelper.generateRandom());
    line.draw();
});





const btnCircle = document.getElementById("drawCircle");
btnCircle?.addEventListener("click", () => 
{
    const circle:Circle= new Circle(ctx,MathHelper.generateRandom(),MathHelper.generateRandom(),MathHelper.generateRandom());
    circle.draw();
});


const btnText = document.getElementById("drawText");
btnText?.addEventListener("click", () => 
{
    const text:Textshape= new Textshape(ctx,MathHelper.generateRandom(),MathHelper.generateRandom(),"Bojack");
    text.draw();
});