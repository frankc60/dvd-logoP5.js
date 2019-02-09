
let x, y;

let xspeed = 1;
let yspeed = 1;

function preload() {
    img = loadImage('dvd.png');
}

function setup() {
    createCanvas(500, 350);
    background(0);
    x = random(width-img.width);
    y = random(height-img.height);
    tint(0, 153, 204);
}

function draw() {

   
    image(img,x, y);

    x = x + xspeed;
    y = y + yspeed;

    if (x + img.width >= width || x <= 0) {
        xspeed = xspeed * -1;
        tint(random(255), random(255), random(255));
    }

    if (y + img.height >= height || y <= 0) {
        yspeed = yspeed * -1;
        tint(0, 153, 204);
        tint(random(255), random(255), random(255));
    }
}