# 第 11 課：讓提示燈按節奏工作

## 今課可以做到甚麼？

- 用 `delay()` 令 LED 以固定節奏閃爍。
- 將「需要注意」與「穩定顯示」兩種訊號分開設計。
- 在 Serial Monitor 留下節奏測試紀錄。

## 開始前：想一想

紅燈一直亮和紅燈每秒閃一次，傳達的感覺一樣嗎？燈號除了顏色，也可用節奏令提示更容易被看見；不過先要說清楚：甚麼情況需要閃爍？

## `delay()` 讓程式暫停一會

~~~cpp
delay(1000);
~~~

這句表示約等待 1000 毫秒，也就是 1 秒。把亮燈、等待、熄燈、等待依次放在 `loop()`，LED 就會不斷重複同一個節奏。

## 跟著做：每秒閃一次注意燈

保留第 9 課的一盞 LED 接法，使用 D8。

~~~cpp
const int warningLed = 8;

void setup() {
  Serial.begin(9600);
  pinMode(warningLed, OUTPUT);
}

void loop() {
  Serial.println("注意燈：亮");
  digitalWrite(warningLed, HIGH);
  delay(1000);

  Serial.println("注意燈：熄");
  digitalWrite(warningLed, LOW);
  delay(1000);
}
~~~

**預期效果：** LED 亮約 1 秒、熄約 1 秒，持續重複；Serial Monitor 也會交替顯示「亮」和「熄」。

<div class="tinkercad-shot" role="note">
  <span class="tinkercad-shot__tag">待補 Tinkercad 截圖 D</span>
  <strong>提示燈閃爍的程式與輸出</strong>
  <p>截圖不一定能顯示動態；請讓畫面看見 delay(1000)、亮起的 LED，以及 Serial Monitor 最近的亮／熄紀錄。</p>
  `建議檔名：lesson-11-blink-and-log.png`
</div>

## 再試一次：改成短促提示

把兩個等待時間改成 `delay(200);`，再觀察節奏。用一句話描述：較快閃爍適合用作甚麼提示？較慢閃爍又可能表示甚麼？

## 易錯位

| ✕ 錯誤 | 為甚麼 | 修正方法 |
| --- | --- | --- |
| 亮燈後沒有 LOW | LED 只會保持亮著 | 在下一段明確寫 LOW |
| 亮與熄都沒有等待 | 畫面變化太快，看不出節奏 | 在每個狀態後使用 delay() |
| 把 delay() 寫在 setup() | 只會閃一次後結束 | 重複的節奏指令要放在 loop() |
| 未說明閃燈意思 | 作品只剩效果，沒有訊息 | 為節奏加上清楚狀態名稱 |

## 你來做

- **基礎題**：讓一盞 LED 每秒亮、熄一次。
- **標準題**：設計快閃和慢閃兩種節奏，寫下各代表甚麼。
- **挑戰題**：在每次亮燈前，先在 Serial Monitor 顯示「提示即將開始」。

## 本課小結

- delay() 讓程式暫停，配合 loop() 可形成規律節奏。
- 閃爍應有明確意思，不只是裝飾。
- 文字輸出可幫助確認看不見的程式順序。

## 離堂前 3 分鐘

1. 為甚麼閃爍程式要放在 loop()？
2. delay(200) 和 delay(1000) 哪一個較快？
3. Serial Monitor 紀錄有甚麼用途？
