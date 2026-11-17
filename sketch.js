let beat;
let analyzer;

function preload() {
  beat = loadSound('beat.mp3');
}

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');
  analyzer = new p5.Amplitude();
  analyzer.setInput(beat);
}

function mousePressed() {
  if (beat.isPlaying()) {
    beat.stop();
  } else {
    beat.loop();
  }
}

function draw() {
  background(240);  
  let rms = analyzer.getLevel();
  fill(50, 150, 200); 
  noStroke();
  let size = 50 + rms * 400;
  ellipse(width/2, height/2, size, size);
}