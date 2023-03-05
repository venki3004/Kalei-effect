class Circle {

    constructor() {

        this.pos = createVector(random(-300, 300), random(-300, 300));
        this.vel = createVector(random(-1, 1), random(-1, 1))
        this.vel.setMag(0.5);

        this.r = random(255);
        this.g = random(255)
        this.b = random(255);

        this.size = random(10, 30);
        this.stretch = random(0, 10);

    }
    
    show_circle() {

        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.pos.x, this.pos.y, this.size);
        
    }

    update() {

        this.pos.add(this.vel);

        if((this.pos.x > 300) || (this.pos.x < -300)) 
            this.vel.x *= -1;

        if((this.pos.y > 300) || (this.pos.y < -300))
            this.vel.y *= -1;
    }

    circle_rotate(angle) {
        rotate(angle);
    }

    circle_scale(sx, sy) {
        scale(sx, sy);
    }
}
