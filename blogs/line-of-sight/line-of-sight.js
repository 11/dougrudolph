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
    var COUNT = 0;


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

                console.log('startX:' + startX + '\nstartY' + startY);
                console.log('endX:' + endX + '\nendY' + endY);

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
            this.radius = radius;
        }

        draw(ctx){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }

        update(){
            this.x = MOUSE_X;
            this.y = MOUSE_Y;
        }
    }

    let lightSource = new LightSource(canvas.width/2, canvas.height/2, 5);
    let wall1 = new Wall([[50,180], [120,120], [200, 130], [250,90]]);

    function run(){
        //clear previous frame
        ctx.clearRect(0,0,canvas.width, canvas.height);

        //update
        //
        //render
        lightSource.draw(ctx);
        wall1.draw(ctx);

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
        lightSource.update();
    });

}

// changes the size of the canvas
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
