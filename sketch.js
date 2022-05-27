var speed;

function setup() {
    createCanvas(900, 700);
}

function draw() {
    background(0);
    speed = frameCount;

    // Centralize coordinate system to center of canvas
    translate(width / 2, height / 2);

    push();
    // Rotate sun around it's axis at speed / 3
    rotate(radians(speed / 3));
    celestialObj(color(255, 150, 0), 200); // SUN
    pop();

    push();
    // Earth orbits sun at velocity "speed"
    rotate(radians(speed));
    // Earth's orbit is 300 pixels
    translate(300, 0);
    //Earth rotates about it's axis at velocity "speed"
    rotate(radians(speed));
    celestialObj(color(0, 0, 255), 80); // EARTH

    // Reset rotation speed about Earth to 0
    rotate(radians(-speed));
    push();
    // Set rotation speed of Moon to twice Earth's 
    // rotation speed in opposite direction
    rotate(radians(-speed * 2));
    // Moon's orbit is 100 pixels
    translate(100, 0);
    celestialObj(color(255, 255, 255), 30); // MOON

    // Reset rotation speed about Moon to 0
    rotate(radians(speed * 2));
    push();
    // Set rotation speed of asteroid to four times
    // that of Moon in same direction Moon rotates.
    // Asteroid is tidally locked to Moon in the same
    // way Moon is tidally locked to Earth meaning it 
    // always shows the same side to the Moon.
    rotate(radians(-speed * 4));
    // Asteroid's orbit is 35 pixels
    translate(35, 0);
    celestialObj(color(255, 0, 0), 20); // ASTEROID
    pop();

    pop();

    pop();
}

function celestialObj(c, size) {
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size / 2, 0);
}
