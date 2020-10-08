class Node {
  constructor(canvas, ctx, x, y, radius, radianDelta) {
    this.x = x;
    this.startPos = x;
    this.y = y;
    this.radius = radius;
    this.radianDelta = radianDelta;
    this.color = "#F0F0F0";

    this.canvas = canvas;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    this.radianDelta += 0.05;
    this.x = this.startPos + Math.cos(this.radianDelta) * 50;
  }
}

class HelixLine {
  constructor(canvas, ctx, n1, n2) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.n1 = n1;
    this.n2 = n2;
    this.color = "#F0F0F0";
  }

  draw() {
    //draw both nodes
    this.n1.draw();
    this.n2.draw();

    //draw a line to both nodes
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.moveTo(this.n1.x, this.n1.y);
    this.ctx.lineTo(this.n2.x, this.n2.y);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  update() {
    this.n1.update();
    this.n2.update();
  }
}

class Helix {
  constructor(canvas, ctx, xPos, totalHelixes, radianOffset, isOscillating) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.totalHelixes = totalHelixes;
    this.radianOffset = radianOffset;
    this.isOscillating = isOscillating;

    let deltaY = (canvas.height/2) - (16*20/2);
    let nodeWidth = 6;

    this.helixList = []
    for(let i = 0; i < totalHelixes; i++){
      let n1 = new Node(this.canvas, this.ctx, xPos, deltaY + (i+1)*20, nodeWidth, 0 + i*this.radianOffset);
      let n2 = new Node(this.canvas, this.ctx, xPos, deltaY + (i+1)*20, nodeWidth, Math.PI +i*this.radianOffset);
      let helix = new HelixLine(canvas, ctx, n1, n2);

      this.helixList.push(helix);
    }
  }

  draw() {
    for(let i = 0; i < this.totalHelixes; i++){
      this.helixList[i].draw();
    }
  }

  update() {
    for(let i = 0; i < this.totalHelixes; i++){
      this.helixList[i].update();
    }
  }
}

export function runAnimation(canvas, ctx) {
  let deltaX = canvas.width/9*2.8 - canvas.width/9;
  const helixs = [
    new Helix(canvas, ctx, canvas.width / 9,              15, .2, true),
    new Helix(canvas, ctx, canvas.width / 9 + deltaX,     15, .3, true),
    new Helix(canvas, ctx, canvas.width / 9 + deltaX * 2, 15, .4, true),
    new Helix(canvas, ctx, canvas.width / 9 + deltaX * 3, 15, .5, true),
    new Helix(canvas, ctx, canvas.width / 9 + deltaX * 4, 15, .2, true),
    new Helix(canvas, ctx, canvas.width / 9 + deltaX * 4, 15, .3, true),
    new Helix(canvas, ctx, canvas.width / 9 + deltaX * 4, 15, .4, true),
  ];

  const render = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    helixs.forEach(helix => helix.draw());
    helixs.forEach(helix => helix.update());
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}