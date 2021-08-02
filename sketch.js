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
let lightoff;
let street;
let panther;
let ghost;
let wave;
let island;

let checkbox1;
let checkbox2;
let checkbox3;
let checkbox4;
let checkbox5;
let checkbox6;


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
  lightoff = loadImage("light_off.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  sliderR = createSlider(0, 255, 159);
  sliderG = createSlider(0, 255, 55);
  sliderB = createSlider(0, 255, 76);
  sliderR.position(400 , 180);
  sliderG.position(400, 220);
  sliderB.position(400, 270);

 

  button = createButton('save');
  button.position(450, 700);
  button.mousePressed(savebook);

  checkbox1 = createCheckbox('Under the Wave', false);
  checkbox2 = createCheckbox('Dogs Go Wolf', false);
  checkbox3 = createCheckbox('Flower Hunters', false);
  checkbox4 = createCheckbox('The Midnight Zone', false);
  checkbox5 = createCheckbox('Ghosts and Empties', false);
  checkbox6 = createCheckbox('Above And Below', false);

  checkbox1.position(400,350);
  checkbox2.position(400,380);
  checkbox3.position(400,410);
  checkbox4.position(400,440);
  checkbox5.position(400,470);
  checkbox6.position(400,500);



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
  
  
  if (checkbox3.checked()) {
    image(light, -80,-910,2252.844,1467.144);
  } else{ image(lightoff,-80,-910,2252.844,1467.144);
  }
  
  if (checkbox1.checked()) {
    image(wave, x, y, 3000,1300);
  } else {
  }

  if (checkbox2.checked()){
    image(island,-1500,-570,3018.405,1696.799);
  } else {
  }

  if (checkbox4.checked()) {
    image(panther,-100, 280, 500, 329);
  } else {
  }

 

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
  

  if (checkbox5.checked()){
    tint(colourR, colourG, colourB,200);
    image(ghost,mouseX-1200, mouseY-900, 607.4,772.65);
  } else{
  }
 
  if(checkbox6.checked()){
    button = createImg('pngegg.png');
    button.position(435, 560);
    button.size(70,70);
    button.mousePressed(randomcolour);
    fill(0);
  }else{}

 

  

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
  box(191, 314, 8);
  
  translate(-99.8, -155, 6.6);
  tint(217,199,182,300);
  image(img,0,0,191.685, 313.365);

  translate(2,0,-13.2);
  image(back,0,0,191.685, 313.365);

  tint(colourR, colourG, colourB, 210);
  image(backhand,0,-2,191.685, 313.365);

  translate(0,0,13.3);
  image(img2,0,-2,191.685, 313.365);
}


