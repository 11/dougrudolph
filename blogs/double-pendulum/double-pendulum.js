var canvas;

window.onload  = function(){
    //setting up the canvas and the ctx
    canvas = document.getElementById("Canvas");
    canvas.width = window.innerWidth * .59;
    canvas.height = window.innerHeight * .4;
    var ctx = canvas.getContext("2d");

    // global vars
    let g = 1;
    let color = "#F0F0F0";

    let r1 = 0;
    let m1 = 20;
    let a1 = 0;

    let x1 = r1 * Math.sin(a1);
    let y1 = r1 * Math.cos(a1);


    //runs the node simulation
    function run() {
        //CLEAR PREVIOUS FRAME
        ctx.clearRect(0,0,canvas.width, canvas.height);

        //UPDATE


        //RENDER
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(canvas.width/2, canvas.height/6);
        ctx.lineTo(x1, y1);
        ctx.stroke();
        ctx.closePath();

    }

    setInterval(run, 15);
}

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
