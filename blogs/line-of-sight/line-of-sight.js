var canvas;


window.onload  = function(){
    // setting up the canvas and the ctx
    canvas = document.getElementById("Canvas");
    canvas.width = window.innerWidth * .59;
    canvas.height = window.innerHeight * .4;
    var ctx = canvas.getContext("2d");

    // defining mouse vars
    var MOUSE_X = canvas.width  / 2 - 2;
    var MOUSE_Y = canvas.height / 2 - 2;


    function intersect(){

    }


    class EdgePool{

        constructor(wallList){
            this.edgePool = this.initEdgePool(wallList);
            this.wallList = wallList;
        }

        initEdgePool(wallList){
            let edgePool = [];

            let wallLines, line;
            for(let i=0; i<wallList.length; i++){
                wallLines = wallList[i].lineList;

                for(let j=0; j<wallLines.length; j++){
                    line = wallLines[j];
                    edgePool.push(line);
                }
            }

            return edgePool;
        }

        draw(ctx){
            let wall;
            for(let i=0; i<this.wallList.length; i++){
                wall = this.wallList[i];
                wall.draw(ctx);
            }
        }
    }

    class Wall{

        constructor(lineList){

            if(lineList.length < 2){
                throw "Line List length has less than 2 elements";
                return;
            }

            // list of [x,y] coordinates as a set of lists
            this.lineList = lineList;

            // color of the walls
            this.lineColor = "#F0F0F0";
        }

        draw(ctx){
            var start, end, startX, startY, endX, endY;

            for(let i = 0; i < this.lineList.length-1; i++){
                start = this.lineList[i];
                end = this.lineList[i+1];

                startX = start[0];
                startY = start[1];
                endX = end[0];
                endY = end[1];

                ctx.beginPath();
                ctx.strokeStyle = this.lineColor;
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }
        }
    }

    class LightSource{

        constructor(x, y, radius){
            this.x = x;
            this.y = y;
            this.color = "#F0F0F0";
            this.rayColor = "cyan";
            this.radius = radius;
        }

        draw(ctx, edgePool){

            // draw ball representing the lightsource
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            // draw lines from the ball to the vectors
            let edge, edgeX, edgeY;
            for(let i=0; i<edgePool.edgePool.length; i++){

                edge = edgePool.edgePool[i];
                edgeX = edge[0];
                edgeY = edge[1];

                ctx.beginPath();
                ctx.strokeStyle = this.rayColor;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(edgeX, edgeY);
                ctx.stroke();
            }
        }

        update(edgePool){

            let edge;
            for(let i=0; i<edgePool.edgePool.length; i++){
                edge = edgePool.edgePool[i];
                let edgeX = edge[0];
                let edgeY = edge[1];

                let originX = this.x;
                let originY = this.y;

                let dx = edgeX - originX;
                let dy = edgeY - originY;
                let baseAngle = Math.atan2(dx, dy);
            }
        }

        updatePos(){
            this.x = MOUSE_X;
            this.y = MOUSE_Y;
        }
    }

    // set of walls
    let wall1 = new Wall([[50,180], [120,120], [200, 90], [250,90]]);

    // main objects for interacting with the simulation
    let lightSource = new LightSource(canvas.width/2, canvas.height/2, 5);
    let edgePool= new EdgePool([wall1]);

    function run(){
        // clear previous frame
        ctx.clearRect(0,0,canvas.width, canvas.height);

        // update

        // render
        edgePool.draw(ctx);
        lightSource.draw(ctx, edgePool);

    }
    setInterval(run, 30);


    // adding event listeners that get mouse cooridnates
    ctx.canvas.addEventListener('mousemove', function(event){
        MOUSE_X = event.clientX - ctx.canvas.offsetLeft;
        MOUSE_Y = event.clientY - ctx.canvas.offsetTop;
        debug = document.getElementById('debug');
        debug.innerHTML = 'MOUSE_X: ' + MOUSE_X + '\nMOUSE_Y: ' + MOUSE_Y;
    });

    ctx.canvas.addEventListener('onmousedown', function(event){
        lightSource.updatePos();
    });

}

// changes the size of the canvas
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
