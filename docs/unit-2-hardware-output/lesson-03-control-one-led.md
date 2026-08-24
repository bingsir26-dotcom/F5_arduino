# 第 10 課：把 if 的結果變成兩種燈號

## 今課可以做到甚麼？

- 把單元一的 `if ... else` 規則直接改成硬件輸出。
- 用紅燈與綠燈表示兩種不同狀態。
- 同時在 Serial Monitor 和 LED 檢查程式結果。

## 開始前：想一想

如果程式判斷「溫度偏高而且課室有人」，只亮紅燈；否則只亮綠燈。你怎樣確保紅燈亮時，綠燈真的熄滅？

## 先畫出狀態規則

| 條件 | Serial Monitor 顯示 | LED 回應 |
| --- | --- | --- |
| 溫度 > 26，而且有人使用 | 狀態：建議通風 | 紅燈亮、綠燈熄 |
| 其他情況 | 狀態：暫時合適 | 綠燈亮、紅燈熄 |

<div class="tinkercad-shot" role="note">
  <span class="tinkercad-shot__tag">待補 Tinkercad 截圖 C</span>
  <strong>紅、綠兩盞 LED 的狀態畫面</strong>
  <p>拍一個紅燈亮、綠燈熄的運行畫面；程式窗最好能看見條件判斷。</p>
  `建議檔名：lesson-10-if-to-two-leds.png`
</div>

## 跟著做：讓條件控制兩盞燈

兩盞 LED 分別接到 D8 和 D9，每盞燈都要各有一個電阻並回到 GND。

~~~cpp
const int normalLed = 8;
const int warningLed = 9;
float temperature = 28.5;
bool classInUse = true;

void setup() {
  Serial.begin(9600);
  pinMode(normalLed, OUTPUT);
  pinMode(warningLed, OUTPUT);

  if (temperature > 26 && classInUse) {
    Serial.println("狀態：建議通風");
    digitalWrite(normalLed, LOW);
    digitalWrite(warningLed, HIGH);
  } else {
    Serial.println("狀態：暫時合適");
    digitalWrite(normalLed, HIGH);
    digitalWrite(warningLed, LOW);
  }
}

void loop() {
}
~~~

**預期效果：** 溫度 28.5、課室有人時，顯示「建議通風」，紅燈亮、綠燈熄。

## 再試一次：測試另一種狀態

只改：

~~~cpp
float temperature = 25.0;
~~~

預期：顯示「暫時合適」，綠燈亮、紅燈熄。先預測結果，再開始模擬檢查。

## 易錯位

| ✕ 錯誤 | 為甚麼 | 修正方法 |
| --- | --- | --- |
| 只亮紅燈，忘記關綠燈 | 上一次的輸出可能仍保留 | 每個狀態都明確設定兩盞燈 |
| 兩盞 LED 共用一個電阻 | 難以保護和控制每盞燈 | 每盞 LED 各有一個電阻 |
| 只看 LED，不看文字 | 看不出程式判斷是否正確 | 同時保留狀態文字作證據 |
| 以為 `&&` 代表任何一項成立 | `&&` 要兩項都成立 | 對照第 3 課條件意思 |

## 你來做

- **基礎題**：完成「高溫亮紅燈；否則亮綠燈」。
- **標準題**：加入 `classInUse`，只有有人使用時才啟動紅燈。
- **挑戰題**：把名稱改成符合圖書館或實驗室的情境。

## 本課小結

- 同一條 if 規則可同時控制文字和硬件。
- 每個狀態要明確寫出哪些輸出開啟、哪些關閉。
- Serial Monitor 是硬件實作中的程式檢查證據。

## 離堂前 3 分鐘

1. 紅燈亮時，為甚麼仍要寫一行把綠燈關閉？
2. 溫度 25.0 時，應亮哪一盞燈？
3. `&&` 要求哪兩件事同時成立？
