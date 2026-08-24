# 第 13 課：讓程式和接線都容易修改

## 今課可以做到甚麼？

- 用有意義的名稱管理 Arduino 腳位與狀態。
- 把「設定腳位」與「顯示狀態」分開整理。
- 修改接線時，只在設定區更新一次程式。

## 開始前：想一想

一段程式到處都是 8、9、10。幾星期後你還記得每個數字代表哪一盞燈嗎？如果把紅燈從 D10 改到 D11，要逐行找所有 10 嗎？

程式應該讓人看得出「它在做甚麼」，而不只讓電腦勉強能運行。

## 兩個整理原則

1. **接線設定集中在最上方**：例如 `const int warningLed = 9;`。
2. **狀態工作用函式命名**：例如 `showWarning()`，不要在各處散落一大串 `digitalWrite()`。

![腳位名稱與電路對應](/images/pin-names.svg)

## 跟著做：整理兩燈狀態程式

~~~cpp
const int normalLed = 8;
const int warningLed = 9;

void showNormal() {
  digitalWrite(normalLed, HIGH);
  digitalWrite(warningLed, LOW);
}

void showWarning() {
  digitalWrite(normalLed, LOW);
  digitalWrite(warningLed, HIGH);
}

void setup() {
  pinMode(normalLed, OUTPUT);
  pinMode(warningLed, OUTPUT);
  showWarning();
}

void loop() {
}
~~~

現在讀者一眼就知道：`showWarning()` 是警示狀態，而 `warningLed` 接在 9 號腳位。

## 再試一次：只改一個設定

假如把警示燈實際移到 D11，只改最上方：

~~~cpp
const int warningLed = 11;
~~~

然後把 Tinkercad 導線同步移到 D11。`pinMode()`、`digitalWrite()` 和 `showWarning()` 都不用逐行尋找數字修改。

## 易錯位

| ✕ 錯誤 | 為甚麼 | 修正方法 |
| --- | --- | --- |
| 名稱寫成 `warning led` | 變數名稱不能有空格 | 使用 `warningLed` 或 `warning_led` |
| 宣告 `warningLed`，使用 `warningLED` | 大小寫不同是不同名稱 | 統一使用同一種拼寫 |
| 只改程式設定，不改接線 | Arduino 會輸出到另一個腳位 | 每次都用程式設定＋導線成對檢查 |
| 為每一行都寫長註解 | 反而難讀 | 用好名稱與少量說明意圖的註解 |

## 你來做

- **基礎題**：把三燈程式中的所有腳位數字改為有意義的名稱。
- **標準題**：把一盞 LED 移到新腳位，只改設定區和接線。
- **挑戰題**：替實驗室入口提示設計 safeToEnterLed、pleaseWaitLed、doNotEnterLed 等名稱。

## 本課小結

- 好名稱把數字變成可理解的設定。
- 接線設定集中，可減少修改時漏改。
- 函式名稱應表達狀態意思，而不只描述顏色。

## 離堂前 3 分鐘

1. const int warningLed = 9; 的 9 代表甚麼？
2. 為甚麼接線改動時，程式也要同步改？
3. showWarning() 比一串 digitalWrite() 有甚麼好處？
