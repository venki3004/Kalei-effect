class Triangle {

    constructor () {

        this.pos = createVector(random(-300, 300), random(-300, 300));
        this.radius = random(10, 40);
        
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);

        this.vel = createVector(random(-1, 1), random(-1, 1));

    }

    show_triangle() {
        
        let angle = 120;
        
        fill(this.r, this.g, this.b);
        beginShape();
        for (let a = 0; a < 360; a += angle) {

            let sx = this.pos.x + cos(a) * this.radius;
            let sy = this.pos.y + sin(a) * this.radius;
            vertex(sx, sy);

        }
        endShape(CLOSE);

    }

    triangle_update() {

        this.pos.add(this.vel);

        if((this.pos.x > 300) || (this.pos.x < -300)) 
            this.vel.x *= -1;

        if((this.pos.y > 300) || (this.pos.y < -300))
            this.vel.y *= -1;

    }

    triangle_rotate(angle) {

        rotate(angle);

    }

    triangle_scale(sx, sy) {

        scale (sx, sy);

    }


}