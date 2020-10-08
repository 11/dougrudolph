class Node {
  constructor(canvas, ctx, x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
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

  update(updated_y) {
    this.y = updated_y;
  }
}

class Bar {
  constructor(canvas, ctx, x, radian_delta, height_delta) {
    this.canvas = canvas;
    this.ctx = ctx;

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
    this.node_top = new Node(canvas, ctx, this.x, this.top_y_diff, 7);
    this.node_bottom = new Node(canvas, ctx, this.x, this.bottom_y_diff, 7);

    // sets color of line to white
    this.color = "#F0F0F0";
  }

  draw() {
    this.node_top.draw();
    this.node_bottom.draw();

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.moveTo(this.x, this.top_y_diff);
    this.ctx.lineTo(this.x, this.bottom_y_diff);
    this.ctx.stroke();
  }

  update() {
    this.top_radian -= 0.05;
    this.top_y_diff = this.start_val + Math.cos(this.top_radian) * this.height_delta;

    this.bottom_radian += .05;
    this.bottom_y_diff = this.start_val + Math.cos(this.bottom_radian) * this.height_delta ;

    this.node_top.update(this.top_y_diff);
    this.node_bottom.update(this.bottom_y_diff);
  }
}

class Waves {

  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    // used to horizontally center wave animation
    let wave_amount = 35
    let waves_length = 15 * wave_amount ;
    let start_pos = canvas.width/2 - waves_length/2;

    // keeps track height of the waves
    let height_delta = 20;

    this.waves = [];
    for (let i = 0; i < wave_amount; i++) {
      if(i < wave_amount / 2) {
        height_delta += 2;
      }
      else{
        height_delta -= 2;
      }

      let x_val = start_pos + i*15;
      let bar = new Bar(canvas, ctx, x_val, i*10, height_delta);
      this.waves.push(bar);
    }
  }

  draw() {
    this.waves.forEach(wave => wave.draw());
  }

  update() {
   this.waves.forEach(wave => wave.update());
  }
}


//runs the node simulation
export function runAnimation(canvas, ctx) {
  const waves = new Waves(canvas, ctx);
  const render = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    waves.update()
    waves.draw();

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}