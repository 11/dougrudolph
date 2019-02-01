var canvas;

window.onload  = function(){
    //setting up the canvas and the ctx
    canvas = document.getElementById("Canvas");
    canvas.width = window.innerWidth * .59;
    canvas.height = window.innerHeight * .4;
    var ctx = canvas.getContext("2d");

    function update(){

    }

    // global vars
    var g = 1;
    var color = "#F0F0F0";

    var r1 = 100;
    var r2 = 100;
    var m1 = 10;
    var m2 = 10;
    var a1 = Math.PI/4;
    var a2 = Math.PI/80;
    var a1_v = 0;
    var a2_v = 0;
    var a1_a = 0;
    var a2_a = 0;

    var x1;
    var y1;
    var x2;
    var y2;

    function angle_one(){
        num = -g*(2*m1+m2)*Math.sin(a1)-m2*g*Math.sin(a1-2*a2)-2*Math.sin(a1-a2)*m2*(a2_v*a2_v*r2+a1_v*a1_v*r1*Math.cos(a1-a2));
        den = r1*(2*m1+m2-m2*Math.cos(2*a1-2*a2));
        return num/den;
    }

    function angle_two(){
        num = 2*Math.sin(a1-a2)* (a1_v*a1_v*r1*(m1+m2)+g*(m1+m2)*Math.cos(a1)+a2_v*a2_v*r2*m2*Math.cos(a1-a2));
        den = r2*(2*m1+m2-m2*Math.cos(2*a1-2*a2));
        return num/den;
    }

    //runs the node simulation
    function run() {
        //CLEAR PREVIOUS FRAME
        ctx.clearRect(0,0,canvas.width, canvas.height);

        //UPDATE

        a1_a = angle_one()
        a2_a = angle_two()

        a1_v += a1_a;
        a2_v += a2_a;
        a1 += a1_v;
        a2 += a1_v;

        x1 = r1 * Math.sin(a1) + canvas.width/2;
        y1 = r1 * Math.cos(a1) + canvas.height/6;
        x2 = r2 * Math.sin(a2) + x1;
        y2 = r2 * Math.cos(a2) + y1;

        //RENDER
        // draw line
        ctx.beginPath();
        ctx.strokeStyle = color;

        // draw line on first pendulum
        ctx.moveTo(canvas.width/2, canvas.height/6);
        ctx.lineTo(x1, y1);

        // draw line for second pendulum
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();

        // draw circle
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x1, y1, m1, 0, Math.PI*2);
        ctx.arc(x2, y2, m2, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }

    setInterval(run, 15);
}

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
