var canvas;

window.onload  = function(){
    //setting up the canvas and the ctx
    canvas = document.getElementById("Canvas");
    canvas.width = window.innerWidth * .59;
    canvas.height = window.innerHeight * .4;
    var ctx = canvas.getContext("2d");

    //NODE CLASS
    class Node {
        //CONSTRUCTOR
        constructor(x, y, radius, radianDelta){
            this.x = x;
            this.startPos = x;
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

    class HelixLine{
        constructor(n1, n2){
            this.n1 = n1;
            this.n2 = n2;
            this.color = "#F0F0F0";
        }

        draw(){
            //draw both nodes
            this.n1.draw();
            this.n2.draw();

            //draw a line to both nodes
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.moveTo(this.n1.x, this.n1.y);
            ctx.lineTo(this.n2.x, this.n2.y);
            ctx.stroke();
            ctx.closePath();
        }

        update(){
            this.n1.update();
            this.n2.update();
        }
    }

    class Helix{
        constructor(xPos, totalHelixes, radianOffset, isOscillating){
            this.totalHelixes = totalHelixes;
            this.radianOffset = radianOffset;
            this.isOscillating = isOscillating;

            this.helixList = []
            for(var i = 0; i < totalHelixes; i++){
                var nodeWidth = 6;

                var n1 = new Node(xPos, (i+1) * 20, nodeWidth, 0 + i*this.radianOffset);
                var n2 = new Node(xPos, (i+1) * 20, nodeWidth, Math.PI +i*this.radianOffset);
                var helix = new HelixLine(n1, n2);

                this.helixList.push(helix);
            }
        }

        draw(){
            for(var i = 0; i < this.totalHelixes; i++){
                this.helixList[i].draw();
            }
        }

        update(){
            for(var i = 0; i < this.totalHelixes; i++){
                this.helixList[i].update();
            }
        }
    }

    var delta = canvas.width/9*2.8 - canvas.width/9;
    console.log(delta);
    var helix1 = new Helix(canvas.width/9, 15, .2, true);
    var helix2 = new Helix(canvas.width/9 + delta, 15, .3, true);
    var helix3 = new Helix(canvas.width/9 + delta*2, 15, .4, true);
    var helix4 = new Helix(canvas.width/9 + delta*3, 15, .5, true);

    var helix5 = new Helix(canvas.width/9 + delta*4, 15, .2, true);
    var helix6 = new Helix(canvas.width/9 + delta*4, 15, .3, true);
    var helix7 = new Helix(canvas.width/9 + delta*4, 15, .4, true);

    //runs the node simulation
    function run() {
        //CLEAR PREVIOUS FRAME
        ctx.clearRect(0,0,canvas.width, canvas.height);

        //UPDATE - update the position of all the nodes
        helix1.update();
        helix2.update();
        helix3.update();
        helix4.update();
        helix5.update();
        helix6.update();
        helix7.update();

        //RENDER - render the updated position of all the
        helix1.draw();
        helix2.draw();
        helix3.draw();
        helix4.draw();
        helix5.draw();
        helix6.draw();
        helix7.draw();
    }

    setInterval(run, 15);
}

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
