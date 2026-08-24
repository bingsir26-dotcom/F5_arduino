# 第 12 課：三盞燈，一個清楚的狀態系統

## 今課可以做到甚麼？

- 用三盞 LED 表示「通行／準備／停止」三種狀態。
- 確保每次只亮起一種狀態，避免訊息混亂。
- 用三個函式整理不同燈號的工作。

## 開始前：想一想

交通燈最重要的不是三種顏色，而是每個人一眼知道現在應該做甚麼。假如紅綠燈同時亮，訊息會變得怎樣？今天會把「一種狀態、一個清楚回應」寫成程式規則。

## 三個狀態，三句人話

| 狀態函式 | 燈號 | 人看到後的意思 |
| --- | --- | --- |
| `showGo()` | 綠燈 | 可以通行／可以進入 |
| `showWait()` | 黃燈 | 即將轉換，請準備 |
| `showStop()` | 紅燈 | 暫停，請等候 |

<div class="tinkercad-shot" role="note">
  <span class="tinkercad-shot__tag">待補 Tinkercad 截圖 E</span>
  <strong>三色 LED 狀態系統</strong>
  <p>拍出 Arduino、三盞 LED、三個電阻和 GND。可選擇黃燈或紅燈亮起的一刻，但要清楚看見其他兩盞熄滅。</p>
  `建議檔名：lesson-12-three-status-leds.png`
</div>

## 跟著做：交通燈的三種狀態

綠、黃、紅三盞 LED 分別接到 D8、D9、D10；每盞 LED 都有自己的電阻並回到 GND。

~~~cpp
const int goLed = 8;
const int waitLed = 9;
const int stopLed = 10;

void showGo() {
  digitalWrite(goLed, HIGH);
  digitalWrite(waitLed, LOW);
  digitalWrite(stopLed, LOW);
}

void showWait() {
  digitalWrite(goLed, LOW);
  digitalWrite(waitLed, HIGH);
  digitalWrite(stopLed, LOW);
}

void showStop() {
  digitalWrite(goLed, LOW);
  digitalWrite(waitLed, LOW);
  digitalWrite(stopLed, HIGH);
}

void setup() {
  pinMode(goLed, OUTPUT);
  pinMode(waitLed, OUTPUT);
  pinMode(stopLed, OUTPUT);
}

void loop() {
  showGo();
  delay(3000);
  showWait();
  delay(1000);
  showStop();
  delay(3000);
}
~~~

**預期效果：** 綠燈 3 秒 → 黃燈 1 秒 → 紅燈 3 秒，持續重複；每一刻只亮一盞燈。

## 再試一次：改變狀態的用途

程式結構不變，把三種狀態改成「圖書館安靜提示」：`showQuiet()`、`showReminder()`、`showDoNotEnter()`。改名不是為了好看，而是讓程式和作品情境一致。

## 易錯位

| ✕ 錯誤 | 為甚麼 | 修正方法 |
| --- | --- | --- |
| 只寫要亮的燈，沒關其他燈 | 上一個狀態的輸出可能仍保持開啟 | 每個函式都設定三盞燈 |
| 三盞 LED 共用電阻 | 不能清楚保護和控制每盞燈 | 每盞 LED 各用一個電阻 |
| 只把呼叫位置改成新名稱 | 函式宣告仍是舊名 | 同時改函式宣告與呼叫位置 |
| 三種燈號沒有文字意思 | 觀眾看不懂作品規則 | 為每個狀態寫一句人話 |

## 你來做

- **基礎題**：完成三燈交通燈，確保一次只亮一盞。
- **標準題**：修改三種狀態的時間，寫下改動理由。
- **挑戰題**：改成校園情境，並替三個函式取符合情境的名字。

## 本課小結

- 狀態系統的重點是每個狀態有清楚意思。
- 每個狀態都要同時設定哪盞亮、哪盞熄。
- 函式可把複雜燈號規則整理成容易閱讀的名稱。

## 離堂前 3 分鐘

1. 為甚麼 showGo() 內也要寫黃燈與紅燈熄滅？
2. showWait() 代表甚麼意思？
3. 若改成圖書館提示，三個狀態可以怎樣命名？
