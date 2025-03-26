let seaGrass = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 設置畫布大小為視窗大小
  clear(); // 設置畫布背景透明

  // 創建 70 個海草，確保它們的 x 和 y 值在畫布範圍內
  for (let i = 0; i < 70; i++) {
    seaGrass.push(new SeaGrass(random(width), height)); // 將 y 設置為畫布的底部
  }
}

function draw() {
  clear(); // 清除畫布，保持背景透明

  // 繪製海草
  for (let i = 0; i < seaGrass.length; i++) {
    seaGrass[i].update();
    seaGrass[i].display();
  }
}

// 定義海草類別
class SeaGrass {
  constructor(x, y) {
    this.x = constrain(x, 0, width); // 確保 x 在畫布範圍內
    this.y = constrain(y, 0, height); // 確保 y 在畫布範圍內
    this.angle = 0; // 初始角度為 0
    this.length = 10 * 37.795275591; // 海草的長度，50 公分轉換為像素
    this.amplitude = random(7.5, 7.5); // 減小波動幅度
    this.frequency = random(0.05, 0.02); // 減小波動頻率，讓搖擺更慢
    this.color = color(random(50, 255), random(50, 255), random(0, 255), 150); // 隨機顏色，帶透明度
    this.segments = []; // 儲存海草的節點位置

    // 初始化海草的節點
    for (let i = 0; i < 10; i++) {
      this.segments.push({ x: 0, y: -i * (this.length / 10) }); // 節點從底部開始向上遞減
    }
  }

  update() {
    // 更新每個節點的擺動
    for (let i = 0; i < this.segments.length; i++) {
      let offset = sin(frameCount * this.frequency + i * 10.5) * this.amplitude * (i / this.segments.length);
      this.segments[i].x = offset;
    }
  }

  display() {
    push();
    translate(this.x, this.y); // 將繪製原點移到海草的基點
    stroke(this.color); // 使用隨機顏色
    strokeWeight(20); // 設定線條寬度
    noFill();

    // 繪製曲線的海草
    beginShape();
    for (let i = 0; i < this.segments.length; i++) {
      curveVertex(this.segments[i].x, this.segments[i].y);
    }
    endShape();
    pop();
  }
}