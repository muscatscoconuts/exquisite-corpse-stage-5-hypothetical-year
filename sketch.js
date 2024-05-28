
let ballSystem = [];
let orangeSystem = [];
let font;
let mount,textBox,mountainside,Cave,InsideCave,orange,mountainside2,prints,river;
let tintDuration = 40; // duration of the tint effect in seconds
let tintStart;
let tintEnd;


//images preload
function preload (){
  font = loadFont('font/VCR_OSD_MONO_1.001.ttf')
  mount = loadImage('images/mount.png')
  textBox = loadImage('images/text box.png')
  mountainside = loadImage('images/stage1.png')
  Cave = loadImage('images/Cave.png')
  InsideCave = loadImage('images/insideCave.png')
  orange = loadImage('images/orange.png')
  mountainside2 = loadImage('images/outofcave.png')
  prints = loadImage('images/Prints.png')
  river = loadImage('images/river.png')
  
}


function setup() {
  createCanvas(800,800);
  
  for (x = 0; x < 30; x++){
    let rx = random(0,30);
    let ry = random(750,800);
    let rr = 10;
    ballSystem[x] = new Ball(rx,ry,rr);
  pixelDensity(1);
}
for (x = 0; x < 40; x++){
  let rx = random(250,560);
  let ry = random(180,390);
  let rr = 6;
  orangeSystem[x] = new Orange(rx,ry,rr);
}
tintStart = millis() + 40000; // 40 seconds from now
  tintEnd = tintStart + 40000; 
}

function draw() {
  background(100);
  
  if (millis() > tintStart && millis() < tintEnd) {
    tint(0, 0, 255); // blue tint
  } else {
    noTint(); // remove tint
  }
  image(mount,0,0,800,800);
  
  if (millis() > tintEnd) {
    tintStart = millis() + 40000; // 40 seconds from now
    tintEnd = tintStart + 40000; 
  }
  
  for (x = 0; x < ballSystem.length; x++){
    ballSystem[x].move();
    ballSystem[x].show();
    ballSystem[x].checkEdges();
  }
  for (x = 0; x < orangeSystem.length; x++){
  
    orangeSystem[x].show();
    
  }
 


}

class Ball {
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
   this.x = this.x + random (-4,5);
   this.y = this.y + random (-4,3);
  }

  show(){
    fill(255, 255, 255);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }

  checkEdges(){
    if (this.x < 15) {
      this.x = 15;
    } else if (this.x > width){
      this.x = 15;
    }
    if (this.y < 400){
      this.y = 800;
    } else if (this.y > 400){
      this.y + 400;
    }
  }

}

class Orange {
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }


  show(){
    fill(251, 147, 84);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }


}





