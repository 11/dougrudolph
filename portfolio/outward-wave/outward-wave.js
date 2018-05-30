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
            // x location
            this.x = x;

            // speed at which the bar grows and shrinks
            this.speed = 1;

            // offset of radians for a given bar
            this.top_radian = 0;
            this.bottom_radian = Math.PI;

            // y value for each node in a bar
            this.start_val = canvas.height / 2;
            this.top_y_diff = this.start_val + Math.cos(this.top_radian) * 50;
            this.bottom_y_diff = this.start_val + Math.cos(this.bottom_radian) * 50;

            // nodes that are apart of
            this.node_top = new Node(this.x, this.top_y_diff, 7);
            this.node_bottom = new Node(this.x, this.bottom_y_diff, 7);

            // sets color of line to white
            this.color = "#F0F0F0";
        }

        draw(){
            this.node_top.draw();
            this.node_bottom.draw();

            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.moveTo(this.x, this.top_y_diff);
            ctx.lineTo(this.x, this.bottom_y_diff);
            ctx.stroke();
        }

        update(){
            this.top_radian -= 0.05;
            this.top_y_diff = this.start_val + Math.cos(this.top_radian) * 50;

            this.bottom_radian += .05;
            this.bottom_y_diff = this.start_val + Math.cos(this.bottom_radian) * 50;

            this.node_top.update(this.top_y_diff);
            this.node_bottom.update(this.bottom_y_diff);
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
