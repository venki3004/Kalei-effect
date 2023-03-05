class Arc {

    constructor () {

        this.a_pos = createVector(random(-200, 200), random(-200, 200));
        this.a_vel = createVector(random(-1, 1), (-1, 1));
        this.a_vel.setMag(0.5)

        this.height_width = random(50, 150);
      
        this.a_start = random(10, 50);
        this.a_stop = this.a_start - 190;

        this.a_r = random(255);
        this.a_b = random(255);
        this.a_g = random(255);

    }

    show_arc() {

        strokeWeight(4);
        stroke(this.a_r, this.a_g, this.a_b);
        noFill();
        arc (
            
            this.a_pos.x,
            this.a_pos.y,
            this.height_width,
            this.height_width,
            this.a_start,
            this.a_stop

        );
    }

    arc_update() {
        
        this.a_pos.add(this.a_vel);

        if((this.a_pos.x > 250) || (this.a_pos.x < -250)) 
            this.a_vel.x *= -1;

        if((this.a_pos.y > 250) || (this.a_pos.y < -250))
            this.a_vel.y *= -1;

    }

    arc_rotate(angle) {
        
        rotate(angle);

    }

    arc_scale(s, y) {

        scale(s, y);

    }


}