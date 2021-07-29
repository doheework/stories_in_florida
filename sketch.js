let img;
let img2;
let controller;
let back;
let backhand;
let stick;
let stickhand;
let dice;
let sliderR;
let sliderG;
let sliderB;
let x, y;
let w = -0.3;
let h = -0.3;

let light;
let street;
let panther;
let ghost;
let wave;
let island;

let img1;

function preload(){
  img = loadImage("3delement.png");
  img2 = loadImage("hand.png");
  controller = loadImage("controller.png");
  back = loadImage("backcover.png");
  backhand = loadImage("backhand.png");
  stick = loadImage("element_modified.png");
  stickhand = loadImage("hands.png");
  light = loadImage("light.gif");
  street = loadImage("street.png");
  panther = loadImage("panther.png");
  ghost = loadImage("ghost.png");
  wave = loadImage("lowwave.png");
  island = loadImage("island.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  sliderR = createSlider(0, 255, 159);
  sliderG = createSlider(0, 255, 55);
  sliderB = createSlider(0, 255, 76);
  sliderR.position(400 , 180);
  sliderG.position(400, 230);
  sliderB.position(400, 280);

  button = createImg('pngegg.png');
  button.position(435, 390);
  button.size(70,70);
  button.mousePressed(randomcolour);

  button = createButton('save');
  button.position(450, 720);
  button.mousePressed(savebook);

  saveCanvas =  createGraphics(800, windowHeight);

  x = -1200;
  y = -500;

}


function savebook(){
  let c = get(800, 0, 800, windowHeight);
  saveCanvas.image(c, 0, 0);
  save(saveCanvas, "storiesinflorida.png");
  
}

function randomcolour(){
  var val = random(0,255);
  var ran = random(0,255);
  var dom = random(0,255);
  sliderR.value(val);
  sliderB.value(ran);
  sliderG.value(dom);
}

function draw() {
  
  let colourR = sliderR.value();
  let colourG = sliderG.value();
  let colourB = sliderB.value();

  background(250);
  
  translate(0,0,-180);
  image(light, -80,-910,2252.844,1467.144);
  image(wave, x, y, 3000,1300);
  image(island,-2200,-570,3018.405,1696.799);
  image(panther,-1100, 280, 500, 329);
  
  x = x + w;
  if(x<-1210){
    w = 0.2;
  } else{if(-1190<x){
    w = -0.3;
  }}
 
  y = y + h;
  if (y < -520) {
    h = 0.3;
  } else{if(-100 < y){
    h = -0.2;
  }}

 
  translate(0,0,180);
  image(controller, -600,-400,  459,809);

  tint(colourR, colourG, colourB,200);
  image(ghost,mouseX-1200, mouseY-900, 607.4,772.65);

  fill(colourR,colourG,colourB);
  rect(-450,70, 161.58, 127.68);
  tint(217,199,182,300);
  image(stick,-450,70, 161.58, 127.68);
  tint(colourR, colourG, colourB,200);
  image(stickhand, -450,70, 161.58, 127.68);


  translate(250,40,200);
  fill(colourR,colourG,colourB);
  noStroke();
  push();
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  box(191.685, 313.365, 13);
  pop();
 
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  translate(2,0,0);
  fill(230);
  box(191.685, 313.365, 8);
  
  translate(-99.8, -155, 6.6);
  tint(217,199,182,300);
  image(img,0,0,191.685, 313.365);

  translate(2,0,-13.2);
  image(back,0,0,191.685, 313.365);

  tint(colourR, colourG, colourB, 210);
  image(backhand,0,0,191.685, 313.365);

  translate(0,0,13.3);
  image(img2,0,0,191.685, 313.365);
}


