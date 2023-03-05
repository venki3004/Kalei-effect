class Rect {

    constructor() {

        this.r_pos = createVector(random(-300, 300), random(-300, 300));
        this.r_vel = createVector(random(-2, 2), random(-2, 2));
        this.r_vel.setMag(0.5);

        
        this.r_r = random(255);
        this.r_g = random(255)
        this.r_b = random(255);

        this.r_height = random(15, 40);
        this.r_width = random(15, 80);
    }

    show_rect() {

        noStroke();
        rectMode(CENTER);
        fill(this.r_r, this.r_g, this.r_b);
        rect(this.r_pos.x, this.r_pos.y, this.r_height, this.r_width);

    }

    r_update() {

        this.r_pos.add(this.r_vel);

        if((this.r_pos.x > 300) || (this.r_pos.x < -300)) 
            this.r_vel.x *= -1;

        if((this.r_pos.y > 300) || (this.r_pos.y < -300))
            this.r_vel.y *= -1;
    }

    r_rotate(angle) { 
        rotate(angle); 
    }

    r_scale(s, y) { 
        scale(s, y) 
    }
}