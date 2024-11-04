let baseSize = 50; // 大圓的基礎大小
let spacing = baseSize * 0.9; // 每個「米老鼠」圖案之間的間距

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  // 計算動態大小，讓大圓變化，而耳朵保持不變
  let dynamicSize = baseSize + sin(frameCount * 0.05) * 15;

  // 繪製「米老鼠」形狀的線條背景圖案
  stroke(0, 100, 255); // 藍色線條
  strokeWeight(2);
  noFill(); // 不填充，僅顯示輪廓線

  for (let x = 0; x < width + spacing; x += spacing) {
    for (let y = 0; y < height + spacing; y += spacing) {
      // 繪製動態變化的大圓
      ellipse(x, y, dynamicSize); // 大圓

      // 繪製固定大小的耳朵
      let earOffset = baseSize * 0.4;
      ellipse(x - earOffset, y - earOffset, baseSize * 0.5); // 左耳
      ellipse(x + earOffset, y - earOffset, baseSize * 0.5); // 右耳
    }
  }

  // 設置翻轉效果，模擬水平和垂直方向上的來回翻轉
  let scaleX = sin(frameCount * 0.02); // 水平方向的翻轉效果
  let scaleY = cos(frameCount * 0.02); // 垂直方向的翻轉效果

  // 繪製文字
  textSize(80);
  textAlign(CENTER, CENTER);
  fill('#8F2D56'); // 前景顏色
  stroke('#8F2D56');
  strokeWeight(8);

  push(); // 保存當前坐標系狀態
  translate(width / 2, height / 2); // 將原點移至畫布中央
  scale(scaleX, scaleY); // 同時在水平和垂直方向上進行縮放，模擬翻轉效果
  text("TEASAN", 0, 0); // 畫出翻轉效果的文字
  pop(); // 恢復坐標系狀態
}



