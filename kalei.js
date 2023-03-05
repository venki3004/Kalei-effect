
let symmetry = 6;
let circleObj = [];
let rectObj = [];
let triObj = [];
let arcObj = []

function setup() {

    createCanvas(600, 600);
    angleMode(DEGREES);

    for (let i = 0; i < 5; i++) {
        q = new Rect();
        rectObj.push(q);
    }

    for (let j = 0; j < 5; j++) {
        p = new Circle();
        circleObj.push(p);
    }

    for (let k = 0; k < 5; k++) {
        r = new Triangle();
        triObj.push(r);
    }

    for (let l = 0; l < 5; l++) {
        s = new Arc();
        arcObj.push(s);
    }

    console.log (
        circleObj.length, 
        rectObj.length, 
        triObj.length,
        arcObj.length
    );

}


function draw() {

    translate(width / 2, height / 2);
    background(30, 30, 30);

    for(let k = 0; k < rectObj.length; k++) {

        let angle = 360/symmetry;
        for (let j = 0; j < symmetry; j++) {

            rectObj[k].r_rotate(angle);
            rectObj[k].show_rect();
            push();
            rectObj[k].r_scale(1, -1);
            rectObj[k].show_rect();
            pop();
            rectObj[k].r_update();  
            
        }

    }


    for (let l = 0; l < circleObj.length; l++) {
        
        let angle = 360/symmetry;
        for (let m = 0; m < symmetry; m++) {

            circleObj[l].circle_rotate(angle);
            circleObj[l].show_circle();
            push();
            circleObj[l].circle_scale(1, -1);
            circleObj[l].show_circle();
            pop();
            circleObj[l].update();  
            
        }

    }

    for (let n = 0; n < triObj.length; n++) {
        
        let angle = 360/symmetry;
        for (let o = 0; o < symmetry; o++) {

            triObj[n].triangle_rotate(angle);
            triObj[n].show_triangle();
            push();
            triObj[n].triangle_scale(1, -1);
            triObj[n].show_triangle();
            pop();
            triObj[n].triangle_update();  
            
        }

    }


    for (let p = 0; p < arcObj.length; p++) {

        let angle = 360/symmetry;
        for (let q = 0; q < symmetry; q++) {

            arcObj[p].arc_rotate(angle);
            arcObj[p].show_arc();
            push();
            arcObj[p].arc_scale(1, -1);
            arcObj[p].show_arc();
            pop();
            arcObj[p].arc_update();  
            
        }

    }

   
}
