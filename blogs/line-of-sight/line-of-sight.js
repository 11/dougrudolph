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

    class Cell{

        constructor(exists){
            this.exists = exists;
            this.edgeId = {'north': -1, 'south': -1, 'east': -1, 'west': -1};
            this.edgeExists = {'north': false, 'south': false, 'east': false, 'west': false};
        }

        exists(){
            return this.exists;
        }
    }

    class TileMap{

        constructor(){
            this.MAP = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];

            this.TILE_MAP = []
            this.edgePool = {};

            // centers the tilemap in the canvas
            this.offsetX = (canvas.width / 2) - (this.TILE_SIZE*this.MAP[0].length/2);
            this.offsetY = (canvas.height / 2) - (this.TILE_SIZE*this.MAP.length/2);
            this.TILE_SIZE = canvas.width*0.03;

            // create a tilemap filled with cell objects based on the array version of the map
            this.initTileMap();
        }

        initTileMap(){
            for(let i=0; i<this.MAP.length; i++){

                // create array in tilemap
                this.TILE_MAP[i] = new Array(this.MAP[i].length);

                for(let j=0; j<this.MAP[i].length; j++){
                    if(this.MAP[i][j] == 1){
                        this.TILE_MAP[i][j] = new Cell(true);
                    }
                    else{
                        this.TILE_MAP[i][j] = new Cell(false);
                    }
                }

            }
        }

        findVertices(){
            for(let i=1; i<this.MAP.length-1; i++){
                for(let j=1; j<this.MAP[i].length-1; j++){

                    // store reference to current element
                    let CUR   = this.TILE_MAP[i][j];

                    // store references to the neighbors in each cardinal direction
                    let NORTH = this.TILE_MAP[i-1][j];
                    let SOUTH = this.TILE_MAP[i+1][j];
                    let EAST  = this.TILE_MAP[i][j+1];
                    let WEST  = this.TILE_MAP[i][j-1];

                    //if cell exists
                    if(CUR.exists()){

                        // extend the NORTH's western edge down
                        if(!WEST.exists() && NORTH.exists()){

                        }

                        //
                        else if(!WEST.exists() && !NORTH.exists()){
                            CUR.edgeExists['west'] = true;
                            CUR.edgeId['west']     = COUNT;
                            this.edgePool[COUNT] = CUR;
                        }

                    }
                }
            }

        }

        draw(ctx){

            let tileColor = '#F0F0F0';

            for(let i=0; i < this.MAP.length; i++){
                for(let j=0; j < this.MAP[i].length; j++){

                    if(this.MAP[i][j] == 1){

                        let x = j*this.TILE_SIZE + this.offsetX;
                        let y = i*this.TILE_SIZE + this.offsetY;

                        ctx.beginPath();
                        ctx.fillStyle = tileColor;
                        ctx.rect(x, y, this.TILE_SIZE, this.TILE_SIZE);
                        ctx.fill();
                        ctx.closePath();

                    }
                }
            }
        }

        update(lightsource){
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
    let tileMap = new TileMap();

    function run(){
        //clear previous frame
        ctx.clearRect(0,0,canvas.width, canvas.height);

        //update
        //render
        lightSource.draw(ctx);
        tileMap.draw(ctx);
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
