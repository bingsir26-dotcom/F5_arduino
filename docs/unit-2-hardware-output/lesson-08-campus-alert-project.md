# 第 15 課：設計一個校園提示系統

## 今課可以做到甚麼？

- 把一個校園情境轉成清楚的資料、規則和燈號回應。
- 用 Arduino 和至少三盞 LED 完成可運行的 Tinkercad 模擬。
- 用截圖、程式與測試紀錄向沒有學過 Arduino 的人解釋作品。

## 開始前：想一想

一個好提示系統，不是「燈越多越厲害」，而是人看到它後，知道現在的情況和應該怎樣做。你的作品想幫誰減少哪一個誤會、等待或危險？

## 由情境走到作品

![校園提示系統作品流程](/images/project-brief.svg)

請先完成這張規則表，才開始接線：

| 項目 | 你的答案 |
| --- | --- |
| 作品給誰看？ | 例如：進入實驗室的同學 |
| 要提示甚麼？ | 例如：能否進入、需要等候、不可進入 |
| 哪些資料決定狀態？ | 例如：活動是否進行、是否安全、倒數是否結束 |
| 三盞燈分別代表甚麼？ | 例如：綠＝可進入、黃＝請等候、紅＝暫停進入 |

## 跟著做：作品最低版本

這只是能運行的起點；最後要改成自己的情境、名稱、燈號意思和時間安排。

~~~cpp
const int readyLed = 8;
const int waitLed = 9;
const int stopLed = 10;

void showReady() {
  digitalWrite(readyLed, HIGH);
  digitalWrite(waitLed, LOW);
  digitalWrite(stopLed, LOW);
}

void showWait() {
  digitalWrite(readyLed, LOW);
  digitalWrite(waitLed, HIGH);
  digitalWrite(stopLed, LOW);
}

void showStop() {
  digitalWrite(readyLed, LOW);
  digitalWrite(waitLed, LOW);
  digitalWrite(stopLed, HIGH);
}

void setup() {
  Serial.begin(9600);
  pinMode(readyLed, OUTPUT);
  pinMode(waitLed, OUTPUT);
  pinMode(stopLed, OUTPUT);
}

void loop() {
  Serial.println("狀態：可以進入");
  showReady();
  delay(3000);
  Serial.println("狀態：請等候");
  showWait();
  delay(1000);
  Serial.println("狀態：暫停進入");
  showStop();
  delay(3000);
}
~~~

<div class="tinkercad-shot" role="note">
  <span class="tinkercad-shot__tag">待補 Tinkercad 截圖 G</span>
  <strong>完成作品的展示截圖</strong>
  <p>畫面要清楚拍到三盞 LED、Arduino、整齊接線，以及一個正在亮起的狀態。若可行，同時顯示 Serial Monitor 的對應狀態文字。</p>
  `建議檔名：lesson-15-final-project.png`
</div>

## 再試一次：改成你的校園情境

> 這個系統是給 ______ 看，想提示他們 ______。
> 綠燈代表 ______；黃燈代表 ______；紅燈代表 ______。
> 我先在 Serial Monitor 顯示 ______，再讓 ______ 燈亮起。
> 我測試後發現 ______，所以把 ______ 改成 ______。

## 易錯位

| ✕ 錯誤 | 為甚麼 | 修正方法 |
| --- | --- | --- |
| 三盞燈有亮，但沒有人看得懂 | 沒有設計狀態意思 | 為每盞燈／每個狀態寫一句人話 |
| 程式仍叫 redLed，但情境已是圖書館 | 名稱和作品語意脫節 | 改成 quietLed、pleaseWaitLed 等 |
| 只交程式碼，沒有模擬畫面 | 別人無法確認作品真的運行 | 附上清楚的 Tinkercad 截圖或連結 |
| 作品看似成功，但沒有測試紀錄 | 不知道是否真的逐一檢查 | 記錄至少一次問題、檢查和結果 |

## 你來做

- **基礎題**：完成一個三燈校園提示系統。
- **標準題**：讓三種狀態的時間符合你的情境，並寫出原因。
- **挑戰題**：加入一個全熄／待機狀態，說明它何時出現。

## 本課小結

- 作品先從「幫誰解決甚麼提示問題」開始。
- 程式先得出狀態，再把狀態交給 LED 顯示。
- 一個可展示作品要同時有情境、電路、程式、測試和說明。

## 離堂前 3 分鐘

1. 你的三盞燈分別代表甚麼？
2. 你的程式如何讓觀眾知道目前是哪一種狀態？
3. 如果同學只看截圖和說明，能否理解裝置應怎樣回應？
