var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, catImg23
var backgrounds, backgroundsImg;

function preload() {
    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    catImg3 = loadAnimation("cat4.png")
    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
    backgroundsImg = loadImage("garden.png");
}

function setup(){
    createCanvas(800,600);
    backgrounds = createSprite(400,300);
    backgrounds.addImage(backgroundsImg);

    cat = createSprite(700,500);
    cat.addAnimation("catBegin", catImg1);
    cat.addAnimation("catRunning", catImg2);
    cat.addAnimation("catStop", catImg3);
    cat.scale = 0.1;

    mouse = createSprite(100,500);
    mouse.addAnimation("mouseBegin", mouseImg1);
    mouse.addAnimation("mouseRunning", mouseImg2);
    mouse.addAnimation("mouseStop", mouseImg3);
    mouse.scale = 0.1;
    

}

function draw() {
    
    background(0);

    keyPressed();

    if (cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0;
        cat.changeAnimation("catStop");
        mouse.changeAnimation("mouseStop");
    }

    drawSprites();

    fill("black");
    text(mouseX + "," + mouseY, 10, 45);
}


function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.changeAnimation("catRunning");
        mouse.changeAnimation("mouseRunning");
    }
}