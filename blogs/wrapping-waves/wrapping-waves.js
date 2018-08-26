var canvas;

window.onload = function(){
    canvas = document.getElementById('sin-waves-canvas');
    canvas.width = window.innerWidth  * .59;
    canvas.height = window.innerHeight * .4;
    var ctx = canvas.getContext("2d");

    //NODE CLASS
    class Node {
        //CONSTRUCTOR
        constructor(x, y, radius, radian_adj){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color="#F0F0F0";
            this.radian_adj = radian_adj;
        }

        //DRAWS THE NODES TO THE CANVAS
       draw(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius , 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }

        //UPDATES THE NODES TO THE CANVAS
        update_cosine(){
            this.radian_adj %= Math.PI * 2;

            if(this.radian_adj > Math.PI){
                this.radius += 0.1;
            }
            else{
                this.radius -= 0.1;
            }

            this.radian_adj += 0.07;
            this.y = canvas.height/2 + Math.cos(this.radian_adj) * 100;
        }

        update_sine(){
            this.radian_adj %= Math.PI * 2;

            if((this.radian_adj > Math.PI/2) && (this.radian_adj < Math.PI+Math.PI/2)){
                this.radius -= 0.1;
            }
            else{
                this.radius += 0.1;
            }

            this.radian_adj += 0.07;
            this.y = canvas.height/2 + Math.sin(this.radian_adj) * 100;
        }
    }

    var sin_list = [];
    var x, dis;
    for(x = 1, dis = 0.1; x < 32; x++, dis += 0.1) {
        sin_list.push(new Node(x*30, canvas.height/2 + Math.cos(dis) * 100, 6, dis));
    }

    var cos_list = []
    x = 0;
    dis = 0.1;
    for(x = 1, dis = 0.1; x < 32; x++, dis += 0.1) {
        cos_list.push(new Node(x*41, canvas.height/2 + Math.sin(dis) * 100, 6, dis));
    }

    //runs the node simulation
    function run(){
        //CLEAR PREVIOUS FRAME
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //UPDATE - update the position of all the nodes
        sin_list.forEach(function(n){n.update_sine();});
        cos_list.forEach(function(n){n.update_cosine();});


        //RENDER - render the updated position of all the
        sin_list.forEach(function(n){n.draw();});
        cos_list.forEach(function(n){n.draw();});
    }
    setInterval(run, 16);
};

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});

