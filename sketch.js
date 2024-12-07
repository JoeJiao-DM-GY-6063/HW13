// 串口变量
let mSerial;
let connectButton;
let readyToReceive = false;

// 火柴状态
let state = "OFF"; // 火柴状态：ON 或 OFF
let md = 0;        // 火焰大小
let mr = 0;        // 火焰颜色

// 串口数据处理函数
function receiveSerial() {
  let line = mSerial.readUntil("\n");
  line = trim(line); // 去除多余空格
  if (!line) return;

  // 数据解析
  if (line === "ON") {
    state = "ON"; // 收到 ON 指令，保持点亮状态
  } else if (line === "OFF") {
    state = "OFF"; // 收到 OFF 指令，保持熄灭状态
  }

  // 准备接收下一条数据
  readyToReceive = true;
}

// 串口连接函数
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

  // 初始化串口
  mSerial = createSerial();

  // 串口按钮
  connectButton = createButton("连接串口");
  connectButton.position(width / 2 - 50, height / 2);
  connectButton.mousePressed(connectToSerial);
}

function draw() {
  background(31, 32, 36);

  // 绘制火柴杆
  fill(64, 53, 40);
  rect(width / 2, height - 250, 30, 500);

    // 绘制火焰
    noStroke();
    fill(mr, 150, 50);
    ellipse(width / 2, height - 520, md);

  // 绘制火柴头
  fill(state === "ON" ? 245 : 69, 100, 81);
  ellipse(width / 2, height - 500, 40, 60);



  // 更新火焰状态
  if (state === "ON") {
    md = lerp(md+30, 150, 0.1); // 火焰逐渐增大
    mr = lerp(mr, 255, 0.1); // 火焰变亮
  } else {
    md = lerp(md, 0, 0.1);   // 火焰逐渐减小
    mr = lerp(mr, 0, 0.1);   // 火焰变暗
  }

  // 串口数据读取
  if (mSerial.opened() && mSerial.availableBytes() > 0) {
    receiveSerial();
  }
}