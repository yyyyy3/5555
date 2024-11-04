let baseSize = 50; // 大圓的基礎大小
let spacing = baseSize * 0.9; // 每個「米老鼠」圖案之間的間距

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220); // 固定背景顏色

  // 動態改變圓圈顏色
  let r = 127 + 127 * sin(frameCount * 0.03);
  let g = 127 + 127 * sin(frameCount * 0.04 + PI / 3);
  let b = 127 + 127 * sin(frameCount * 0.05 + (2 * PI) / 3);

  // 設置圓圈顏色
  stroke(r, g, b);
  strokeWeight(2);
  noFill(); // 不填充，僅顯示輪廓線

  for (let x = 0; x < width + spacing; x += spacing) {
    for (let y = 0; y < height + spacing; y += spacing) {
      // 計算每個圓圈與滑鼠的距離
      let d = dist(mouseX, mouseY, x, y);
      // 根據距離來縮小圓圈的大小，距離越近，圓圈越小
      let dynamicSize = map(d, 0, width, baseSize * 0.1, baseSize);

      // 繪製「米老鼠」圖案的大圓
      ellipse(x, y, dynamicSize);

      // 繪製固定大小的耳朵
      let earOffset = baseSize * 0.4;
      ellipse(x - earOffset, y - earOffset, dynamicSize * 0.5); // 左耳
      ellipse(x + earOffset, y - earOffset, dynamicSize * 0.5); // 右耳
    }
  }

  // 繪製文字翻轉效果
  let scaleX = sin(frameCount * 0.02);
  let scaleY = cos(frameCount * 0.02);

  textSize(80);
  textAlign(CENTER, CENTER);
  fill('#8F2D56');
  stroke('#8F2D56');
  strokeWeight(8);

  push();
  translate(width / 2, height / 2);
  scale(scaleX, scaleY);
  text("TAeSAN", 0, 0);
  pop();
}
