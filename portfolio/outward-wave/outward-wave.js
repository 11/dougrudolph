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

        constructor(x, radian_delta, height_delta){
            // x location
            this.x = x;

            // speed at which the bar grows and shrinks
            this.speed = 1;

            // offset of radians for a given bar
            this.top_radian = 0 - radian_delta;
            this.bottom_radian = Math.PI + radian_delta;
            this.height_delta = height_delta;

            // y value for each node in a bar
            this.start_val = canvas.height / 2;
            this.top_y_diff = this.start_val + Math.cos(this.top_radian) * this.height_delta;
            this.bottom_y_diff = this.start_val + Math.cos(this.bottom_radian) * this.height_delta;

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
            this.top_y_diff = this.start_val + Math.cos(this.top_radian) * this.height_delta;

            this.bottom_radian += .05;
            this.bottom_y_diff = this.start_val + Math.cos(this.bottom_radian) * this.height_delta ;

            this.node_top.update(this.top_y_diff);
            this.node_bottom.update(this.bottom_y_diff);
        }
    }

    class Waves{

        constructor(){
            // used to horizontally center wave animation
            var wave_amount = 35
            var waves_length = 15 * wave_amount ;
            var start_pos = canvas.width/2 - waves_length/2;

            // keeps track height of the waves
            var height_delta = 20;

            this.waves = [];
            for(var i = 0; i < wave_amount; i++){
                if(i < wave_amount / 2){
                    height_delta += 2;
                }
                else{
                    height_delta -= 2;
                }

                var x_val = start_pos + i*15;
                var bar = new Bar(x_val, i*10, height_delta);
                this.waves.push(bar);
            }
        }
        draw(){
            for(var i = 0; i < this.waves.length; i++){
                this.waves[i].draw()
            }
        }
        update(){
            for(var i = 0; i < this.waves.length; i++){
                this.waves[i].update()
            }
        }
    }

    var waves = new Waves();

    //runs the node simulation
    function run() {
        //CLEAR PREVIOUS FRAME
        ctx.clearRect(0,0,canvas.width, canvas.height);

        //UPDATE - update the position of all the nodes
        waves.update()

        //RENDER - render the updated position of all the
        waves.draw();
    }

    setInterval(run, 15);
}

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
