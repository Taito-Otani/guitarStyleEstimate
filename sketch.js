let classifier;

let label = 'listening...';

let soundModel = 'http://localhost:8000/model/';

let isLables = ["chor", "arp", "picked"];
let id = -1;

function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  // Draw the label in the canvas
  fill(255);
  textSize(width *0.1);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height / 2);

  if(isLables[0] == label){
    id = 0;
  }else if(isLables[1] == label){
    id = 1;
  }else if(isLables[1] == label){
    id = 2;
  }else{
    id = -1;
  }

}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
}
