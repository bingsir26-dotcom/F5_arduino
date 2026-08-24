# 第 9 課：接好第一盞由程式控制的 LED

## 今課可以做到甚麼？

- 接出一個由 Arduino **8 號腳位**控制的 LED 回路。
- 說出 LED、電阻和 GND 在回路中的作用。
- 用 `pinMode()` 和 `digitalWrite()` 讓 LED 亮起或熄滅。

## 開始前：想一想

上一課的程式只能在螢幕顯示「溫度偏高」。如果想把同一句提示交給一盞燈，除了程式之外，還要確保甚麼？LED 需要正確方向、電阻保護和一條回到 GND 的完整路徑。

## 程式腳位也是電路的一部分

今天的路徑是：

~~~text
Arduino D8 → 電阻（220 Ω 或 330 Ω）→ LED 正極 → LED 負極 → GND
~~~

- **D8**：程式輸出的位置。
- **電阻**：限制電流，保護 LED。
- **LED**：有方向；較長腳通常是正極，較短腳通常是負極。
- **GND**：讓回路完成。

<div class="tinkercad-shot" role="note">
  <span class="tinkercad-shot__tag">待補 Tinkercad 截圖 B</span>
  <strong>第一盞 LED 的接線近圖</strong>
  <p>清楚拍到 Arduino 的 D8、220 Ω／330 Ω 電阻、LED 兩腳與 GND；最好把導線顏色整理好，方便學生對照。</p>
  `建議檔名：lesson-09-one-led-wiring.png`
</div>

## 跟著做：讓 D8 控制亮燈

1. 在 Arduino 旁放入一粒 LED 與一個電阻。
2. D8 接到電阻的一端；電阻另一端接 LED 正極。
3. LED 負極接到 Arduino 的 **GND**。
4. 使用程式，開始模擬。

~~~cpp
const int statusLed = 8;

void setup() {
  pinMode(statusLed, OUTPUT);
  digitalWrite(statusLed, HIGH);
}

void loop() {
}
~~~

**預期效果：** LED 亮起並保持亮著。

- `const int statusLed = 8;`：替 8 號腳位取有意義的名字。
- `pinMode(..., OUTPUT)`：告訴 Arduino 這個腳位負責輸出。
- `digitalWrite(..., HIGH)`：令 LED 亮起。

## 再試一次：只改輸出狀態

把 `HIGH` 改成 `LOW`。接線和其他程式都不變，LED 會熄滅。這證明燈的狀態由程式控制。

## 易錯位

| ✕ 錯誤 | 為甚麼 | 修正方法 |
| --- | --- | --- |
| LED 沒有電阻 | 電流可能過大 | 在同一條回路串聯 220 Ω 或 330 Ω 電阻 |
| LED 接反 | LED 有方向，通常不會亮 | 檢查正極與負極，交換 LED 方向 |
| 程式寫 D8，電線接 D9 | 程式與電路不一致 | 兩邊統一使用同一腳位 |
| 忘記接回 GND | 回路沒有完成 | LED 負極必須有回到 GND 的路徑 |

## 你來做

- **基礎題**：讓 D8 控制一盞紅色 LED 長亮。
- **標準題**：把 LED 改接到 D7，並只修改一行設定值。
- **挑戰題**：把電阻改為 1 kΩ，觀察亮度有甚麼不同。

## 本課小結

- 程式、腳位、導線和 LED 回路必須互相對應。
- 電阻與 GND 是 LED 正常工作的必要部分。
- `pinMode()` 設定用途；`digitalWrite()` 決定輸出狀態。

## 離堂前 3 分鐘

1. 本課 LED 的完整路徑由 D8 經過哪些部分回到哪裡？
2. 為甚麼不能省略電阻？
3. `HIGH` 改為 `LOW` 後，LED 應有甚麼變化？
