let dust1 = [];
let dust2 = [];

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  for (let j = 0; j < 10; j++) {
    let p = new Circle();
    dust1.push(p);
    let q = new Rect();
    dust2.push(q);
  }
}

function draw() {
  translate(width / 2, height / 2);
  background(30, 30, 30);

  // Draw shapes for each symmetry
  for (let i = 0; i < 6; i++) {
    push();
    rotate(i * 60);

    // Draw circles
    for (let k = 0; k < 10; k++) {
      let p = dust1[k];
      push();
      translate(p.pos.x, p.pos.y);
      p.show_circle();
      p.update();
      pop();
      push();
      translate(-p.pos.x, p.pos.y);
      scale(-1, 1);
      p.show_circle();
      p.update();
      pop();
      push();
      translate(p.pos.x, -p.pos.y);
      scale(1, -1);
      p.show_circle();
      p.update();
      pop();
      push();
      translate(-p.pos.x, -p.pos.y);
      scale(-1, -1);
      p.show_circle();
      p.update();
      pop();
    }

    // Draw rectangles
    for (let k = 0; k < 10; k++) {
      let q = dust2[k];
      push();
      translate(q.pos.x, q.pos.y);
      q.show_rect();
      q.r_update();
      pop();
      push();
      translate(-q.pos.x, q.pos.y);
      scale(-1, 1);
      q.show_rect();
      q.r_update();
      pop();
      push();
      translate(q.pos.x, -q.pos.y);
      scale(1, -1);
      q.show_rect();
      q.r_update();
      pop();
      push();
      translate(-q.pos.x, -q.pos.y);
      scale(-1, -1);
      q.show_rect();
      q.r_update();
      pop();
    }

    pop();
  }
}

