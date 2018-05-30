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
        constructor(x, y, radius){
            this.x = x;
            this.y = y;
            this.radius = radius;
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
        update(updated_y){
            this.y = updated_y;
        }
    }

    class Bar{

        constructor(x){
            this.x = x;
            this.speed = 1;
            this.top_y_diff = 100;
            this.bottom_y_diff = 100;

            this.node_top = new Node(this.x, this.top_y_diff, 7);
            this.node_bottom = new Node(this.x, this.bottom_y_diff, 7);

            this.rippling_up = true;
            this.radian
        }

        draw(){
            this.node_top.draw();
            this.node_bottom.draw();

            ctx.beginPath();
            ctx.moveTo(this.x, this.top_y_diff);
            ctx.lineTo(this.x, this.bottom_y_diff);
            ctx.stroke();
        }

        update(){

            this.y = Math.cos(this.radianDelta) * 50
        }
    }


    var b = new Bar(100);

    //runs the node simulation
    function run() {
        //CLEAR PREVIOUS FRAME
        ctx.clearRect(0,0,canvas.width, canvas.height);

        //UPDATE - update the position of all the nodes
        b.update();
        //RENDER - render the updated position of all the
        b.draw();
    }

    setInterval(run, 15);
}

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
