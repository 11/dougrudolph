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

            this.max_radius = 12;
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

        constructor(size){
            this.size = size;
            this.nodes = [];

            //INIT WAVE INSIDE GRID var stk

            var node_displacement = 25;
            var radius_delta = 1;

            var grid_width = (size-1) * node_displacement;
            var grid_height = grid_width;
            var h_center = canvas.width /2 - grid_width/2;
            var v_center = canvas.height/2 - grid_height/2;

            for(var i = 0; i < this.size; i++){
                var row = [];
                for(var j = 0; j < this.size; j++){
                    radius_delta = (radius_delta + 1) % (size-1);
                    row.push(new Node(h_center + i*node_displacement,
                                v_center + j*node_displacement,
                                radius_delta));
                }

                // add array of nodes to grid
                this.nodes.push(row);
            }
        }

        draw(){
            for(var i = 0; i < this.size; i++){
                for(var j = 0; j < this.size; j++){
                    this.nodes[i][j].draw()
                }
            }
        }

        update(){
            for(var i = 0; i < this.size; i++){
                for(var j = 0; j < this.size; j++){
                    this.nodes[i][j].update()
                }
            }
        }
    }


    var grid = new Grid(12);

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

    setInterval(run, 40);
}

// changes the size of the canvas
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
