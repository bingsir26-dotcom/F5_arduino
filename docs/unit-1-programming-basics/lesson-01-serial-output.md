# 第 1 課：讓 Arduino 在螢幕上說話

## 今課可以做到甚麼？

- 在 Tinkercad Circuits 建立只含 Arduino Uno 的程式模擬。
- 用 `Serial.println()` 把一句訊息顯示在 Serial Monitor。
- 知道 `setup()` 會先執行一次，`loop()` 會持續重複執行。

## 開始前：想一想

假如你寫了一段程式，Arduino 沒有接燈、沒有接按鈕，你怎樣知道它有沒有照你的意思工作？

先猜一猜：如果程式每次重複執行時都「報到」一次，螢幕上的文字會出現一次，還是一直增加？

## 先把結果印出來

![Arduino 程式與 Serial Monitor](/images/serial-monitor-basics.svg)

本課的 `Serial Monitor` 是 Arduino 的文字輸出視窗。程式把資料送出去，我們就在這裡查看結果。這與 Python 的 `print()` 很相似：不是讓硬件做動作，而是先讓人看見程式正在做甚麼。

在 Tinkercad：建立 **Circuits** 專案，放入 **Arduino Uno**，按 **Code**，選 **Text**，然後使用下列程式。開始模擬後，按 **Serial Monitor**。

## 跟著做：顯示第一句話

```cpp
void setup() {
  Serial.begin(9600);
  Serial.println("Arduino 已開始執行");
}

void loop() {
}
```

**預期輸出：**

```text
Arduino 已開始執行
```

逐行看：

- `void setup() {`：程式開始時會先進入這個區域一次。
- `Serial.begin(9600);`：準備文字輸出功能；本課先固定使用 `9600`。
- `Serial.println(...)`：把括號內的內容顯示出來，並在最後換行。
- `void loop() {`：之後會不停重複執行的區域；現在暫時沒有指令。

## 再試一次：放進重複區域

只把顯示文字的指令移到 `loop()`，並加上短暫停頓：

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("程式仍在執行");
  delay(1000);
}
```

**預期輸出：** 每隔大約一秒，多一行 `程式仍在執行`。

`delay(1000)` 表示先等待約 1000 毫秒，也就是 1 秒。它讓畫面不會一下子被大量文字填滿。

## 易錯位

| ✕ 錯誤 | 原因 | 修正方法 |
| --- | --- | --- |
| 忘記寫 `Serial.begin(9600);` | 文字輸出尚未準備好 | 在 `setup()` 先加入這一行 |
| 只寫 `Serial.println`，沒有括號 | 指令格式不完整 | 寫成 `Serial.println("文字");` |
| 文字沒有放在雙引號內 | Arduino 把它當成名稱，而不是文字 | 文字要寫成 `"你好"` |
| 把 `Serial.begin(9600);` 放在 `loop()` | 每次重複都重新設定，沒有需要 | 初始化工作放在 `setup()` |

## 你來做

- **基礎題**：顯示自己的名字和今天的課題。
- **標準題**：每 2 秒顯示一次「正在測試 Arduino 程式」。
- **挑戰題**：用自己的話解釋：為甚麼第一段程式只顯示一次，第二段卻不停顯示？

## 本課小結

- `Serial Monitor` 讓我們先在螢幕上檢查程式結果。
- `setup()` 執行一次；`loop()` 會持續重複。
- `Serial.println()` 可顯示一行文字，`delay()` 可令輸出放慢。

## 離堂前 3 分鐘

1. 哪一個函式會不斷重複執行：`setup()` 還是 `loop()`？
2. 顯示文字前，`setup()` 內不可少的準備指令是甚麼？
3. `delay(1000)` 大約等待多久？
