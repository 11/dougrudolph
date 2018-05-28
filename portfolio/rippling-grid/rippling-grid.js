var canvas;

window.onload  = function(){
    //setting up the canvas and the ctx
    canvas = document.getElementById("Canvas");
    canvas.width = window.innerWidth * .49;
    canvas.height = window.innerHeight * .4;
    var ctx = canvas.getContext("2d");

    //NODE CLASS
    class Node
    {
        //CONSTRUCTOR
        constructor(x,y,radius){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = "#F0F0F0";

            this.max_radius = 10;
            this.min_radius = 1;
            this.radius_delta = 1;
        }

        //DRAWS THE NODES TO THE CANVAS
        draw(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }

        //BOUNCES NODES OFF WALLS
        update(){
            this.radius += this.radius_delta;
            if(this.radius >= this.max_radius ||
                    this.radiius <= this.min_radius ||
                    this.radius < 1){
               this.radius_delta = (-this.radius_delta);
            }
        }
    }


    // GRID CLASS
    class Grid{

        constructor(width, height){
            this.width = width;
            this.height = height;

            this.nodes = [];

            for(var i = 0; i < this.width; i++){

                // create temp row of nodes
                var row = [];
                for(var j = 0; j < this.height; j++){
                    row.push(new Node(i*10, j*10, 2));
                }

                // add array of nodes to grid
                this.nodes.push(row);
            }
        }

        draw(){
            for(var i = 0; i < this.width; i++){
                for(var j = 0; j < this.height; j++){
                    this.nodes[i][j].draw()
                }
            }
        }

        update(){
            for(var i = 0; i < this.width; i++){
                for(var j = 0; j < this.height; j++){
                    this.nodes[i][j].update()
                }
            }
        }
    }


    var grid = new Grid(20, 20);

    //runs the node simulation
    function run()
    {
        //CLEAR PREVIOUS FRAME
        ctx.clearRect(0,0,canvas.width, canvas.height);
        //UPDATE - update the position of all the nodes
        grid.update();
        //RENDER - render the updated position of all the
        grid.draw();
    }

    setInterval(run, 35);
}

// changes the size of the canvas
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
