var canvas;

window.onload = function(){

    canvas = document.getElementById('Canvas');
    canvas.width = window.innerWidth * .49;
    canvas.height = window.innerHeight * .4;
    var ctx = canvas.getContext('2d');

    class Node{
        constrctor(chlidren){
            // children = [C0, C1, C2, C3]
            this.children = children;
            this.platforms = []
        }

        getChildren(){
            return this.children;
        }
    }

    class CollisionTrees{

        constructor(platforms){
            this.root = this.createTree();
            this.createQuadrants(levels);
        }

        createTree(){
            // grandchildren
            quad1Children = [new Node(null, null), new Node(null, null), new Node(null, null), new Node(null, null)];
            quad2Children = [new Node(null, null), new Node(null, null), new Node(null, null), new Node(null, null)];
            quad3Children = [new Node(null, null), new Node(null, null), new Node(null, null), new Node(null, null)];
            quad4Children = [new Node(null, null), new Node(null, null), new Node(null, null), new Node(null, null)];

            // parents
            var quad4 = new Node(quad1Children, null);
            var quad3 = new Node(quad2Children, null);
            var quad2 = new Node(quad3Children, null);
            var quad1 = new Node(quad4Children, null);

            // grandparent
            var root = new Node([quad1, quad2, quad3, quad4], null);

            return root;
        }
    }

    //runs the node simulation
    function run(){
        //CLEAR PREVIOUS FRAME
        ctx.clearRect(0,0,canvas.width, canvas.height);

        //UPDATE
        //RENDER
    }
    setInterval(run, 15);
}

// adjust canvas size on resize of window
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth * .49;
});
