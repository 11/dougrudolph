var canvas;

window.onload  = function(){
    //setting up the canvas and the ctx
    canvas = document.getElementById("Canvas");
    canvas.width = window.innerWidth * .49;
    canvas.height = window.innerHeight * .4;
    var ctx = canvas.getContext("2d");

    //NODE CLASS
    class Node {
        //CONSTRUCTOR
        constructor(x, y, radius, radianDelta){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.radianDelta = radianDelta;
            this.color = "#F0F0F0";
        }

        //DRAWS NODES TO CANVAS
        draw(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }

        //UPDATE NODES TO CANVAS
        update(){
            this.radianDelta += 0.05;
            this.x = this.startPos + Math.cos(this.radianDelta) * 50;
            console.log(this.x);
        }
    }

    class CirclePattern{
        constructor(){}
    }

    //runs the node simulation
    function run() {
        //CLEAR PREVIOUS FRAME
        ctx.clearRect(0,0,canvas.width, canvas.height);

        //UPDATE - update the position of all the nodes

        //RENDER - render the updated position of all the
    }

    setInterval(run, 15);
}

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
