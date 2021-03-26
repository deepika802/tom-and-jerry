var background1,backgroundImg;
var cat,catImg;
var mice,miceImg;
function preload() {
    backgroundImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    miceImg = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png");
    catImg3 = loadAnimation("images/cat4.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here

}

function draw() {

    background(255);

    background1 = createSprite(600,400,20,20);
    background1.addAnimation("BI",backgroundImg);


    cat = createSprite(900,600,20,20);
    cat.addAnimation("CI",catImg);
    cat.scale = 0.1
    
    mice = createSprite(200,600,20,20);
    mice.addAnimation("MI",miceImg);
    mice.scale = 0.1;

    if(cat.x - mice.x<(cat.width-mice.width)/2){
    cat.addAnimation("catIMG3",catImg3);
    cat.changeAnimation("catIMG3");
    }
    //Write condition here to evalute if tom and jerry collide
    
    keyPressed();

    drawSprites();
}


function keyPressed(){


    if(keyCode === LEFT_ARROW){
        cat.velocityX = -2;
        cat.addAnimation("catrunning",catImg2);
        cat.changeAnimation("catrunning");
    }
  //For moving and changing animation write code here


}
