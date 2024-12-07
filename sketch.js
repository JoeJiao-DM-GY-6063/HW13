let mSerial;
let connectButton;
let readyToReceive = false;


let state = "OFF"; 
let md = 0;
let mr = 0;

function receiveSerial() {
  let line = mSerial.readUntil("\n");
  line = trim(line);
  if (!line) return;


  if (line === "ON") {
    state = "ON";
  } else if (line === "OFF") {
    state = "OFF";
  }

  readyToReceive = true;
}

function connectToSerial() {
  if (!mSerial.opened()) {
    mSerial.open(9600);
    readyToReceive = true;
    connectButton.hide();
  }
}

function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);

  mSerial = createSerial();

  connectButton = createButton("connect");
  connectButton.position(width / 2 - 50, height / 2);
  connectButton.mousePressed(connectToSerial);
}

function draw() {
  background(31, 32, 36);


  fill(64, 53, 40);
  rect(width / 2, height - 250, 30, 500);

    noStroke();
    fill(mr, 150, 50);
    ellipse(width / 2, height - 520, md);

  fill(state === "ON" ? 245 : 69, 100, 81);
  ellipse(width / 2, height - 500, 40, 60);



 
  if (state === "ON") {
    md = lerp(md+30, 150, 0.1); //flame bigger
    mr = lerp(mr, 255, 0.1); //brighter
  } else {
    md = lerp(md, 0, 0.1);   //smaller
    mr = lerp(mr, 0, 0.1);   //darker
  }

  if (mSerial.opened() && mSerial.availableBytes() > 0) {
    receiveSerial();
  }
}